# Query map

One row per indexable URL: what it should rank for, the searcher's intent, and its title and
description. **Proposals stay proposals until Marcel approves them.** Once approved, the copy
goes through `portfolio-content` (its rules apply) and the Status column changes to *live*.
Don't infer a target Marcel didn't choose. Ask.

Target families (set by Marcel, 2026-09-25): **role/service** (people hiring a product or
design system designer), **client + topic**, **tool names**. His own name is *not* a target.

Title format: `<query-bearing title> · Marcel Corradi`, ~60 chars, no `—`/`–`.
Only terms the published page supports. Each term below was checked in the case text.

## Current state (2026-09-25)

The proposals below shipped on 2026-09-25 (Marcel asked for every SEO fix), some tightened
to fit ~60 characters. Cases carry them as `seoTitle` / `seoDescription` in the frontmatter,
the other pages in their `usePageMeta` call. The live values are in the code, so check there
before editing this table. Marcel can still revise any of them.

## Map

| URL | Target family → queries | Intent | `<title>` before 2026-09-25 | `<title>` now | Status |
|---|---|---|---|---|---|
| `/` | Role: "product designer design systems", "design system designer" | Evaluate a candidate | Marcel Corradi — Product Designer · Design Systems | Product Designer for Design Systems · Marcel Corradi | live |
| `/tools` | Tools: "free design system tools", the four tool names | Find a tool | My tools — Marcel Corradi | Free design system tools · Marcel Corradi | live |
| `/cases/whirlpool-design-system` | Client + topic: "Whirlpool design system", "multi-brand design system case study", "multi-brand design tokens" | Learn / evaluate | Seven brands, one system — Marcel Corradi | Whirlpool multi-brand design system case study · Marcel Corradi | live |
| `/cases/onfly-design-system` | Client + topic: "Onfly design system", "B2B design system case study", "design tokens sync" | Learn / evaluate | A design system that keeps itself in sync — Marcel Corradi | Onfly design system case study, B2B travel · Marcel Corradi | live |
| `/cases/esfera-design-system` | Client + topic: "Esfera Santander design system", "loyalty program design system" | Learn / evaluate | The design system I had to sell first — Marcel Corradi | Esfera (Santander) loyalty design system · Marcel Corradi | live |
| `/cases/design-audit` | Tool: "design audit chrome extension", "extract design tokens from website" | Find a tool / how it was built | A design system, read back out of a website — Marcel Corradi | Design Audit, a Chrome extension that audits a UI · Marcel Corradi | live |
| `/cases/atomic-colors` | Tool: "Atomic Colors", "semantic color palette generator", "color blind safe palette" | Find a tool | Colour decisions, written as an algorithm — Marcel Corradi | Atomic Colors, a semantic colour palette generator · Marcel Corradi | live |
| `/cases/spec-forge` | Tool: "Spec Forge figma plugin", "figma component spec for AI agents" | Find a tool | A spec the AI can build from — Marcel Corradi | Spec Forge, a Figma plugin for AI-ready specs · Marcel Corradi | live |
| `/cases/portfolio-kit` | Tool: "portfolio kit claude code", "designer portfolio template" | Find a tool | This portfolio, as a kit — Marcel Corradi | Portfolio Kit, a free portfolio built with Claude Code · Marcel Corradi | live |
| `/cases/radar-do-scoop` | None of the three families (a consumer product in Portuguese) | Evaluate range | Every discount, checked against its history — Marcel Corradi | Radar do Scoop, a supplement price tracker · Marcel Corradi | live |
| `/design-audit/privacy` | Not a target (legal page, out of the sitemap) | Store review | Design Audit privacy policy — Marcel Corradi | Design Audit privacy policy · Marcel Corradi | live |

Google truncates by pixel width (~600 px), so on the longer titles the suffix is what gets
cut, and the query terms up front survive.

Spelling: the site writes British "colour", and the titles follow it. Google treats
colour/color as the same query. Switch to "color" only if Marcel asks.

## Descriptions

Written by `portfolio-content` once the titles are approved: 140 to 160 characters, saying
what the page proves, in the searcher's words. The frontmatter `summary` is the starting
point, but most summaries open with a narrative line that makes a weak snippet.

## Gaps: queries with no page to rank

| Query family | Why nothing ranks | Options (Marcel decides) |
|---|---|---|
| "product designer for prototypes / MVP" | No case mentions prototyping. The word appears only in the Home's "What I do" line | A case that shows prototyping work, if one exists and can be published. Otherwise, rank for it through the marketplaces |
| "design system consultant / hire" | Marketplace SERPs, and no page on the site states the service | A services or "Work with me" section that states what he offers, if he wants to be hired that way (a positioning decision, not an SEO one) |

## How to add a row

New page → add its row here **before** it ships, with the target and intent confirmed by
Marcel. Then follow SKILL.md trap 2 (register the route) and "Before saying done".
