# Project Decisions — Source of Truth

Living record of the portfolio project's locked decisions. Keep this updated whenever a decision changes. Everything else in the project should defer to this file.

## Who this is for

**Marcel Corradi** — Product Designer specialized in Design Systems, with a Computer Science degree. 13+ years in tech, 5+ as Product Designer, 4+ specialized in Design Systems. Goal of the site: attract recruiters and land his dream job.

**Core differentiator (must come through everywhere):** a Product Designer who owns the technical foundation of design systems (design tokens, component architecture, governance) *and* builds real products/tools with AI coding independently (CS background). He bridges design and engineering.

**Language: English** (decided 2026-07-24). Site is in English even for Brazilian roles — signals reach and fits distributed/product teams. May add PT later; start EN-only.

**Positioning / recruiter target:** lead with **Design Systems** (his metric-rich strength) while making clear he also operates as a full **Product Designer**. The CS + builds-with-AI angle is the tempering differentiator, not the headline.

## Stack

- **Vite + React + Tailwind + shadcn/ui** — static site, no backend.
- **Cases authored in Markdown** — Claude writes the content, Marcel guides/refines. Content stays separate from code.
- **Deploy: GitHub Pages** via GitHub Actions (static export).

## Page structure

- **Home** — landing page. Personality lives here (the "signature"). Hook headline + who Marcel is + featured work + contact. Think "movie trailer". **All cases are surfaced here** — decided there is no separate page just for cases.
- **Case list (`/cases`)** — route exists but is an unstyled dev stub and nothing links to it. Not part of the intended navigation.
- **Individual case page** — article/reading layout. Single column, clean typography, max readability.
- **About — a Home section, not a route (revised 2026-07-27).** The dedicated `/about`
  page decided on 2026-07-24 was never built, and Marcel chose not to build it for now: the
  six published cases carry the differentiator better than a page about himself, so a full
  About is reinforcement rather than foundation. The Home's short About now owns `#about`
  and the nav points there. Reopen this if that copy starts feeling thin.

## Two types of case study

1. **Design System cases** (big-brand, metric-rich): Onfly, Whirlpool (via Môre), Esfera — Santander loyalty program (via Rethink).
2. **Authorial product/AI cases** (rare, high-signal): Design Audit (Chrome extension), Atomic Colors (web app), Spec Forge (Figma plugin).

**Brand logos on cards (decided 2026-07-24):** the three Design System cards show real client
logos, rendered **monochrome** (inline SVG tinted via `currentColor`, so they match the muted
foreground and flip in dark mode). Onfly + Whirlpool (full wordmark lockup) use their own marks;
the **Esfera** card shows the **Santander** logo (Esfera is Santander's loyalty program and has
no clean vector mark online — Santander is the recognizable parent brand). The authorial AI cards
stay as text wordmarks (they're Marcel's own projects). Logo components live in
`src/components/brand-logos.tsx`.

## Primary color

**Decided (2026-07-24): Indigo (Tailwind scale).** Base `--primary` = Tailwind `indigo-600` (`#4F46E5`). Chosen to communicate confidence, system, and engineering rigor — reinforcing Marcel's Design Systems + CS positioning.

**Token strategy (approach A):** use Tailwind's ready-made `indigo` scale as the primitive values, and map shadcn's semantic tokens (`--primary`, `--primary-foreground`, `--ring`) onto it — semantic → primitive, the standard DS pattern. Do NOT hardcode `bg-indigo-600` on components; components stay on `bg-primary` so theming/dark-mode/color swaps live in one place. Full mapping recipe lives in the `portfolio-design` skill's references.

## Deploy — DONE & LIVE

Site is live at **https://marcelcorradi.com** — custom domain (updated 2026-07-27; previously the
default `marcelcorradi.github.io/marcel-portfolio-site/` path). Repo
`marcelcorradi/marcel-portfolio-site` is public; GitHub Pages Source = GitHub Actions, custom domain
set via `public/CNAME`. Because the site is now at a domain root, Vite `base` = `/`; React Router
`basename` = `import.meta.env.BASE_URL`. Every push to `main` auto-deploys via
`.github/workflows/deploy.yml`. SPA deep links handled by `public/404.html`.

## Build status (updated 2026-07-27)

