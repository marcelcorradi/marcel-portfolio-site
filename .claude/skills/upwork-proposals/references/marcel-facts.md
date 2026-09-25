# Marcel — verified facts for proposals

⚠️ **Read the published case before writing about it.** This file is a number index and a short
faithful summary. It is not the story. Every case below points at the published file, and that file
is the authority. This rule exists because an earlier version of this document carried a summarised
narrative that contradicted the published case, and two proposals were written on top of it before
Marcel caught it.

Rules that follow from that:

- Numbers here must match the published case. If they disagree, **the case wins** and this file is
  wrong and must be fixed.
- Anything not in the case and not here is **not established**. Ask Marcel. Do not reach for
  something plausible.
- The published cases are public. A client can read them. Nothing in a proposal may contradict them.

Sources: the published cases at `src/content/cases/`, plus facts Marcel confirmed directly.

## Positioning

**Product Designer specialized in Design Systems, with a Computer Science degree.**
13+ years in tech, 5+ as a Product Designer, 4+ specialized in Design Systems.
Based in Brazil. English B2. Portfolio: marcelcorradi.com

The differentiator: he owns the *technical* foundation of design systems (tokens, component
architecture, governance) and independently builds real products with AI coding tools. He is fluent
with developers, not just adjacent to them.

Career shape, useful when a client wonders about the business side: 11 years at one technology
company, starting as Business Analyst (2009), moving through Web Designer (2012), ending as
Business Manager (2013 to 2020). He moved fully into design in 2020. He has sat on the client side
of software projects, which is unusual for a designer.

---

## Onfly — Senior Product Designer, Design System (Sep 2025 to Jul 2026)

📄 `src/content/cases/onfly-design-system.md` — "A design system that keeps itself in sync"

Brazilian B2B corporate travel platform. **The biggest system by volume, and the adoption-without-
authority case.**

### Numbers

- **611 tokens, 143 components**
- **Adopted by 5 designers and around 40 developers**
- Research: **24 stakeholder interviews** (incl. CEO, CTO, product director) → **482 insights**,
  36% pains, 54% of those tracing to the design system. Top tag "standardization", 101 mentions.
