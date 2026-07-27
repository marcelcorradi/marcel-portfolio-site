# Esfera case — working draft

Started 2026-07-27. Third Design System case, after Onfly and Whirlpool.

## What we have (verified vs. not)

From the CV only (`marcel-cv-highlights`):
- **Esfera** = Santander's loyalty program. Engagement via **Rethink** (consultancy).
- Rethink tenure overall: **May 2021 – May 2025** (also Smiles, SulAmérica, Tora there).
- **A new design system**, built by Marcel.
- **59 components, 443 variants, 224 tokens.** ⚠️ CV figures — NOT yet verified against an artefact.
- Context: loyalty + e-commerce, **highly regulated**.

Home card copy already live (`src/components/featured-work.tsx`), slug `esfera-design-system`:
> "A new design system built from component design to adoption, in a highly regulated loyalty and
> e-commerce context. 59 components, 443 variants, 224 tokens."
> Tags: Design System, E-commerce, Regulated

**Nothing else exists.** No draft, no exports, no assets in the repo. Contrast with the other two
cases, which each had primary sources (Onfly: `insights.json`, `benchmark.md`, token exports;
Whirlpool: token JSON + Figma variables panel).

## ANSWERED by Marcel (2026-07-27) — all blockers cleared

**1. Period: June 2024 → May 2025 (12 months).** Longest of the three DS engagements (Onfly ~10mo,
Whirlpool 5mo). Corroborated by the inventory screencaptures dated 2024-09-26/27, which sit in the
early-studies phase.

**3. The team — formed in October 2024, four people:**
- Marcel — Product Designer
- another **Senior** Product Designer
- a **Design Ops**
- a **developer allocated to the DS team**

His words: *"Esse tinhamos um time bonitinho."* And on the other PD: *"meu grande brother que era o
outro PD que foi um prazer enorme trampar com ele e viramos amigos."* → real collaboration signal;
the checklist wants personality. **Never name the person.**

⚠️ **Note the gap: project starts June, team forms October — four months solo.** That fits the phased
method (inventory + initial studies first, team assembled for the build). **CONFIRM with Marcel before
writing it that way** — do not infer it. *(asked 2026-07-27, awaiting answer)*

🔑 **The dev in the team changes the outcome claim: they shipped code, not just Figma.** *"como a gente
tinha um dev alocado no time nosso pra desenvolver os componentes, a gente entregava o código
também."* This is the design-engineering bridge — Marcel's core differentiator — and it is the
strongest single fact from this round.

**4. "Regulated" — 🚫 MY INVENTION, CUT IT.** He replied *"esse regulado nao entendi."* Traced it:
the CV says "regulated contexts" for **Rethink overall** (Esfera/Smiles/SulAmérica/Tora) and I
narrowed it onto Esfera. Same class of error as "contract" on Whirlpool.
- **Remove from the Home card** (`featured-work.tsx`): "in a highly regulated loyalty and e-commerce
  context" and the **"Regulated"** tag.
- CPF/CNPJ and Terms screens are real, but they are **Brazilian e-commerce standard**, not evidence of
  a regulated-industry constraint. Do not dress them up as one.

**5. Adoption — engaged but unmeasured. State it honestly, invent nothing.**
*"adoção não medimos exatamente, mas o pessoal lá tava super engajado."*
- On library launch, **all the designers started using it — "eram 6 eu acho"** (his estimate, hedged)
- **Devs began consuming the DS** as well
- 🚫 *"não temos muito dados de adoção ta."* → **no adoption metric.** Same posture as Whirlpool: say
  so plainly rather than omitting the subject. Write the 6 designers as approximate **or** ask him
  whether to include a hedged number at all.

**7. Nothing he'd do differently** — *"foi um dos melhores projetos que ja trabalhei."* Second case
with no regret section; that is honest and consistent, not a gap to paper over.
🚫 His aside about not having left / the other offers was explicitly **not for the case**: *"não to
falando isso pra vc colocar no case, só comentando."* Do not use it, in any form.

**8. No publishing restrictions** — *"tem restrição nenhuma nao... vou mostrar tudo."* Before/after
from the production screencaptures is cleared. ⚠️ Still scan any published image for third-party
customer data (names, CPF, order numbers) — blanket approval is not a reason to skip looking.

**2. Starting point — ANSWERED (2026-07-27). This is the case's opening, and it is a third distinct
tension.** Not an orphaned system (Onfly), not live libraries to build under (Whirlpool). **There was
no design system and no mandate for one. He had to sell it internally first.**

**Two separate Esfera stints, three years apart** (confirmed in the live CV, Rethink section):
- **2021–2022** — *"eu comecei a mexer com bibliotecas de componentes lá, mas não tinha DS ainda e era
  meu sonho poder construir um DS lá."* Component libraries, **no design system**, and he wanted to
  build one. 🔑 The motivation is his own and predates the engagement by three years.
- **2024–2025** — came back and built it.

