---
title: "A spec the AI can build from"
summary: "Hand a coding agent a Figma link and it sees a picture. Spec Forge extracts the component itself: every layer, every property, every variant, and the design system's own token names. Published on the Figma Community."
date: "2026-07-27"
cover: "spec-forge/cover.webp"
type: "product-ai"
tags: ["Plugin", "Design Tokens", "AI", "Design Systems"]
role: "Conceived, designed and built it, on my own"
timeframe: "2025"
company: "Published on the Figma Community"
outcome: "A published Figma plugin that turns a selected component into a complete, structured spec for a coding agent"
---

## In short

The usual way to get a Figma component into code with an AI agent is to give it a link. The agent gets a picture, or a flat dump of what the layer looks like, and it fills in the rest by guessing.

What it does not get is the component. It cannot see that there are twelve variants, that the icon on the left is a swappable slot with a toggle, that the label pulls four separate typography variables, or that the spacing is a token and not eight pixels.

Spec Forge extracts all of it. You select a component and it walks the whole tree, capturing every layer, every property, every variant, and the design system's own names for the values, then hands you a structured spec to paste into your editor. The agent builds from the component rather than from an impression of it.

It runs entirely inside Figma with no network access, so nothing about the design system leaves the file.

## What it extracts

You select a component, an instance, a variant set or a frame, choose how much detail you want, and run it. The spec comes back as Markdown, ready to paste.

The hard part is not reading Figma. It is deciding what to leave out. A real component set explodes into hundreds of layers, most of them vectors and wrappers that mean nothing to whoever is implementing it, and sending all of that to an agent buries the parts that matter. So every layer that survives the filter carries the reason it survived: it is bound to a variable, it holds text, it references a component property, it is a nested component. Those reasons ship in the spec, so the agent can see what the plugin kept and why rather than trusting a black box.

What comes out is the component as a design system describes it. The variants and the axes that generate them. The properties, including the boolean slots that toggle an icon on and off. The nested instances, with the path that shows where they sit. And the values as the names the system gave them, so a colour arrives as the token it was bound to and a text style arrives as the four typography variables it is actually made of, which is the level of detail an implementation needs.

There are two levels of verbosity and six things you can switch on or off, which matters because a spec for a button and a spec for a full page layout are not the same job.

## How it was built

It started as a script I ran in the browser console: seventy lines that walked a selection and printed JSON. It worked, and it told me the idea was right, but a console script is not something anyone else can use.

The plugin is TypeScript and Preact, built on create-figma-plugin, which ships a component library that already looks like Figma. That mattered more than it sounds. A plugin panel sits inside Figma's own interface, and anything you build by hand reads as slightly wrong next to it, so using the library that already carries Figma's controls and spacing meant the panel belonged there without me designing a single control.

What I did next is the part I would repeat. Instead of asking an AI to build it, I first wrote down the rules it had to follow: use that library and no other, never hardcode a colour or a spacing value when the library already has a token for it, never rebuild a control it already provides, and when something genuinely is missing, stop and tell me instead of inventing a workaround. Then I wrote the shape of the output before any of it existed, so there was a contract to build against rather than a conversation to negotiate.

Those rules are worth reading twice. They are the same discipline I enforce in a design system, applied to the thing writing the code. The plugin exists because agents discard the semantic layer and hardcode values. It would have been strange to build it by letting one do exactly that.

The whole thing went from console script to published plugin in a day. It is on the Figma Community.
