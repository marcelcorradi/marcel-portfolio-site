---
name: portfolio-seo
description: Search visibility for Marcel's portfolio site (marcelcorradi.com), so it gets found by people hiring a product designer or a design system specialist. Use it whenever the request touches Google, ranking, organic traffic, indexing, Search Console, page titles and meta descriptions, Open Graph or link-sharing cards, structured data / schema / JSON-LD, sitemap, robots.txt, llms.txt, AI search visibility, "why doesn't my site show up", or an SEO audit. Also use it before adding ANY new route or page, and when renaming a case or its slug: this site is a client-side SPA on GitHub Pages that is prerendered at build time, so a page left out of the route list, or content that only appears in an effect, is invisible to crawlers with no error. Both "improve SEO" and "add a page" run into traps that fail silently. Use it even when SEO isn't named, if the work changes what a crawler would see.
---

# Portfolio SEO

The site is a portfolio, and the SEO goal is specific: **be found by people who are
hiring and don't know Marcel yet.** People searching his name are not the target. By the
time someone types "Marcel Corradi", he has already been found somewhere else.

This skill holds that goal, the traps that make SEO work quietly evaporate on this stack,
and the method for auditing and fixing it. It does not write copy. See "Who does what".

## The goal, and what can actually rank

Three families of search, in the order of how winnable they are for a personal site:

| Family | Example queries | Who ranks today | Realistic play |
|---|---|---|---|
| **Client + topic** | "Whirlpool design system", "multi-brand design system case study", "Esfera Santander design system" | Other designers' case pages (`nessgrixti.com/portfolio/wise-multi-brand`, `chris-peck.design/...`), agency case pages, Dribbble shots | **Winnable.** Personal case pages rank here when the client name and the topic are in the title. This is where the cases earn their traffic. |
| **Tool names / tool jobs** | "design audit chrome extension", "semantic color palette generator color blindness", "figma plugin component spec for AI agents" | The store listing itself (Chrome Web Store, Figma Community), plus competing tools | **Winnable by the listing, not the case.** The listing is the page that ranks. The case supports it: links to it, gets linked from it, and ranks for the "how it was built" angle. |
| **Hiring intent** | "hire design system designer", "freelance product designer prototypes", "design system consultant" | Marketplaces only: Toptal, Contra, Upwork, Arc, YunoJuno | **Not winnable by the site alone.** Be present on the marketplaces that rank (Upwork, Contra), with a profile that links back here. The site's job is to convert the visitor they send. |

Snapshot taken 2026-09-25 with a US-only non-Google search tool, so read it as direction,
not rank. Re-check before building strategy on it. Google Search Console is the source
of truth for what the site actually ranks for.

Two consequences run through everything below:

- **Titles carry the query, headings carry the story.** The case H1s are narrative
  ("Seven brands, one system"), and that is right for a reader. But the `<title>` is
  what ranks and what shows in the result, so it has to name the client and the topic.
  Keep the two separate: an SEO title field per case, and the H1 untouched.
- **Off-site presence is part of SEO here.** The marketplace profile (see the
  `upwork-proposals` skill and `content-drafts/upwork-profile.md`), LinkedIn, GitHub,
  Medium, Dribbble, the Chrome Web Store and the Figma Community listings. Each should
  link to the site, and the site should name them in `sameAs`.

## How the site reaches a crawler

The site is a client-side React SPA on GitHub Pages, so by default the server would send
every URL the same empty `index.html`. That was the state until 2026-09-25: every case
shipped the Home's title and a canonical pointing at `/`, and crawlers that don't run
JavaScript (AI crawlers, LinkedIn, Slack, WhatsApp) saw an empty page. Lighthouse didn't
notice, because it audits the rendered DOM. Now every page is prerendered at build time:

```
tsc -b → vite build (dist/) → vite build --ssr src/entry-server.tsx (dist-ssr/) → node scripts/prerender.mjs
```

