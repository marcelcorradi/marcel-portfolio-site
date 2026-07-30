# Upwork profile — working draft

Started 2026-07-30. Marcel is setting up an Upwork profile to take international freelance
work (target ~R$20k/month). This file holds the approved copy for the profile Overview and
the per-role Employment History entries (Upwork allows up to 1000 characters per role).

**Audience differs from the portfolio site.** The site speaks to recruiters; Upwork speaks to
clients buying a service. They skim, they search by keyword, and they want "can this person
solve my problem". Hence: result first, numbers up front, keyword-dense ("design tokens",
"component library", "Figma", "WCAG").

## Facts confirmed by Marcel in this session (2026-07-30)

These were new or contested and are now settled:

1. ✅ **11 years as Business Analyst then Business Manager** at a technology company, before
   the design career. This is what backs the "13+ years in tech" claim. Roughly 2009–2020.
2. ✅ **Smiles was Design System work**, not just a component library. Marcel: *"foi DS mesmo"*.
   ⚠️ This **corrects** `marcel-cv-highlights`, which recorded Smiles as "component library +
   technical documentation, usability validated with user research". Focus was DS: components,
   usage documentation, visual standards.
3. ✅ **Position as an established Design Systems specialist, not an aspiring one.** His old
   bio text ended on *"meu objetivo é me tornar especialista em Design Systems"*. That is
   pre-Whirlpool/pre-Onfly and now reads junior. Marcel: *"altera pra me considerar especialista"*.

## Decisions

- **2026-07-30 — old pre-design roles (Business Analyst, Web Designer) are NOT separate
  Employment History entries.** Upwork clients read the first 2–3 roles and decide; weak entries
  dilute. The 11 years live in the Overview narrative instead, where they explain the business
  perspective without spending a role slot.
- **2026-07-30 — Smiles, SulAmérica/Tora and Esfera 2021–22 dropped as entries.** Same
  curation logic. Four entries total: Onfly, Môre/Whirlpool, Rethink/Esfera, Independent.
- **2026-07-30 — IxDF courses/certifications cut from the Overview.** His track record proves
  more than a certificate; listing them shifts attention to credential-building.
- **2026-07-30 — the Figma plugin work is framed as shipped products, not exploration.**
  Original said *"exploro o desenvolvimento de plugins"*; he has published work on the Chrome
  Web Store and Figma Community.

---

## Overview

> My path started in Computer Science, but I quickly realized my real interest went beyond code.
>
> For 11 years I worked as a Business Analyst and later Business Manager at a technology company,
> dealing directly with clients. That contact showed me a pattern: most of the pain clients
> reported wasn't about missing features. It was about how people actually interacted with the
> software. Complex interfaces, confusing flows and frustrating experiences were recurring
> problems that directly affected whether a project succeeded.
>
> In 2020 I decided to act on that. My technical background and business perspective would be far
> more valuable combined with design, so I moved into UI/UX and Product Design.
>
> I started as a UI Designer and moved quickly into more demanding projects. My detail-oriented
> approach led me naturally toward Design Systems, where I saw the chance to build consistent,
> scalable standards — something that speeds up development and produces more coherent
> experiences for users at the same time.
>
> That took me to significant work: at Smiles I focused on Design System, building components,
> usage documentation and visual standards. At Esfera (Santander) I combined Product Design with
> Design System. At Whirlpool I built a global token system spanning seven brands. At Onfly I led
> a design system adopted by 5 designers and around 40 developers.
>
> Today I specialize in Design Systems: token architecture, component libraries, documentation,
> governance and adoption. My Computer Science background means I work fluently with developers
> and design systems that survive contact with code, not just Figma files.
>
> I also build my own design tools — a Chrome extension that audits any site's design and
> accessibility, a color scale generator, and a Figma plugin for AI design-to-code workflows.

⚠️ Character limit for the Overview field not confirmed — Marcel to check. The per-role limit
is 1000.

---

## Employment History

### 1. Onfly — Senior Product Designer (Sep 2025 – Jul 2026) — 931 chars

