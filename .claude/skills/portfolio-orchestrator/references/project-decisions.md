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

- **Home** — landing page. Personality lives here (the "signature"). Hook headline + who Marcel is + featured work + contact. Think "movie trailer".
- **Case list** — Medium-style feed of cases (cards: title, summary, cover image, tags).
- **Individual case page** — article/reading layout. Single column, clean typography, max readability.
- **About page (`/about`)** — dedicated full About (added 2026-07-24). Home carries a short inviting About; the long story (trajectory, brands, differentiator, personal touch) lives here. Needs a new route.

## Two types of case study

1. **Design System cases** (big-brand, metric-rich): Onfly, Whirlpool (via Môre), Esfera/Smiles (via Rethink).
2. **Authorial product/AI cases** (rare, high-signal): Design Audit (Chrome extension), Atomic Colors (web app), Spec Forge (Figma plugin).

## Primary color

**Decided (2026-07-24): Indigo (Tailwind scale).** Base `--primary` = Tailwind `indigo-600` (`#4F46E5`). Chosen to communicate confidence, system, and engineering rigor — reinforcing Marcel's Design Systems + CS positioning.

**Token strategy (approach A):** use Tailwind's ready-made `indigo` scale as the primitive values, and map shadcn's semantic tokens (`--primary`, `--primary-foreground`, `--ring`) onto it — semantic → primitive, the standard DS pattern. Do NOT hardcode `bg-indigo-600` on components; components stay on `bg-primary` so theming/dark-mode/color swaps live in one place. Full mapping recipe lives in the `portfolio-design` skill's references.

## Deploy — DONE & LIVE (2026-07-24)

Site is live at **https://marcelcorradi.github.io/marcel-portfolio-site/**. Repo `marcelcorradi/marcel-portfolio-site` is public; GitHub Pages Source = GitHub Actions. Vite `base` = `/marcel-portfolio-site/`; React Router `basename` = `import.meta.env.BASE_URL`. Every push to `main` auto-deploys via `.github/workflows/deploy.yml`. SPA deep links handled by `public/404.html`.

## Build status

Base is fully set up: Vite + React + TS at repo root, Tailwind v4 + shadcn/ui (radix-nova, Geist font, Lucide icons), indigo tokens applied in `src/index.css`. Routes live: `/` Home, `/cases` list, `/cases/:slug` case. Cases load from `src/content/cases/*.md`. Pages are currently **minimal/functional placeholders** — real content + distinctive design still to come.

## Repo conventions

- Skills live in `.claude/skills/<name>/SKILL.md`, tracked by `skills-lock.json`. (No `.agents/` — removed.)
- Portfolio skills: `portfolio-orchestrator` (this project's parent), `portfolio-design`, `portfolio-content`.