Base: Vite + React + TS at repo root, Tailwind v4 + shadcn/ui (radix-nova, Geist font, Lucide icons),
indigo tokens in `src/index.css`. Routing via react-router v7. Cases load from
`src/content/cases/*.md` via `import.meta.glob(...?raw)` + a dependency-free frontmatter parser in
`src/lib/cases.ts`. **Dark is the default theme**, applied before first paint so there's no flash.

**DONE:**
- **Home** — built and content-approved section by section. Nav (floating glass pill / mobile Sheet),
  hero "spec ring" (annotated avatar over a dot-grid vignette), featured work (two groups, 6 cards),
  "What I do" (numbered 01–04), short About + Contact w/ availability badge, footer.
- **All six cases published** — Onfly (`onfly-design-system`), Whirlpool
  (`whirlpool-design-system`, "Seven brands, one system"), Esfera (`esfera-design-system`),
  Atomic Colors (`atomic-colors`), Spec Forge (`spec-forge`) and Design Audit
  (`design-audit`, "A design system, read back out of a website", shipped 2026-07-27).
  The last three are `product-ai`: three sections, plain language, no metrics row, ending
  on a CTA button to the live product. **Every Home card now resolves; no 404s left.**
  Design Audit's origin is stated in the Onfly case (he built it to survive that audit),
  so the two cases cross-reference and must stay consistent.
  The case page is the **template the remaining cases reuse**: `case-header`, `case-prose`,
  `case-metrics`, `case-figure`, `case-image`, `case-violation`, `case-gallery`, `case-contents`,
  `case-footer-nav`, `case-token-tiers`. Esfera is the only case using scrolling figures, so the
  scroll path is effectively Esfera-only; the non-scroll path is shared by all three.
- **Case visuals are data-driven** — one file per case in `src/content/case-visuals/<slug>.tsx` +
  a line in `index.ts`. A case with no entry renders as prose, which is a valid state.
- Contrast verified WCAG AA in both themes.

**OPEN, roughly in priority order:**
1. Profile photo unoptimized (488KB).
2. **No `robots.txt` and no `sitemap.xml`**, and no per-route `<title>`/description: every
   page inherits the ones in `index.html`. Matters now that Marcel is submitting the site
   to Google Search Console.

**Settled, do not reopen without a reason:**
- **`/cases` stays an unstyled stub (2026-07-27).** Marcel decided a dedicated cases page
  is not needed: all six cases are surfaced on the Home. Nothing links to it, and the
  "Case not found" state now points at `/#work` instead.
- **Catch-all route added (2026-07-27).** `src/pages/NotFound.tsx` on `path: "*"`, declared
  last in `main.tsx`. It sets a `noindex, follow` robots meta on mount, and `public/404.html`
  carries the same tag statically, because GitHub Pages serves both with a 200 and Google
  would otherwise treat them as soft 404s and could index them.

⚠️ **Case visual anchors fail silently.** Visuals attach to sentences in the Markdown via
`splitByAnchors`; editing the prose drops the figure with no error and the build still passes.
Run `node scripts/check-anchors.mjs` before committing (no argument checks every case).

Images: `src/assets/cases/<slug>/`, converted with `node scripts/to-webp.mjs <dir>`. Only
PNGs are converted; the .webp is what gets committed and the original is deleted.

⚠️ **Do not run `to-webp.mjs` on browser screenshots of a dark UI.** Its crop scans inward for
pixels brighter than a threshold, to strip Figma's dark canvas, and a dark-mode interface sits
below that threshold everywhere: it cropped an Atomic Colors capture from 1269x945 to 398x492.
Convert those with sharp directly, no crop.

⚠️ **Export Figma figures in Light Mode.** Section fills are bound to `Layout/Body`, which
resolves dark in Dark Mode and bakes a dark surround into the pixels — unfixable in CSS, and it
draws a square corner through rounded scroll frames. `to-webp.mjs` crops that margin on import.
Full workflow in `portfolio-design`'s [references/case-images.md](../../portfolio-design/references/case-images.md).

## Repo conventions

- Skills live in `.claude/skills/<name>/SKILL.md`, tracked by `skills-lock.json`. (No `.agents/` — removed.)
- Portfolio skills: `portfolio-orchestrator` (this project's parent), `portfolio-design`, `portfolio-content`.