- Audit vs 4 competitors: **102 type variants** (Travelperk: 17), **60 colours** (16 greys vs
  Travelperk's 7), **101 spacing values** (vs 44), 40 component types on web, 14 on app.
- Accessibility: home page at **26% WCAG 2.1 A/AA** — 49 violations, 17 passing criteria.
- Colour architecture: 6 primitive families → **118 semantic tokens** (46 background, 36 content,
  34 border). Spacing: 7 semantic steps across stack / inline / inset.
- Design agent conformance benchmark: **44% → 78% → 98%**.

### The story, short

The system was **not missing, it was orphaned.** A Vue/Quasar framework and a Figma library both
existed and had never been connected; the team that built the framework was dissolved. He did not
start by drawing components: he interviewed 24 stakeholders, built a dashboard of the insights, then
audited the product screen by screen. Tokens live as Figma Variables, export as JSON, and pass
through AI agents he built to become the SCSS the Quasar framework consumes.

Adoption ran without a dedicated team and without authority: whenever a designer delivered a screen
with new components, the squad fit in a step to update **at least one component not yet touched**.
Old and new coexisted (`onf-ds-button` shipped alongside the original) so nothing broke and nobody
was forced to migrate.

### 🔑 The failure he published, and it is usable

After the interviews he proposed the incremental approach. **The design lead chose a different
direction** (new visual concepts, redesigned screens) and Marcel could not make his case land,
despite having the interviews, the audit and the benchmark. The concept was eventually dropped and
the direction came back to his. **It cost the project two to three months.**

His own conclusion, published: *evidence does not decide anything on its own. Being right early is
worth very little if you cannot move the people who choose the direction.* What he did instead was
build for being wrong — semantic tokens pointing at primitives meant reversing the brand colour was
one reference to change, so the detour was survivable.

This is strong material for any job about stakeholder buy-in, and rare: few competitors can say it.

⚠️ Do not say "built from scratch". He rescued an orphaned system, which is what most clients have.

**Best for:** large-scale design system work, systems in disrepair, adoption without a dedicated
team or without authority, AI-augmented workflow, accessibility remediation, stakeholder buy-in.

---

## Whirlpool, via Môre — Senior Product Designer, Design System (May 2025 to Sep 2025)

📄 `src/content/cases/whirlpool-design-system.md` — "Seven brands, one system"

Global appliance brand. **The multi-brand case, and the "we cannot stop shipping" case.**

### Numbers — ⚠️ read this carefully, there are two different totals

- **Published headline: 1,139 tokens across 7 brands on web and 4 on mobile.** This is the number in
  the case frontmatter and the one a client will see. **Use this as the total.**
- **Global Design System = 653 token definitions**, the foundation *he created from scratch*, in
  three tiers: **213 primitives + 61 globals + 379 theme tokens** (337 semantic, 40 component,
  2 composite).
- 🔑 **All 7 brands carry the same 379 tokens, with the same names.** Only values change. This is the
  single most reusable argument he has for white-label, multi-tenant or theming work.
- Semantic-to-component ratio in GDS: **8:1**, deliberately correcting Polaris, which was inverted
  (of 321 tokens per brand theme, **252 component vs 69 semantic**).
- Web library: **55 components, 33 component sets, 240 variants.** Button is **one set with 99
  variants** instead of one button per brand. Product Card 52 variants, Product Container 24.
- Brands: web = Whirlpool, Whirlpool B2B, KitchenAid, Maytag, JennAir, Amana, Aether. Mobile =
  Whirlpool, KitchenAid, Maytag, JennAir.
- **Live in his second month**, then used and evolved for the remaining three, and after he left.

### The story, short

The libraries were already alive and in daily use. Nothing underneath them was shared. The
foundation had to arrive **as a layer, not a replacement**: tokens first, linkable, so an existing
library could point at them and adopt incrementally without any team stopping. He was one of three:
he did crafting, architecture, documentation and system rules; a design ops specialist handled
operations and, after seeing the deliveries, handed him autonomy on technical calls; a recently
joined head of product stayed close throughout.

Nobody needed convincing here — *"there was no case to make with interviews, audits, or an
inventory"*. That is the opposite of Esfera, and worth remembering when picking which case to use.

### ⚠️ Hard limits

- **Polaris was inherited, not built by him.** He corrected its token architecture, refined the
  structure, maintained and built components. Never claim it as his creation.
- **No adoption metric.** The case says it plainly: he does not have a reliable count and would
  rather say so than publish a number. Do not estimate one.
- **The two systems never converged.** Polaris stayed on its own tokens. He publishes this.
- He also publishes that five months is not long enough to know how the architecture aged.

**Best for:** multi-brand, white-label, theming, multi-platform, "we can't stop shipping while you
fix this", design systems for an existing product, enterprise scale.

---

## Esfera (Santander), via Rethink — Product Designer, Design System (Jun 2024 to May 2025)

📄 `src/content/cases/esfera-design-system.md` — "The design system I had to sell first"

Santander's loyalty marketplace. **The case about getting a design system funded, and about
shipping in code.**

### Numbers

- **224 tokens, 59 components, 443 variants**, delivered **in Figma and in code**
- Token layers: 130 global (raw) + 17 scaling primitives; semantic = 43 colour, 15 spacing,
  17 typography, 1 radius, 1 opacity. **The semantic layer holds no raw values.**
- Light and dark share the same 43 colour names; desktop and mobile share the same spacing,
  typography and scaling tokens.
- Library: 32 stable documented components, 1 in review, 8 in progress, 5 temp. 14 of 51 sets are
  private (underscore-prefixed) internal parts. Button 72 variants, Icon Button 60, Checkbox 32.
- ⚠️ 59/443 **includes WIP and workshop pages**. Stable-only is 46 components / 413 variants.
  Marcel's call: publish 59. He knows the composition if asked.

### The story, short — ⚠️ this is where the old file was wrong

**People there wanted a design system. What was missing was the proof.** Do not write "nobody had
asked for one" as though the idea was unwanted: the published case says nobody had *asked him to
build one* and he was not hired for it, but the appetite existed and had to be converted into a
funded decision.

How it actually happened, per Marcel (2026-07-31, and this is the part no case states):

1. He had worked at Esfera before, in 2021, building component libraries with no system underneath.
   He wanted to build the system there for three years.
2. He came back in June 2024 as a product designer, taking squad demands.
3. **A design lead had joined who liked his work and was already sold on the idea.** They were
   close. Marcel took the design system idea to him.
4. **In parallel, Marcel and another internal designer ran an inventory and early studies** —
   explicitly to sell it upward, not to start building.
5. **The lead carried the need to the superintendents**, and the company began looking at design
   system proposals.
6. **Because the lead wanted Marcel on the design system team, that influenced the decision to
   close with his consultancy.**

Then the method: pilot journeys (**onboarding and checkout, chosen by the business**), redesigned
properly and approved by stakeholders **as product work, not as a system proposal**, and only then
turned into tokens and components. Every component exists because an approved flow needed it. This
removes the adoption problem (the first consumers are the screens it came from) and the
prioritisation problem (the flow defines the scope).

A **developer sat inside the design system team**. Design handed over, the dev built, the dev
presented back for design validation. That loop ran for tokens as well as components. Adoption
still took work, and the work was **training**: they trained the designers, the dev walked the other
devs through consuming it.

### ⚠️ Rules for this case

- **The networking part is true but does not go in writing.** "The lead liked my work" is
  unverifiable by a stranger and reads as luck, not method. What *is* usable: find the sponsor who
  already wants it and arm them with an inventory and studies to take upward. Keep the relationship
  detail for a call, where it works.
- **Do not describe Esfera as "regulated".** That belongs to other Rethink clients.
- **No adoption number.** Designers started using it, devs began consuming it. That is all.
- The system was retired when Santander standardised Esfera onto the bank's own system. Marcel
  publishes this; it does not change what the approach demonstrated.

**Best for:** getting a design system funded, stakeholder buy-in, adoption strategy, Figma to code,
design-engineering handoff, systems that must ship in code and not just Figma, "there are libraries
but no system".

---

## Smiles, via Rethink — Product Designer (2023)

Airline loyalty program. Design system work: components, usage documentation, visual standards.
Usability validated through user research.

⚠️ No published case, thin on numbers. Supporting mention only, never a lead proof.

---

## His own products — shipped solo, end to end

The rare signal. A Product Designer who ships real tools is unusual, and for an Upwork client it
answers what they are actually worried about: can this person deliver without supervision.

⚠️ **All four design tools are free now (2026-09).** Design Audit and Atomic Colors dropped their
paid plans, logins and backends; Portfolio Kit was built to sell and is now free under MIT; Spec
Forge was always free. Marcel's reason, in his words: he changed how he puts his tools into the
world, would rather show their value by giving them away, and lets anyone who wants support them
with a donation. They are all listed at **marcelcorradi.com/tools**. Never describe any of them as
paid or subscription-based. Facts: `content-drafts/free-tools.md`.

### Design Audit — 📄 `src/content/cases/design-audit.md`

Chrome extension, **live on the Chrome Web Store**. Reads a site's visual language while you browse:
three seconds after each page settles it extracts and deduplicates. Six audits: colour (12 CSS
properties, normalised to hex, sorted by hue), spacing (11 properties, rem/em converted, counted by
frequency), typography (34 system fonts known, so it distinguishes chosen from fallback; flags sizes
within 2px of each other), icons (three passes: font ligature, inline SVG, image; recognises 9
libraries), grid/layout, and **WCAG A/AA via axe-core**. Exports SVG per audit, built to drop into
Figma.

🔑 **Its own UI runs on 469 tokens across 16 files with a 17-component library.** Vanilla JS, no
framework, no build step, deliberately. Born from the Onfly audit. **Free since v2.4.0
(2026-09-24):** he had built a paid layer (email login with one-time codes, an entitlement check
on the accessibility report), then removed it and the whole backend. No account, no page limit,
and the extension makes no network calls. Optional support: a "Support me" link showing his PayPal
email.

### Atomic Colors — 📄 `src/content/cases/atomic-colors.md`

**Free web app at atomicolors.com** (since 2026-09-21). One hex in, 11 shades out plus semantic colours (error,
warning, success, info, discovery, neutral), each with its reasoning attached. **Simulates colour
blindness before showing you the palette** and fixes semantics that are not distinguishable.
Exports CSS, SCSS, JS, JSON, and Figma-variables JSON. English and Portuguese. Built first in
Figma Make, now entirely in Claude Code with its own repo, deployed on Cloudflare: **Figma Make
does nothing for it anymore.** He built a paid layer (subscription, login codes, payments), then
took it out; no account needed. ⚠️ **Free but NOT open source**, even though its repo README says
MIT. Adds pages that explain the method and one page per named CSS colour (137).

### Spec Forge — 📄 `src/content/cases/spec-forge.md`

**Published on the Figma Community.** Figma plugin that extracts a component's full tree — layers,
properties, variants, nested instances — with **the design system's own token names**, as Markdown
for a coding agent. The hard part was deciding what to leave out: every surviving layer carries the
reason it survived. Runs entirely inside Figma with no network access. TypeScript + Preact on
create-figma-plugin. Console script to published plugin **in a day**.

🔑 The build method is itself proposal material: he wrote the rules first (use that library only,
never hardcode a colour or spacing when a token exists, never rebuild an existing control, stop and
ask instead of inventing a workaround), then the output shape, before any code. Same discipline he
enforces in a design system, applied to the thing writing the code.

### Portfolio Kit — 📄 `src/content/cases/portfolio-kit.md`

**Free under MIT, on GitHub** (github.com/marcelcorradi/portfolio-kit, release 1.1.0). The
foundation of marcelcorradi.com plus the Claude Code skills that built it, generalised: a `/setup`
interview (technical comfort first, brand colour asked as an intention and turned into tokens),
skills that design the pages and write cases one section at a time without inventing facts, and an
`/update` that sorts every file into kit / owner / mixed so updates never erase the owner's work.
He built it to help other people build their portfolios the way he built his. Running `/setup` as a
fictional user found four bugs code review had missed. Built to sell, never launched as paid, now
free. **Never mention a price or a marketplace.**

### Radar do Scoop — 📄 `src/content/cases/radar-do-scoop.md`

**Live Brazilian consumer site, radardoscoop.com**, in Portuguese. Checks supplement prices on
Mercado Livre daily and keeps the history, so it can say whether a price is really low and catch
fake discounts (a "was" price above anything seen, or a "now" price no better than the average).
Compares only like with like, per 100 g, and declines to name a winner under 3%. Started as a
Telegram deals bot (2026-06), site a month later: Node bot, Next.js, Supabase, Vercel, all built in
Claude Code. Colour tokens get a second "-text" variant so the price badges pass WCAG AA. Affiliate
links (disclosed on the site) and an optional Pix donation. ⚠️ **No revenue, affiliate, B2B or
TikTok numbers.** Not a design tool, so it is not on /tools.

**Best for:** accessibility jobs (Design Audit is a working demonstration), AI design-to-code,
tooling and automation, colour systems, and any client worried about a freelancer needing
hand-holding.

---

## Skills, stated plainly

Design tokens and token architecture · component libraries · design system governance and
documentation · Design Ops · accessibility auditing and WCAG remediation · Figma (including plugin
development) · design-to-code handoff · HTML/CSS · AI-assisted design and coding workflows ·
product design, flows and UI · stakeholder alignment and internal advocacy

---

## Things he does NOT have

State these honestly if a job needs them. Do not paper over them.

- **No adoption metrics** for Whirlpool or Esfera.
- **No user research career** in the classic sense. He runs stakeholder research (24 interviews at
  Onfly) and usability validation, but he is not a UX researcher.
- **No visual/brand identity work.** He is a systems and product designer, not a brand designer.
- **Not a front-end developer by trade.** He writes code, builds plugins and extensions, and reads a
  codebase fluently. He would not take a job as the implementing engineer on a product.
- **English is B2.** Fine for written work and meetings. Worth knowing before bidding on something
  that is mostly live client-facing facilitation.