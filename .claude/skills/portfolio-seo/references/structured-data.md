# Structured data (JSON-LD)

Structured data tells search engines and AI systems *what* a page is: a person, an article,
a piece of software. It doesn't rank a page by itself. It removes ambiguity: without it,
"Onfly design system" is one of four unrelated Onflys to a search engine.

Implemented in `src/lib/structured-data.ts` (2026-09-25). Pages pass their nodes to
`usePageMeta({ schema })`, and the prerender writes them, with the site-wide Person and
WebSite, into each page's static HTML.

## Rules

1. **Describe only what is visible on the page.** Don't add a type or a claim just to earn
   a rich result. A claim in JSON-LD that the page doesn't show is a spam signal.
2. **Put it in the raw HTML.** Not injected by `useEffect`. Crawlers that don't run JS
   (see SKILL.md trap 1) must see it. Site-wide blocks go in `index.html`. Per-route blocks
   are baked into each shell by the build, the same way the per-route head is.
3. **Facts follow the content rules.** Numbers, client names and the free/open-source
   status come from the published case, never from memory or the CV. Atomic Colors is
   free but **not** open source. Portfolio Kit is MIT.
4. **Validate** every change in Google's Rich Results Test and the Schema.org validator.
5. **One `@id` per entity**, reused across pages, so all pages point at the same Person.

## Site-wide: Person + WebSite (in `index.html`)

`sameAs` holds only URLs verified to be Marcel's. As of 2026-09-25 these are confirmed:
LinkedIn and GitHub (both linked from the site), and Medium (`@marcelestevescorradi`, found
in search). **Ask Marcel** for Upwork, Contra and Dribbble profile URLs before adding them.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://marcelcorradi.com/#person",
      "name": "Marcel Corradi",
      "url": "https://marcelcorradi.com/",
      "jobTitle": "Product Designer, Design Systems",
      "description": "<one sentence, taken from the visible hero/about copy>",
      "knowsAbout": ["Design systems", "Design tokens", "Component architecture",
                     "Design system governance", "Product design", "Prototyping",
                     "Accessibility (WCAG)", "Figma"],
      "sameAs": [
        "https://www.linkedin.com/in/marcel-c-84b26931/",
        "https://github.com/marcelcorradi",
        "https://medium.com/@marcelestevescorradi"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://marcelcorradi.com/#website",
      "url": "https://marcelcorradi.com/",
      "name": "Marcel Corradi",
      "publisher": { "@id": "https://marcelcorradi.com/#person" }
    }
  ]
}
</script>
```

`knowsAbout` must match what the Home's "What I do" and the cases actually show. Update both
together.

## Per case: Article (baked into `dist/cases/<slug>.html`)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://marcelcorradi.com/cases/<slug>#article",
  "headline": "<the case H1, frontmatter title>",
  "description": "<frontmatter summary or SEO description>",
  "datePublished": "<frontmatter date>",
  "image": "<absolute cover URL, via resolveCoverUrl>",
  "author": { "@id": "https://marcelcorradi.com/#person" },
  "publisher": { "@id": "https://marcelcorradi.com/#person" },
  "mainEntityOfPage": "https://marcelcorradi.com/cases/<slug>",
  "about": [{ "@type": "Organization", "name": "<frontmatter company, DS cases only>" }]
}
```

`about` names the client for design-system cases (Onfly, Whirlpool, Esfera (Santander)).
It is what connects "Whirlpool design system" to this page without stuffing the prose.
`headline` is capped at 110 characters by Google.

Add a `BreadcrumbList` (Home → case) only if a breadcrumb is visible on the page. Today it
isn't, so leave it out, or add the visible breadcrumb first (a `portfolio-design` change).

## Per tool: SoftwareApplication

For the product cases whose tool is public. Use it on the case page, and on `/tools` as an
`ItemList` of the same entities.

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Design Audit",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Chrome",
  "url": "<the listing URL from src/content/tools.ts>",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@id": "https://marcelcorradi.com/#person" }
}
```

| Tool | `operatingSystem` | Note |
|---|---|---|
| Design Audit | `Chrome` | Chrome Web Store listing |
| Atomic Colors | `Web` | Free, **not open source**. No `license` field |
| Spec Forge | `Figma` | Figma Community |
| Portfolio Kit | `Any` | A downloadable site template, GitHub Releases. MIT, so `license: "https://opensource.org/licenses/MIT"` is fine here |

Google shows software rich results only with `aggregateRating` or `review`. Don't invent
them. Without ratings the markup still identifies the entity, and that's the goal here.
Radar do Scoop is a website, not an app. Describe it only if its case needs it, as a
`WebSite` with its own URL.

## Not for this site

- `FAQPage`: Google restricted FAQ rich results to authoritative government and health
  sites. Only add FAQ markup if a visible FAQ exists and serves readers.
- `HowTo`: rich results deprecated.
- `Organization` for Marcel: he is a Person. Clients appear as `Organization` inside `about`.
- `Review`/`AggregateRating` with made-up or self-written ratings.