- **`src/routes.tsx`** is the route tree, shared by the browser (`main.tsx`) and the server
  render (`entry-server.tsx`). Every page but the Home is a lazy chunk.
- **`src/entry-server.tsx`** renders a path with the real components
  (`createStaticHandler` + `StaticRouterProvider`). Its **`listRoutes()` is the one list of
  pages**: HTML files, `sitemap.xml` and `llms.txt` are all built from it. Cases register
  themselves from `src/content/cases/*.md`.
- **`usePageMeta` is the one source of each page's head.** During the server render it hands
  its values to the prerender through `MetaCollectorContext`. In the browser it keeps them
  right during client-side navigation.
- **`scripts/prerender.mjs`** writes `dist/<route>.html` with the rendered page inside
  `#root` and the page's own title, description, canonical, Open Graph, Twitter and JSON-LD
  in place of the `page-meta` markers in `index.html`. It also converts case covers to
  1200×630 JPEGs for link previews, and writes the sitemap and `llms.txt`.
- **`main.tsx` uses `createRoot`, not `hydrateRoot`.** React replaces the static markup with
  its own render of the same page, so a difference (the stored theme, a measured logo
  width) never raises a hydration error. Before the first render it loads the landing
  route's lazy chunk. Otherwise the first commit would be empty and wipe the prerendered
  page (a blank flash).

The prerender **fails the build** when a page's canonical isn't its own URL, a title or
description contains a dash, `og:image` isn't an absolute raster file that exists in
`dist/`, a noindexed page is in the sitemap, a page renders without an `<h1>`, or two pages
share a title. Don't weaken these checks to get a build through. Each one is a way the site
used to ship wrong with a green build.

## Traps that still fail silently

### 1. Anything that only exists after an effect is invisible to crawlers

The server render runs no effects. Content that a component fetches, measures or reveals in
`useEffect` is missing from the static HTML. Put anything a crawler should read into the
render itself. Browser APIs (`window`, `document`, `localStorage`) must stay inside effects,
or behind a `typeof window` guard, or the SSR build throws.

### 2. The static page and the rendered page must say the same thing

Different content for bots than for people is cloaking. Both come from the same components
today, so this holds by construction. Never add crawler-only text to the static HTML.

### 3. A new page goes in `listRoutes()`

A route in `routes.tsx` that isn't in `listRoutes()` gets no HTML file: its deep link goes
through `public/404.html` (a real 404 status) and it's missing from the sitemap. Add it in
both places, and give the page a `usePageMeta` call (the prerender throws without one).

### 4. Pages that must stay out of search, or stay put

- `/cases` is an unstyled stub. It carries `noindex` via `usePageMeta` and is **allowed** in
  `robots.txt` on purpose, because a disallowed URL can't be crawled, so the `noindex`
  would never be read. It isn't prerendered: `/cases` redirects to `/cases/` and 404s,
  which is harmless because nothing links to it.
- `NotFound` (`path: "*"`) and `public/404.html` both carry `noindex, follow`.
- `/design-audit/privacy` is linked from the Chrome Web Store listing. **Never rename or
  remove it.** It stays out of the sitemap because it's a legal page, not work, but it
  must answer 200.
- Cases are `/cases/<slug>`, and the slug is the filename. Renaming a case file changes its
  URL and loses whatever it had earned. If a slug must change, keep the old URL answering
  (an HTML file whose canonical points at the new one) and tell Marcel.

### 5. Link previews cache for days

The default card is `public/og-default.png`, built from `scripts/og-card.html` (the command
is in that file). Case previews come from the `cover`. A case without a cover uses the
default card. After changing either, re-scrape the URL in LinkedIn Post Inspector: the
first preview is the one that circulates.

## On-page rules for this site

