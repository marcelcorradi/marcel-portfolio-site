---
title: "Colour decisions, written as an algorithm"
summary: "Every design system needs semantic colours, and they are usually picked by eye. Atomic Colors builds them from a single brand colour and checks them for colour blindness before you ever see them. It is free at atomicolors.com."
date: "2026-09-25"
cover: "atomic-works/semantic-suggestions.webp"
type: "product-ai"
tags: ["Product", "Design Tokens", "Accessibility", "AI"]
role: "Conceived, designed and built it, on my own"
timeframe: "2025 to 2026"
company: "Self-published"
outcome: "A free web app that turns one colour into a full palette, checks it for colour blindness, and exports it in five formats"
seoTitle: "Atomic Colors, a semantic colour palette generator"
seoDescription: "A free web app that turns one brand colour into a full palette, checks it for colour blindness and exports it in five formats. How I designed and built it."
---

## In short

Every design system needs semantic colours: error, warning, success. They are usually picked by eye, one at a time, until the set looks right.

Atomic Colors does it from one colour. You give it your brand colour and it builds a full palette: eleven shades of it, plus the semantic colours a system needs. Then it exports the whole thing as code, ready to paste into a project or import into Figma.

The part that does not exist anywhere else is the check underneath. Before it hands you the palette, it simulates how every colour looks to someone who is colour blind, and makes sure the semantics are still distinguishable from each other. If two of them are not, it fixes that before you ever see it.

I built it on my own, first in Figma Make and then in Claude Code. It works in English and Portuguese, and it is free to use, with no account to create.

## What it actually does

You type in one hex code. The tool gives back eleven shades, from lightest to darkest, built the same way a designer would build them in Figma by layering the colour over white or black. That means the code it exports matches what you would have got by hand.

Then it proposes the semantic colours, the ones that carry meaning rather than brand: error, warning, success, info, discovery and a neutral. Each one arrives with the reasoning attached, so it is clear why it landed there.

If you do not like a suggestion, there is a refresh button. It cycles through six different versions, all of which pass the same checks.

Export is five formats: CSS, SCSS, JavaScript, JSON, and a JSON built to match Figma variables, so the palette imports straight into Figma instead of being rebuilt by hand.

## Shipping it

The colour engine was the interesting problem. Everything after it was the part that decides whether something is a project or a product: a backend to verify subscriptions, an email login that sent its own one-time codes, a payment integration, and every screen written twice so it works in English and Portuguese. None of that is design work, and all of it had to exist before the first person could pay for it.

Then I took the paid part out. I changed how I put my tools into the world, and I would rather show what they are worth by giving them away. The subscription, the login and the backend behind them are gone. Every colour, every suggestion and every export is open, with no account, and all of it runs in the browser.

The same week, I moved it out of Figma Make, where I built it, and left nothing behind there. It now lives in Claude Code and its own repository, and every change deploys to Cloudflare by itself. Figma Make had been publishing the site on its own and never took changes back from the code, so moving out was the only way to own the whole thing. It is also what let me add pages that explain the method, and one page for each of the 137 named CSS colours showing what the engine does with it.

It is live at atomicolors.com, free, with no account to create.