> Led the design system for a corporate travel platform, adopted by 5 designers and ~40 developers.
>
> Built 611 design tokens and 143 components with 2,490 variants using Atomic Design. The system
> wasn't started from zero: a Vue/Quasar framework and a Figma library already existed but had never
> been connected, and the team behind the framework was gone. I kept and extended the framework, and
> rebuilt the Figma library so it could carry a real token architecture.
>
> I ran the research myself — 24 stakeholder interviews including the CEO, CTO and product director —
> which produced 482 insights and proved standardization was the top recurring pain.
>
> I also built AI agents to support the system: JSON-to-SCSS token conversion, screen inspection, and
> component generation from Figma. I benchmarked the design agent's design-system conformance from
> 44% to 98%.
>
> Beyond that: Design Ops, accessibility auditing (WCAG), and training the team on design systems and
> AI-assisted workflows.

### 2. Môre (client: Whirlpool) — Product Designer, Design Systems (May – Sep 2025) — 920 chars

> Built a global design token system for Whirlpool covering 7 brands: Whirlpool, KitchenAid, Maytag,
> JennAir, Amana, Aether and Whirlpool B2B.
>
> The challenge was that the Figma libraries were already live and actively maintained. Nobody could
> be asked to stop and rebuild, so I built the foundation underneath them — starting with tokens,
> linking to the existing libraries and updating them incrementally.
>
> I created the GDS Foundations system from scratch: token architecture, documentation, design system
> rules, and the web library. 653 tokens, where all 7 brands share the same 379 tokens — same names,
> different values — so adding a brand is a configuration, not a fork. It went live in my second month
> and kept being used and evolved after I left.
>
> I also inherited Polaris, the mobile system, where I corrected the token architecture, refined the
> structure, and built and maintained components.

⚠️ Never claim Polaris as his creation — see [[whirlpool-case-facts]].

### 3. Rethink (client: Esfera / Santander) — Product Designer, Design System (Jun 2024 – May 2025) — 899 chars

> Led the design system for Esfera, Santander's loyalty marketplace: 224 tokens, 59 components, 443
> variants, delivered in Figma and in code.
>
> There was no design system and nobody had asked for one. I came in as a product designer on squad
> demands and spent the first four months building the internal case for it. It worked — in October a
> team was staffed around it: another senior designer, a design ops specialist, and a developer
> allocated to us.
>
> We didn't build the system in the abstract. We took pilot journeys — onboarding and checkout —
> redesigned them at desktop and mobile, got stakeholder approval, and only then extracted tokens and
> components from what had been approved. Every component exists because a real, signed-off flow
> needed it.
>
> Having a developer in the team meant we shipped code, not just Figma. Design and implementation were
> reviewed in both directions.

⚠️ Do NOT describe Esfera as "regulated" — that belongs to SulAmérica/Tora only.

### 4. Independent — Design Tools (2025 – present) — 780 chars

> I build and ship my own design tools, solo, from idea to published product.
>
> **Design Audit** — a Chrome extension that audits any website's design system: colors, typography,
> grid, spacing and WCAG accessibility via axe-core, with HTML/SVG report export. Published on the
> Chrome Web Store. I built it because auditing a large product by hand was unsustainable.
>
> **Atomic Colors** — a color scale and palette generator built for design systems, at atomicolors.com.
>
> **Spec Forge** — a Figma plugin that preserves design token context in AI design-to-code workflows,
> published on Figma Community.
>
> My background is computer science, so I design and build these end to end. That's the same skill I
> bring to client work: I design systems that survive contact with code.

---

## Written but NOT used (kept in case he wants them later)

Drafted on 2026-07-30, then cut by the curation decision above. Smiles would need rewriting
to reflect fact #2 (it was DS work, not just a component library).

- **Smiles (2023)** — component library + technical documentation, usability validated with user
  research. Thin on numbers; ask Marcel for component counts / consuming teams before reviving.
- **SulAmérica, Tora (2021–2025)** — UX/UI in highly regulated contexts. Weakest of the set; only
  the CV line exists as a source.
- **Esfera 2021–2022** — component libraries, no design system yet. Its real value is narrative
  (why he came back three years later), which is better placed inside entry 3.

## Rules carried over

- 🚫 No invented metrics — every number above traces to [[marcel-cv-highlights]],
  [[whirlpool-case-facts]], [[onfly-case-facts]] or `content-drafts/esfera-case.md`.
- 🚫 No inferred rationale written in his voice — [[dont-infer-ask-first]].
- Keep consistent with the published cases at marcelcorradi.com; a client may read both.
