---
title: "A design system that keeps itself in sync"
summary: "Onfly's design system was not missing when I arrived. It was orphaned. This is how a framework nobody owned and a Figma library nobody trusted became one system, adopted by 5 designers and around 40 developers."
date: "2026-07-01"
cover: "onfly/tokens-1.webp"
type: "design-system"
tags: ["Design Systems", "Design Tokens", "Design Ops", "Accessibility", "AI", "B2B"]
role: "Senior Product Designer, Design System"
timeframe: "Sep 2025 to Jul 2026"
company: "Onfly"
outcome: "611 tokens and 143 components, adopted by 5 designers and around 40 developers"
---

## In short

Onfly is a Brazilian B2B platform for corporate travel management. When I joined as Senior Product Designer in September 2025, the design system was not missing. It was orphaned.

A Vue and Quasar UI framework already existed, with components customized for the product, and so did a Figma library. The two had never been connected. The team that built the framework had been dissolved, so a few developers kept it alive on the side while it drifted further from design every sprint.

I did not start by drawing components. I started by interviewing stakeholders and building a dashboard to make their pain visible, then audited the product screen by screen. The audit was tedious enough that I began building my own tool to speed it up, which later became Design Audit, published on the Chrome Web Store.

On that foundation I built a 611-token architecture across primitive, semantic, and component levels, and then the piece that had never existed. Tokens live as Figma Variables, export as JSON, and pass through AI agents I built to become the SCSS that the Quasar framework consumes. Design and code finally read from the same source.

The system covers 143 components, and it is used by 5 designers and around 40 developers. I built it without a dedicated design system team, by negotiating its adoption into the roadmaps of the product squads.

## Starting with people, not screens

Before touching a component, I needed to know whether the problem I had been hired to solve was the problem the company actually had. So I spent my first weeks interviewing the people who would have to live with the result.

I talked to 24 people across technology, design, product, marketing, and executive leadership, including the CEO, the CTO, and the product director. Between them they averaged nearly two years at the company. That range was deliberate. A design system fails when it is built for designers alone, and the people who would fund it, prioritize it, and maintain it all sat in different rooms.

The conversations produced 482 insights, which was more than I could hold in my head or in a document. So I built a pipeline instead. Meeting transcripts went through AI-assisted categorization, into a structured database where every insight carried a type, a category, and tags. A Ruby script turned that into JSON, and I built a dashboard on top of it so the pattern could be filtered by team, by type, and by theme.

The picture that came back was specific. 36% of everything I heard was a pain, and 54% of those pains sat in one category: the design system. One tag appeared 101 times, more than double any other, and it was standardization. After it came communication, documentation, components, rework, and speed.

That mattered more than the volume. Five departments that did not plan their answers together were describing the same problem in the same words. The team was not asking for a component library because component libraries are good practice. They were describing rework they could measure and decisions that took too long.

The dashboard closed with the part I cared about most: each recommendation tied back to the evidence that supported it, and a map of which stakeholders were raising which concerns. That gave me something more useful than a mandate. It gave me a quantified account of the problem that I could take into any room in the company and point at.

## What the audit found

The interviews told me what the team felt. The next step was measuring what was actually there.

I audited the foundations of the product against four competitors: Travelperk, Navan, TripBiz, and Expensify. That comparison mattered more than an internal count would have. It is easy to dismiss a designer saying the product is inconsistent. It is harder to dismiss a number sitting next to the same number from a company solving the same problem.

The typography came back at 102 distinct variants. Travelperk was running 17. Onfly was carrying two type families, Poppins and Rubik, with no hierarchy deciding when to use which, while the better-structured competitors used one family on a modular scale.

Color told the same story: 60 colors with no organization, among them 16 greys where Travelperk used 7, and 13 blues with no defined purpose. Several were nearly identical to each other, different enough to be separate values and not different enough for anyone to see why.

Spacing was the clearest signal. 101 unique values against Travelperk's 44, spread across margins, paddings, and gaps with no standard between them. Some were values no one would type on purpose, like 4.8px or 14.69px, which most likely came out of unit conversion or computed layout rather than someone's hand. That distinction mattered less than the dispersion itself. Whatever produced them, there was no scale underneath for anything to land on.

I also inventoried the components on the main screens of web and app, and found 40 component types on web and 14 on app. Types, not instances: a button counted once, however many versions of it existed. Side by side, those versions did not agree on color, on corner radius, on height, or on whether labels were uppercase.

Then I ran an automated accessibility audit. The home page returned 26% compliance with WCAG 2.1 A and AA: 49 violations against 17 passing criteria.

