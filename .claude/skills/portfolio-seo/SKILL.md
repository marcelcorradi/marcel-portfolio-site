---
name: portfolio-seo
description: Search visibility for Marcel's portfolio site (marcelcorradi.com), so it gets found by people hiring a product designer or a design system specialist. Use it whenever the request touches Google, ranking, organic traffic, indexing, Search Console, page titles and meta descriptions, Open Graph or link-sharing cards, structured data / schema / JSON-LD, sitemap, robots.txt, llms.txt, AI search visibility, "why doesn't my site show up", or an SEO audit. Also use it before adding ANY new route or page, and when renaming a case or its slug: this site is a client-side SPA on GitHub Pages whose per-page head only exists after JavaScript runs, and new pages have to be registered in hand-kept lists, so both "improve SEO" and "add a page" run into traps that fail silently. Use it even when SEO isn't named, if the work changes what a crawler would see.
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

## Traps that fail silently

Read these before changing anything. Each one broke, or would break, with no error and a
green build.

### 1. Every route ships the home page's HTML

`scripts/build-route-shells.mjs` copies `dist/index.html` byte for byte to
`dist/cases/<slug>.html`, `dist/tools.html` and `dist/design-audit/privacy.html`. That is
what makes each route answer HTTP 200 on GitHub Pages. But it means the HTML that leaves
the server for **every** route says:

```html
<title>Marcel Corradi — Product Designer · Design Systems</title>
<link rel="canonical" href="https://marcelcorradi.com/" />
<meta property="og:url" content="https://marcelcorradi.com/" />
<div id="root"></div>   <!-- no content -->
```

`src/lib/use-page-meta.ts` rewrites the head after React mounts. Google renders
JavaScript and will usually pick up the right values. Everything else won't:

- **Canonical conflict.** The raw HTML says "I am a copy of the home page", and the rendered
  HTML says otherwise. Google's JavaScript SEO guide says exactly this not to do: don't
  use JavaScript to change the canonical to a different URL from the one in the original
  HTML. A case page telling Google the home is the original is the worst signal the site
  can send.
- **AI crawlers** (GPTBot, ClaudeBot, PerplexityBot) don't run JavaScript. They see an
  empty page titled like the home.
- **Link unfurlers** (LinkedIn, Slack, WhatsApp, X) don't either. A shared case link shows
  the home card. For a portfolio whose links get pasted into DMs by recruiters and
  clients, this is a product bug, not a ranking detail.

Lighthouse will not catch this. It audits the rendered DOM and scores SEO 100. To see
what a crawler sees, use `curl` (see "Before saying done").

