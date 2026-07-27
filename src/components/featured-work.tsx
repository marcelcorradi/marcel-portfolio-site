import { CaseCard, type CaseCardData } from "@/components/case-card"
import { OnflyLogo, WhirlpoolLogo, EsferaLogo } from "@/components/brand-logos"

/**
 * Card tags follow the course's two-kind split, and nothing else goes in:
 *
 *   skill tags     what Marcel did       Design Tokens, Governance, Accessibility
 *   attribute tags the context it ran in B2B, Enterprise, E-commerce, Chrome Extension
 *
 * Skills first, then attributes, capped at four so a card stays scannable and the
 * rows keep an even height. Two rules that were being broken:
 *
 *   1. Never restate the group. Every card under "Design Systems" is a design
 *      system, and every card under "Built with AI" was built with AI, so
 *      "Design System" and "AI" as tags spend a slot to say what the heading
 *      already said. ("AI" stays on Onfly, where the group does not announce it
 *      and the AI agents are the differentiator.)
 *   2. Tags are skills and context, never status. "Published" is a fact about
 *      the card's destination, which the role line under the name already
 *      carries ("Chrome Web Store").
 *
 * Keep the vocabulary closed: the same capability uses the same words on every
 * card, so "Design Tokens" is never "Design Systems" one card over.
 */

const designSystems: CaseCardData[] = [
  {
    name: "Onfly",
    role: "Senior Product Designer",
    logo: OnflyLogo,
    logoClassName: "h-6",
    description:
      "A design system built end to end and adopted by 5 designers and around 40 developers. 611 tokens, 143 components, and AI agents that keep design and code in sync.",
    tags: ["Design Tokens", "Design Ops", "Accessibility", "AI", "B2B"],
    slug: "onfly-design-system",
  },
  {
    name: "Whirlpool",
    role: "via Môre",
    logo: WhirlpoolLogo,
    logoClassName: "h-7",
    description:
      "A global token foundation built under design libraries already in use. 1,139 tokens across 7 brands on web and 4 on mobile, with every brand carrying the same tokens under the same names.",
    tags: ["Design Tokens", "Governance", "Multi-brand", "Enterprise"],
    slug: "whirlpool-design-system",
  },
  {
    name: "Esfera",
    role: "via Rethink",
    logo: EsferaLogo,
    logoClassName: "h-6",
    description:
      "A design system extracted from real flows: pilot journeys redesigned, approved with stakeholders, then turned into tokens and components. 59 components, 443 variants, 224 tokens.",
    tags: ["Design Tokens", "Components", "E-commerce", "Loyalty"],
    slug: "esfera-design-system",
  },
]

const builtWithAI: CaseCardData[] = [
  {
    name: "Design Audit",
    role: "Chrome Web Store",
    description:
      "A browser extension that audits any website's design: color, typography, grid, spacing, and WCAG accessibility. Conceived, designed, and built end to end.",
    tags: ["Accessibility", "Design Tokens", "Chrome Extension"],
    slug: "design-audit",
  },
  {
    name: "Atomic Colors",
    role: "atomicolors.com",
    description:
      "A color scale and palette generator for interfaces and design systems. Self-built, from design to code.",
    tags: ["Design Tokens", "Accessibility", "Web App"],
    slug: "atomic-colors",
  },
  {
    name: "Spec Forge",
    role: "Figma Community",
    description:
      "A Figma plugin that preserves design token context in AI-assisted design-to-code workflows.",
    tags: ["Design Tokens", "Design-to-Code", "Figma Plugin"],
    slug: "spec-forge",
  },
]

function Group({ label, cases }: { label: string; cases: CaseCardData[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <CaseCard key={c.slug} {...c} />
        ))}
      </div>
    </div>
  )
}

export function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-6 pt-12 sm:pt-20">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Selected work
      </h2>

      <div className="mt-10 space-y-12">
        <Group label="Design Systems" cases={designSystems} />
        <Group label="Built with AI" cases={builtWithAI} />
      </div>
    </section>
  )
}
