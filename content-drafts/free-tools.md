# Free tools: facts and Marcel's own words

Shared source for the Design Audit, Atomic Colors and Portfolio Kit cases and the /tools page.

## Why the tools are free (Marcel, 2026-09-25, verbatim PT)

> "a razão pros dois é que eu mudei meu modelo de disponibilizar minhas ferramentas. Prefiro mostrar valor com elas gratuitas e se a pessoa quiser dar um suporte ela pode doar. Acho esse modelo mais alinhado com meus princípios de vida."

This is the reason for BOTH Design Audit and Atomic Colors. Do not substitute the market reasons from the Atomic Colors commit (zero subscribers, free competitors) unless Marcel asks for them.

## Design Audit (v2.4.0, 2026-09-24, commit bb6b0c5)
- Removed: PRO plan, login (email OTP), entitlement check, whole backend (Supabase auth + Edge Functions, Whop, Resend).
- Now: every audit, the HTML report and all SVG exports free; no account, no page limit.
- The extension makes no network calls.
- Support: "Support me" link in the panel header -> "Support the project" section -> "Copy PayPal email" button. No donate link (personal PayPal account).
- Case keeps the paid-layer build as history, then says it was removed (Marcel's choice).

## Atomic Colors (2026-09-21, commit 286d983)
- Free. **NOT open source** (Marcel, 2026-09-25), even though the AC repo README/LICENSE say MIT.
- No support option in the product yet; Marcel will add one. Mention it only once it exists.
- **Figma Make does nothing anymore** (Marcel, 2026-09-25). Built first in Figma Make, now 100% in Claude Code + its own repo, deployed on Cloudflare on every push (verified: atomicolors.com served by Cloudflare with the repo's `_headers`). Never write that it "runs in" or "is hosted on" Figma Make.
- Timeframe "2025 to 2026"; company "Self-published" (Atomic Works domain is gone).
