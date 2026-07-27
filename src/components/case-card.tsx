import type { ComponentType, SVGProps } from "react"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { ProjectLogo } from "@/components/project-logo"

export interface CaseCardData {
  name: string
  /** Context line under the logo (role / where it shipped). Not the name. */
  role: string
  description: string
  tags: string[]
  slug: string
  /** Monochrome SVG logo component; falls back to a text wordmark. */
  logo?: ComponentType<SVGProps<SVGSVGElement>>
  /** Per-logo optical height (e.g. "h-6") to harmonize logos of different shapes. */
  logoClassName?: string
}

export function CaseCard({
  name,
  role,
  description,
  tags,
  slug,
  logo,
  logoClassName,
}: CaseCardData) {
  return (
    <Link
      to={`/cases/${slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Logo on top, on its own — works for wide wordmarks and square marks.
          Name + role read as one tight group. */}
      <ProjectLogo name={name} logo={logo} logoClassName={logoClassName} />
      <p className="mt-0.5 text-sm text-muted-foreground">{role}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* sm:mt-auto drops the link alone to the bottom edge, so "View case" sits
          on one line across a row of cards with descriptions of different
          lengths. The tags stay attached to the description above them. Only
          from sm up, where cards share a row and the misalignment shows; stacked
          on mobile it would strand the link at the bottom of a tall card. */}
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary sm:mt-auto sm:pt-5">
        View case
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