**Jun → Oct 2024, the selling phase.** *"junho a outubro eu fiquei na parte inicial (atuava como PD
ainda em demandas de times de produto e paralelo comecei a mexer no DS), ai foram mais estudos pra
gente conseguir vender o DS lá dentro."*
- He was **still delivering product design work for product teams**, doing the DS in parallel
- The early studies existed **to sell the DS internally**, not to start building it
- Explains `Testes Iniciais (SEM DS)` and `Foundations (Teste Antigo)` in the Redesign file: those are
  *his* early attempts, made while building the case for the system

**⚠️ CORRECTION — there were TWO team phases. Do not conflate them.**

*Phase 1 (Jun–Oct 2024), three people, and he was the only outsider:*
- Marcel, **allocated via Rethink** (consultancy)
- **his lead, an Esfera employee**
- **another PD, also Esfera** (not Rethink)

*Phase 2 (from Oct 2024), the four-person team* — Marcel, a senior PD, a design ops, and a dev.
🔑 **The team was the result of the sell working.** Phase 1 pitched it; Phase 2 was staffed to build
it. Frame the October team as an outcome, not an org detail.

**Work done in phase 1, together:** inventory, and a **priority matrix to decide which components to
build first**.

🚫 **The priority matrix is NOT case content.** Marcel, 2026-07-27: *"Nem precisa citar explicitamente
sobre essa matriz... só comentei mesmo"* and *"mas nao cita essa matriz no conteudo do case"*. Recorded
here as background only. **Do not reintroduce it** — not as a section, not as an aside, not as
self-reflection material. I pitched it as the case's best reflection hook and he declined twice.

Why it was dropped, in his words: *"pq fomos pra estrateiga de pilotos, ai nao precisava priorizar
componentes, seriam os componentes do fluxo né."* The pilot strategy **removed the need to prioritise
at all** — once a flow is chosen, its components are the scope.

⚠️ My earlier guess ("a matrix ranks in the abstract, a pilot arrives pre-approved") was **wrong**, and
I had already written it into this draft as if it explained his decision. It framed the matrix as losing
a contest on merit; he described it as simply becoming unnecessary. Deleted. Another instance of
[[dont-infer-ask-first]] — the invented because-clause appeared in the *notes* first, which is exactly
how it would have leaked into the copy.

## Blocking questions for Marcel

Numbered so answers can be given by number. Nothing gets written into the case until these land —
per [[dont-infer-ask-first]], no inferred rationale goes in as his.

1. **Dates.** Which months/years was the Esfera engagement, inside the May 2021 – May 2025 Rethink
   window? How long?
2. **Starting point.** Onfly was an orphaned system; Whirlpool was live libraries to build under.
   Esfera — truly a blank page, or was there something already there? (The CV says "new DS", but
   Onfly said "from scratch" too and that turned out to be wrong.)
3. **His role and the team.** Was he the DS owner? Who else — designers, devs, ops, PM? Who made
   the technical calls?
4. **What "highly regulated" actually meant in the work.** A real constraint that changed a design
   decision, not just industry context. (Banking rules? Points/currency display? Legal copy?)
5. **Adoption.** Did it ship? Who used it — how many designers/devs, how many products/squads?
   If there's no reliable number, say so and we state that honestly, like Whirlpool did.
6. **Artefacts.** Anything to read or show? Figma file, token export, screenshots, deck, docs.
   This is what made the other two cases specific rather than generic.
7. **What he'd do differently.** He had none for Whirlpool (five months was too short) and we said
   so honestly. Anything here?
8. **Publishing constraints.** Anything that must not appear — client-confidential screens, real
   customer data, names, anything about how the engagement ended.

## VERIFIED — tokens (2026-07-27)

Source: `assets/tokens-esfera/foundations.zip` + `primitive-tokens.zip` (DTCG export from Figma).
Method: strict `$value`-key leaf detection (script kept at
`scratchpad/count-esfera.mjs`). **A bare `value` key is never accepted as a leaf** — this export has
a *group* literally named `Value` (`Global Tokens.Value`), which is the exact shape that silently ate
189 tokens on Whirlpool. See [[my-count-is-the-suspect]].

**224 unique token definitions — matches the CV exactly, first run, no adjustment.**

| Collection | Count | Layer |
|---|---|---|
| Global Tokens | 130 | primitive (0 aliases — raw values) |
| Scaling Tokens | 17 | primitive (100% alias) |
| Colors | 43 | semantic (24/43 alias) |
| Spacing | 15 | semantic (100% alias) |
| Typography | 17 | semantic (100% alias) |
| Border Radius | 1 | semantic (100% alias) |
| Opacity | 1 | semantic (100% alias) |
| **Total** | **224** | |

Plus **28 Figma styles** (19 text, 5 effect, 4 grid) — styles, not variables. Counted separately;
do NOT fold into 224. Variables + styles = 252.

Primitive/semantic split: **147 primitives / 77 semantics**.

### Finding 1 — every mode shares one identical token shape
All five paired collections carry the *same names* in both modes; only values differ:

