---
title: "Every discount, checked against its history"
summary: "Discounts on supplements are often a higher number typed next to the real price. Radar do Scoop checks every price daily, keeps the history, and tells you whether today's price is actually low. It is live at radardoscoop.com."
date: "2026-09-25"
type: "product-ai"
tags: ["Product", "Accessibility", "E-commerce", "AI"]
role: "Conceived, designed and built it, on my own"
timeframe: "2026"
company: "Self-published"
outcome: "A live site that tracks supplement prices every day, flags fake discounts, and compares products by price per 100 grams"
---

## In short

Radar do Scoop checks the price of supplements on Mercado Livre every day and keeps the history. That history is the whole product. With it, the site can tell you whether today's price is actually low, or whether the "discount" on a listing is just a higher number someone typed next to the real one.

It started as a bot. It found deals and posted them to a Telegram channel, and to do that it had to read prices every day. Those prices piled up into a history, and a month later I built a site on top of it.

It is a Brazilian site, in Portuguese, and it is free. Some links carry an affiliate commission, which the site says openly, and there is a page where anyone it helped can send a donation by Pix. I conceived, designed and built all of it on my own.

## How it reads a price

Every product page shows today's price next to the lowest and highest it has seen, and a badge that turns those three numbers into a verdict. The rule is deliberately plain: it looks at where today's price falls between the lowest and the highest. In the bottom quarter, the product is cheap. Up to a little past the middle, the price is average. Above that, it has been cheaper before. If the price has never moved, it says there is no history yet instead of guessing.

The same history catches fake discounts, in two ways. Either the "was" price on the listing is higher than anything the product has actually sold for, or the "now" price is no better than its usual average. Both are common, and neither is visible from the listing alone.

Comparing two products turned out to be mostly about refusing bad comparisons. It only compares products of the same type and the same form, so whey powder is never set against a protein bar. It converts both to a price per 100 grams and then back into money, because what you save for the same amount is what decides a purchase. And when the difference is under three per cent, it does not name a winner, since a price that changes from seller to seller cannot carry a verdict that small.

Creatine needed its own rule. Some products mix it with cheaper fillers, which add weight and make the price per gram look like a bargain. The site filters those out, so the cheapest creatine on the list is actually creatine.

## Building it

I built all of it in Claude Code: the bot, the site and the pipeline between them.

The bot is a small Node program. It reads Mercado Livre's official API on a schedule, filters out what is not worth posting, and publishes the rest to the Telegram channel. The same offers are also written out in a format that pastes cleanly into a WhatsApp channel.

The site runs on Next.js and Vercel, and reads the history from Supabase. A product page refreshes the moment the bot collects a new price, rather than on a timer. The heavy reads are cached, because every page view scanning the whole history was what used up the database's free plan.

The part closest to my day job is the colour. The badges carry their verdict in colour, and in the light theme the full colours only reached 1.9 to 3.6 to 1 as text on their own tinted background, below the 4.5 to 1 that WCAG AA asks for. So each status colour got a second token just for text: the tint stays, and the words darken until they pass.

Around the radar, it grew the things people look up before buying a supplement: calculators for protein, creatine, whey, water, BMI and daily calorie spend, and a blog.

It is live at radardoscoop.com.
