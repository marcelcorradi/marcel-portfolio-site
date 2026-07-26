import { CaseCard, type CaseCardData } from "@/components/case-card"
import { OnflyLogo, WhirlpoolLogo, EsferaLogo } from "@/components/brand-logos"

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
    tags: ["Design Tokens", "Governance", "Multi-brand", "Multi-platform", "Enterprise"],
    slug: "whirlpool-design-system",
  },
  {
    name: "Esfera",
    role: "via Rethink",
    logo: EsferaLogo,
    logoClassName: "h-6",
    description:
      "A new design system built from component design to adoption, in a highly regulated loyalty and e-commerce context. 59 components, 443 variants, 224 tokens.",
    tags: ["Design System", "E-commerce", "Regulated"],
    slug: "esfera-design-system",
  },
]

const builtWithAI: CaseCardData[] = [
  {
    name: "Design Audit",
    role: "Chrome Web Store",
    description:
      "A browser extension that audits any website's design: color, typography, grid, spacing, and WCAG accessibility. Conceived, designed, and built end to end.",
    tags: ["Product", "Accessibility", "AI", "Published"],
    slug: "design-audit",
  },
  {
    name: "Atomic Colors",
    role: "atomicolors.com",
    description:
      "A color scale and palette generator for interfaces and design systems. Self-built, from design to code.",
    tags: ["Product", "Design Systems", "AI"],
    slug: "atomic-colors",
  },
  {
    name: "Spec Forge",
    role: "Figma Community",
    description:
      "A Figma plugin that preserves design token context in AI-assisted design-to-code workflows.",
    tags: ["Plugin", "Design Tokens", "AI"],
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
