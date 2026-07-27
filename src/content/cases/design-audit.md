---
title: "A design system, read back out of a website"
summary: "Auditing a product by hand takes days and is out of date the moment you finish. Design Audit reads the interface instead: colours, type, icons, spacing and a WCAG pass, collected while you browse. It is live on the Chrome Web Store."
date: "2026-07-27"
cover: "design-audit/print3.webp"
type: "product-ai"
tags: ["Product", "Accessibility", "AI", "Published"]
role: "Conceived, designed and built it, on my own"
timeframe: "2025 to 2026"
company: "Published on the Chrome Web Store"
outcome: "A published Chrome extension that extracts a site's entire visual language while you browse it, and audits it against WCAG"
---

## In short

This started as a way to survive an audit. I was rebuilding Onfly's design system and had to inventory every colour, type size and spacing value in the product, which is done by opening screen after screen and sampling by hand. It takes days, and it is out of date the moment you finish. So I built something that could read the interface instead.

Design Audit runs as a side panel in Chrome, and the thing that makes it different is that you never press a button. You browse the site the way you normally would, and three seconds after each page settles, the extension reads it, adds what it found to what it already had, and throws away the duplicates. By the time you have clicked through a product, a checkout and a settings page, you are holding that site's visual language.

Then it hands it back in a form you can use: an SVG per audit, built to drop into Figma, or one report with everything in it.

The last audit is the one I care most about. It runs the pages you visited against WCAG and scores them, which means the same walk through a site that tells you what its design system is also tells you where it fails the people using it.

## What it audits

Six audits, and each one is a different kind of reading problem.

Colours and spacing are the mechanical ones. Colour walks twelve CSS properties, including the ones people forget are colours at all, like shadows and outlines, normalises everything to hex and sorts the result by hue so a palette comes out looking like a palette. Spacing reads eleven, converts rem and em to pixels so the values are comparable, and counts how often each one appears, because the number that shows up four hundred times is the system and the one that shows up once is a mistake.

Typography has to make a judgement. It carries a list of thirty-four system fonts, so it can tell you which typefaces a site actually chose and which ones it merely fell back to. Then it groups families into their variants, maps the hierarchy from the headings down to body text, and flags sizes that sit within two pixels of each other, which is almost always two people solving the same problem twice.

Icons was the hard one, and it is the largest piece of the extension by a distance. An icon can arrive as a font ligature, as inline SVG, or as an image, so it runs three separate passes. It recognises nine of the common libraries by their own class names, and for a bare SVG with no library behind it, it tries five different ways to work out what the thing is called before giving up.

Grid and layout is the sixth. It reads the containers a page is built from, the way they arrange their children, and the gaps between them, so the layout rhythm comes out alongside the spacing values.

The accessibility audit runs axe-core against WCAG A and AA, scores the pages you visited, and sorts what it finds into categories you can act on.

## Building it

I spend my working life building design systems. So when I built a tool that reads other people's, the part I could not let slide was its own interface.

The extension's UI runs on a token architecture: primitives feeding semantic tokens feeding component tokens, four hundred and sixty-nine of them across sixteen files, with a seventeen-component library on top. That is more structure than a side panel needs. I built it that way because a tool that tells you your spacing is inconsistent has no business being inconsistent, and because I wanted to find out what the architecture I recommend to teams feels like when I am the one who has to live inside it for nine months.

It is vanilla JavaScript. No framework, no build step, no bundler, no module system beyond the browser's own. That was a decision, not a shortcut. An extension is judged on what it does to the page it is inspecting, and every dependency is another thing running next to the site I am trying to read accurately. It also meant the thing I shipped is the thing I wrote, which made nine months of picking it back up considerably easier.

Turning it into something people could pay for was its own build. There is an email login that sends and verifies its own one-time codes, and an entitlement check that has to answer before the panel decides what to show, because the audits that extract a site's visual language are open to everyone and the accessibility report is the part that is paid. None of that is design work. All of it had to exist before the first person could subscribe, and it is the difference between a project I would have shown a friend and a product with strangers in it.

The last version exists for a reason that has nothing to do with either. The Chrome Web Store rejects extensions that load code from a CDN, so shipping meant pulling a component library out of a script tag and vendoring it into the package.

It is live on the Chrome Web Store.
