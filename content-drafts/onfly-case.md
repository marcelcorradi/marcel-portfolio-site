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
   *Marcel no longer has access to this dashboard, so no screenshot exists.*
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

## Still open — questions for Marcel

1. **Interviews:** who did he talk to (devs, PMs, designers, leadership) and roughly how many people?
   What surprised him most in what he heard?
2. **Dashboard:** what were the main categories that emerged from the insights? What was it built with?
3. **Migration:** when the new Figma library was published, did designers have to migrate files that
   used the old one? How was that handled? (Material for the adoption section.)
4. **Cover image:** does he have a screenshot of the new Figma component library, or of the Figma ↔
   code sync? Needed for the hook/cover.

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
