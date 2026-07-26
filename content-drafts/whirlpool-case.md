# Whirlpool case study — working draft

Draft in progress. Written section by section with Marcel's validation (portfolio-content skill).
Final output goes to `src/content/cases/whirlpool-design-system.md`.

**Status:** Section 1 drafted, awaiting Marcel's validation. Blocked on two open questions (below).

**Decision (2026-07-26):** the token numbers come from the **exported JSON files**, not the CV.
Marcel: *"usa o que os arquivos aqui do json mostram... eles vao trazer os numeros mais corretos,
dps atualizamos no CV"*. The CV's "653 Design Tokens" could NOT be reproduced from the artefacts by
any counting method and is considered unverified. **The CV needs updating with the numbers below.**

**Images:** same approach as Onfly. Visuals get collected in Phase 2 when the page is built.
Each section records which visual it calls for.

**Text first, visuals later** (decided with the orchestrator): `CasePage.tsx` hardcodes metrics,
figures, and logos to the `onfly-design-system` slug. This case ships as prose; the CasePage
refactor that lets it carry metrics and figures is a separate pass.

---

## ⚠️ OPEN QUESTIONS — blocking the hook

1. ~~**State at September 2025.**~~ ✅ **RESOLVED 2026-07-26.** Marcel: *"sim, estava linkado"*.
   The GDS foundation **was linked to the web library and in use** by September. Hook uses **Variant A**.
   ⚠️ Precision note: Marcel earlier said the GDS *"só se linkou com uma library web"* (only linked to
   ONE web library). So the copy says "the web library" in the singular and does NOT imply the other
   existing libraries were consuming the foundation yet. Do not upgrade this claim.

2. ~~**Component counts.**~~ ✅ **RESOLVED 2026-07-26** via `analysis-gds-components.json` and
   `analysis-polaris-components.json` (Figma scans Marcel ran). See the verified section below.
   The CV's "397 components / 531 variants" is **NOT reproducible** and must not ship.

3. **NEW — how to report the Polaris icon count.** 280 of Polaris's 342 "components" are icons on a
   single Icons page. Reporting "342 components" would be technically true and misleading. See the
   recommendation in the component section below. Needs Marcel's call.

---

## Facts Marcel confirmed (not in the CV — do not lose these)

**The engagement:** joined via **Môre** (consultancy), May 2025 to Sep 2025, São Paulo.
⚠️ **FIVE MONTHS. Not three.** Marcel corrected this explicitly (2026-07-26): *"eu fiquei 5 meses nessa
empresa, nao 3"*. An earlier draft said "three months into a contract" as my own arithmetic; it was
wrong and is gone. Never write any duration other than five months.
Client is Whirlpool, the multinational appliance company. Marcel's focus: technical and operational
architecture of the design system.

**The starting point — living libraries, not an orphaned system.** This is the opposite of Onfly.
Some Figma libraries already existed and were **actively maintained and in use**. The job was NOT to
replace them. The idea was to build a global design system *underneath* them, starting with the token
foundation, link it to the existing libraries, and update them incrementally. Marcel's words:
*"tinham algumas bibliotecas no figma que eram mantidas já... a ideia era prover inicialmente a
fundação de tokens pra esses outros arquivos. Meio que linkar com essas bibliotecas existentes e ir
atualizando elas."*

→ Narrative value: you cannot stop-the-world on a global business, so the foundation has to be
swapped in under an inhabited house. Harder than greenfield, and senior reviewers recognize it.

**Two dimensions of variation: brand × platform.**
- Multi-platform = **web and mobile**.
- Multi-brand = Whirlpool has **many brands**.

**The two systems (critical distinction — do not blur these):**

| | GDS Foundations (web) | Polaris (mobile app) |
|---|---|---|
| Origin | **Marcel created it from scratch** | **Pre-existing.** Marcel inherited it |
| His work | Full token architecture, documentation, DS rules, plus the architecture meetings to sell the approach to the teams. Also built the web library with some components. | Fixed problems in the token architecture, refined the structure, maintained components, and created new ones |
| Linked? | Linked to **one** web library | **Not linked to GDS.** Stood apart; future plan was to unify it with GDS tokens |

Marcel: *"polaris ja existia, eu só ajustei e melhorei a estrutura de tokens, fui corrigindo alguns
problemas na arquitetura e refinando. e dava manutenção nos componentes também e criava novos
componentes lá."* And: *"até setembro eu evolui essa do polaris conforme falei, criei a GDS do zero
e a de web também já com alguns componentes. E ai o GDS teve toda parte de definição da arquitetura,
reuniões com os times pra levar pra eles minhas ideias de como arquitetar isso e tals"*

→ Two different postures in the same five months: founding a system AND entering an existing one
without breaking it. That combination is exactly what seniority looks like. **Do not claim Polaris
as his own creation.**

**The team:**
- **Marcel:** crafting, architecture definition, documentation, DS rules. Over time he owned *all*
  the technical decisions, then aligned/briefed the specialist on them.
- **A specialist:** more on Ops, initially validating some things with Marcel, later receiving his
  decisions. (Progression worth stating: not the nominal owner, but became the de facto technical owner.)
- **A product person:** close to the team, discussing how the architecture would be built.

Marcel: *"tinha eu que ficava mais na parte de crafting e definição da arquitetura, documentação e
regras do DS e tinha o especialista que ficava mais em ops e só validando algumas coisas comigo, mas
aí com o tempo essa parte técnica eu que tomava todas as decisões, e só repassava e alinhava com ele.
Tinha uma cara de produto também que tava muito próximo da gente conversando pra definir questões de
arquitetura como tudo isso seria criado e tal"*

**NDA:** no restriction raised. Whirlpool and Môre are both already named in the CV and on the site cards.

---