A number like that is easy to nod at and hard to act on, so I did not stop there. I took the violations apart one by one, tied each to the criterion it broke, and wrote the fix next to it. Three of them show the range of what was failing.

None of this was anyone's fault. It is what accumulates when a product ships for years without a system underneath, and every one of those 102 type variants was once a reasonable local decision.

Auditing at this level is normally where a designer's time disappears. Collecting every color in a product means opening screen after screen, sampling values by hand, and pasting them into a Figma file until you have something resembling an inventory. It takes days, and it is out of date the moment you finish.

I did not have days, so I built a tool that could do it in minutes: colors, typography, icons, spacing, grids, and accessibility, collected automatically from any interface. It started as a way to survive the Onfly audit. It is now Design Audit, published on the Chrome Web Store.

One caveat I kept in the report and keep here: I audited the main screens, not every screen. The real numbers were larger than the ones I measured.

## Rebuilding the foundation

The audit gave me a problem I could state precisely: the product had values, but no system deciding them. So the foundation had to come before any component.

I built it in three layers. Primitives hold the raw values, a base scale for dimensions and six color families with ordered steps: brand, gray, neutral, success, warning, and danger. Semantic tokens sit above them and carry meaning rather than value, pointing back at the primitives. Component tokens sit at the top for cases where a specific part needs its own decision.

The difference shows in a single line. `spacing.stack.md` does not store 16px. It points at `scale.16`. Change the scale and every stacked layout in the product follows, because nothing downstream owns a number.

That is what replaced the 101 spacing values. The system exposes seven semantic steps, from none to xl, across three directional axes: stack for vertical rhythm, inline for horizontal, inset for padding. A designer no longer picks a number. They pick an intent, and the intent resolves to a value the system controls.

Color went the same way. The 60 unorganized colors became six primitive families, and above them 118 semantic tokens grouped by what they do: 46 for backgrounds, 36 for content, 34 for borders. `color.background.disabled-subtle` says what it is for and resolves to `gray.100`. The old palette had a hex that someone had once picked and everyone after had copied.

Two decisions in the foundation are worth naming. Desktop and mobile are modes of the same collection rather than separate token sets, so responsive behavior lives in the token layer instead of in duplicated components. And `focus-ring` exists as its own token, because after auditing a product at 26% WCAG compliance, I was not going to leave focus states to whoever built the next component.

The scale is mostly built on multiples of four, with exceptions. There are values like 38 and 108 in it because specific parts of the product needed them. I could have forced those cases onto the nearest step and had a cleaner system that people worked around. A foundation nobody adopts is not a foundation.

Altogether it came to 611 tokens, and on top of them a Figma library rebuilt from scratch: 143 components with named layers, auto layout, and slot-based structure. The old library was not restructured. Its crafting could not carry a token architecture, and rebuilding cost less than repairing.

## Closing the loop between Figma and code

A token architecture in Figma is a document. It becomes a system when the code is reading from it.

That was the gap I had been hired into. The framework and the library had never been connected, so every change in one was a manual promise to update the other, and promises like that hold for about a sprint.

The tokens live as Figma Variables, which means they export as structured JSON rather than as a screenshot of a decision. From there they pass through a conversion step that turns them into the SCSS the Quasar components consume. A designer changes a semantic token in Figma, and the value reaches the components without anyone retyping it.

What that removes is not typing. It is drift. Before, a color changed in Figma and stayed changed in Figma, while the product kept shipping the old value until someone noticed, filed it, and a developer found time. The gap between the two was never a decision anyone made. It was just the cost of them being separate files.

This is the part of the project I am most satisfied with, and it is also the part that most depended on my background. I built the conversion as a skill with a script, then took it to a developer, who improved it and organized it properly inside the framework's codebase before it shipped there. I could not have merged it alone, and I did not need to. What mattered is that the conversation started from something that already ran, instead of from a request for someone else to build it. That kind of task normally sits in a backlog until a developer has time for it, and it rarely gets to the top.

## The design agent

Onfly was running its agents on Paperclip, a platform where autonomous agents from different teams hold positions, take work, and talk to each other. Product had one. Engineering had one. Design did not, and I was the one who built it.

The obvious version of a design agent generates a screen from a prompt. That version is also the one that recreates the problem I had just spent months fixing, because a model asked for a form will happily produce a raw Quasar input and a hex color it invented. Speed that reintroduces inconsistency is not speed.

So the agent I built runs a pipeline instead. A user story arrives from the product agent and passes through five stages: clarification, discovery, UX writing, PRD, and only then frontend. Each stage is a separate skill that writes its output to a run folder named after the Jira issue, and each one refuses to start until the previous stage's gate says it is complete. The folder is committed, so any run can be paused, resumed, audited, or picked apart by a person later.