- Colors: Light vs Dark → **identical, 43 / 43**
- Spacing: Desktop vs Mobile → **identical, 15 / 15**
- Typography: Desktop vs Mobile → **identical, 17 / 17**
- Scaling: Desktop vs Mobile → **identical, 17 / 17**
- Border Radius: Desktop vs Mobile → **identical, 1 / 1**

Same structural argument as Whirlpool, but the axis here is **theme + viewport**, not brand: dark
mode and responsive scale are a configuration, not a fork. Marcel's phrasing rule from Whirlpool
applies — say "the same 43 tokens in both themes", never "contract".

### Finding 2 — the semantic layer holds no raw values
Spacing, Typography, Border Radius and Opacity are **100% aliases** to primitives. Colors is 24/43
alias, the rest being deliberate alpha compositions (e.g. `#292929b8` for secondary content).
Nothing in the upper layer hardcodes a value. This is the architectural claim, and it is provable
from the file rather than asserted.

⚠️ Unverified: **59 components / 443 variants** — no component export supplied. Either read from the
Figma files (links in `assets/tokens-esfera/figma-links.md`) or state as CV-sourced.

## Figma files

From `figma-links.md`:
1. **🔒 Esfera DS Private** — `vAV5cDif8Lbto8xXhP7Ki1`
2. **🔒 Esfera DS Foundations** — `u85ShlJdOmvPvS0OqPB2TP`
3. **Esfera DS Redesign** — `RilVh75lOD5RbRp1bkY6nK`
4. **🔒 Esfera DS Research** — `VzCoDsqmfC66Yq4tm6VBPN`

Supplied later by Marcel, **not in `figma-links.md`** — add it there:
5. **Esfera DS Components** — `etDrokvjgOvOohVd6tNk2K` (page `4:3` = Button)

A **Research** file exists — read it before asking him research questions; Onfly's research
aggregates were that case's strongest material.

### ⚠️ MCP limitation — page listing does not work on these files
`get_metadata` without a `nodeId` returns only ` ⭐️ Cover` on **all five** files, even though other
pages demonstrably exist and read fine when addressed directly (`4:3` and `223:55931` both worked).
Probing neighbouring page IDs is a dead end — page canvases are not sequential (`4:2` and `4:3` exist;
`4:1`, `4:4`, `4:5` do not), and `4:6` returned *"select a node from a visible page"*, which suggests
the MCP only reaches pages currently visible/loaded in the app.

**How to get content from these files: Marcel supplies a per-page link** (right-click page → Copy link
to page), or opens the page in the desktop app so it becomes the current selection. Do not burn turns
guessing node IDs.

## VERIFIED — Foundations file (2026-07-27)

Page `223:55931` " ↪️ Principles":

- **Three named design principles**, each a heading + paragraph: **Consistência, Conciso, Respeito**.
  (Titles are in Portuguese in the file; the case is in English — translate, and note that the file
  itself is PT.) ⚠️ Paragraph text not yet read — needs `get_design_context` on `226:58996/58999/59002`.
- **A versioned Changelog** frame (`380:3624`) with header + table. Evidence of governance: the system
  was versioned and changes were recorded.
- Documentation uses a shared `.base / Documentation / *` component set (Header, Footer, Changelog
  Header/Table) — the docs themselves were systematised, not hand-built per page.

## PARTIALLY VERIFIED — Components file (2026-07-27)

Page `4:3` " ↪️ Button" — one component per page, it appears. The Button matrix:

- **Hierarchy:** Primary, Secondary, Tertiary (+ more below the read cut-off)
- **Sizes:** SM, MD, LG
- **States:** Default, Hover, Focus, Pressed, Loading, Disabled

**Focus is an explicit state on every variant** — worth noting given Marcel's accessibility
specialisation. Full metadata dump (57KB) persisted at
`.claude/projects/.../tool-results/toolu_01HncfsmiFiabqzyWim1XqZG.json`.

## VERIFIED — components & variants (2026-07-27)

✅ **59 components / 443 variants — the CV is exactly right.** Reproduced from the Components file
(`etDrokvjgOvOohVd6tNk2K`), counting **every** page (stable + Review + WIP + Temp):

| Group | Pages | Component sets | Variants in sets | Standalone components |
|---|---|---|---|---|
| Components (stable) | 32 | 41 | 413 | 5 |
| Review + Work in Progress | 9 | 7 | 24 | 1 |
| Temp (Workshop Only) | 5 | 3 | 6 | 2 |
| **Total** | **46** | **51** | **443** | **8** |

**The counting rule that reproduces the CV:** a *component* is a COMPONENT_SET **or** a standalone
COMPONENT → 51 + 8 = **59**. A *variant* is a COMPONENT inside a COMPONENT_SET → **443**. Both land
exactly. Note this **includes WIP and Temp pages** — the stable-only figure is 46 / 418.

