---
title: "The design system I had to sell first"
summary: "Esfera had component libraries but no design system, and no one had asked for one. So it was earned in stages: months of studies to make the case internally, then pilot journeys redesigned and approved, then tokens and components extracted from what shipped."
date: "2026-07-27"
cover: "esfera-design-system/tokens-semantic-colors-dark.webp"
type: "design-system"
tags: ["Design Systems", "Design Tokens", "E-commerce", "Loyalty"]
role: "Product Designer, Design System"
timeframe: "Jun 2024 to May 2025"
company: "Esfera (Santander)"
outcome: "224 tokens, 59 components and 443 variants, delivered in Figma and in code"
---

## In short

Esfera is Santander's loyalty program: customers earn points and spend them in a marketplace. I first worked there in 2021, through Rethink, and started putting component libraries together. There was no design system. Building one there became something I wanted to do for the next three years.

I came back in June 2024, and nobody was waiting for that system. So the first months were not construction. I was still taking product design demands from the product squads, and in parallel I worked with my lead and another designer on the studies that would let us make the case for a design system internally. I was the only one of the three allocated from outside, which meant the argument had to convince the people who already worked there.

It worked. In October a team was put together around it: another senior product designer, a design ops specialist, and a developer allocated to us. That last part changed what we could deliver. We were not handing engineering a Figma file and hoping. We built the components in code too.

We did not build the system in the abstract and wait for adoption. We picked pilot journeys, onboarding and checkout, redesigned them properly, and took the redesign to the stakeholders for approval. Only then did we turn what had been approved into tokens and components. Every component in the library exists because a real flow needed it and someone had already signed off on the design it came from.

By May 2025 that was 224 tokens, 59 components and 443 variants, in Figma and in code.

## Where it started

I had already worked at Esfera once, in 2021, on my first stretch through Rethink. Back then I was doing product design delivery and, alongside it, putting component libraries together. The libraries helped. They were not a system. There were no tokens underneath them and no rules about what belonged in them.

That gap stayed with me after I left. A design system there was something I wanted to build for the next three years, and it was still not there when I came back in June 2024.

Nobody had asked for one. That is the part worth being precise about, because it changed the whole shape of the work. I was not hired to build a design system. I came back as a product designer, into demands from the product squads, and the system was something I believed the product needed and had to argue for.

So the first four months were not construction. I kept delivering product design, and in the time around it I worked on the case for the system with two people: my lead, who was an Esfera employee, and another product designer, also from Esfera. I was the only one of the three allocated from outside. That mattered more than it sounds. The argument had to be strong enough that the people who actually worked there would carry it, because they were the ones who would still be in the building when it needed defending.

We ran an inventory of what already existed. The point of that work was not to start building. It was to make the problem visible enough to be funded.

It worked. In October a team was assembled around the system: another senior product designer, a design ops specialist, and a developer allocated to us. That is the moment the project changed from something I was arguing for into something the company had staffed.

## Earning it one flow at a time

The team existed, and the obvious next move was to start building the system. We did something else.

We picked pilot journeys, took them one at a time, and redesigned them properly as product work. Onboarding and checkout, both chosen by the business rather than by us. We designed the whole flow, at desktop and at mobile width, and took it to the stakeholders for approval as a redesign, not as a system proposal.

Only after a flow was approved did we turn it into system material. The tokens came from the decisions the approved screens had already made. The components came from the parts those screens actually used.

That order is the whole method, and it does two things at once. It removes the adoption problem, because the first consumers of a component are the screens it was extracted from, and those screens were already going to be built. And it removes the prioritisation problem: once a flow is chosen, its components are the scope. There is no argument about what to build first, because the flow answers it.

Onboarding is the clearest example of what came back out. Ten steps, from sign in to a created account, designed at both widths with the same ten steps in each. Sign in leads with Santander SSO. The tax ID field accepts both a personal and a company number. Verification carries a timer and a resend state. Terms keeps acceptance and marketing consent as two separate checkboxes.

Every one of those is a component in the library now: OTP Timer, Password Field, Password Instruction, Checkbox, Text Field, Button. They exist because this flow needed them and the flow had already been approved.

