---
title: "Seven brands, one system"
summary: "Whirlpool's design libraries were alive and in daily use, so the foundation had to be installed underneath them without asking anyone to stop. This is how a global token architecture went live in its second month, on web and on mobile, and made a brand a configuration rather than a fork."
date: "2026-07-26"
cover: ""
type: "design-system"
tags: ["Design Systems", "Design Tokens", "Governance", "Multi-brand", "Multi-platform", "Enterprise"]
role: "Senior Product Designer, Design System"
timeframe: "May 2025 to Sep 2025"
company: "Whirlpool"
outcome: "1,139 tokens across 7 brands on web and 4 on mobile, live from the second month"
---

## In short

Whirlpool sells appliances under a portfolio of brands, and each of those brands had its own interfaces on web and on mobile. Some of them already had Figma libraries that teams were actively using. The problem was not a missing library. It was that nothing underneath them was shared.

I joined through Môre in May 2025, into a queue of component work and the job of defining how the design system should be architected. The goal was not to replace what was already in use. It was to build a global foundation beneath it: a token layer the existing libraries could link to and adopt incrementally, without any team having to stop and rebuild.

I created that foundation, the Global Design System, from scratch. It resolves two dimensions of variation at once, brand and platform, through a three-tier architecture: 213 primitives, 61 brand-agnostic globals, and a theme layer of 379 tokens. That theme layer is the part I care about most. Every one of the 7 brands has the same 379 tokens, with the same names. Switching brand changes the values and never the structure, so a brand is a configuration of the system rather than a fork of it.

The same logic reached the components. The web library's button is one component set carrying 99 variants, instead of one button per brand.

In parallel I took over Polaris, the design system behind their mobile app. That one already existed, so the work was different: I corrected problems in its token architecture, refined the structure, maintained its components, and built new ones.

The foundation went live in my second month and was in use from then on, linked to the web library and evolving as teams built against it.

## The constraint that shaped everything

A global appliance company does not have one interface. It has one per brand and per platform, and all of them are shipping while you work.

On the web side, the brands I was building for were Whirlpool, Whirlpool B2B, KitchenAid, Maytag, JennAir, Amana, and Aether. Seven. On mobile, the app covered Whirlpool, KitchenAid, Maytag, and JennAir. The mobile app is not a storefront either. It talks to connected appliances, so it carries components a shopping interface never needs: cycle status, tracking, appliance selection, mode buttons, wheel pickers.

That is two dimensions of variation at once. A component has to be right for the brand and right for the platform, and those two questions have different answers.

The usual way to solve it is the wrong way. You copy the library, retheme it per brand, and now you maintain seven of everything. Every fix has to be applied seven times, and within a quarter the seven have drifted apart. That is not a design system. It is seven design systems with a shared origin story.

The second constraint was harder, and it is the one that decided the approach. The Figma libraries already existed and teams were using them every day. I was not walking into a blank file. Anything I built had to be adoptable without asking a single team to stop and rebuild, because no global business is going to pause its roadmap so a foundation can be installed underneath it.

So the foundation had to arrive as a layer, not as a replacement. Tokens first, linkable, so an existing library could point at them and inherit the system without being rewritten. Adoption becomes incremental instead of a migration.

I was one of three people on it. I did the crafting, the architecture, the documentation, and the system rules. A design ops specialist handled operations, and early on he reviewed my decisions to see how I was working. Once he had seen the deliveries, he told me he would give me autonomy on the technical calls because he trusted the work, and from then on those decisions were mine to make and his to be kept aligned with. A head of product who had recently joined stayed close throughout, working through how the whole thing should be built. That shape mattered, because an architecture nobody else understands is not an architecture. It is a preference.

## What I found

I arrived into technical demand. There was crafting waiting for me from the start, so I was working on components in my first weeks rather than producing a diagnosis.

The analysis happened alongside it. I went through their files and studied what was already there, layer by layer, while I was delivering. I also started sitting in the meetings where the global system was being defined. That was the right sequence for this engagement: nobody needed convincing that a foundation was worth building, so there was no case to make with interviews, audits, or an inventory. What I needed was enough context to define an architecture correctly, and quick analysis of the existing structures gave me that.

Polaris, the mobile system, was the more revealing of the two. It had a real token structure already: primitives, a theme layer, published styles, four brands. Someone had done serious work there. But the proportions were upside down. Of the 321 tokens in each brand theme, 252 were component tokens and only 69 were semantic.

That ratio is the whole diagnosis. Semantic tokens are the vocabulary a system thinks in: surface, border, text, the meanings a designer reaches for. Component tokens are the specific decisions that sit on top of them. When components outnumber semantics by well over three to one, it means the system grew by answering one component at a time. Each new component brought its own tokens rather than finding what it needed already defined. It works, and it keeps working, right up until you need two systems to agree on anything. Then there is no shared vocabulary to agree in.