Three points in that flow deliberately leave the machine. The agent asks the product agent when the story is missing something it needs. It escalates to a human designer when it cannot make a call. And it requests approval on the preview before anything is treated as delivered. Deciding where an autonomous system should stop and ask was more of the design work than the prompts were.

The part that mattered most was whether it actually respected the system. So I measured it: three real screens from the product, a new expense form, an approval list, and a manager dashboard, each generated three times with the design system skill and three times without it, graded against assertions like uses the framework's input component, uses semantic color props, and contains no hardcoded hex.

Without the skill, 44% of the assertions passed. With the first version, 78%. I used the failures to revise it, and the second version reached 98%.

## Adoption without a dedicated team

The design system did not have a team. It had me, and a company that had decided the work would be decentralized, absorbed by the product squads rather than owned by a group.

That constraint set the strategy. A system with no team cannot ask anyone to stop and migrate. It has to grow inside work that was already going to happen.

So the agreement was this: whenever a designer delivered a screen using the new components and tokens, the product team would fit a step in before development, updating those components in the framework. Not the whole flow. Not every component. My only ask was that each delivery update at least one component that had not been touched yet.

That last part is the whole mechanism. One component per delivery is small enough that no squad has to defend it in planning, and it compounds. Every screen that shipped left the framework slightly more complete than it found it, and the components updated early were the ones being used most, so the benefit arrived before the work was finished.

Old and new coexisted deliberately. An updated button shipped as `onf-ds-button` alongside the original rather than replacing it, so nothing broke and no team was forced to migrate on someone else's schedule. The old Figma library was retired the same way. Nobody migrated their files. Designers simply used the new library for new work, and the old one stopped being where anything happened.

Product pushed back at first, and they were right to. They were working under delivery pressure and being asked to absorb work that was not theirs. That conversation is what produced the one-component rule: I did not need the flow migrated, I needed it to move. Asking for less was what made it possible to ask at all.

Being the only entry point for design system requests created its own problem, so I built a form for the design team to submit them. It fed the requests straight into my Trello as cards. With a dedicated team that would have been a person's job. Without one, it had to be automated, or it would have been me copying requests by hand instead of building the system.

The result was that adoption did not depend on authority I did not have. It ran on 5 designers and around 40 developers making small, individually reasonable decisions inside their own roadmaps.

## Results and what I would do differently

The system ended up adopted by 5 designers and around 40 developers: 611 tokens, 143 components, a Figma library connected to the framework it describes, and an agent that generates screens the system recognizes as its own.

The part I did not get right was the beginning.

After the interviews I proposed the approach this case describes: work through the existing framework, grow it incrementally, keep the product moving. That direction was not the one chosen. The design lead wanted to start from new visual concepts and redesigned screens, and for a while that is what we did.

I disagreed, and I could not make the case land. I had the interviews, the audit, and the benchmark, and none of it was enough. That is the thing I actually learned here, and it took longer than it should have: evidence does not decide anything on its own. Being right early is worth very little if you cannot move the people who choose the direction, and I have stopped treating that as someone else's job.

What I did instead was build for being wrong. While the new concepts were being explored, and new colors and a different brand color were being requested, I structured the tokens so that reversing any of it would be cheap. Semantic tokens pointing at primitives meant a brand color was one reference to change, not a search through screens and code.

The concept was eventually dropped, and the direction came back to the incremental approach. Because of how the tokens were built, restoring the previous colors took very little time. It cost the project two to three months, which is real, and it is the clearest argument I have for why the foundation goes first: the foundation is what made an expensive detour survivable.

Two things surprised me. The first is that the strategic read I formed in week three, from listening to 24 people, turned out to be the right one. I trust that instinct more now. The second is that the hardest part of building a design system was never the tokens or the components. It was the negotiating: convincing squads under delivery pressure, working without a dedicated team, and getting a system adopted by people who did not report to me. I got substantially better at that here, because the situation left no other option.

The other lesson is about the tooling. Over these months I built an audit extension, an interview dashboard, an intake form, and an agent pipeline. Three of the tools I publish today came out of the same period: Design Audit, built to get through the audit itself; Spec Forge, to keep token context intact when design work moves to code; and Atomic Colors, which came out of the detour. Building the new palettes meant working out techniques for generating color scales, and when the concept was dropped and the colors went back to the brand's existing palette, the techniques were still worth something. I built all of them because I needed them, and I could not have built any of them without AI. It did not do the work on its own. Every one needed someone who knew what the output was supposed to look like and could tell when it was wrong. That combination is what I want to keep doing.
