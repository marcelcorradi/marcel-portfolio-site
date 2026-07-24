import { Layers, PenTool, Code2, Sparkles, type LucideIcon } from "lucide-react"

interface Area {
  icon: LucideIcon
  title: string
  description: string
}

const areas: Area[] = [
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Design tokens, component architecture, and governance. I build systems teams actually adopt, from primitives to Design Ops.",
  },
  {
    icon: PenTool,
    title: "Product Design",
    description:
      "User flows, prototypes, and interface design. End to end UX/UI, grounded in research and usability.",
  },
  {
    icon: Code2,
    title: "Design Engineering",
    description:
      "A Computer Science background that lets me speak the developers' language, own the design-to-code handoff, and prototype in real code.",
  },
  {
    icon: Sparkles,
    title: "AI applied to design",
    description:
      "I build tools, agents, and automations that accelerate design work, without waiting on engineering.",
  },
]

export function WhatIDo() {
  return (
    <section id="what-i-do" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-12 sm:py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        What I do
      </h2>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {areas.map((area, i) => {
          const Icon = area.icon
          return (
            <li
              key={area.title}
              className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 py-6 sm:grid-cols-[3rem_15rem_1fr] sm:gap-x-6"
            >
              {/* Number */}
              <span className="font-mono text-sm text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon + title on the first content column */}
              <div className="flex items-center gap-2.5">
                <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <h3 className="font-medium text-foreground">{area.title}</h3>
              </div>

              {/* Description */}
              <p className="col-start-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:col-start-3">
                {area.description}
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