⚠️ If the case quotes 59/443, it is counting work-in-progress and workshop scaffolding as well. That
is defensible (they exist in the library file) but Marcel should know, since an interviewer could ask.
**The stable, production-ready surface is 46 components / 413 variants across 32 documented pages** —
arguably the more impressive and more honest number. OPEN: which one goes in the case (see below).

### Finding 3 — the library is organised by lifecycle stage
Pages are grouped under section headers, which is governance visible in the file itself:
- **Components** — 32 stable, one page per component, each documented
- **Review** — 1 (`[WIP] Accordion`)
- **Work in Progress** — 8 (Cards, Breadcrumbs, Logo Esfera, Modal OTP, Semantic Spacing,
  Button Group *(marked `[Studies]`)*, Address Card, Colors Layout Semantic)
- **Temp (Workshop Only)** — 5, one literally named `[TEMP] Layout Placeholder (Delete)`

A component had a **defined path from study → WIP → review → stable**, and the file records which
stage each one was in.

### Finding 4 — a private/public component convention
14 of the 51 sets are prefixed `_` (`_Checkbox Item`, `_Order Summary Accordion Base`,
`_base Step Desktop`, `_Dropdown Select Item`…) — internal parts not meant for direct consumption,
versus 27 public ones. Composite components are assembled from private sub-parts: **Order Summary**
is one public set over three private accordion sets; **Progress Steps** is one public set over
`_base Step Desktop` + `_base Step Mobile`.

This is real component architecture — Marcel's stated specialisation — and it is provable from the
file rather than asserted.

### Largest variant matrices (verified)
Button **72**, Icon Button **60**, Checkbox **32**, Switch **30**, Radio Button **22**,
Link Button **16**, Order Summary **14**, Token Field **14**.

Button = hierarchy (Primary/Secondary/Tertiary…) × size (SM/MD/LG) × 6 states
(Default/Hover/Focus/Pressed/Loading/Disabled). **Focus is an explicit state on every variant** —
consistent with Marcel's accessibility specialisation.

## Method note — how the pages were finally enumerated

`get_metadata` without a `nodeId` **does not list pages on these files** (returns only Cover). The fix
came from the Figma MCP docs via Context7: **`use_figma` running `figma.root.children`** enumerates
every page. Read-only scripts, nothing created or mutated.

Rules that matter when repeating this:
- Switch pages **at most once per `use_figma` call**; fan multi-page work out as parallel calls in one
  message. `figma.getNodeByIdAsync(pageId)` + `findAllWithCriteria` avoids switching entirely.
- `findAllWithCriteria({types:[...]})` is the indexed lookup — use it, not `findAll(n => n.type===…)`.
- Page IDs are **not sequential** — never guess them.

## THE APPROACH — Marcel's own words (2026-07-27) ⭐️ this is the case's spine

His description, verbatim:

> "o de redesign é legal que tem as telas que fizemos de redesign de fluxos. pq a estrategia lá foi
> escolhendo pilotos e ir construindo o DS em cima disso. Só que a gente redesenhava o fluxo
> melhorando a interface e tal, e aí aprovado com os stakeholders a gente construía o DS em cima
> disso."
>
> "Antes foi feito inventário e estudos iniciais, dps fomos pros redesigns e ai contrução de tokens e
> componentes dos fluxos pilotos"

**The phased method, in his order:**
1. **Inventory + initial studies** — audit what existed first
2. **Redesign of pilot flows** — pick pilot flows, redesign them, improving the interface
3. **Stakeholder approval** — the redesign is signed off before any system work
4. **Build tokens + components on top of the approved pilot flows**

**Why this is the case's differentiator.** The system was not built ahead of the product (a catalogue
nobody asked for) nor retrofitted after it. It was **extracted from real flows that had already been
validated with stakeholders.** Every component earned its place by appearing in an approved design.

This is a genuinely different tension from the other two cases — worth stating plainly:
- **Onfly** — an orphaned system: assets existed, disconnected, owning team dissolved
- **Whirlpool** — live, maintained libraries: build a global foundation *underneath* without stopping anyone
- **Esfera** — **no system and no mandate to build one in the abstract: earn it flow by flow, piloted
  and stakeholder-approved, then extract tokens and components from what shipped**

**It also explains the artefacts.** The lifecycle grouping (Finding 3) is a *consequence* of this
strategy: a component enters as a study, matures as its pilot flow advances, and only reaches
"Components" once proven. 32 stable components are the residue of piloted flows, not a wishlist.

⚠️ Marcel said this, but the *framing* above ("earn it flow by flow", "residue of piloted flows") is
my wording — run it past him before it goes in the case. Per [[dont-infer-ask-first]], do not attribute
a rationale to him that he has not confirmed.

**Research file: skipped by his instruction** — *"o research eram só estudos que faziamos internos.
Então não precisa ler se nao quiser."* Not case material. Do not mine it.

## VERIFIED — the Redesign file corroborates the method (2026-07-27)

`RilVh75lOD5RbRp1bkY6nK`. Three pages: ` ⭐️ Cover`, ` ↪️ Onboarding` (`0:1`),
` ↪️ Checkout` (`1:2`), ` ↪️ Page Test` (`103:11433`, scratch).

