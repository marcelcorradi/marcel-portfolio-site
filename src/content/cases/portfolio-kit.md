---
title: "This portfolio, as a kit"
summary: "This site was built with Claude Code skills that design its pages and write its cases with me. Portfolio Kit is that foundation with me taken out of it: a blank, working site plus the skills. It is free under the MIT license, on GitHub."
date: "2026-09-25"
type: "product-ai"
tags: ["Product", "Design Tokens", "Open Source", "AI"]
role: "Conceived, designed and built it, on my own"
timeframe: "2026"
company: "Free on GitHub"
outcome: "A free, open-source kit: a production portfolio foundation plus the Claude Code skills that design and write it with you"
---

## In short

This site was built with a set of Claude Code skills. One holds the project's decisions, one writes the cases with me a section at a time, and one designs the pages. It worked for me, so I turned it into a kit, to help other people build their own portfolios the same way.

Portfolio Kit is that foundation with me taken out of it. It is a working site, on the same stack with the same dark mode, SEO and deploy pipeline, plus the skills that interview you and then design your pages and write your case studies with you. It starts blank on purpose. It is not a template to rename: the design and the words come out of a conversation about your work, so the result reads as yours.

It is free, under the MIT license, and you can download it from GitHub.

## How it works

You open the project in Claude Code and run /setup. It is an interview, and the first question is how comfortable you are with a terminal, because the answer changes how it talks to you for the rest of the session. Someone who knows git gets no explanations. A designer gets every command spelled out. Then it asks who you are, what separates you from every other candidate for the roles you want, where the site will live, and how it should feel. It asks for the colour as an intention rather than a hex code, and turns "confident and precise" or "warm and human" into a brand colour and the tokens behind it.

After that, you build by asking. Ask for your home page and the design skill builds it. Ask for your first case and the content skill writes it with you, one section at a time, in the structure I used for mine: the result first, then the context, then the decisions, then what you learned. It only uses facts you give it. If a number is missing, it leaves a marked gap instead of inventing one.

A kit you build on top of is hard to update, because after a week every file might be partly yours. So every file in it belongs to one of three groups. The kit's own files are replaced by a new version. Yours are never touched: your cases, your images, your domain. The few that are both, like the stylesheet that holds your brand colour, are merged, keeping your values. Running /update brings in the fixes and leaves your work where it was.

## Building it

I built it in Claude Code, by taking my own site apart. The foundation had to leave with everything that made it work and nothing that made it mine: no name, no cases, no client material. The skills knew who I was, so each one was rewritten to find out who you are instead, and that is what /setup does.

Reading it back was not enough to know it worked. So I ran it the way a stranger would, from a blank folder, with a made-up designer answering the questions. That found four problems that reviewing the code had missed. The real home page never appeared for anyone who chose to keep the site local. Page titles were joined with a dash the kit itself forbids. One question collected free text through a multiple-choice box, so the answers came back empty. And the agent used a real person's name as an example. None of them were visible from reading, and all of them were obvious from doing.

I built it to sell. Then I changed how I put my tools into the world, the same way I did with Design Audit and Atomic Colors: I would rather show what they are worth by giving them away. It is now free under the MIT license, and the README has a PayPal address for anyone who wants to give something back.

The latest version is on GitHub.
