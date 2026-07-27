import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface Metric {
  value: string
  label: string
  /** Optional comparison, e.g. "vs 17 at Travelperk". Kept quiet under the label. */
  note?: string
}

/**
 * A row of key figures, for numbers that would otherwise be buried in prose.
 * Reused across the design system cases (Onfly, Whirlpool, Esfera), which all
 * have the same shape: a few hard numbers that carry the argument.
 */
export function CaseMetrics({ metrics }: { metrics: Metric[] }) {
  // Two columns pair up an even count. Exactly three would strand a half-width
  // card on its own row, so those go side by side instead. Everything else
  // stays on two, which keeps enough width for the labels.
  const columns = metrics.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"

  return (
    <div className={cn("my-12 grid gap-3", columns)}>
      {metrics.map((metric) => (
        <Card key={metric.label} size="sm">
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight text-foreground">
              {metric.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            {metric.note && (
              <p className="mt-1 text-xs text-muted-foreground/80">{metric.note}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