**The two pilot flows are Onboarding and Checkout.** His phased method is legible in the file itself —
the artefact corroborates the story rather than merely illustrating it.

### Checkout page (`1:2`, 73 top-level nodes) — the whole trail, in order
| Node | id | What it evidences |
|---|---|---|
| SECTION **"Testes Iniciais (SEM DS)"** | `21:1865` | the *before*, labelled "SEM DS" (without DS) by him |
| ~20 RECTANGLE **`screencapture-esfera-vc-…`** | `82:9651`+ | **the inventory** — real production screens grabbed off the live site, dated **2024-09-26/27** |
| SECTION **"Studies"** (16175×11442, 45 kids) | `74:10440` | the initial studies phase |
| SECTION **"Foundations (Teste Antigo)"** | `21:17151` | early token/foundation experiments ("old test") |
| SECTION **"Checkout Base"** | `36:9480` | the baseline redesign |
| SECTION **"Redesign Tests"** | `38:10286` | redesign iterations |
| SECTION **"Pagamento com PIX - Cenário 1 - Pontos e dinheiro"** (27157×53939, **264 kids**) | `21:3509` | **the main pilot flow**, by far the largest artefact |
| FRAME **"Annotation"** ×5 + SECTION "Annottations" | `39:14703`+ | design decisions annotated on canvas |
| FRAME **"Sprint 17/03"** | `258:11032` | sprint-cadenced delivery |
| FRAME "Navigation Test" ×7 (1440 desktop + 375 mobile) | `195:10764`+ | responsive worked at both breakpoints |

### Onboarding page (`0:1`, 5 nodes) — cleaner, later
- SECTION **"Redesign Desktop"** (`169:12704`, 10 kids) and **"Redesign Mobile"** (`5:2057`, 10 kids)
- FRAME **"CPF/CNPJ"** at 1440 *and* 375 — Brazilian tax-ID step
- FRAME **"Terms"** — terms acceptance

### Two details worth using
- **"Pontos e dinheiro"** (points *and* money) — the pilot was a **mixed payment** scenario, which is
  exactly what the **`Mixed Payment Field`** component in the library exists for. The pilot flow and
  the extracted component can be shown side by side: flow → component.
- **CPF/CNPJ** and **Terms** as first-class onboarding steps — concrete regulated-context surface, not
  just "it was a regulated industry". (Still ask Marcel Q4 for the constraint that *changed a design
  decision*.)

### The component list corroborates pilot-driven extraction
The stable components map onto exactly these two flows: Order Summary, Mixed Payment Field, Progress
Steps (+ Lite), Quantity Selector, Product Item, OTP Timer, Password Field, Password Instruction,
Token Field, Address Card (WIP). **A checkout and an onboarding, extracted into a library** — this is
the strongest available evidence for the "built on top of approved pilot flows" claim.

⚠️ Screencapture nodes are **real production screens with real URLs** (`esfera-vc`,
`auth-esfera-vc-auth-realms-Esfera-Prod-login`). Before publishing any before/after, get Marcel's
explicit approval and check for customer data — same call he made on the Whirlpool Product Container.

## Images

Pulled via the Figma MCP (`get_screenshot` → `curl` → `scripts/to-webp.mjs`), so **Marcel does not need
to export manually.** Files in `src/assets/cases/esfera-design-system/`.

### ✅ CURRENT PLAN — the Onboarding flow, complete, desktop + mobile (Marcel's call 2026-07-27)

*"prefiro mostrar o de onboarding que ta mais bonitinho, do que esse de checkout, ai a gente pode
mostrar um carrossel com desktop e mobile"* + *"da pra mostrar o fluxo completo"*.

**20 screens pulled and converted** (360KB total). Same 10 steps at both breakpoints, in flow order:

| # | Step | Desktop node | Mobile node |
|---|---|---|---|
| 01 | Sign In | `169:12854` | `5:2247` |
| 02 | Sign Up | `169:12705` | `5:2058` |
| 03 | Email | `169:12753` | `5:2198` |
| 04 | CPF/CNPJ | `169:12725` | `5:2078` |
| 05 | Phone | `169:12739` | `5:2093` |
| 06 | Get Code | `169:12764` | `5:2209` |
| 07 | Code | `169:12833` | `5:2226` |
| 08 | Password | `169:12781` | `5:2107` |
| 09 | Terms | `169:12800` | `5:2165` |
| 10 | Done | `169:12820` | `5:2185` |

Files: `onboarding-{desktop,mobile}-NN-<step>.webp`. Sections: "Redesign Desktop" (`169:12704`) and
"Redesign Mobile" (`5:2057`).

🔑 **Both breakpoints carry the identical 10 steps.** Responsive was designed into the pilot, not
retrofitted. That is worth one sentence in the copy.

