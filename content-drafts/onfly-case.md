# Onfly case study — working draft

Draft in progress. Written section by section with Marcel's validation (portfolio-content skill).
Final output goes to `src/content/cases/onfly-design-system.md`.

**Status:** Sections 1 and 2 approved. Section 3 (audit and inventory) is next.

**Images:** Marcel can export whatever is needed. Decision (2026-07-25): images get collected during
**Phase 2**, when the page is actually built, not now. Each section below records which visual it
calls for so nothing is lost.

---

## Facts Marcel confirmed (not in the CV — do not lose these)

These came from Marcel directly during the writing sessions. The CV only records the outcomes;
this is the story behind them.

**What Onfly is:** Brazilian B2B platform for corporate travel management. (Marcel confirmed
"gestão de viagens corporativas". He did NOT confirm expense management, so that stays out.)

**The starting point (Sep 2025) — an orphaned system, not a blank page:**
- A Vue + Quasar UI framework already existed, with Quasar components customized for the product.
- A Figma library also existed, but it was never linked to or updated against the framework.
- **The team that built the framework had been dissolved.** A few developers maintained it on the
  side, with no dedicated team. It ran in parallel to design and drifted.
- The Figma library was disorganized: component crafting had no scalable structure, and there was
  no token architecture underneath.

**Decision: treat the two sides differently.** The framework had real engineering value, so Marcel
kept it, corrected and extended it. The Figma library did not survive: restructuring would have cost
more than rebuilding, so he **discontinued it** and built a new library from scratch with named
layers, auto layout, and slot-based components. (This paragraph was moved OUT of the hook and
belongs to Section 2.)

**Correction — NOT Token Studio.** The team used **Figma Variables**, not Token Studio. An earlier
draft said Token Studio; that was wrong. Variables matter because they are what makes the JSON
export work.

