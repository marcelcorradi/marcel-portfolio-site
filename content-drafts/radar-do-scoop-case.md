# Radar do Scoop case: facts

Source repo: `C:\claudedev\bots-promos-telegram`. Live: https://radardoscoop.com (200 on 2026-09-25). Site is in Portuguese, for Brazilian shoppers.

## Decisions (Marcel, 2026-09-25)
- Angle: consumer product. **No revenue, affiliate earnings, B2B panel or TikTok numbers.**
- Origin: the bot came first, then the site grew out of the price data it was already collecting. No personal motive stated; don't invent one.
- Affiliate commission may be mentioned as a fact (the site discloses it on /como-funciona).
- Mention the /apoiar Pix donation page (ties to his free + donation model, see free-tools.md).
- Text only for now; screenshots later.

## Timeline (git)
- 2026-06-19 initial commit (bot); 1.0.0 on 2026-06-22.
- 2026-07-19 first commits of the web site (1.4.0 / 1.5.0).
- 2026-07-23 /apoiar (Pix donation, key + QR code).
- 2026-08-11 /ferramentas calculators (BMI, BMR/calorie spend; also protein, creatine, whey, water).
- Last commit 2026-09-09.

## What it does (verified in code)
- Collects the price of each product from Mercado Livre daily and stores a timeline (Supabase). Product page shows current, lowest and highest price, a chart, and a badge.
- Badge (`web/components/PriceBadge.tsx`): position of today's price between lowest and highest seen. <= 25% "Está barato", <= 60% "Preço mediano", else "Já esteve mais barato"; no variation = "Sem histórico ainda".
- Suspicious discount (`web/lib/precos.ts`): the advertised "de R$ X" sits above the highest price actually seen ("de-inflado"), or the "discounted" price is no better than the historical average ("nao-e-barato").
- Compare (`web/lib/comparar.ts`): only same type and same physical form (whey powder vs whey powder); normalises to R$/100g and translates it into money for the same quantity; declines to name a winner below a minimum difference ("false precision").
- Creatine (`web/lib/creatina.ts`): filters out creatine mixed with fillers (maltodextrin, protein), whose weight makes price per gram look artificially low.
- Accessibility: badge colours use a full token for the tinted background and a "-text" variant for text, because the full colours rendered 1.9 to 3.6:1 as text in light theme, below WCAG AA 4.5:1.
- Bot: telegraf + node-cron, posts to the Telegram channel t.me/promobrsuplementos; the same offers are written to daily .txt files formatted for copy-and-paste into a WhatsApp channel (manual paste).
- /ofertas is the feed of the bot's posts. Also an MDX blog.
- Stack: Node bot; site Next.js 16, React 19, Tailwind v4, shadcn, recharts, Supabase, Vercel. No AI in the runtime. **Everything (bot and site) built in Claude Code** (Marcel, 2026-09-25).
- /apoiar copy: independent project "tocado por uma pessoa só"; Pix is optional; nothing is locked behind donation.
