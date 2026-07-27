---
title: "Colour decisions, written as an algorithm"
summary: "Every design system needs semantic colours, and they are usually picked by eye. Atomic Colors builds them from a single brand colour and checks them for colour blindness before you ever see them. It runs as a paid product at atomicolors.com."
date: "2026-07-27"
cover: "atomic-works/semantic-suggestions.webp"
type: "product-ai"
tags: ["Product", "Design Tokens", "Accessibility", "AI"]
role: "Conceived, designed and built it, on my own"
timeframe: "2025"
company: "Atomic Works (self-published)"
outcome: "A paid product that turns one colour into a full palette, checks it for colour blindness, and exports it in five formats"
---

## In short

Every design system needs semantic colours: error, warning, success. They are usually picked by eye, one at a time, until the set looks right.

Atomic Colors does it from one colour. You give it your brand colour and it builds a full palette: eleven shades of it, plus the semantic colours a system needs. Then it exports the whole thing as code, ready to paste into a project or import into Figma.

The part that does not exist anywhere else is the check underneath. Before it hands you the palette, it simulates how every colour looks to someone who is colour blind, and makes sure the semantics are still distinguishable from each other. If two of them are not, it fixes that before you ever see it.

I built it in Figma Make, and it still runs there. It sells a subscription, sends its own login codes, and works in English and Portuguese.

## What it actually does

You type in one hex code. The tool gives back eleven shades, from lightest to darkest, built the same way a designer would build them in Figma by layering the colour over white or black. That means the code it exports matches what you would have got by hand.

Then it proposes the semantic colours, the ones that carry meaning rather than brand: error, warning, success, info, discovery and a neutral. Each one arrives with the reasoning attached, so it is clear why it landed there.

If you do not like a suggestion, there is a refresh button. It cycles through six different versions, all of which pass the same checks.

Export is five formats: CSS, SCSS, JavaScript, JSON, and a JSON built to match Figma variables, so the palette imports straight into Figma instead of being rebuilt by hand.

## Shipping it

It is live at atomicolors.com as a paid product.

The colour engine was the interesting problem. Everything after it was the part that decides whether something is a project or a product: a backend to verify subscriptions, an email login that sends its own one time codes, a payment integration, and every screen written twice so it works in English and Portuguese. None of that is design work, and all of it had to exist before the first person could pay for it.

It all runs inside Figma Make, which is where I built it. That was never the plan for a product with a checkout, and it is the part I would not have predicted at the start.