## ✅ VERIFIED token numbers (extracted from the JSON exports, 2026-07-26)

Source of truth: `assets/tokens-whirpool/` (note: folder name is misspelled "whirpool" on disk).
Counting method: recursive walk of each `*.tokens.json`, counting leaf nodes that carry a `$value`.
Both manifests were read to confirm collection/mode structure.

### GDS Foundations (web) — created by Marcel

| Layer | Count | Notes |
|---|---|---|
| **Primitives** | **213** | Organized **by brand**: aether 45, amana 33, jennair 24, kitchenaid 27, maytag 29, whirlpool-default 27, whirlpool-b2b 28 |
| **Globals** | **61** | Brand-agnostic. 23 color + 38 dimension. Groups: border, color, scale |
| **Theme contract** | **190 × 7 brands** | Groups: **148 semantics, 40 components, 2 composite** |
| **Unique definitions** | **464** | 213 + 61 + 190 |
| **Rendered across 7 brands** | **1,604** | 213 + 61 + (190 × 7) |

**7 brands:** Aether, Amana, JennAir, KitchenAid, Maytag, Whirlpool Default, Whirlpool B2B.

🔑 **THE KEY FINDING — the strongest fact in this case.** All **7 themes share exactly ONE key shape
of 190 tokens**. Verified by comparing frozensets of token paths across all seven theme files: one
distinct shape, not seven. That is not a coincidence, it is a **contract**. Any brand can be swapped
in because every theme implements the same interface. This is the sentence that makes a design systems
lead sit up, and it is provable by opening the files.

### Polaris (mobile app) — pre-existing, refined by Marcel

| Layer | Count | Notes |
|---|---|---|
| **Primitives** | **114** | Groups: Color, Font, Spacing, border |
| **Theme contract** | **318 × 4 brands** | Groups: **249 Components, 69 Semantics** |
| **Styles (per brand)** | **51** | typography-oriented |
| **Published styles** | **124** | text 83, color 31, effect 8, grid 2 |
| **Unique definitions** | **483** | 114 + 318 + 51 |
| **Rendered across 4 brands** | **1,714** | all files summed |

**4 brands:** Whirlpool, KitchenAid, Maytag, JennAir (all overlap with GDS).

Also verified: all **4 Polaris themes share ONE key shape of 318 tokens**.

### Combined

**947 unique token definitions across 11 brand configurations** (GDS 464 + Polaris 483).
Far more defensible AND more impressive than the CV's unverified "653".

### 🔑 The architectural contrast (excellent narrative material)

- **GDS (Marcel designed it):** 148 semantic vs 40 component tokens. Semantics dominate. **Healthy pyramid.**
- **Polaris (Marcel inherited it):** 249 component vs 69 semantic. **Inverted.** Component-first.

Mobile went component-first, web went semantics-first. This is a real architectural difference and it
explains *concretely* why unifying the two was non-trivial. Much better than "they weren't linked yet."

⚠️ **Important framing:** the inverted Polaris ratio is the architecture Marcel **found and was
correcting**, not one he designed. The GDS he founded came out with the healthy ratio. Comparing the
two demonstrates his architectural judgment without him having to assert that he has judgment.

---

## ✅ VERIFIED component numbers (from Marcel's Figma scans, 2026-07-26)

Sources: `assets/tokens-whirpool/analysis-gds-components.json` and `analysis-polaris-components.json`.
Both report `scope: "all"`, so these are full-file scans, not samples.

### GDS Foundations (web) — Marcel built this

| Metric | Value |
|---|---|
| Pages scanned | **29** (12 empty: covers, dividers, and section placeholders) |
| Standalone components | **55** |
| Component sets | **33** |
| **Total variants** | **240** |

Pages with real content (16): Component Doc, Breadcrumbs, **Buttons (99 variants in 1 set)**,
Checkbox (12), Filter Controls (3), Input (6), Link Button (8), Radio Button (8), Skeleton (8),
Switch (9), Toggle Icon (5), Footer (1), Header (2), PLP Filter (1),
**Product Card (7 comp + 13 sets + 52 variants)**, **Product Container (6 comp + 5 sets + 24
variants)**, Style Guide (7 comp).

Notable: **Button alone carries 99 variants** in a single set. That is the brand × state × size
matrix collapsing into one component instead of one component per brand. Concrete proof of the
same contract logic as the tokens.

Empty pages reveal the **planned Atomic Design structure** that was still being filled in:
"❖ Base Components (Internal only)", "❖ Simple components (Atoms)", "❖ Compositions (Molecules)",
"❖ Complex Components (Organisms)", "❖ Work in progress", "✅ Getting Started", "↳ Avatars", "↳ Icons".
→ Honest read: the scaffolding was defined and being populated. Supports Variant B of the hook.

**Issues found in GDS: 30 total** (25 naming without a `/` separator, 3 single-variant sets, 2 duplicates).

### Polaris (mobile app) — pre-existing, Marcel refined

| Metric | Value |
|---|---|
| Pages scanned | **43** (10 empty) |
| Total "components" | **342** |
| ⚠️ of which **icons** | **280** (single Icons page) |
| **Real components (excl. icons)** | **62** |
| Component sets | **38** |
| **Total variants** | **291** |

Notable Polaris pages: **Buttons (1 comp + 2 sets + 101 variants)**, Graphic assets (1 + 4 + 75),
Wheel Pickers, Bottom sheet (7), Cards (7), Carousel & Banners, Progress Bar (8), Segmented Control,
Toggle, Tracking Status, Cycle Status Card, Appliance Option, Mode Button.
→ The appliance-specific components (Cycle Status, Tracking Status, Appliance Option, Mode Button,
Wheel Pickers) are worth a mention: this is a **connected-appliance app**, not a generic e-commerce UI.