Verified in the screens themselves: **"Acessar com Santander" SSO** on Sign In, an **"Ambiente seguro"**
badge in the header, **bordered inputs** (not the underlined fields of the old production checkout), a
**continuous progress bar** across steps, and **"Uma empresa Santander" + Terms** in the footer. The
Terms screen body is Lorem Ipsum; the only real datum is Esfera Fidelidade S.A.'s corporate address,
which is public. **Nothing sensitive in any of the 20.**

Use `case-gallery` (the existing carousel, sizes to the active slide). OPEN: one gallery of 20, or two
galleries (desktop / mobile)? Recommend **two**, so a 1440 screen is never shown next to a 375 one at
the same width.

### Superseded — the checkout address pair
Pulled, then dropped: *"ou acho que nao rola mostrar o antes e depois desse fluxo viu"*. Nodes
`36:8759` (before) / `38:9747` (after), section "Checkout Base" → "Redesign Tests", same screen in two
iterations. Files deleted. **Kept on record in case a before/after is wanted later** — the changes were
named progress steps (Endereço/Pagamento/Revisão replacing "Etapa 1 de 3") and the primary action
moving inside the Order Summary next to the value. Address data in them is fictional.

### ⚠️ Let Marcel pick the screens
Two rounds of my picks were rejected. First I chose a production screencapture (`82:9654`) against the
PIX redesign (`21:4401`) for maximum contrast: *"mas nao gostei da imagem que puxou"*. He supplied the
address pair instead; then he dropped that too in favour of the full Onboarding flow. **He knows which
work photographs well and which comparison is fair. Pull what he names, do not curate for him.**

### 🚫 Do not re-litigate Marcel's designations
He supplied these two nodes as *"esse pro antes"* / *"esse pro depois"* and I questioned whether the
pairing was really a before/after, because the "before" already looked redesigned to me. His answer:
*"e o antes e depois ta certo porra, se eu falei que é, eu sei do que to falando."*

He is right and the challenge was misplaced. He lived the project's evolution; the file's section names
("Checkout Base" → "Redesign Tests") are his own labels, and my read of a screenshot is not evidence
against his account. **Verify numbers against artefacts, yes — but a designation of what his own work
is does not need my corroboration.** Related but distinct from [[my-count-is-the-suspect]]: that one is
about arithmetic, this one is about his authority over his own project history.

## APPROVED COPY

Marcel approved section 1 (2026-07-27) and section 2 (2026-07-27). Written section by section per
[[validate-before-acting]]. Planned arc: 1 In short · 2 Where it started · 3 the pilot method (gallery
lands here) · 4 architecture · 5 the library · 6 shipping code · 7 where it landed.

### Frontmatter

```yaml
title: "The design system I had to sell first"
summary: "Esfera had component libraries but no design system, and no one had asked for one. So it was earned in stages: months of studies to make the case internally, then pilot journeys redesigned and approved, then tokens and components extracted from what shipped."
date: "2026-07-27"
cover: ""
type: "design-system"
tags: ["Design Systems", "Design Tokens", "E-commerce", "Loyalty"]
role: "Product Designer, Design System"
timeframe: "Jun 2024 to May 2025"
company: "Esfera (Santander)"
outcome: "224 tokens, 59 components and 443 variants, delivered in Figma and in code"
```

### Section 1 — "In short" ✅

> Esfera is Santander's loyalty program: customers earn points and spend them in a marketplace. I first
> worked there in 2021, through Rethink, and started putting component libraries together. There was no
> design system. Building one there became something I wanted to do for the next three years.
>
> I came back in June 2024, and nobody was waiting for that system. So the first months were not
> construction. I was still taking product design demands from the product squads, and in parallel I
> worked with my lead and another designer on the studies that would let us make the case for a design
> system internally. I was the only one of the three allocated from outside, which meant the argument
> had to convince the people who already worked there.
>
> It worked. In October a team was put together around it: another senior product designer, a design
> ops specialist, and a developer allocated to us. That last part changed what we could deliver. We
> were not handing engineering a Figma file and hoping. We built the components in code too.
>
> We did not build the system in the abstract and wait for adoption. We picked pilot journeys,
> onboarding and checkout, redesigned them properly, and took the redesign to the stakeholders for
> approval. Only then did we turn what had been approved into tokens and components. Every component in
> the library exists because a real flow needed it and someone had already signed off on the design it
> came from.
>
> By May 2025 that was 224 tokens, 59 components and 443 variants, in Figma and in code.

Edits Marcel accepted: cut "the part I would defend in any room" (read as defensive); moved the token
architecture explanation out of the closing paragraph into section 4; closed on "in Figma and in code"
so it ties back to the developer. "Senior" restored on the phase-2 PD per his confirmation.

### Section 2 — "Where it started" ✅