None of this was carelessness. It is what a system looks like when it has been maintained under delivery pressure without anyone being given the time to own its foundation. Every one of those 252 component tokens solved a real problem the day it was added.

The web side was the opposite situation. There were maintained libraries in use, but no shared foundation beneath them at all. Nothing to correct, and nothing to build on either.

So the two halves needed different work, and I did both at once. Polaris needed correcting from the inside, without breaking an app in production. The web needed a foundation that did not exist yet. Bringing the two together was an expectation for later rather than a plan with a date, but it still had to be possible, so the new foundation had to be built as something Polaris could eventually migrate onto.

## The architecture

The foundation had to answer one question well: where does a decision live so that it only has to be made once?

I built it in three tiers. Primitives hold the raw values, and they are organized by brand, because a brand's palette is the one thing that genuinely cannot be shared: 213 of them across the seven brands. Globals hold what every brand agrees on regardless of identity, which turned out to be 61 tokens of border, scale, and structural color. Then the theme layer, 379 tokens, split into 337 semantics, 40 component tokens, and 2 composites.

That split is deliberate, and it is the correction of what I had found in Polaris. Semantics outnumber component tokens more than eight to one here, where the mobile system had it the other way around. A designer working in this system reaches for a meaning, not a component's private value. When a new component arrives, most of what it needs already exists.

The part that matters most is not any of those numbers. It is that all seven brands have the same 379 tokens, with the same names. Not similar ones. The same ones.

That is what makes a brand a configuration instead of a fork. Switch the brand and every surface, every border, every text color takes that brand's value for the same token. There is no branch of the library where KitchenAid lives. Adding a brand means filling in 379 values, and the components already know what to do with them, which is why Whirlpool B2B and Aether could exist alongside the consumer brands without anyone building a second library.

When every brand has to fill in the same 379 tokens, a value that only one brand needs has nowhere to go. The structure catches it on its own, without anyone having to police it. That is the part documentation cannot do.

The same principle carried into the components. Rather than a button per brand, the web library's button is one component set holding 99 variants, the matrix of size, state, and hierarchy resolved once and themed by whichever brand's tokens are attached. 55 components and 33 component sets, 240 variants in total. Product Card and Product Container were the most involved, at 52 and 24 variants, because each is assembled from smaller components: Product Container has its own header, image gallery and product info, and each of those is a component in its own right.

On the Polaris side the work was corrective rather than architectural. I could not restructure a system running in a shipped app, so I improved it from the inside: fixing problems in the token structure, refining what was there, maintaining components, and building new ones as the app needed them, while keeping the eventual migration path to the global foundation in view.

## Getting to one architecture

The group making these decisions was small: me, the design ops specialist, and a head of product who had recently joined.

That size was an advantage. A foundation is a bet on how a product will be built for years, and the three of us could actually work through it together rather than trading documents. I brought the architecture and the reasoning behind it, the head of product brought where the product was going, and the specialist brought what would survive in day to day operation. We arrived at a shared position over a series of conversations rather than in a single approval meeting.

That was the right way to get there. An architecture only holds if the people responsible for the product believe in it, and belief comes from having helped shape something, not from being shown a finished proposal.

The distribution of the work shifted as that alignment settled. Early on the specialist reviewed my architectural decisions to see how I was working. Once the deliveries were in front of him, he told me he trusted the work and would leave those calls to me. Being handed that is different from taking it, and it changed what I was accountable for.

## Where it stood when I left

The foundation went live in my second month. That is the part I would point at first, because a design system that ships early gets corrected by real use, and one that stays in a file until it is complete gets corrected by nobody. For the remaining three months it was being used, fed, and evolved while I worked on it, and that continued after I left.

The Global Design System existed where nothing had existed before: 653 token definitions across three tiers, giving all seven brands the same 379 tokens. It was linked to the web library and in use. The web library itself carried 55 components and 33 component sets, 240 variants, with a button that answers every brand from one place. Polaris had a token structure that no longer worked against the system it was meant to support, along with the components I maintained and the new ones the app needed.

The teams there were large, and I do not have a reliable count of how many designers and developers ended up building against the foundation. I would rather say that than publish a number I cannot stand behind.

What was not done is easy to name. The two systems never converged. Polaris stayed on its own tokens, structurally closer to the global foundation than when I arrived but still separate, and unifying them was work for whoever came next. The Atomic Design structure in the web library was defined and still being populated, with pages standing ready for the components that had not been built yet.

I am also honest about the limits of what five months tells you. I left before the system had to survive the things that actually test a design system: a brand refresh, a platform migration, a team that inherits it without the person who designed it. I know the architecture was right for the problem in front of us. I do not yet know how it aged, and I would not pretend the engagement was long enough to find out.

What I am sure of is narrower. Giving all seven brands the same 379 tokens was the decision that mattered. Most of the other choices in that foundation could have gone differently without much consequence, but that one is what turned a portfolio of brands into a single system.