⚠️ Also present: a page literally named **"🏭 Factory (DO NOT USE 🔴)"** — a quarantined legacy area.
Good, honest detail about inheriting a system, if Marcel is comfortable including it.

**Issues found in Polaris: 340 total** (334 naming, 3 single-variant, 2 duplicates, 1 missing property).

### 🚫 The issue counts are NOT case material

The scans also reported issue counts (GDS 30, Polaris 340). **These are out of the case entirely.**
Marcel ran these scans in July 2026 only to produce component counts for this draft; they were never
part of the engagement. Using linter output from ten months after he left as evidence about the work
would not survive an interview question. See the hard rule in Section 3.

### ⚠️ Recommendation on reporting component counts

Do **not** write "342 components" for Polaris. 280 are icons, and any design systems lead reading a
portfolio will ask. Recommended phrasing:

- **GDS:** "55 components and 33 component sets, 240 variants" — or lead with the Button's 99 variants.
- **Polaris:** "62 components and 38 sets, 291 variants, plus a 280-icon library."

Combined, defensible: **117 components, 71 component sets, 531 variants, plus 280 icons.**

🔎 **Interesting:** verified variants total **240 + 291 = 531**, which matches the CV's "531 variants"
**exactly**. So the CV's variant number was right all along; it was the "397 components" that was
wrong (real: 117 components, or 397 if you count 342 Polaris + 55 GDS... which is exactly 397).
→ **The CV's 397 = 342 + 55, i.e. it counted the 280 icons as components.** Mystery solved. Use 117.

---

## Proposed section arc (validated with orchestrator, may compress)

1. **In short** — hook, result first. ← drafted below
2. **A global brand, many brands, two platforms** — context: the constraint of living libraries + consultancy engagement.
3. **What was already there** — discovery. GDS greenfield vs Polaris inherited; what he found in Polaris's architecture.
4. **The token architecture** — the craft, and the core of the case. Three tiers, the 190-token contract, brand × platform.
5. **Selling the architecture** — the meetings, taking his ideas to the teams. This is the Design Ops / influence-without-authority section.
6. **The component library** — GDS web library + Polaris maintenance. (Blocked on component counts.)
7. **Results and what I would do differently** — quantified + self-reflection. Candidate reflection: Polaris and GDS never unified; what he'd sequence differently.

Sections without real substance get cut, not padded.

---

## Section 1 — "In short" ✅ CLOSED ON THE FACTS (awaiting Marcel's read of the prose)

**Variant A is the true one.** Marcel confirmed: *"sim, estava linkado"* + *"e em uso"*.
Linked to the web library AND in use by September 2025. Variant B is dead, kept below only as a record.

### FINAL TEXT

> ## In short
>
> Whirlpool sells appliances under a portfolio of brands, and each of those brands had its own
> interfaces on web and on mobile. Some of them already had Figma libraries that teams were actively
> using. The problem was not a missing library. It was that nothing underneath them was shared.
>
> I joined through Môre in May 2025, into a queue of component work and the job of defining how the
> design system should be architected. The goal was not to replace what was already in use. It was to
> build a global foundation beneath it: a token layer the existing libraries could link to and adopt
> incrementally, without any team having to stop and rebuild.
>
> I created that foundation, the Global Design System, from scratch. It resolves two dimensions of
> variation at once, brand and platform, through a three-tier architecture: 213 primitives, 61
> brand-agnostic globals, and a theme layer of 190 tokens. That theme layer is the part I care about
> most. Every one of the 7 brands has the same 190 tokens, with the same names. Switching brand changes
> the values and never the structure, so a brand is a configuration of the system rather than a fork of it.
>
> The same logic reached the components. The web library's button is one component set carrying 99
> variants, instead of one button per brand.
>
> In parallel I took over Polaris, the design system behind their mobile app. That one already
> existed, so the work was different: I corrected problems in its token architecture, refined the
> structure, maintained its components, and built new ones.
>
> The foundation went live in my second month and was in use from then on, linked to the web library
> and evolving as teams built against it.

### Revisions applied 2026-07-26