## The architecture

The tokens were not designed up front. They were the residue of decisions the approved screens had already made, which is why there are 224 of them and not four hundred.

They sit in two layers. The lower one holds raw values: 130 global tokens, the palette, the type scale, the spacing steps, plus 17 scaling tokens that respond to viewport. The upper one holds meaning: 43 colour tokens, 15 spacing, 17 typography, one radius, one opacity.

The upper layer holds no raw values at all. Spacing, typography, radius and opacity resolve entirely to primitives, and of the 43 colour tokens, every one that is not a deliberate alpha composition points at a primitive too. That is the property worth checking in any design system, because it is the one that decays quietly. The moment a semantic token carries its own hex, the layer stops being a vocabulary and becomes a second place to look.

Light and dark carry the same 43 names. Desktop and mobile carry the same 15 spacing tokens, the same 17 typography tokens, the same 17 scaling tokens. Nothing is added when a theme or a breakpoint changes, only the values behind the names. A theme is a set of values, not a second system, and the same is true of a viewport.

That is what made the flows cheap to design at both widths. The mobile onboarding is not a separate design that happens to resemble the desktop one. It is the same ten screens reading the same tokens at a different scale.

## The library

Fifty-nine components and 443 variants came out of the piloted flows. The interesting part is not the count. It is what the file looks like when components arrive this way.

Thirty-two of them sit on a page each, documented, in the group marked stable. The rest are grouped by how far along they are: one in review, eight in progress, five temporary pieces built for a workshop, one of them named "delete" by whoever made it. A component has a visible stage, and the file says which one it is in. That is governance you can see rather than a document claiming it exists.

Fourteen of the 51 component sets are prefixed with an underscore. Those are internal parts, not meant to be used directly, and they exist because the composite components needed them. Order Summary is one public set assembled over three private accordion sets. Progress Steps is one public set over a private desktop step and a private mobile step. The consumer picks Order Summary; the pieces it is made of stay out of the way.

The variant counts follow the same logic. Button carries 72 variants, Icon Button 60, Checkbox 32, Switch 30. Button resolves hierarchy against size against state, and every one of its states includes focus, which is the state most libraries leave until an accessibility review asks for it. The form controls resolve their own dimensions the same way: a text field against its error state, a checkbox against checked and indeterminate at once.

Three design principles are written into the foundations file: consistency, concision and respect. Alongside them is a changelog with a version table. Both were there before I finished, which matters more than their content: the system had a place to record what changed and a stated position on how it should behave.

## Shipping code, not just Figma

The team had a developer allocated to it. Not a partner in another squad we filed tickets with, a developer inside the design system team.

That changed what a delivery was. The other senior product designer and I did the design side, then presented it to the developer and worked through the technical questions together before handing it over. He built it, then presented it back to us so we could check that what shipped matched what was designed. That loop ran for tokens as well as components.

This is the part of the project I was best equipped for. My background is computer science, and the handoff between design and engineering is where I have spent most of my career. Having the review run in both directions is what kept design and code from drifting: nothing was declared finished by one side alone.

Adoption still took work, and the work was training. We trained the designers on how to use the system, and the developer walked the other developers through consuming it. Neither group was left to discover the library on their own.

## What the pilots proved

By May 2025 the system was 224 tokens, 59 components and 443 variants, built in Figma and in code, covering two of the journeys the business cared most about.

It outlived me. The team kept using it and building on it after I left. Earlier this year Santander decided Esfera would move to the bank's own design system, and the one we built was retired. That is what happens to a subsidiary's system when the parent standardises, and it does not change what the approach demonstrated.

What it demonstrated is that a design system does not have to be argued for in the abstract. We were not given a mandate, and we did not ask for one. We took the flows the business already wanted redesigned, designed them properly, got them approved as product work, and let the system fall out of what had been signed off. By the time a component reached the library it had already survived the only review that counts, which is a stakeholder looking at a real screen and saying yes.

That is the part I would do the same way again. Not because it is faster, since it is not, but because the components arrive with their adoption already settled. Nobody has to be convinced to use a button that was designed for the screen they are building.
