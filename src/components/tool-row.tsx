import { Link } from "react-router"
import { ArrowRight, ArrowUpRight, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Tool } from "@/content/tools"

/**
 * One tool on /tools, laid out as a spec line rather than a card: identity on
 * the left, what it does in the middle, the way in on the right. The Home
 * already shows these as cases; here they are things to pick up and use, so
 * the primary action is a button and the case is the quieter link.
 *
 * Stacks on mobile. From sm up the three columns share a grid, so names,
 * descriptions and buttons line up down the list.
 */
export function ToolRow({ name, kind, description, action, slug }: Tool) {
  const ActionIcon = action.download ? Download : ArrowUpRight

  return (
    <li className="grid gap-4 py-8 sm:grid-cols-[11rem_1fr] sm:gap-x-8 lg:grid-cols-[11rem_1fr_auto] lg:items-start">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          {name}
        </h2>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            {kind}
          </span>
          <Badge variant="secondary">Free</Badge>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground lg:pt-1">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:col-start-2 lg:col-start-auto lg:flex-col lg:items-end">
        <Button asChild size="sm">
          <a href={action.href} target="_blank" rel="noopener noreferrer">
            {action.label}
            <ActionIcon data-icon="inline-end" />
          </a>
        </Button>
        <Link
          to={`/cases/${slug}`}
          className="group inline-flex items-center gap-1 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          How I built it
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </li>
  )
}
