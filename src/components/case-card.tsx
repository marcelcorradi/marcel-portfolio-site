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
  /** Real logo path once available; falls back to a text wordmark. */
  logo?: string
}

export function CaseCard({
  name,
  role,
  description,
  tags,
  slug,
  logo,
}: CaseCardData) {
  return (
    <Link
      to={`/cases/${slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Logo on top, on its own — works for wide wordmarks and square marks.
          Name + role read as one tight group. */}
      <ProjectLogo name={name} src={logo} />
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

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
        View case
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
