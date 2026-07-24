# Project Decisions — Source of Truth

Living record of the portfolio project's locked decisions. Keep this updated whenever a decision changes. Everything else in the project should defer to this file.

## Who this is for

**Marcel Corradi** — Product Designer specialized in Design Systems, with a Computer Science degree. 13+ years in tech, 5+ as Product Designer, 4+ specialized in Design Systems. Goal of the site: attract recruiters and land his dream job.

**Core differentiator (must come through everywhere):** a Product Designer who owns the technical foundation of design systems (design tokens, component architecture, governance) *and* builds real products/tools with AI coding independently (CS background). He bridges design and engineering.

## Stack

- **Vite + React + Tailwind + shadcn/ui** — static site, no backend.
- **Cases authored in Markdown** — Claude writes the content, Marcel guides/refines. Content stays separate from code.
- **Deploy: GitHub Pages** via GitHub Actions (static export).

## Page structure

- **Home** — landing page. Personality lives here (the "signature"). Hook headline + who Marcel is + featured work + contact. Think "movie trailer".
- **Case list** — Medium-style feed of cases (cards: title, summary, cover image, tags).
- **Individual case page** — article/reading layout. Single column, clean typography, max readability.

## Two types of case study

1. **Design System cases** (big-brand, metric-rich): Onfly, Whirlpool (via Môre), Esfera/Smiles (via Rethink).
2. **Authorial product/AI cases** (rare, high-signal): Design Audit (Chrome extension), Atomic Colors (web app), Spec Forge (Figma plugin).

## Primary color

**Decided (2026-07-24): Indigo (Tailwind scale).** Base `--primary` = Tailwind `indigo-600` (`#4F46E5`). Chosen to communicate confidence, system, and engineering rigor — reinforcing Marcel's Design Systems + CS positioning.

**Token strategy (approach A):** use Tailwind's ready-made `indigo` scale as the primitive values, and map shadcn's semantic tokens (`--primary`, `--primary-foreground`, `--ring`) onto it — semantic → primitive, the standard DS pattern. Do NOT hardcode `bg-indigo-600` on components; components stay on `bg-primary` so theming/dark-mode/color swaps live in one place. Full mapping recipe lives in the `portfolio-design` skill's references.

## Deploy / base path note

GitHub Pages under `usuario.github.io/<repo>/` needs the Vite `base` configured, or CSS/JS breaks. Custom domain or `usuario.github.io` repo does not. Final deploy target not locked yet — confirm with Marcel before configuring `base`.

## Repo conventions

- Skills live in `.agents/skills/<name>/SKILL.md`, tracked by `skills-lock.json`.
- Portfolio skills: `portfolio-orchestrator` (this project's parent), `portfolio-design`, `portfolio-content`.
