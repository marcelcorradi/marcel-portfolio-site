# Marcel — verified facts for proposals

Everything a proposal may claim. If it is not here, it is not established, and a proposal must not
assert it. When in doubt, ask Marcel rather than reaching for something plausible.

Sources: his CV, the published cases at marcelcorradi.com, and facts he confirmed directly while
the cases were written. The published cases are the public version of all of this, so a client can
read them. Keep proposals consistent with what is on the site.

## Positioning

**Product Designer specialized in Design Systems, with a Computer Science degree.**
13+ years in tech, 5+ as a Product Designer, 4+ specialized in Design Systems.
Based in Brazil. English B2. Portfolio: marcelcorradi.com

The differentiator, and the thing worth surfacing in most proposals: he owns the *technical*
foundation of design systems (tokens, component architecture, governance) and independently builds
real products with AI coding tools. He is fluent with developers, not just adjacent to them.

Career shape, useful when a client wonders about the business side: 11 years at one technology
company, starting as Business Analyst (2009), moving through Web Designer (2012), ending as
Business Manager (2013 to 2020). He moved fully into design in 2020. He has sat on the client
side of software projects, which is unusual for a designer.

---

## Onfly — Senior Product Designer (Sep 2025 to Jul 2026)

Corporate travel platform. **The biggest system by volume.**

- **611 design tokens, 143 components, 2,490 variants** (Atomic Design)
- **Adopted by 5 designers and around 40 developers**
- Not built from scratch: a Vue/Quasar framework and a Figma library existed but had never been
  connected, and the team that built the framework was gone. He kept and extended the framework,
  and rebuilt the Figma library so it could carry a token architecture.
- **Research he ran himself:** 24 stakeholder interviews including the CEO, CTO and product
  director. 482 insights, 36% of them pains, 54% of those tracing to the missing design system.
- **Accessibility:** the product's home page scored **26% WCAG conformance** (49 violations against
  17 passing criteria), measured with his own Design Audit extension.
- **AI agents he built:** JSON to SCSS token conversion, screen inspection, component generation
  from Figma. He benchmarked the design agent's design-system conformance at **44% → 78% → 98%**.
- Design Ops, plus training the team on design systems and AI-assisted workflow.

**Best for:** large-scale design system work, systems in disrepair, adoption without a dedicated
team, AI-augmented design workflow, accessibility remediation.

⚠️ Do not say "built from scratch". The honest framing is stronger anyway: he rescued an orphaned
system, which is what most clients actually have.

---

## Whirlpool, via Môre — Product Designer, Design Systems (May to Sep 2025)

Global appliance brand. **The multi-brand case.**

- **653 tokens** across **7 brands**: Whirlpool, KitchenAid, Maytag, JennAir, Amana, Aether,
  Whirlpool B2B
- 🔑 **All 7 brands share the same 379 tokens.** Same names, different values, so adding a brand is
  a configuration rather than a fork. This is the single most reusable argument he has for any
  white-label, multi-tenant or theming job.
- **The constraint that makes it credible:** the Figma libraries were already live and actively
  maintained. Nobody could be told to stop and rebuild. He built the foundation underneath them,
  starting with tokens, linking to existing libraries, updating incrementally.
- **It went live in his second month** and kept being used and evolved after he left.
- Architecture argument: GDS is 337 semantic vs 40 component tokens (8.4:1, healthy, his design).
- Components: 117 components, 531 variants across both systems.

⚠️ **Polaris (the mobile system) was inherited, not built by him.** He corrected its token
architecture and built components in it. Never claim it as his creation.
⚠️ **No adoption metric exists.** He never measured it. Do not estimate one.

**Best for:** multi-brand, white-label, theming, "we can't stop shipping while you fix this",
design systems for an existing product rather than a greenfield one.

---

## Esfera (Santander), via Rethink — Product Designer, Design System (Jun 2024 to May 2025)

Santander's loyalty marketplace. **The case about adoption and shipping code.**

- **224 tokens, 59 components, 443 variants**, delivered **in Figma and in code**
- **There was no design system and nobody had asked for one.** He spent his first four months
  building the internal case for it while still delivering product design for squads. It worked:
  in October a team was staffed around it (another senior PD, a design ops specialist, and a
  developer allocated to the team).
- 🔑 **The method:** pilot journeys (onboarding and checkout, chosen by the business), redesigned
  properly, approved by stakeholders, and only then turned into tokens and components. Every
  component exists because an approved flow needed it. This removes the adoption problem, because
  the first consumers of a component are the screens it came from, and it removes prioritisation,
  because the flow defines the scope.
- **A developer sat inside the design system team**, so design and implementation were reviewed in
  both directions. Design handed over, dev built, dev presented back for design validation.
- Adoption effort was **training**: they trained the designers, the dev walked other devs through
  consuming it.
- Architecture: the semantic layer holds no raw values. Light and dark share the same 43 colour
  token names; desktop and mobile share the same spacing, typography and scaling tokens.

⚠️ **Do not describe Esfera as "regulated".** That belongs to other Rethink clients.
⚠️ **No adoption number.** Designers started using it and devs began consuming it; that is all.

**Best for:** design systems nobody asked for, stakeholder buy-in, adoption strategy, Figma to code,
design-engineering handoff, systems that must ship in code and not just Figma.

---

## Smiles, via Rethink — Product Designer (2023)

Airline loyalty program. Focused on Design System: components, usage documentation, visual
standards. Usability validated through user research.

⚠️ Thin on numbers. Usable as a supporting mention, weak as a lead proof.

---

## His own products — shipped solo, end to end

The rare signal. A Product Designer who ships real tools is unusual, and for an Upwork client it
answers the question they are actually worried about: can this person deliver without supervision.

- **Design Audit** — Chrome extension that audits any website's design system: colors, typography,
  grid, spacing, and WCAG accessibility via axe-core, with HTML/SVG report export. **On the Chrome
  Web Store.** Built because auditing a large product by hand was unsustainable. Born from the Onfly
  audit.
- **Atomic Colors** — color scale and palette generator for design systems. **atomicolors.com**.
  Came out of the Onfly visual-concept work.
- **Spec Forge** — Figma plugin that preserves design token context in AI design-to-code workflows.
  **On Figma Community.**

**Best for:** accessibility jobs (Design Audit is a working demonstration), AI design-to-code jobs,
tooling and automation jobs, and any client worried about a freelancer needing hand-holding.

---

## Skills, stated plainly

Design tokens and token architecture · component libraries · design system governance and
documentation · Design Ops · accessibility auditing and WCAG remediation · Figma (including
plugin development) · design-to-code handoff · HTML/CSS · AI-assisted design and coding workflows ·
product design, flows and UI · stakeholder alignment and internal advocacy

---

## Things he does NOT have

State these honestly if a job needs them. Do not paper over them.

- **No adoption metrics** for Whirlpool or Esfera.
- **No user research career** in the classic sense. He runs stakeholder research (24 interviews at
  Onfly) and usability validation, but he is not a UX researcher.
- **No visual/brand identity work.** He is a systems and product designer, not a brand designer.
- **Not a front-end developer by trade.** He writes code, builds plugins and extensions, and reads
  a codebase fluently. He would not take a job as the implementing engineer on a product.
- **English is B2.** Fine for written work and meetings. Worth knowing before bidding on something
  that is mostly live client-facing facilitation.
