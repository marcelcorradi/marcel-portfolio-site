# Portfolio Kit case: facts

Repo: `C:\claudedev\portfolio-kit` -> https://github.com/marcelcorradi/portfolio-kit (private until Marcel flips it). Download: https://github.com/marcelcorradi/portfolio-kit/releases/latest

## Decisions (Marcel, 2026-09-25)
- Free, **MIT** (open source, unlike Atomic Colors).
- Current repo made public (history kept; LISTING.md and ASSETS.md removed in 1.1.0).
- "buyer" wording replaced with "owner" in docs and the update skill.
- README has a Support section: optional PayPal donation to marcelcorradi@hotmail.com.
- Distributed as a ZIP on GitHub Releases (v1.1.0 tag pushed 2026-09-25; zip built with `git archive`, no top-level folder, 98 files).

## Why (Marcel, 2026-09-25, verbatim PT)
> "pra ajudar outras pessoas a construirem seus portfolios. Como funcionou pra mim, quis criar um kit"

- Case may say it was built to be sold first, then given away (same reason as free-tools.md). **No price, no marketplace name.**

## What it is (README)
- "A portfolio site you build *with AI*, not a template you rename."
- Production foundation: Vite, React 19, Tailwind v4, shadcn/ui, TypeScript, dark mode, per-route SEO, sitemap generator, GitHub Pages deploy workflow.
- Markdown case engine: drop a file in a folder, it publishes. No CMS.
- Skills: `setup` (/setup first-run interview), `portfolio-orchestrator` (holds decisions, routes work, quality checklist based on the mistakes that get portfolios rejected), `portfolio-content` (inverted pyramid, hook formula, self-reflection; only facts you give it), `portfolio-design` (opinionated anti-template design, themed to your brand colour), `update` (/update applies a new version without touching your work).
- Starts blank on purpose. "takes an afternoon, not five minutes." Not a writing service: refuses to invent facts.

## /setup (from .claude/skills/setup/SKILL.md)
- Q1 technical comfort, first, because it changes how the agent speaks for the rest of the session ("I'm a designer, walk me through the terminal steps").
- Identity, the differentiator ("the most important answer"), contact, where it will live (custom domain / GitHub Pages / later), brand colour asked as intent not hex (confident/warm/calm/bold -> hue range, converted to OKLCH brand tokens), typography, their work.
- Never uses a real person's name as an example.

## /update (manifest)
- Every path is KIT (replaced), OWNER (never touched: cases, images, CNAME, identity, profile) or MIXED (merged surgically: index.css brand values, package.json deps, routes).

## History
- 2026-07-31: "Extract the blank foundation from the portfolio site" (this site, marcelcorradi.com). Extraction had to leave behind personal data and client IP.
- 2026-08-03: skills rewritten as a product, /setup wizard, docs, license, listing.
- 2026-08-04: /update skill.
- Was prepared for sale on Agensi ($79) but **never launched / never sold**. Don't claim sales.
- Demo testing (agent-studio/docs/method.md:110): running /setup as a fresh user with a fictional persona surfaced four issues code review had passed: an `isConfigured()` gate contradicting the "local-only" option (real Home never showed), page titles joined with a forbidden em dash, a setup step collecting free text through a multiple-choice tool (answers came back empty), and the agent volunteering a real person's name in an example.
- Two demo runs exist: portfolio-kit-demo (fictional "John Winston", Product Designer) and portfolio-kit-demo2 (fictional "Mariana Alves", UX Designer).
- 2026-09-25: 1.1.0, free under MIT.
