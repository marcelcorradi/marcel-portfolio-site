# Onfly case images

Drop the exported images here using **exactly these filenames**. The case page reads them by name,
so a typo means a broken image.

**Format:** PNG or WebP. WebP is smaller and every browser supports it, so prefer it if the export
gives you the choice.
**Width:** export at **2x the display size**. The reading column is 672px, so **1400px wide** is
right for normal figures and **2000px** for the wide ones. Anything larger is wasted bytes.
**Weight:** try to keep each file under 400KB. If a slide export comes out heavier, run it through
squoosh.app.

---

## Priority 1 — the case does not work without these

### `component-inventory.png` ⚠️ BLUR NAMES FIRST
Deck slide **"Componentes encontrados"** (the one showing the buttons found across the product).

**This is the single most valuable image in the case.** The row of mismatched buttons proves the
inconsistency in two seconds, better than any paragraph.

⚠️ **Before exporting: blur or crop the real people's names** in the approval-timeline component at
the bottom middle of the slide. Those are real colleagues and they should not be published.

Goes in: *What the audit found*. Mark as `wide` so the detail stays readable.

### `audit-typography.png`
Deck slide **"ANÁLISE FOUNDATIONS — Tipografia"** (102 variants vs Travelperk 17, Expensify 39).

The strongest single comparison in the audit. No private data on this slide.

Goes in: *What the audit found*.

### `audit-colors.png`
Deck slide **"ANÁLISE FOUNDATIONS — Cores"** (the 60-color grid).

Visually the most immediate of the three foundation slides: the near-identical blues make the point
without reading a word.

Goes in: *What the audit found*.

---

## Priority 2 — strong support

### `research-insights.png`
Deck slide **"O que o time sente?"** (482 insights, the type distribution, and the 36% / 54% figures).

If only one research image gets exported, make it this one: it carries both numbers the section
rests on.

Goes in: *Starting with people, not screens*.

### `research-people.png`
Deck slide **"Quantidade de pessoas entrevistadas"** (the breakdown by area: 9 Technology, 5 Design,
4 Product, 3 Diretoria, 3 Marketing).

Goes in: *Starting with people, not screens*.

### `audit-spacing.png`
Deck slide **"ANÁLISE FOUNDATIONS — Espaçamentos"** (101 values vs Travelperk's 44, with the decimal
values visible).

Goes in: *What the audit found*.

### `accessibility-home.png`
Deck slide **"ACESSIBILIDADE — Página inicial"** (26% compliance, 49 violations, 17 passing).

Note the case cites 26% for the home page specifically, which is what this slide shows.

Goes in: *What the audit found*.

---

## Priority 3 — would be great, may not exist

### `tokens-figma.png`
A screenshot of the **Figma Variables panel**, showing the collections and a semantic token pointing
at a primitive (e.g. `spacing.stack.md` → `scale.16`).

This is the image that proves the architecture the section describes. Nothing else in the case shows
the token structure directly.

Goes in: *Rebuilding the foundation*.

### `component-library.png`
A shot of the **new Figma library**, showing the 143 components organized.

Pairs with the closing paragraph of the foundation section.

Goes in: *Rebuilding the foundation*.

### `dashboard-panorama.png`
Screenshot of the interview dashboard's **"Panorama final"** screen, where recommendations tie back
to their supporting evidence.

The dashboard is still live at https://marcelcorradi-netizen.github.io/interview-dashboard/ but its
numbers load via JavaScript, so it has to be screenshotted rather than fetched. To run it locally:
`ruby scripts/extract_data.rb`, then open `index.html`.

Goes in: *Starting with people, not screens*.

---

## Still undecided — diagrams that do not exist yet

Two concepts in the case have no visual at all, and both are candidates to **design from scratch**
rather than export:

1. **The token sync flow**: Figma Variables → JSON → conversion → SCSS → Quasar components.
   This is the case's central concept and currently lives only in prose.
2. **The agent pipeline**: the five gated stages, plus the three points where it hands off to a human.

Alternatively the agent benchmark (44% → 78% → 98%) could be a chart rather than a diagram.

---

## Cover image

`cover.png` — the image that will represent the case on the Home card and in the case list, once
those get built. Not needed yet. When it is, the component library or the token structure would both
work.
