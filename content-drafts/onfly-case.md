# Onfly case study — working draft

Draft in progress. Written section by section with Marcel's validation (portfolio-content skill).
Final output goes to `src/content/cases/onfly-design-system.md`.

**Status:** Hook approved. Section 2 pending Marcel's input.

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

**How the research was actually processed (Marcel's method, worth telling):**
Meet call transcripts → AI-assisted categorization of insight types → Excel database with categories
and subcategories (e.g. pains related to design system, to lack of standards, to lack of time) →
a **web dashboard built with Shoelace** consuming that data and consolidating it for strategic
presentation. He automated qualitative analysis. Same instinct as Design Audit: found tedious manual
work and built the tool.

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
5. **The 23% WCAG baseline:** the deck mentions Silktide for automated accessibility testing. Confirm
   whether the 23% figure came from Silktide, from Design Audit, or from both combined.
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

## Writing rules in force

- **No dashes joining clauses.** No em dash, en dash, or hyphen as a sentence connector. Hyphens
  inside real compounds ("design-to-code", "slot-based") are fine.
- English copy, even though Marcel and Claude discuss it in Portuguese.
- Never invent a metric, a date, or a mechanic. Ask Marcel or leave a marked placeholder.
- Lead with results (inverted pyramid), connect each decision to the problem it solved, and include
  genuine self-reflection in the final section.