**The actual work sequence** (this is the case's spine):
1. Stakeholder interviews on arrival. Collected insights, categorized them, and built a **dynamic
   dashboard** of pains and insights so the team had that data strategically.
   *The dashboard is still online and Marcel recovered access. He also has the full diagnosis
   presentation deck (slides), which is a rich source for figures.*
2. Audit and inventory. He used his own **Design Audit** extension to help. It was under construction
   at the time, and **this audit is what made him start building it.** Now published on the Chrome
   Web Store.
3. Component inventory, plus mapping the web screen flows in Figma to get an organized map of all screens.
4. Token and component creation, then building the design-to-code bridge.
5. Extensive alignment with product, dev, and engineering teams to fit component updates into
   existing product demands, **because he had no centralized/dedicated DS team.**

**Timeline nuance:** the work was continuous across Sep 2025 – Jul 2026, but the **token foundation
took roughly 2 months**. Do not claim "ten months to rebuild the foundation".

**Sync mechanism (confirmed):** tokens live as **Figma Variables** → exported as **JSON** → passed
through **AI agents Marcel built** → become **SCSS** consumed by the Quasar framework.

**Proudest result (Marcel's own pick):** the AI agents. That is why the case opens on the sync angle.

**Confidentiality:** no restrictions on Onfly material.

---

## Research data (extracted from Marcel's diagnosis slides — verified numbers)

Taken from screenshots of the internal diagnosis deck Marcel presented at Onfly. These are real
measured numbers, safe to publish (Marcel confirmed no confidentiality restrictions).

**The interviews ("O quê foi analisado?" / "Quantidade de pessoas entrevistadas"):**
- **24 people interviewed**
- **21 months** average tenure at the company among interviewees
- **482 insights** collected
- Breakdown by area: **9 Technology, 5 Design, 4 Product, 3 Executive leadership (Diretoria), 3 Marketing**

**Insight categorization ("O que o time sente?") — distribution by type:**
| Type | Count |
|---|---|
| Dor (Pain) | 175 |
| Observação (Observation) | 141 |
| Impacto Esperado (Expected impact) | 44 |
| Sugestão (Suggestion) | 39 |
| Necessidade (Need) | 37 |
| Engajamento (Engagement) | 28 |
| Métrica (Metric) | 10 |
| Desafio Técnico (Technical challenge) | 6 |
| Dúvida (Question) | 2 |

**The two headline research findings:**
- **36% of all insights were pains.**
- **54% of those pains traced back to the absence of a design system.** *This is the number that
  justifies the entire project. It turns "I did research" into "I proved the problem existed."*

**Top expectations the team voiced ("Maiores expectativas"):**
1. **Padronização** — visual coherence across products and teams
2. **Velocidade** — faster delivery and decisions
3. **Componentes** — easier interface creation and maintenance
4. **Menos retrabalho** — avoiding unnecessary rework
5. **Mais eficiência** — higher productivity and better use of resources

**The audit scope ("Design Audit" card in the deck):**
- Analysis of base elements (Foundations)
- Initial component inventory (Web and App)
- **Automated accessibility testing (Silktide)** ← note: Silktide, alongside his own Design Audit tool
- Benchmark against main market players

**The dashboard is live:** https://marcelcorradi-netizen.github.io/interview-dashboard/
Its numbers load via JavaScript, so WebFetch cannot read them (they render as `--`). Screenshots are
the way to pull data from it. Structure confirmed from the live page:
- Five sections: **Visão geral, Dimensão, Expectativas & Engajamento, Panorama final, Mais**
- Cross-filtering by team and by insight type, plus tag filtering and data export
- Tracked metrics: stakeholders interviewed, total insights, average tenure, stakeholders with
  expectations, registered expectations, engaged stakeholders, engagement mentions
- **"Panorama final" ties most-cited themes to next-step recommendations with their supporting basis,
  plus an influence map of stakeholders.** This is the detail worth writing about: it is not a
  reporting dashboard, it is a decision instrument. The influence mapping shows he thought about who
  had to be convinced, not only what was said.

**How the research was actually processed (Marcel's method, worth telling):**
Meet call transcripts → AI-assisted categorization of insight types → Excel database
(`Base_Stakeholders_DS_v4.xlsx`) with types, categories and tags → a **Ruby extraction script**
(`scripts/extract_data.rb`) generating `stakeholders.json` and `insights.json` → a **static web
dashboard** consuming that data. He automated qualitative analysis. Same instinct as Design Audit:
found tedious manual work and built the tool.

**CORRECTION — the dashboard stack is NOT Shoelace.** An earlier note said Shoelace; that was wrong.
Verified from the repo's own `docs/contexto.md`: **plain HTML, custom CSS, Tailwind via CDN, and
vanilla JavaScript** (modularized in `app.js`), with the Ruby script for data extraction. Getting a
technical detail wrong in a technical case would cost credibility, so use the verified stack.

### Verified aggregates (read directly from the dashboard repo's data files)

Source: `interview-dashboard-main/data/insights.json` + `stakeholders.json`. These match the deck
exactly, which confirms deck and dashboard share one source of truth.

- **482 insights** from **24 stakeholders**, average tenure **20.6 months** (range 0 to 76)
- **36.3% of all insights were pains** (175 of 482)
- **53.7% of those pains fell in the Design_System category** (94 of 175) — the deck rounds this to 54%

**Insights by category (all types):** Design_System 222, Colaboracao 72, Processo 56, Tecnologia 35,
Estrategia 31, Produto 25, Metricas 8, Documentacao 8, Experiencia_Usuario 7, Interface 7,
Eficiencia 6, Arquitetura_Informacao 3, Alinhamento 2.
*Design_System alone is 222 of 482, nearly half of everything said.*

**Pains by category:** Design_System 94 (53.7%), Processo 25 (14.3%), Tecnologia 13 (7.4%),
Colaboracao 13 (7.4%), Produto 10 (5.7%), Experiencia_Usuario 7 (4.0%), Interface 4, Documentacao 4,
Eficiencia 3, Alinhamento 1, Arquitetura_Informacao 1.

**Top tags — the actual words people used, by frequency:**
padronizacao **101**, comunicacao 42, documentacao 40, componentes 38, retrabalho 33, velocidade 30,
engajamento 25, versao 24, organizacao 21, planejamento 21, usabilidade 21, biblioteca_componentes 17,
acessibilidade 16, evolucao 16, participacao 15, figma 15, tokens 15, expense 14, adocao 14,
qualidade 13, prioridade 13, framework 13, validacao 12, frontend 12, cores 12, handoff 11,
governanca 11, eficiencia 10, metricas 10, arquitetura 9.
*`padronizacao` at 101 is more than double the next tag. Standardization was the demand.*

**Who was interviewed — by team:** Tecnologia 9, Time Design 5, Produto 4, Marketing 3, Diretoria 3.
**Seniority reached:** the roster includes the **CEO, the CTO, and the Diretor de Produtos**. Worth
stating: he took the diagnosis to the top of the company, not just to his peers.

**Interview period:** 18 Sep to 1 Oct 2025, concentrated in the first weeks after joining (he started
in September 2025).

**PRIVACY:** the repo contains stakeholder names, job titles, and verbatim insight descriptions from
internal interviews. **Only aggregates go in the portfolio.** No names, no quotes, no titles tied to
individuals. Do not copy the data files into the portfolio repo.

## Accessibility numbers — IMPORTANT, do not get this wrong

**The audit was run with Marcel's own Design Audit plugin** (he confirmed this; the deck also lists
Silktide under the audit scope, but the WCAG figure came from Design Audit).

**Verified from the deck slide "ACESSIBILIDADE — Página inicial":**
- **26% compliance with WCAG 2.1 A and AA** on the **home page**
- **49 violations** against **17 passing criteria** (17/66 = 25.8%, rounds to 26%, internally consistent)
- Only the home page was presented in the deck, for time reasons

**The CV claims a "23% WCAG compliance baseline" for the product. That number is NOT verifiable right
now** — Marcel does not remember its origin, and the only evidence available says 26% for the home
alone. Those are different scopes.

**DECISION (2026-07-25): use the 26% home-page figure with its scope stated explicitly.** Write that
the automated audit of the home page returned 26% compliance with WCAG 2.1 A and AA, 49 violations
against 17 passing criteria. It is specific, verifiable, and Marcel can defend it in an interview.
The reader infers the rest of the product was no better. Do NOT write the unverifiable 23%, and do
NOT claim a product-wide baseline.

*Why this matters more than usual: accessibility is Marcel's declared specialty. A number he cannot
source, in his own specialty, is the worst possible thing to be asked about in an interview.*

**Follow-up for Marcel (not urgent, outside this case):** if the 23% in the CV has no traceable
origin, consider correcting it there too. The CV is what passes recruiter screening, so an
indefensible number carries more risk there than on the site.

## Component inventory — verified from the deck slide "Componentes encontrados"

- **40 component types on web**, **14 component types on app**
- **"Types", not instances.** Marcel was explicit: a button counts as one type even though it had
  many variations scattered across the product. He did not measure the variation count per type, so
  **do not claim a number of variants found**. Write "types".
- Marcel's own methodological caveat, stated on the slide and worth keeping in the case: only the
  **main screens** of web and app were analyzed, so the real total is likely higher.

**The slide's right-hand image is the strongest visual evidence in the whole case.** It shows the
buttons found in the product side by side: blue, green, purple, yellow, red, grey, each with a
different corner radius, height, and type treatment, some uppercase and some not. It needs no
caption. Anyone opening the case understands the inconsistency in two seconds. **Mandatory figure
for Phase 2.**

⚠️ **PRIVACY — this slide contains real names.** The approval-timeline component in the lower middle
shows real people's names (approvers in the flow). **Blur or crop them before publishing.**

## Foundations audit — verified numbers from the deck (THE strongest evidence in the case)

Benchmark set: **Travelperk, Navan, TripBiz, Expensify**. Marcel's summary: all of them were better
than Onfly on several fronts. The benchmark is not presentation context, it is **a yardstick**. It
turns "it was messy" into "it was messy against a verifiable market standard".

**Typography** (slide "ANÁLISE FOUNDATIONS — Tipografia"):
- Onfly had **102 typographic variants**. Travelperk had **17**. Expensify had **39**.
- Onfly used **2 main families (Poppins and Rubik) with no clear hierarchy**.
- Better-structured competitors used **1 family with a consistent modular system**.
- *102 vs 17 is the single most damning comparison in the deck: six times the complexity to solve the
  same product problem.*

**Color** (slide "ANÁLISE FOUNDATIONS — Cores"):
- **60 colors with no clear organization**
- **16 greys** (Travelperk uses 7)
- **13 blues with no defined purpose**
- Near-identical colors coexisting (the slide shows e.g. #007DC7, #007BD4, #009EFB, #1E88E5, #2196F3)

**Spacing** (slide "ANÁLISE FOUNDATIONS — Espaçamentos"):
- **101 unique spacing values** (Travelperk has 44)
- No standard across margins, paddings and gaps (41 margin values, 52 padding values shown)
- **Arbitrary values like 4.8px, 6.4px, 14.69px, 13.86px, 44.06px** with no discernible scale

⚠️ **Do NOT claim the decimal values were set by hand.** Marcel flagged this himself: they may well
come from unit conversion (rem to px with a non-integer root font size) or from computed layout in
the generated HTML, not from someone nudging pixels. The slide's padding values (2.28px = 0.142rem,
3.42px = 0.214rem) support the conversion theory. **Write the dispersion as the finding and the cause
as a possibility.** A developer reading a confident wrong diagnosis here would discount the whole
case, and developers are exactly the audience this section needs to convince.

**These three slides are excellent figures for Phase 2** and contain no private data (unlike the
component inventory slide, which has real names in the timeline component).

## Token architecture — VERIFIED from the real exported files

Source: `assets/tokens-onfly/` in this repo (exported from Figma Variables). Counted directly.

**The 611 figure in the CV is correct and now provable:**
- Raw leaf tokens across all files: **718**
- Minus Figma *styles* (not variables): text.styles 25, effect.styles 12, grid.styles 3 = **40**
- Minus mode duplication: Layout and Grid each ship Desktop + Mobile files with **identical token
  names** (confirmed programmatically, and the manifest declares them as modes of one collection),
  so Mobile repeats 43 + 24 = **67**
- **718 − 40 − 67 = 611.** Exactly the CV number.
- *If anyone asks where 611 comes from, this is the answer.*

**The three-tier architecture, with the real file names:**

| Tier | Files | Count | What's in it |
|---|---|---|---|
| **Primitive** | `Brand.Value` | 136 | 105 colors + 31 typography |
| **Primitive** | `Foundation.Value` | 37 | all under `scale.*` — the base scale |
| **Semantic** | `Theme.Light` | 118 | all color |
| **Semantic** | `Layout` (Desktop/Mobile modes) | 43 | spacing 27, border 12, size 4 |
| **Semantic** | `Grid` (Desktop/Mobile modes) | 24 | grid |
| **Semantic** | `Typography.Value` | 101 | label 36, heading 25, body 24, display 12, caption 4 |
| **Semantic** | `Effects.Mode 1` | 80 | drop-shadow |
| **Component** | `Components.Value` | 72 | avatar 11, chip-close-button 10, bottom-bar 10, icon-shape 7, button 5, chip 5, metrics-card 5, switch 4, skeleton 4, step-indicator 3, carousel-indicator 2, focus-ring 1 |

**By value type:** dimension 348, color 300, string 26, typography 25, shadow 12, boolean 4, grid 3.

**The primitive→semantic reference is real and visible in the files:**
`spacing.stack.md = {scale.16}` — the semantic token does not hold a value, it points at the
primitive. Same for every spacing token. This is the pattern Marcel builds professionally and the
site's own indigo tokens model. Worth showing as a code snippet in the case.

**The before/after that closes the arc opened in section 3:**
- Audit found **101 arbitrary spacing values**.
- The architecture delivers **7 semantic steps** (none, 2xs, xs, sm, md, lg, xl) across **3
  directional axes**: `spacing.stack.*` (vertical), `spacing.inline.*` (horizontal),
  `spacing.inset.*` (padding, which goes further: none → 4xl). Plus contextual tokens like
  `spacing.context.screen.horizontal-padding`.
- All integers, all anchored to `Foundation.scale.*`.

**Details worth naming in the case (systems designers notice these):**
- `spacing.stack` vs `spacing.inline` vs `spacing.inset` = directional semantics, not a flat scale
- `focus-ring` exists as its own component token = accessibility treated as system, not afterthought
- Desktop/Mobile as **modes** of one collection = responsive handled by the token layer, not by
  duplicated components

**The scale's exceptions are deliberate.** It is mostly 4-based, but carries `scale.38`, `scale.108`,
`scale.112`, `scale.999` and negatives (`scale.-1` to `scale.-12`). Marcel confirmed: those exist for
**specific product contexts that needed those numbers**.

**DECIDED by Marcel (2026-07-25): keep the paragraph in section 4.** He questioned it, Claude
recommended moving it to section 7, and he chose to keep it as written: "fica legal ser específico
assim". Being specific is consistent with the rest of the case, which is anchored in concrete numbers
and decisions throughout.

## Why Design Audit was born here (Marcel's own words, worth preserving)

He needed to audit colors, typography, icons, spacing, grids, and accessibility **in an automated
way, and no tool did that.** The manual alternative was picking every color one by one and saving
them into a Figma file just to have an inventory — days of work for data a tool could collect in
minutes.

So he built it. **That tool became Design Audit, which he now sells as a product** (published on the
Chrome Web Store). The Onfly audit is literally its origin story.

*This is the single best proof of the case's thesis: he hits a wall, builds the instrument, and the
instrument becomes a product. Give it room in section 3.*

## Organizational context — HOW TO HANDLE (Marcel's decision: "condition yes, criticism no")

Marcel chose to describe **the condition** but not to criticize people or narrate his exit.

**Safe to write:** the model was decentralized with no dedicated design system team, so every
component update had to be negotiated into the product squads' roadmaps. Design system maturity in
the organization was still forming, which shaped how the system had to be introduced and adopted.

**Do NOT write:** that a specific technology director opposed a dedicated team; that leadership did
not know what a design system was; that Marcel was let go because leadership bet on AI generating
screens directly (Lovable). This context explains everything and is true, but a portfolio is not
where that argument gets won, and a recruiter only ever hears one side.

---

## Still open — questions for Marcel

1. ~~Interviews: who and how many?~~ **ANSWERED** — 24 people, see research data above.
2. ~~Dashboard: categories and tooling?~~ **ANSWERED** — Shoelace web app, see research data above.
3. **Migration:** when the new Figma library was published, did designers have to migrate files that
   used the old one? How was that handled? (Material for the adoption section.)
4. **Cover image:** does he have a screenshot of the new Figma component library, or of the Figma ↔
   code sync? Needed for the hook/cover.
5. ~~The 23% WCAG baseline: Silktide or Design Audit?~~ **RESOLVED — see accessibility note below.**
6. **Dashboard link:** it is back online. Decide whether to link it publicly from the case (it would be
   strong evidence) or only screenshot it.

---

## Section arc (7 sections)

| # | Section | Content |
|---|---|---|
| 1 | **Hook** | The orphaned system, the bridge, the result. **APPROVED** |
| 2 | **Starting with people, not screens** | Stakeholder interviews, insight categorization, the dashboard. Also carries the framework-vs-Figma decision moved out of the hook. |
| 3 | **Audit and inventory** | The audit (Design Audit born here), component inventory, screen-flow map in Figma, the 23% WCAG baseline. |
| 4 | **The token architecture** | 611 tokens, primitive → semantic → component, the new Figma library. |
| 5 | **Building the bridge** | Figma Variables → JSON → agents → SCSS in Quasar, plus the other AI agents. |
| 6 | **Adoption without a dedicated team** | Negotiating with product/dev/engineering, Design Ops, governance. *This is where his seniority shows.* |
| 7 | **Results & reflection** | Adoption numbers, what he learned, what he would do differently. |

---

## Section 1 — Hook (APPROVED)

## A design system that keeps itself in sync

Onfly is a Brazilian B2B platform for corporate travel management. When I joined as Senior Product Designer in September 2025, the design system was not missing. It was orphaned.

A Vue and Quasar UI framework already existed, with components customized for the product, and so did a Figma library. The two had never been connected. The team that built the framework had been dissolved, so a few developers kept it alive on the side while it drifted further from design every sprint.

I did not start by drawing components. I started by interviewing stakeholders and building a dashboard to make their pain visible, then audited the product screen by screen. The audit was tedious enough that I began building my own tool to speed it up, which later became Design Audit, published on the Chrome Web Store.

On that foundation I built a 611-token architecture across primitive, semantic, and component levels, and then the piece that had never existed. Tokens live as Figma Variables, export as JSON, and pass through AI agents I built to become the SCSS that the Quasar framework consumes. Design and code finally read from the same source.

The system covers 143 components and 2,490 variants, and it is used by 5 designers and around 40 developers. I built it without a dedicated design system team, by negotiating its adoption into the roadmaps of the product squads.

---

## Section 2 — Starting with people, not screens (APPROVED)

## Starting with people, not screens

Before touching a component, I needed to know whether the problem I had been hired to solve was the problem the company actually had. So I spent my first weeks interviewing the people who would have to live with the result.

I talked to 24 people across technology, design, product, marketing, and executive leadership, including the CEO, the CTO, and the product director. Between them they averaged nearly two years at the company. That range was deliberate. A design system fails when it is built for designers alone, and the people who would fund it, prioritize it, and maintain it all sat in different rooms.

The conversations produced 482 insights, which was more than I could hold in my head or in a document. So I built a pipeline instead. Meeting transcripts went through AI-assisted categorization, into a structured database where every insight carried a type, a category, and tags. A Ruby script turned that into JSON, and I built a dashboard on top of it so the pattern could be filtered by team, by type, and by theme.

The picture that came back was specific. 36% of everything I heard was a pain, and 54% of those pains sat in one category: the design system. One tag appeared 101 times, more than double any other, and it was standardization. After it came communication, documentation, components, rework, and speed.

That mattered more than the volume. Five departments that did not plan their answers together were describing the same problem in the same words. The team was not asking for a component library because component libraries are good practice. They were describing rework they could measure and decisions that took too long.

The dashboard closed with the part I cared about most: each recommendation tied back to the evidence that supported it, and a map of which stakeholders were raising which concerns. That gave me something more useful than a mandate. It gave me a quantified account of the problem that I could take into any room in the company and point at.

**Images this section needs (collect in Phase 2):**
1. Deck slide "Quantidade de pessoas entrevistadas" (breakdown by area)
2. Deck slide "O que o time sente?" (482 insights, type distribution, the 36% / 54% figures) — *highest value if only one*
3. Screenshot of the dashboard's "Panorama final" screen (recommendations tied to evidence). Run it
   locally: `ruby scripts/extract_data.rb`, then open `index.html`.

---

## Section 3 — What the audit found (APPROVED, pending Marcel's final read)

## What the audit found

The interviews told me what the team felt. The next step was measuring what was actually there.

I audited the foundations of the product against four competitors: Travelperk, Navan, TripBiz, and Expensify. That comparison mattered more than an internal count would have. It is easy to dismiss a designer saying the product is inconsistent. It is harder to dismiss a number sitting next to the same number from a company solving the same problem.

The typography came back at 102 distinct variants. Travelperk was running 17. Onfly was carrying two type families, Poppins and Rubik, with no hierarchy deciding when to use which, while the better-structured competitors used one family on a modular scale.

Color told the same story: 60 colors with no organization, among them 16 greys where Travelperk used 7, and 13 blues with no defined purpose. Several were nearly identical to each other, different enough to be separate values and not different enough for anyone to see why.

Spacing was the clearest signal. 101 unique values against Travelperk's 44, spread across margins, paddings, and gaps with no standard between them. Some were values no one would type on purpose, like 4.8px or 14.69px, which most likely came out of unit conversion or computed layout rather than someone's hand. That distinction mattered less than the dispersion itself. Whatever produced them, there was no scale underneath for anything to land on.

I also inventoried the components on the main screens of web and app, and found 40 component types on web and 14 on app. Types, not instances: a button counted once, however many versions of it existed. Side by side, those versions did not agree on color, on corner radius, on height, or on whether labels were uppercase.

Then I ran an automated accessibility audit. The home page returned 26% compliance with WCAG 2.1 A and AA: 49 violations against 17 passing criteria.

None of this was anyone's fault. It is what accumulates when a product ships for years without a system underneath, and every one of those 102 type variants was once a reasonable local decision.

Auditing at this level is normally where a designer's time disappears. Collecting every color in a product means opening screen after screen, sampling values by hand, and pasting them into a Figma file until you have something resembling an inventory. It takes days, and it is out of date the moment you finish.

I did not have days, so I built a tool that could do it in minutes: colors, typography, icons, spacing, grids, and accessibility, collected automatically from any interface. It started as a way to survive the Onfly audit. It is now Design Audit, published on the Chrome Web Store.

One caveat I kept in the report and keep here: I audited the main screens, not every screen. The real numbers were larger than the ones I measured.

**Images this section needs (collect in Phase 2):**
1. Deck slide "Tipografia" (102 variants vs Travelperk 17 / Expensify 39)
2. Deck slide "Cores" (the 60-color grid) — *visually the most immediate*
3. Deck slide "Espaçamentos" (101 values, the decimal ones visible)
4. Deck slide "Componentes encontrados" — **the button row is the best single image in the case**,
   but ⚠️ blur the real names in the approval-timeline component first
5. Deck slide "Página inicial" accessibility (26%, 49 violations, 17 passing)

---

## Section 4 — Rebuilding the foundation (APPROVED)

## Rebuilding the foundation

The audit gave me a problem I could state precisely: the product had values, but no system deciding them. So the foundation had to come before any component.

I built it in three layers. Primitives hold the raw values, a base scale for dimensions and six color families with ordered steps: brand, gray, neutral, success, warning, and danger. Semantic tokens sit above them and carry meaning rather than value, pointing back at the primitives. Component tokens sit at the top for cases where a specific part needs its own decision.

The difference shows in a single line. `spacing.stack.md` does not store 16px. It points at `scale.16`. Change the scale and every stacked layout in the product follows, because nothing downstream owns a number.

That is what replaced the 101 spacing values. The system exposes seven semantic steps, from none to xl, across three directional axes: stack for vertical rhythm, inline for horizontal, inset for padding. A designer no longer picks a number. They pick an intent, and the intent resolves to a value the system controls.

Color went the same way. The 60 unorganized colors became six primitive families, and above them 118 semantic tokens grouped by what they do: 46 for backgrounds, 36 for content, 34 for borders. `color.background.disabled-subtle` says what it is for and resolves to `gray.100`. The old palette had a hex that someone had once picked and everyone after had copied.

Two decisions in the foundation are worth naming. Desktop and mobile are modes of the same collection rather than separate token sets, so responsive behavior lives in the token layer instead of in duplicated components. And `focus-ring` exists as its own token, because after auditing a product at 26% WCAG compliance, I was not going to leave focus states to whoever built the next component.

The scale is mostly built on multiples of four, with exceptions. There are values like 38 and 108 in it because specific parts of the product needed them. I could have forced those cases onto the nearest step and had a cleaner system that people worked around. A foundation nobody adopts is not a foundation.

Altogether it came to 611 tokens, and on top of them a Figma library rebuilt from scratch: 143 components and 2,490 variants, with named layers, auto layout, and slot-based structure. The variant count is high by design. A variant is a combination the system anticipates, a state crossed with a size crossed with a type, which is the opposite of the 102 typographic variants the audit found: those were combinations nobody had decided. The old library was not restructured. Its crafting could not carry a token architecture, and rebuilding cost less than repairing.

**Images this section needs (collect in Phase 2):**
1. Figma Variables panel showing the collections and the semantic → primitive reference — *this is
   the visual that proves the architecture*
2. Optionally a code snippet rendering `spacing.stack.md = {scale.16}` from the exported JSON
3. A shot of the component library itself (the 143 components) would help the closing paragraph land

---

## Writing rules in force

- **No dashes joining clauses.** No em dash, en dash, or hyphen as a sentence connector. Hyphens
  inside real compounds ("design-to-code", "slot-based") are fine.
- English copy, even though Marcel and Claude discuss it in Portuguese.
- Never invent a metric, a date, or a mechanic. Ask Marcel or leave a marked placeholder.
- Lead with results (inverted pyramid), connect each decision to the problem it solved, and include
  genuine self-reflection in the final section.
