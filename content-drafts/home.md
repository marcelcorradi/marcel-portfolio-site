# Home — Content Draft

Working draft of the Home page copy. English. Positioning: lead with Design Systems, show he also operates as a full Product Designer; CS + builds-with-AI tempers it. No dashes joining clauses.

Status per section: ✅ approved · ✍️ drafting · ⬜ not started

---

## 1. Hook / Hero ✅

**Headline:** Marcel Corradi
**Subhead:** Product Designer specializing in Design Systems.
**Body:**
I own design systems end to end, from design tokens and component architecture to governance. I also build the tools that ship them, with code and AI.

**Image note:** hero likely wants a professional photo of Marcel (course recommends it). Marcel doesn't have one yet — to revisit at design time; design a strong hero that works without a photo, add later.

---

## 2. Featured work ✅

**Section title:** Selected work
Structure: two groups that tell the "Design Systems at scale AND builds products with AI" story. Each card links to its full case. Tags = skill + attribute mix. Each card wants a thumbnail/cover (Marcel to provide; product screenshots work for the AI ones).

**Card interaction:** the whole card is clickable (large hit area, hover feedback) with a discreet **"View case →"** label for affordance. Links to `/cases/:slug`.

### Group A — Design Systems

**Onfly** · Senior Product Designer
A design system built end to end and adopted by 5 designers and around 40 developers. 611 tokens, 143 components, and AI agents that keep design and code in sync.
Tags: `Design Tokens` `Design Ops` `Accessibility` `AI` `B2B`

**Whirlpool** · via Môre
Technical and operational architecture for the design system of a global appliance brand. 653 tokens and a 397-component library across multiple platforms.
Tags: `Design Tokens` `Governance` `Multi-platform` `Enterprise`

**Esfera** · via Rethink
A new design system built from component design to adoption, in a highly regulated loyalty and e-commerce context. 59 components, 443 variants, 224 tokens.
Tags: `Design System` `E-commerce` `Regulated`

### Group B — Built with AI

**Design Audit** · Chrome Web Store
A browser extension that audits any website's design: color, typography, grid, spacing, and WCAG accessibility. Conceived, designed, and built end to end.
Tags: `Product` `Accessibility` `AI` `Published`

**Atomic Colors** · atomicolors.com
A color scale and palette generator for interfaces and design systems. Self-built, from design to code.
Tags: `Product` `Design Systems` `AI`

**Spec Forge** · Figma Community
A Figma plugin that preserves design token context in AI-assisted design-to-code workflows.
Tags: `Plugin` `Design Tokens` `AI`

**Image note:** each card wants a thumbnail/cover. Marcel to provide; product screenshots work for Design Audit / Atomic Colors / Spec Forge.

## 3. What I do / expertise ✅

**Section title:** What I do
Order: Design Systems (focus) → Product Design (full spectrum) → the two technical differentiators. No progress bars (course condemns them). Each area can get a Lucide icon at design time.

**Design Systems**
Design tokens, component architecture, and governance. I build systems teams actually adopt, from primitives to Design Ops.

**Product Design**
User flows, prototypes, and interface design. End to end UX/UI, grounded in research and usability.

**Design Engineering**
A Computer Science background that lets me speak the developers' language, own the design-to-code handoff, and prototype in real code.

**AI applied to design**
I build tools, agents, and automations that accelerate design work, without waiting on engineering.

## 4. About (short) + contact ✅

**Short value proposition (Home), with a CTA to the full /about:**
I'm Marcel, a Product Designer specialized in Design Systems, with 13+ years in tech and a Computer Science degree. I build the technical foundation that lets design and engineering move fast together.
CTA: `More about me →`

**Contact:**
Let's talk.
`Email (marcelcorradi@hotmail.com)` · `LinkedIn (linkedin.com/in/marcel-c-84b26931)`

- Email: marcelcorradi@hotmail.com
- LinkedIn: linkedin.com/in/marcel-c-84b26931
- GitHub: intentionally omitted (design/DS profile, not a code showcase)

---

## Home content: ALL SECTIONS APPROVED ✅ and BUILT ✅ (2026-07-24)

The Home is designed and live at https://marcelcorradi.github.io/marcel-portfolio-site/ .
Components in `src/components/`: site-nav, hero-spec, featured-work (+ case-card, project-logo),
what-i-do, contact-section, site-footer.

Deferred: the full **/about** page content will be written later, when we build the About page itself (not part of the Home).

Still needed to finish the portfolio: real case content (Markdown), real project logos, Marcel's hero photo, the /about page, and the individual case-page design.