1. **"contract" language removed.** Marcel did not recognize the word (*"o que é essa porra de
   contrato?"*) — it was my import from software engineering, not his vocabulary. Replaced with the
   literal version he chose: **"the same 190 tokens in every brand"**. See the standing rule below.
2. **Opening corrected** to reflect that he arrived into crafting demand *and* the architecture
   definition, not architecture alone.
3. **Closing rewritten.** It used to say "By September the foundation was linked and in use", which
   undersold the timeline. It actually **went live in his second month** and was in use, fed, and evolved
   from then on, continuing after he left.

🚫 **STANDING RULE — never use "contract" in this case's copy.** Marcel's own framing is literal: every
brand has the same 190 tokens with the same names; the theme changes values, not structure. Internal notes
in this draft still use the word as shorthand; **the published copy must not.**

**Word count:** ~250. Onfly's "In short" is ~230. Consistent.

### Variant B (DEAD — kept as a record only)

> By September the foundation was built, documented, and linked to its first web library, with the
> rollout to the remaining libraries mapped out for the teams who would continue it.

---

## Section 2 — "The constraint that shaped everything" (DRAFT, awaiting validation)

Section 1 approved by Marcel ("ok", 2026-07-26). This is the context section: its job is to establish
**why this was hard** before the case shows the solution.

### DRAFT TEXT

> ## The constraint that shaped everything
>
> A global appliance company does not have one interface. It has one per brand and per platform, and all
> of them are shipping while you work.
>
> On the web side, the brands I was building for were Whirlpool, Whirlpool B2B, KitchenAid, Maytag,
> JennAir, Amana, and Aether. Seven. On mobile, the app covered Whirlpool, KitchenAid, Maytag, and
> JennAir. The mobile app is not a storefront either. It talks to connected appliances, so it carries
> components a shopping interface never needs: cycle status, tracking, appliance selection, mode
> buttons, wheel pickers.
>
> That is two dimensions of variation at once. A component has to be right for the brand and right for
> the platform, and those two questions have different answers.
>
> The usual way to solve it is the wrong way. You copy the library, retheme it per brand, and now you
> maintain seven of everything. Every fix has to be applied seven times, and within a quarter the seven
> have drifted apart. That is not a design system. It is seven design systems with a shared origin story.
>
> The second constraint was harder, and it is the one that decided the approach. The Figma libraries
> already existed and teams were using them every day. I was not walking into a blank file. Anything I
> built had to be adoptable without asking a single team to stop and rebuild, because no global business
> is going to pause its roadmap so a foundation can be installed underneath it.
>
> So the foundation had to arrive as a layer, not as a replacement. Tokens first, linkable, so an
> existing library could point at them and inherit the system without being rewritten. Adoption becomes
> incremental instead of a migration.
>
> I was one of three people on it. I did the crafting, the architecture, the documentation, and the
> system rules. A design ops specialist handled operations, and early on he reviewed my decisions to see
> how I was working. Once he had seen the deliveries, he told me he would give me autonomy on the
> technical calls because he trusted the work, and from then on those decisions were mine to make and his
> to be kept aligned with. A head of product who had recently joined stayed close throughout, working
> through how the whole thing should be built. That shape mattered, because an architecture nobody else
> understands is not an architecture. It is a preference.

### Writing notes

- **7 brands named explicitly.** "Seven brands" is abstract; naming KitchenAid and Maytag lets the
  reader recognize the scale without adjectives.
- ✏️ **Corrected 2026-07-26:** the third person is a **head of product who had recently joined**, not a
  generic "product counterpart". Marcel: *"o head de produtos que tinha entrado"*. The distinction
  matters and drives Section 5's dynamic.
- **The "usual way is the wrong way" paragraph is the load-bearing one.** It establishes the
  architectural criterion BEFORE the solution appears, so when Section 4 presents the 190-token
  contract the reader already knows which problem it avoids. Without it, the contract reads as a
  technical detail instead of a decision.
- **Connected-appliance components** (cycle status, tracking, appliance option, mode button, wheel
  pickers) come from the verified Polaris scan. Real domain evidence, not invented.
- **Closes on the team** because "an architecture nobody else understands is not an architecture, it is
  a preference" sets up Section 5 (the architecture meetings) and frames Marcel's progression to
  technical owner without it sounding like self-promotion.
- ✏️ **"per market" REMOVED 2026-07-26** at Marcel's instruction (*"tira per market"*). Do not reintroduce
  it, even as an industry-level observation. The opening now says "per brand and per platform" only.
- 🔑 **The autonomy was GRANTED, not accumulated.** Marcel (2026-07-26): *"com tempo ele foi confiando no
  meu trabalho e disse que ia me dar autonomia pra decisões pq confiava em mim. No inicio ele validava só
  pra ver como eu tava fazendo, depois que viu minhas entregas ele deixou na minha mão."*
  v1 implied Marcel grew into the authority as he accumulated context. Wrong and less generous. The
  specialist **explicitly handed him autonomy after seeing the deliveries.** This is third-party evidence
  of trust rather than self-assessment, which is worth more in a portfolio precisely because it does not
  come from Marcel.
  ⚠️ **This invalidates Section 5's old closing line "nobody handed me that."** Someone did, deliberately.
  Fixed in Section 5.
- No dashes joining clauses. Checked.

**Visual this section calls for:** the 7 brands side by side, the same component rendered in each theme.
This single image proves the case's entire thesis at once. **Probably the most valuable figure in the
whole case** if Marcel can export it from Figma.

---

## Section 3 — "What I found" (DRAFT v2, awaiting validation)

Marcel said "pode seguir" (2026-07-26) and asked for the consolidated image list at the end.
Section 2 not explicitly line-edited by him; treat as provisionally accepted.

### 🚫 HARD RULE — the component/issue scans are NOT case material

Marcel ran `analysis-gds-components.json` and `analysis-polaris-components.json` **in July 2026, purely
to give me component counts for this draft.** They are instrumentation, not part of the engagement.

Therefore, **never** write that Marcel scanned, linted, or audited these files, and **never** use the
scan-derived defect findings as case content:
- ❌ the 334 Polaris naming inconsistencies — OUT
- ❌ the 30 GDS issues — OUT
- ❌ any "I ran a scan" phrasing — OUT
- ❌ the GDS-30-vs-Polaris-340 issue contrast (deleted from the verified section too) — OUT

✅ Still valid from those files, because they are just counts of what exists: component totals,
component sets, variants, the 99-variant button, the 280 icons, page names.

An earlier v1 of this section built a whole paragraph on the naming scan. Deleted. The token ratio
(249 component vs 69 semantic) stays, because that comes from the **token exports**, which are the
real artefact of Marcel's work, not from a linter run after the fact.

### 🔑 How Marcel actually entered the engagement (v3 correction, 2026-07-26)

v1 and v2 opened with "before proposing an architecture I needed to know what the existing systems were
made of", which framed this like Onfly: diagnosis first, then build. **That is wrong.** Marcel:

> *"cara eu cheguei la com mta demanda tecnica de crafting, então ja cheguei trabalhando em componentes e
> tal. Ao mesmo tempo eu fui analisando as estruturas e entendendo o que ja tinha e tudo mais. E também
> comecei a participar das reuniões pra definir esse GDS. Aí fiz análises rapidas, não precisou fazer
> entrevista, audit e nem inventário. Foi mais entender o contexto pra saber definir a arquitetura. Eu só
> passei pelos arquivos e estudei tudo que eles tinham"*

So: **arrived into technical crafting demand**, analysed the structures **in parallel** with delivering,
joined the GDS definition meetings, and did **quick analysis only**. Explicitly **no interviews, no audit,
no inventory** — unlike Onfly.

→ **Why this matters:** a reader coming from the Onfly case will notice the missing research phase. The
copy must **justify the absence** rather than leave the gap open. The honest reason is that nobody needed
convincing a foundation was worth building, so there was no case to make. Marcel did not skip a step; the
context called for something different.

⚠️ Do not reintroduce any framing where Marcel diagnoses first and builds second.

### DRAFT TEXT (v3)

> ## What I found
>
> I arrived into technical demand. There was crafting waiting for me from the start, so I was working on
> components in my first weeks rather than producing a diagnosis.
>
> The analysis happened alongside it. I went through their files and studied what was already there, layer
> by layer, while I was delivering. I also started sitting in the meetings where the global system was being
> defined. That was the right sequence for this engagement: nobody needed convincing that a foundation was
> worth building, so there was no case to make with interviews, audits, or an inventory. What I needed was
> enough context to define an architecture correctly, and quick analysis of the existing structures gave me
> that.
>
> Polaris, the mobile system, was the more revealing of the two. It had a real token structure already:
> primitives, a theme layer, published styles, four brands. Someone had done serious work there. But the
> proportions were upside down. Of the 318 tokens in each brand theme, 249 were component tokens and
> only 69 were semantic.
>
> That ratio is the whole diagnosis. Semantic tokens are the vocabulary a system thinks in: surface,
> border, text, the meanings a designer reaches for. Component tokens are the specific decisions that
> sit on top of them. When components outnumber semantics by nearly four to one, it means the system
> grew by answering one component at a time. Each new component brought its own tokens rather than
> finding what it needed already defined. It works, and it keeps working, right up until you need two
> systems to agree on anything. Then there is no shared vocabulary to agree in.
>
> None of this was carelessness. It is what a system looks like when it has been maintained under
> delivery pressure without anyone being given the time to own its foundation. Every one of those 249
> component tokens solved a real problem the day it was added.
>
> The web side was the opposite situation. There were maintained libraries in use, but no shared
> foundation beneath them at all. Nothing to correct, and nothing to build on either.
>
> So the two halves needed different work, and I did both at once. Polaris needed correcting from the
> inside, without breaking an app in production. The web needed a foundation that did not exist yet.
> Bringing the two together was an expectation for later rather than a plan with a date, but it still had
> to be possible, so the new foundation had to be built as something Polaris could eventually migrate onto.

### Writing notes

- The inverted Polaris ratio carries the diagnosis, but the draft **explains what it means** rather than
  just citing it. "249 vs 69" says nothing to a non-DS reader; "the system grew by answering one
  component at a time" does.
- **Deliberate framing: not carelessness.** Two reasons. It is true, and a case that trashes someone
  else's work makes the reader uncomfortable rather than impressed. The "every one of those 249 solved a
  real problem" line also mirrors Onfly's existing "none of this was anyone's fault", which keeps the
  voice consistent across the two cases.
- The last paragraph sets up Section 4: the new foundation had to be **the thing Polaris could migrate
  onto**. That turns the 190-token contract from an aesthetic choice into a logical consequence.
- See the hard rule above: the naming-scan paragraph was cut from v1. Nothing scan-derived remains.
- No dashes joining clauses. Checked.

**Visual this section calls for:** the Polaris token structure showing the component-heavy theme layer,
ideally the Figma variables panel.

---

## Section 4 — "The architecture" (DRAFT, awaiting validation)

Section 3 v2 approved by Marcel ("ok", 2026-07-26). This is the technical core of the case.

### DRAFT TEXT

> ## The architecture
>
> The foundation had to answer one question well: where does a decision live so that it only has to be
> made once?
>
> I built it in three tiers. Primitives hold the raw values, and they are organized by brand, because a
> brand's palette is the one thing that genuinely cannot be shared: 213 of them across the seven brands.
> Globals hold what every brand agrees on regardless of identity, which turned out to be 61 tokens of
> border, scale, and structural color. Then the theme layer, 190 tokens, split into 148 semantics, 40
> component tokens, and 2 composites.
>
> That split is deliberate, and it is the correction of what I had found in Polaris. Semantics outnumber
> component tokens by almost four to one, the inverse of the mobile system's ratio. A designer working in
> this system reaches for a meaning, not a component's private value. When a new component arrives, most
> of what it needs already exists.
>
> The part that matters most is not any of those numbers. It is that all seven brands have the same 190
> tokens, with the same names. Not similar ones. The same ones.
>
> That is what makes a brand a configuration instead of a fork. Switch the brand and every surface, every
> border, every text color takes that brand's value for the same token. There is no branch of the library
> where KitchenAid lives. Adding a brand means filling in 190 values, and the components already know what
> to do with them, which is why Whirlpool B2B and Aether could exist alongside the consumer brands without
> anyone building a second library.
>
> When every brand has to fill in the same 190 tokens, a value that only one brand needs has nowhere to go.
> The structure catches it on its own, without anyone having to police it. That is the part documentation
> cannot do.
>
> The same principle carried into the components. Rather than a button per brand, the web library's
> button is one component set holding 99 variants, the matrix of size, state, and hierarchy resolved once
> and themed by whichever brand's tokens are attached. 55 components and 33 component sets, 240 variants
> in total, with Product Card and Product Container the most involved at 52 and 24 variants across their
> sub-parts.
>
> On the Polaris side the work was corrective rather than architectural. I could not restructure a system
> running in a shipped app, so I improved it from the inside: fixing problems in the token structure,
> refining what was there, maintaining components, and building new ones as the app needed them, while
> keeping the eventual migration path to the global foundation in view.

### Writing notes

- Opens with **"where does a decision live so that it only has to be made once?"** because that is what
  token architecture actually solves, and it frames the numbers as consequences instead of a showcase.
- **The shortest paragraph in the case is deliberate:** "Not similar keys. The same ones." It is the
  strongest verified fact in the whole case and it deserves room to breathe.
- The 148-vs-40 ratio is explicitly tied back as **the correction of what he found in Polaris**. Closes
  the Section 3 arc and demonstrates judgment applied rather than judgment asserted.
- **"documentation is advice and a contract is a constraint"** is the one line that best signals
  seniority. A design systems lead recognizes it instantly.
- Product Card's 52 variants comes from the component **counts**, not linter findings, so it is within
  the hard rule from Section 3.
- Polaris stays framed as **corrective, not architectural**, with the explicit reason (cannot restructure
  a system running in a shipped app).
- ✂️ **CUT 2026-07-26:** "because a product card is where brand expression and commercial rules collide."
  That was my inference from the scan's node names, not something Marcel said. He cut it and added:
  *"para de inferir coisas sem perguntar antes"*.

  🚫 **STANDING RULE — do not infer facts about the work and write them as Marcel's. Ask first.** This
  covers motivations, reasons, and characterizations, not just numbers. If a claim did not come from Marcel
  or from an artefact, it does not go in the copy, not even as connective tissue between verified facts.
- No dashes joining clauses. Checked.

**Visuals this section calls for:**
- **The three-tier architecture diagram** (primitives by brand → globals → theme × 7). Core figure.
- **The Figma Themes collection with all 7 modes visible.** This is the proof of the contract claim.
- **The button's 99-variant set**, showing the matrix.
- Optional: Product Card in two brands side by side, showing same structure with different expression.

---

## Section 5 — "Getting to one architecture" (DRAFT v2, awaiting validation)

Deliberately the shortest section in the case.

**Marcel's first answer (2026-07-26)** on resistance / meetings / changed decisions:

> *"não teve tanta, pq tava mais eu, o especialista e o head de produtos que tinha entrado. Ele tinha
> ideias diferentes, mas fomos alinhando e chegando num senso comum com tempo"*

**Marcel's correction (2026-07-26) — v1 was rewritten because of this:**

> *"nao fala que a gente tinha ideias diferentes não, fala mais no ambito de ter sido colaborativo"*

🚫 **Do not frame the head of product as having had different or opposing ideas.** Frame the process as
collaborative: what each of the three brought to the table. v1 built a paragraph on the disagreement;
deleted.

⚠️ **Known cost of this change (Marcel's call, respect it):** that paragraph was the only place in the
case showing friction and its resolution. The quality checklist asks for self-reflection and critical
thinking, and resolved conflict is the strongest form of that. With it gone, Section 5 is weaker as
seniority evidence, though still true. **The weight now falls entirely on Section 6's "what I would do
differently."** Keep that in mind when writing it.

Also dropped: "three months into a contract" (my arithmetic, and it had no function once the
disagreement paragraph went).

### DRAFT TEXT (v2)

> ## Getting to one architecture
>
> The group making these decisions was small: me, the design ops specialist, and a head of product who
> had recently joined.
>
> That size was an advantage. A foundation is a bet on how a product will be built for years, and the
> three of us could actually work through it together rather than trading documents. I brought the
> architecture and the reasoning behind it, the head of product brought where the product was going, and
> the specialist brought what would survive in day to day operation. We arrived at a shared position over
> a series of conversations rather than in a single approval meeting.
>
> That was the right way to get there. An architecture only holds if the people responsible for the
> product believe in it, and belief comes from having helped shape something, not from being shown a
> finished proposal.
>
> The distribution of the work shifted as that alignment settled. Early on the specialist reviewed my
> architectural decisions to see how I was working. Once the deliveries were in front of him, he told me he
> trusted the work and would leave those calls to me. Being handed that is different from taking it, and it
> changed what I was accountable for.

### Writing notes

- Four paragraphs. Marcel said there was not much resistance, so a long negotiation section would be
  invention.
- v2 replaces the disagreement with **what each person brought to the table**, per Marcel's correction.
- "over a series of conversations rather than in a single approval meeting" preserves the truth that it
  took time, without framing it as disagreement.
- ✏️ **Closing paragraph rewritten 2026-07-26.** It used to end "Nobody handed me that; it followed from
  being the person holding the whole structure in view." That is now known to be **false** — the specialist
  explicitly granted the autonomy after seeing the deliveries. The new closing says so, and
  **"Being handed that is different from taking it"** is a stronger line anyway: it is third-party
  validation instead of self-assessment.
- No dashes joining clauses. Checked.

**Visual this section calls for:** honestly, none. Forcing a diagram here would pad it. If anything, the
DS rules or governance documentation page, but only if it exists and reads well.

---

## Section 6 — "Where it stood when I left" (DRAFT, awaiting validation) — FINAL SECTION

Marcel's answers (2026-07-26) that shaped this section:

> *"nao lembro, mas era mto grande os times lá... só não faço ideia da quantidade."*
> *"nao sei o que eu faria de diferente porque foi até pouco tempo que fiquei lá."*

### 🚫 Two hard constraints from those answers

1. **NO adoption numbers.** Marcel does not know how many designers/developers adopted the GDS. The teams
   were large but he has no count. **Never invent or estimate one.** The draft states the absence
   explicitly, which converts a gap into evidence of rigor.
2. **NO fabricated "what I'd do differently".** Marcel genuinely does not have one, because five months
   was too short to see the system age. **Do not manufacture regret.** An experienced reviewer prefers
   honest "I left before I could know" to a rehearsed lesson.

⚠️ **Accepted cost:** the quality checklist asks for self-reflection, and this section does not deliver
the strongest form of it. Accepted, because the alternative is invention. The case compensates elsewhere:
the comparison between the architecture Marcel founded (148 semantic / 40 component) and the one he
inherited (69 / 249) already demonstrates the judgment that self-reflection is supposed to prove.

### DRAFT TEXT

> ## Where it stood when I left
>
> The foundation went live in my second month. That is the part I would point at first, because a design
> system that ships early gets corrected by real use, and one that stays in a file until it is complete gets
> corrected by nobody. For the remaining three months it was being used, fed, and evolved while I worked on
> it, and that continued after I left.
>
> The Global Design System existed where nothing had existed before: 464 token definitions across three
> tiers, giving all seven brands the same 190 tokens. It was linked to the web library and in use. The web
> library itself carried 55 components and 33 component sets, 240 variants, with a button that answers every
> brand from one place. Polaris had a token structure that no longer worked against the system it was meant
> to support, along with the components I maintained and the new ones the app needed.
>
> The teams there were large, and I do not have a reliable count of how many designers and developers
> ended up building against the foundation. I would rather say that than publish a number I cannot stand
> behind.
>
> What was not done is easy to name. The two systems never converged. Polaris stayed on its own tokens,
> structurally closer to the global foundation than when I arrived but still separate, and unifying them
> was work for whoever came next. The Atomic Design structure in the web library was defined and still
> being populated, with pages standing ready for the components that had not been built yet.
>
> I am also honest about the limits of what five months tells you. I left before the system had to survive
> the things that actually test a design system: a brand refresh, a platform migration, a team that
> inherits it without the person who designed it. I know the architecture was right for the problem in
> front of us. I do not yet know how it aged, and I would not pretend the engagement was long enough to
> find out.
>
> What I am sure of is narrower. Giving all seven brands the same 190 tokens was the decision that mattered.
> Most of the other choices in that foundation could have gone differently without much consequence, but
> that one is what turned a portfolio of brands into a single system.

### Writing notes

- Paragraph 3 **declares the missing metric instead of hiding it.** "I would rather say that than publish
  a number I cannot stand behind" turns a gap into a signal of rigor, and it is literally true.
- Paragraph 4 names what was left undone without drama. The empty-page evidence for "defined and still
  being populated" comes from the scan's page names, which is a count of what exists, so it is within the
  hard rule.
- Paragraph 5 turns Marcel's answer into a strength: naming **what actually tests a design system**
  (brand refresh, platform migration, a team inheriting it) shows he knows what would need watching. This
  demonstrates maturity without faking regret.
- Paragraph 6 closes on what he genuinely did learn, tied back to the contract, which is the case's thesis.
- "in use rather than finished, which is the correct state for a design system to be in" reframes the
  short engagement as a property of design systems rather than an incomplete deliverable.
- No dashes joining clauses. Checked.

**Visual this section calls for:** the final state of the web library, or the Atomic Design page structure
showing what was defined. Optional; the section works as prose.

---

## 🖼️ IMAGES — delivered by Marcel 2026-07-26

Location: `src/assets/cases/whirlpool/` — **16 PNGs, 3.8 MB total.**
Marcel: *"use todas e aí algumas vai precisar usar carrosel"* and *"Sobre o diagrama, vc monta com a
skill de design"* (the three-tier architecture diagram is the design skill's job to build, not an export).

### The 7 brand buttons — the case's core figure

`web-button-{aether,amana,jennair,kitchenaid,maytag,whirlpool-b2b,whirlpool-default}-brand.png`

Each is the **full button matrix**: Large/Medium/Thin × Primary/Secondary/Tertiary/Neutral ×
Active/Disabled/Highlight, with Button / Icon Button Square / Icon Button Rounded rows. Verified by
reading two of them: KitchenAid renders crimson on white, JennAir renders gold on black. **Identical grid
position, different values.** This is the 190-token contract made visible, and it also confirms the
99-variant count from the scan.

⚠️ **`whirlpool-b2b` and `whirlpool-default` are byte-identical** (md5 `41963f5b...`). **This is NOT a bad
export.** Marcel: *"é que o componente dessas brands default e b2b elas nao mudam... mas são duas brands
diferentes."* The two brands resolve the button to the same values while remaining separate brands.

→ **Carousel decision: 6 slides, not 7.** Publishing two pixel-identical slides reads as a bug to anyone
looking, and the viewer has no way to know it is intentional. Use one slide captioned for both
("Whirlpool Default and B2B") explaining they resolve the button identically.

→ **Worth a sentence in the case:** two brands reaching the same result without ceasing to be separate
configurations is precisely what distinguishes a contract from a fork. In a forked system, identical
brands become a copied file; under a contract they are two themes that answer the same way today and can
diverge tomorrow without refactoring.

✅ **RESOLVED 2026-07-26.** Marcel: *"são iguais"* — Whirlpool B2B and Whirlpool Default are identical
themes throughout, not just on the button.

→ **So the interesting fact is governance, not visual difference.** The two exist as separate brand
configurations even though they currently resolve identically, which means B2B can diverge from Default at
any point without anyone forking a library or refactoring a component. A fork would have made "same values"
and "same brand" the same thing; the contract keeps them separate concerns.

→ **Caption for the shared slide:** "Whirlpool Default and Whirlpool B2B" plus a line noting they resolve
identically today while remaining independently themeable.

⚠️ Note the scan's `Product Card / B2B / Header` and `/ D2C / Prices` nodes are **component-level**
structure, not theme divergence. B2B and D2C product cards differ as components; the *brand themes* do not.
Do not conflate the two in the copy.

### The rest of the exports

| File | Shows | Section |
|---|---|---|
| `gds-theme-variables-1.png`, `-2.png` | GDS theme variables panel | **1 or 4** — proof of the contract |
| `polaris-theme-variables-1.png` | Polaris token structure (component-heavy) | **3** — the diagnosis |
| `web-product-container-component.png` (1.4 MB, largest) | Product Container | **4** |
| `web-atomic-design-example.png` (28 KB, smallest) | Atomic Design page structure | **6** — what was defined |
| `polaris-input-component.png` | Polaris Input | **4** — Polaris carousel |
| `polaris-navbar-component.png` | Polaris Navbar | **4** — Polaris carousel |
| `polaris-dropdown-component.png` | Polaris Dropdown | **4** — Polaris carousel |
| `polaris-cardbutton-component.png` | Polaris Card Button | **4** — Polaris carousel |

**Proposed carousels** (`CaseGallery` / `ui/carousel.tsx` already exist from the Onfly case):
1. **Brand buttons, 6 slides** — Aether, Amana, JennAir, KitchenAid, Maytag, Whirlpool (Default + B2B).
2. **Polaris components, 4 slides** — Input, Navbar, Dropdown, Card Button.
3. GDS theme variables, 2 slides, or place them as standalone figures.

⚠️ **Not yet inspected:** the two `gds-theme-variables` files, `polaris-theme-variables-1`, the four
Polaris components, `web-product-container`, and `web-atomic-design-example`. Read them before writing
captions, and check for prices, SKUs, unreleased products, or non-public B2B data before publishing.

⚠️ **Blocked on engineering:** `CasePage.tsx` hardcodes figures to the `onfly-design-system` slug, so none
of these can render until that refactor lands. Text-first was the agreed sequence.

> ## In short
>
> Whirlpool sells appliances under a portfolio of brands, and each of those brands had its own
> interfaces on web and on mobile. Some of them already had Figma libraries that teams were actively
> using. The problem was not a missing library. It was that nothing underneath them was shared.
>
> I joined through Môre in May 2025 to work on the technical and operational architecture of the
> design system. The goal was not to replace what was already in use. It was to build a global
> foundation beneath it: a token layer the existing libraries could link to and adopt incrementally,
> without any team having to stop and rebuild.
>
> I created that foundation, the Global Design System, from scratch. It resolves two dimensions of
> variation at once, brand and platform, through a three-tier architecture: 213 primitives, 61
> brand-agnostic globals, and a theme layer of 190 tokens. That theme layer is the part I care about
> most. All 7 brands implement it with an identical set of keys, which means a brand is a
> configuration of the system rather than a fork of it.
>
> In parallel I took over Polaris, the design system behind their mobile app. That one already
> existed, so the work was different: I corrected problems in its token architecture, refined the
> structure, maintained its components, and built new ones.
>
> [CLOSING SENTENCE — pick per open question 1]
>
> **Variant A (delivered and running):** By September the foundation was linked to the web library and
> in use, and Polaris had a token structure that no longer fought the system it was supposed to support.
>
> **Variant B (delivered for rollout):** By September the foundation was built, documented, and linked
> to its first web library, with the rollout to the remaining libraries mapped out for the teams who
> would continue it.

**Writing notes on the draft:**
- Opens with the constraint, not the résumé. The "problem was not a missing library" line mirrors
  Onfly's "was not missing, it was orphaned" without repeating it.
- No dashes joining clauses (per skill rule). Checked.
- "a brand is a configuration of the system rather than a fork of it" is the sentence doing the most
  work. It translates the 190-token contract into something a non-technical hiring manager gets.
- Polaris is explicitly framed as inherited. Deliberate.
- Component counts intentionally absent from the hook; they belong in section 6 and are unverified.

**Visual this section calls for:** the token architecture diagram (three tiers × 7 brands), or a
Figma screenshot of the Themes collection showing the 7 modes side by side. The 7-modes screenshot
would prove the contract visually, which is exactly the hook's claim.

---

## ✅ Title decided 2026-07-26

**"Seven brands, one system"**

Rejected: "The same 379 tokens in every brand" (the first published title). Precise but cold, and it
described the implementation rather than the value. "379" means nothing to a first-time reader, while
"seven" is instantly legible.

The chosen title states a property of the system, which gives it symmetry with the Onfly case's
"A design system that keeps itself in sync". Both are about what the system *is*, not how much it
contains. The `summary` already carries the constraint (libraries alive and in daily use), so the title
is free to carry the outcome.

Also considered: "A brand is a configuration, not a fork" — the most technical option and the one a
design systems lead recognizes instantly, but longer and it assumes vocabulary.

## Draft frontmatter (for the final .md)

```yaml
---
title: "[TBD — something about the foundation under a living system]"
summary: "[TBD once sections land]"
date: "2026-07-26"
cover: ""
type: "design-system"
tags: ["Design Systems", "Design Tokens", "Governance", "Multi-platform", "Enterprise"]
role: "Senior Product Designer, Design System"
timeframe: "May 2025 to Sep 2025"
company: "Whirlpool"
outcome: "[TBD — pending open questions 1 and 2]"
---
```

Note: `company: "Whirlpool"` drives the header brand logo. `WhirlpoolLogo` already exists in
`src/components/brand-logos.tsx`. Card tags above match `featured-work.tsx` for consistency.

---

## ⚠️ Follow-ups outside this case

- **CV needs updating** with the verified token numbers (Marcel's call, 2026-07-26).
- ~~**Onfly WCAG discrepancy**~~ ✅ **CLOSED 2026-07-26.** Marcel confirmed the published Onfly case is
  correct (*"a da onfly ta certa po, nada a resolver"*). Nothing to change.
- **`featured-work.tsx` Whirlpool card** says "653 tokens and a 397-component library". Both numbers
  are now unverified. The card needs updating once this case's numbers are final.
