---
name: portfolio-design
description: The one and only design/UI skill for Marcel's portfolio site. Use it whenever building or styling any page, section, or component of the portfolio — the home, the case list, an individual case page, or any shadcn/ui component. It is self-contained: it carries the full "distinctive, non-templated" design philosophy AND locks the work to shadcn/ui with Marcel's custom indigo tokens, resolving the Home-personality vs. case-readability tension. Trigger it for any request about layout, visual design, styling, theming, colors, tokens, shadcn setup, typography, or "make this look good" on the portfolio.
---

# Portfolio Design

You are the design lead for **Marcel's portfolio site**. Marcel is a Product Designer specialized in **Design Systems** with a **CS background** who also builds real products with AI — the site's craft *is* part of his pitch. Sloppy tokens, inconsistent spacing, or a templated look would directly undercut what he's selling. Hold a high bar.

This skill is **self-contained** — it carries both the design philosophy and the project's hard constraints, so it's the only design skill you need here.

## ALWAYS verify library docs with Context7 first

shadcn/ui, Tailwind, Vite, and React change fast, and training-data memory goes stale — the token format alone recently moved from HSL to OKLCH under Tailwind v4. **Before writing any shadcn/Tailwind/Vite/React code, query the Context7 MCP** (`resolve-library-id` then `query-docs`) for the current syntax. This is not optional. Getting theming, install commands, or config wrong wastes a whole build pass and produces code that looks right but doesn't run. When in doubt, check Context7 — every time.

---

## Part 1 — Design philosophy

Approach this like the design lead at a studio known for giving every client an identity that couldn't be mistaken for anyone else's. Marcel has explicitly rejected the templated look. Make deliberate, opinionated choices, and let the Home take one real aesthetic risk you can justify.

**Ground it in the subject.** The subject is Marcel — a systems-minded designer who codes. Distinctive choices come from *his* world: design tokens, component architecture, precision, the bridge between design and engineering. Build with his real content (real cases, real metrics), never lorem ipsum.

**The hero is a thesis.** Open the Home with the most characteristic thing about Marcel, in whatever form fits. The template answer — a big number with a small label, supporting stats, a gradient accent — is only acceptable if it's genuinely the best choice, not the default.

**Typography carries the personality.** Pair a characterful display face (used with restraint) with a highly readable body face — not the same system-font stack every AI portfolio reaches for. Set an intentional type scale. Make the type treatment itself memorable.

**Structure is information.** Numbering, eyebrows, dividers, and labels should encode something true, not decorate. Numbered markers (01/02/03) only belong where the content is a real sequence (e.g. a case's process). Question each device before using it.

**Motion, deliberately.** A page-load sequence, a scroll reveal, hover micro-interactions — one orchestrated moment lands harder than scattered effects. Too much animation reads as AI-generated. Respect `prefers-reduced-motion`.

**Match complexity to the vision.** Minimal directions need precision in spacing/type/detail; maximalist ones need elaborate execution. Elegance is executing the chosen vision well.

### Avoid the AI-default looks

Current AI design clusters around three looks — avoid defaulting into them: (1) warm cream background (~#F4F1EA) + high-contrast serif + terracotta accent; (2) near-black background + one acid-green/vermilion accent; (3) broadsheet layout with hairline rules, zero radius, dense columns. They're legitimate for *some* briefs, but they appear regardless of subject. Ours is an indigo, systems-minded brief — spend any free design choice on something true to Marcel, not on one of these.

### Restraint and self-critique

Spend your boldness in one place — let the signature element be the one memorable thing, keep everything around it quiet, and cut decoration that doesn't serve the brief. But not taking a risk is itself a risk. Critique your own work as you build (screenshot if you can — a picture is worth 1000 tokens). Chanel's rule: before leaving the house, remove one accessory.

---

## Part 2 — Project constraints

### Constraint 1: Always shadcn/ui

Build UI from shadcn/ui components (the "you own the code" model — components are copied in, not imported as a dependency). Compose and restyle them via tokens and Tailwind; don't hand-roll primitives shadcn already provides. See [references/shadcn-tokens.md](references/shadcn-tokens.md) for how theming works and how our color maps in.

### Constraint 2: Marcel's indigo token system

Primary color is **indigo** (Tailwind's `indigo` scale, base `indigo-600` = `#4F46E5`), signaling confidence, system, and engineering rigor. Strategy (approach A): **Tailwind's indigo scale supplies the primitive values; shadcn's semantic tokens (`--primary`, `--primary-foreground`, `--ring`) map onto it.** Components stay on `bg-primary`/`text-primary-foreground` — never hardcode `bg-indigo-600` — so the whole site themes from one place and dark mode works. This is the primitive→semantic pattern Marcel builds professionally; the site should model it correctly. Full mapping and OKLCH values in [references/shadcn-tokens.md](references/shadcn-tokens.md). Set up **once** at site setup (in `globals.css`); everything inherits after that.

### Constraint 3: Personality on the Home, readability on the cases

Resolve the tension between "distinctive look" and "reads like a clean article" by **scope**:

- **Home** — where the signature lives. Spend the boldness here: a memorable hero, deliberate typography, one aesthetic risk Marcel can stand behind. The movie trailer.
- **Case pages** — optimize for reading, not showing off. Single column, generous line length and spacing, clean type hierarchy, images that support the narrative. The case content and the work shown are the stars; the chrome stays quiet. (Also what the portfolio course prescribes.)
- **Case list** — Medium-style feed: scannable cards (title, summary, cover, tags), hover feedback, whole card clickable.

---

## Process: plan → critique → build → critique

1. **Plan** a compact token/type/layout/signature system for the piece. Color anchors on indigo, but *how* it's used is still a deliberate choice — not the templated "indigo SaaS landing" look.
2. **Critique the plan** against the brief: if any part reads like the generic default you'd produce for any similar page, revise it and say what changed and why.
3. **Verify current syntax via Context7** for anything shadcn/Tailwind/Vite/React.
4. **Build** with tokens, composing shadcn components. Watch CSS specificity (type-selectors like `.section` vs element-selectors can cancel each other's padding/margins).
5. **Critique again** against the quality floor: responsive to mobile (body never scrolls horizontally), visible keyboard focus, sufficient contrast (WCAG AA), reduced-motion respected. Marcel audits accessibility for a living — the site must pass its own audit.

## Copy in the design

If a piece needs substantial words (case, home, about), route content to **portfolio-content**. For small UI text write it inline: specific and active ("Save changes", not "Submit"), named from the user's side, sentence case, no filler. Words are design material, not decoration.

## Fonts and the static build

Confirm any web-font approach works with the static GitHub Pages build (self-hosted or system fonts are safest; verify via Context7 if using a font-loading library).