- **Title**: `<query-bearing title> · Marcel Corradi`, about 60 characters or less, with
  the client name and the topic first. `usePageMeta` adds the suffix. Pass only the page's
  own part. A case's search title is `seoTitle` in its frontmatter, and the H1 stays the
  narrative `title`. **Never `—` or `–`**: Marcel's standing rule bans dashes as connectors
  in anything shipped, and the prerender fails on one.
- **Description**: 140 to 160 characters. It says what the page proves, in words a hirer
  would search. For a case it's `seoDescription` in the frontmatter. The `summary` is
  written for the card on the Home, and it's only the fallback.
- **One H1 per page.** Narrative H1s stay. The client name and the topic should still
  appear in the case header metadata or the first paragraph.
- **Internal links**: every case is linked from the Home, which is good. Cases should also
  link to related cases where the story connects (Onfly ↔ Design Audit already do), and
  tool cases to the live listing (`src/content/tools.ts` is the single source of those
  URLs).
- **Images**: descriptive `alt` (already the norm in case visuals), and sizes that fit
  their slot. Lighthouse measured 438 KiB of oversized images on the Whirlpool case
  (2026-09-25), an open item.

## Who does what

- **This skill** decides what each page should rank for, and proposes the title,
  description and keyword placement. It owns the technical side: shells, sitemap, robots,
  head tags, structured data, and share images.
- **`portfolio-content` writes any words a visitor reads**, including SEO titles and
  descriptions, because its rules apply to them: nothing invented, every number checked
  against its source, no dash joining clauses, Atomic Colors is free but **not** open
  source, and the tools are free with no price pitched. Hand it the proposal. Don't write
  final copy here.
- **`portfolio-design`** owns any visible UI change (a share image design, a visible
  breadcrumb).
- **Decisions** (which fix path, a new page, a new query target) go into
  `portfolio-orchestrator/references/project-decisions.md`.
- **Don't infer why Marcel wants something.** When a query target or a page's intent is
  unclear, ask in a choice box before writing.

## References

| When | Read |
|---|---|
| Running an audit, or checking a change against the whole list | `references/audit-checklist.md` |
| Adding or changing JSON-LD (Person, Article, SoftwareApplication, …). The code is `src/lib/structured-data.ts` | `references/structured-data.md` |
| Deciding what a page targets, or writing its title and description | `references/query-map.md` |

## Auditing

When asked for an audit, follow `references/audit-checklist.md` and gather evidence before
writing a finding. Every finding needs the command or observation that proves it. This
site has had defects reported that weren't there. Separate what you measured from what
you infer, and treat search-tool results as direction, not rank. Write the report to
`content-drafts/seo-audit.md`, prioritized, with an owner skill for each fix.

## Before saying done

SEO fails silently for weeks, so check the output, not the code:

1. `npm run build` passes. Its last line counts pages and sitemap entries. The prerender
   checks canonicals, dashes, share images, H1s and duplicate titles.
2. **The static HTML says what the page says**:
   `grep -oE '<title>[^<]*</title>|rel="canonical" href="[^"]*"' dist/cases/<slug>.html`,
   and grep a sentence from the case body in the same file.
3. **In a real browser**: `npx -y serve dist -l 4173` (it serves `foo.html` for `/foo`, like
   GitHub Pages), then load a case and the Home in headless Chrome, check the screenshot
   and that the console has no errors. A blank page means the lazy-route preload in
   `main.tsx` broke.
4. **Live, as a crawler sees it** (after the push deploys):
   `curl -s -A GPTBot https://marcelcorradi.com/cases/<slug> | grep -oE '<title>[^<]*</title>|canonical" href="[^"]*"'`
   and `curl -s -o /dev/null -w "%{http_code}" https://marcelcorradi.com/<new-route>` → 200.
5. **Structured data**: paste the URL into Google's Rich Results Test. It must parse with
   no errors, and every claim in it must be visible on the page.
6. **Share card**: LinkedIn Post Inspector.
7. **Search Console**: ask Marcel to request indexing through URL Inspection for changed
   pages. Only he has access.