> I had already worked at Esfera once, in 2021, on my first stretch through Rethink. Back then I was
> doing product design delivery and, alongside it, putting component libraries together. The libraries
> helped. They were not a system. There were no tokens underneath them and no rules about what belonged
> in them.
>
> That gap stayed with me after I left. A design system there was something I wanted to build for the
> next three years, and it was still not there when I came back in June 2024.
>
> Nobody had asked for one. That is the part worth being precise about, because it changed the whole
> shape of the work. I was not hired to build a design system. I came back as a product designer, into
> demands from the product squads, and the system was something I believed the product needed and had
> to argue for.
>
> So the first four months were not construction. I kept delivering product design, and in the time
> around it I worked on the case for the system with two people: my lead, who was an Esfera employee,
> and another product designer, also from Esfera. I was the only one of the three allocated from
> outside. That mattered more than it sounds. The argument had to be strong enough that the people who
> actually worked there would carry it, because they were the ones who would still be in the building
> when it needed defending.
>
> We ran an inventory of what already existed. The point of that work was not to start building. It was
> to make the problem visible enough to be funded.
>
> It worked. In October a team was assembled around the system: another senior product designer, a
> design ops specialist, and a developer allocated to us. That is the moment the project changed from
> something I was arguing for into something the company had staffed.

⚠️ **Three of my inferences were cut from this section before it was approved**, and they are worth
recording because each one *sounded* like connective tissue:
- "Every screen still got assembled by hand from parts that happened to be nearby" — my picture of 2021
- "studied where the product was inconsistent" — I do not know what the inventory examined
- "easy to file under 'nice idea, no room this quarter'" — my characterisation of a risk, not an event

**No inventory findings exist.** Asked for a number (button variants, red shades, screens audited);
none supplied. The section stands without one. Do not add one later.

### Section 3 — "Earning it one flow at a time" ✅

> The team existed, and the obvious next move was to start building the system. We did something else.
>
> We picked pilot journeys, took them one at a time, and redesigned them properly as product work.
> Onboarding and checkout, both chosen by the business rather than by us. We designed the whole flow, at
> desktop and at mobile width, and took it to the stakeholders for approval as a redesign, not as a
> system proposal.
>
> Only after a flow was approved did we turn it into system material. The tokens came from the decisions
> the approved screens had already made. The components came from the parts those screens actually used.
>
> That order is the whole method, and it does two things at once. It removes the adoption problem,
> because the first consumers of a component are the screens it was extracted from, and those screens
> were already going to be built. And it removes the prioritisation problem: once a flow is chosen, its
> components are the scope. There is no argument about what to build first, because the flow answers it.
>
> [GALLERY — onboarding, desktop/mobile toggle, 10 steps]
>
> Onboarding is the clearest example of what came back out. Ten steps, from sign in to a created
> account, designed at both widths with the same ten steps in each. Sign in leads with Santander SSO.
> The tax ID field accepts both a personal and a company number. Verification carries a timer and a
> resend state. Terms keeps acceptance and marketing consent as two separate checkboxes.
>
> Every one of those is a component in the library now: OTP Timer, Password Field, Password Instruction,
> Checkbox, Text Field, Button. They exist because this flow needed them and the flow had already been
> approved.

The prioritisation sentence is close to Marcel's own words (*"nao precisava priorizar componentes,
seriam os componentes do fluxo"*), used without mentioning the priority matrix per his instruction.

⚠️ **Cut before approval, all three mine:**
- *"the two flows that decide whether someone becomes a customer and whether they can spend what they
  earned"* — an invented rationale for the pilot choice
- a paragraph theorising why abstract design systems fail — my argument, not his
- *"most people arriving already have the bank relationship"* — my read of why SSO is placed first

✅ **RESOLVED 2026-07-27 — the business chose the pilots.** Marcel's answer: *pedido do negócio*. The
copy now reads "Onboarding and checkout, both chosen by the business rather than by us."

🔑 This makes the method stronger, not weaker: if the business picked the flows, stakeholder approval
stops being an obstacle the team overcame and becomes a natural consequence, since they were
redesigning what the business already wanted. Worth keeping in mind for later sections.

### Section 4 — "The architecture" ✅

> The tokens were not designed up front. They were the residue of decisions the approved screens had
> already made, which is why there are 224 of them and not four hundred.
>
> They sit in two layers. The lower one holds raw values: 130 global tokens, the palette, the type
> scale, the spacing steps, plus 17 scaling tokens that respond to viewport. The upper one holds
> meaning: 43 colour tokens, 15 spacing, 17 typography, one radius, one opacity.
>
> The upper layer holds no raw values at all. Spacing, typography, radius and opacity resolve entirely
> to primitives, and of the 43 colour tokens, every one that is not a deliberate alpha composition
> points at a primitive too. That is the property worth checking in any design system, because it is the
> one that decays quietly. The moment a semantic token carries its own hex, the layer stops being a
> vocabulary and becomes a second place to look.
>
> Light and dark carry the same 43 names. Desktop and mobile carry the same 15 spacing tokens, the same
> 17 typography tokens, the same 17 scaling tokens. Nothing is added when a theme or a breakpoint
> changes, only the values behind the names. A theme is a set of values, not a second system, and the
> same is true of a viewport.
>
> That is what made the flows cheap to design at both widths. The mobile onboarding is not a separate
> design that happens to resemble the desktop one. It is the same ten screens reading the same tokens at
> a different scale.