**The fix, cheapest first** (the choice is Marcel's, record it in project-decisions):

1. **Bake the head per route at build time.** `build-route-shells.mjs` already reads
   `src/content/cases/*.md`. Have it replace the title, description, canonical, `og:*` and
   `twitter:*` tags in each copy, from the case frontmatter (tools and privacy from a small
   table). This covers canonical, unfurlers and titles, and it takes no new dependency.
2. **Also put the content in the shell.** Render each case's Markdown to plain HTML at
   build time (`react-markdown` and `remark-gfm` are already dependencies) and put it
   inside `<div id="root">`. `main.tsx` uses `createRoot`, not `hydrateRoot`, so React
   replaces that content on mount with no hydration mismatch. AI crawlers then see the
   article. The rendered page must say what the static one says. Different content for
   bots is cloaking.
3. **Full static generation** (a React SSG setup). Only if 1 and 2 turn out not to be
   enough. It costs the most and has the most surface to break.

### 2. A new page is registered in two hand-kept lists

Cases register themselves, because both `build-sitemap.mjs` and `build-route-shells.mjs`
read `src/content/cases/*.md`. **Any other page does not.** `/tools` is written by hand
in two places: `pages = ["tools"]` in the shells script and the `urls` array in the
sitemap script. A new page that is missing from the first answers 404 on a deep link. A
page missing from the second never gets submitted. Neither one fails the build.

When adding a page, update both lists. Better: move them into one shared route list that
both scripts import, and that the per-route head (trap 1) reads too.

### 3. Pages that must stay out of search, or stay put

- `/cases` is an unstyled stub. It carries `noindex` via `usePageMeta` and is **allowed** in
  `robots.txt` on purpose, because a disallowed URL can't be crawled, so the `noindex`
  would never be read. (The comment in `build-sitemap.mjs` says it is disallowed. The
  comment is wrong. `robots.txt` is right.)
- `NotFound` (`path: "*"`) and `public/404.html` both carry `noindex, follow`.
- `/design-audit/privacy` is linked from the Chrome Web Store listing. **Never rename or
  remove it.** It stays out of the sitemap because it is a legal page, not work, but it
  must answer 200.
- Cases are `/cases/<slug>`, and the slug is the filename. Renaming a case file changes its
  URL and loses whatever it had earned. If a slug must change, keep the old URL answering
  (a shell with a canonical to the new one) and tell Marcel.

### 4. Share images must be raster and absolute

`og:image` falls back to `/favicon.svg` when a case has no `cover`. Most unfurlers ignore
SVG, so those links get no image. `index.html` declares no `og:image` at all. The site
needs a real default card (a 1200×630 PNG or JPG, absolute URL), and every case should
have a `cover` or a dedicated share image. `resolveCoverUrl` already returns absolute
URLs, so keep going through it.

## On-page rules for this site

- **Title**: `<query-bearing title> · Marcel Corradi`, about 60 characters or less, with
  the client name and the topic first. The separator is `·`. **Never `—` or `–`**: Marcel's
  standing rule bans dashes as connectors in anything shipped, and `<title>` is shipped.
  (Today every title on the site breaks it.)
- **Description**: 140 to 160 characters. It says what the page proves, in words a hirer
  would search. The case `summary` is written for the card on the Home. Reuse it only when
  it also works as a search snippet.
- **One H1 per page.** Narrative H1s stay. The client name and the topic should still
  appear in the case header metadata or the first paragraph.
- **Internal links**: every case is linked from the Home, which is good. Cases should also
  link to related cases where the story connects (Onfly ↔ Design Audit already do), and
  tool cases to the live listing (`src/content/tools.ts` is the single source of those
  URLs).
- **Images**: descriptive `alt` (already the norm in case visuals), and responsive sizes.
  Lighthouse measured 438 KiB of oversized images on the Whirlpool case.

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
| Adding or changing JSON-LD (Person, Article, SoftwareApplication, …) | `references/structured-data.md` |
| Deciding what a page targets, or writing its title and description | `references/query-map.md` |

## Auditing

When asked for an audit, follow `references/audit-checklist.md` and gather evidence before
writing a finding. Every finding needs the command or observation that proves it. This
site has had defects reported that weren't there. Separate what you measured from what
you infer, and treat search-tool results as direction, not rank. Write the report to
`content-drafts/seo-audit.md`, prioritized, with an owner skill for each fix.

## Before saying done

SEO fails silently for weeks, so check the output, not the code:

1. `npm run build` passes.
2. **Each shell carries its own head.**
   `grep -oE '<title>[^<]*</title>|rel="canonical" href="[^"]*"' dist/cases/<slug>.html`
   must show that case's title and canonical, not the home's. `cmp dist/index.html
   dist/tools.html` should report a difference once trap 1 is fixed.
3. **Sitemap count** = cases + pages (the build prints it). No noindexed URL is in it.
4. **Live, as a crawler sees it** (after the push deploys):
   `curl -s -A GPTBot https://marcelcorradi.com/cases/<slug> | grep -oE '<title>[^<]*</title>|canonical" href="[^"]*"'`
   and `curl -s -o /dev/null -w "%{http_code}" https://marcelcorradi.com/<new-route>` → 200.
5. **Structured data**: paste the URL into Google's Rich Results Test. It must parse with
   no errors, and every claim in it must be visible on the page.
6. **Share card**: check a link in a card validator (LinkedIn Post Inspector). Unfurlers
   cache for days, so the first impression is the one that circulates.
7. **Search Console**: ask Marcel to request indexing through URL Inspection for changed
   pages. Only he has access.