Every claim here is checkable against the exports in `assets/tokens-esfera/`.

### Section 5 — "The library" ✅

> Fifty-nine components and 443 variants came out of the piloted flows. The interesting part is not the
> count. It is what the file looks like when components arrive this way.
>
> Thirty-two of them sit on a page each, documented, in the group marked stable. The rest are grouped by
> how far along they are: one in review, eight in progress, five temporary pieces built for a workshop,
> one of them named "delete" by whoever made it. A component has a visible stage, and the file says
> which one it is in. That is governance you can see rather than a document claiming it exists.
>
> Fourteen of the 51 component sets are prefixed with an underscore. Those are internal parts, not meant
> to be used directly, and they exist because the composite components needed them. Order Summary is one
> public set assembled over three private accordion sets. Progress Steps is one public set over a
> private desktop step and a private mobile step. The consumer picks Order Summary; the pieces it is
> made of stay out of the way.
>
> The variant counts follow the same logic. Button carries 72 variants, Icon Button 60, Checkbox 32,
> Switch 30. Button resolves hierarchy against size against state, and every one of its states includes
> focus, which is the state most libraries leave until an accessibility review asks for it.
>
> Three design principles are written into the foundations file: consistency, concision and respect.
> Alongside them is a changelog with a version table. Both were there before I finished, which matters
> more than their content: the system had a place to record what changed and a stated position on how it
> should behave.

Marcel's calls: **keep** the focus/accessibility-review remark (his specialisation, shows a point of
view); **translate** the principles from the Portuguese in the file.

### Section 6 — "Shipping code, not just Figma" ✅

> The team had a developer allocated to it. Not a partner in another squad we filed tickets with, a
> developer inside the design system team.
>
> That changed what a delivery was. The other senior product designer and I did the design side, then
> presented it to the developer and worked through the technical questions together before handing it
> over. He built it, then presented it back to us so we could check that what shipped matched what was
> designed. That loop ran for tokens as well as components.
>
> This is the part of the project I was best equipped for. My background is computer science, and the
> handoff between design and engineering is where I have spent most of my career. Having the review run
> in both directions is what kept design and code from drifting: nothing was declared finished by one
> side alone.
>
> Adoption still took work, and the work was training. We trained the designers on how to use the
> system, and the developer walked the other developers through consuming it. Neither group was left to
> discover the library on their own.

🔑 **Two facts from Marcel that only surfaced when asked in a choice box** (2026-07-27), both better
than what I had written:

1. **The handoff was a two-way loop, not a delivery.** *"eu e o pd senior a gente fazia o lado de design
   e passava pro dev. Ai a gente apresentava pra ele, validava pontos tecnicos, fazia handoff, ele
   desenvolvia e depois apresentava pra gente validar se ficou tudo certo. Isso tanto pra tokens quanto
   componentes."* The developer presenting back for design validation is the strong part.
2. **Adoption DID take effort, and the effort was training.** *"unico esforço foi treinar os times a usar
   o design system, tanto nós treinando os designers quanto o dev orientando os outros devs que iriam
   consumir."*

⚠️ My draft said *"adoption did not need a campaign"* — **wrong, and wrong in a way that undersold him.**
Two-front training is exactly the Design Ops work a recruiter looks for, and I had erased it by
inferring that co-located design and code made adoption automatic. Also cut: my invented description of
his handoff work (token export formats, reviewing implementation), imported from the Onfly/Whirlpool
cases.

## Decisions

- **2026-07-27 — publish 59 components / 443 variants.** Marcel's call (*"vai com 59 mesmo"*) after
  being shown that the figure includes WIP + Temp pages and that stable-only is 46/413. Keeps the case
  consistent with the CV and LinkedIn. He knows the composition if an interviewer probes.
- **2026-07-27 — cut "regulated" everywhere.** Not his framing; my import from the CV's Rethink-wide
  description. Home card copy + tag must change.
- **2026-07-27 — adoption stays qualitative, with NO number.** Confirmed by Marcel when offered the
  choice: describe that designers started using the library at launch and devs began consuming it, and
  leave the "~6 designers" estimate out entirely. 🚫 Do not add it back.
- **2026-07-27 — no inventory findings.** He does not have the numbers; section 2 stays unquantified.
- **2026-07-27 — no "what I'd do differently" section.** He has none, and his aside about leaving is
  off-limits.

## Rules carried over

- 🚫 Never invent or estimate an adoption metric — [[whirlpool-case-facts]].
- 🚫 No inferred motivations or characterizations written in his voice — [[dont-infer-ask-first]].
- Verify the three CV numbers against an artefact before publishing — [[verify-numbers-at-source]].
  If no artefact exists, publish what's provable and state the scope.
- My count is the suspect if it disagrees with his — [[my-count-is-the-suspect]].
- Section by section, validated with Marcel before moving on — [[validate-before-acting]].
