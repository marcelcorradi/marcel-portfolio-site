export interface TokenTier {
  /** Tier name, e.g. "Theme". */
  name: string
  /** Token count in this tier. */
  count: number
  /** What lives here, in one line. */
  description: string
  /**
   * How many times this tier is instantiated. 7 brand themes render as 7
   * stacked edges; a shared tier renders as one continuous bar.
   */
  instances?: number
  /** Proportional segments inside the tier, e.g. semantics vs components. */
  segments?: { label: string; count: number }[]
  /** The tier the argument is about. Gets the accent; everything else stays quiet. */
  accent?: boolean
}

/**
 * A token architecture, read bottom-up the way tokens actually resolve.
 *
 * The usual version of this diagram is three stacked cards with arrows, which
 * cannot show the two things that matter here: that primitives fan out per
 * brand while globals do not, and that one theme shape is instantiated many
 * times. So the tiers carry that in their structure instead of in their labels.
 * Counts are proportional bars rather than a chart, so a ratio like 337:40 reads
 * without axes.
 */
export function CaseTokenTiers({
  tiers,
  caption,
}: {
  tiers: TokenTier[]
  caption?: string
}) {
  // Tiers are authored top-down (theme first) and drawn bottom-up, the way they
  // resolve. Reversing the array and then reversing the flex direction means the
  // DOM keeps the authored order, so a screen reader reads theme-first while the
  // eye sees the foundation at the bottom. Both orders are correct for their
  // reader.
  const ordered = [...tiers].reverse()

  return (
    <figure className="my-10">
      {/* pt clears the stacked edges fanning above the top tier. */}
      <ol className="flex flex-col-reverse gap-1.5 pt-6" role="list">
        {ordered.map((tier) => (
          <li key={tier.name} className="relative isolate">
            {/* Stacked edges behind the card: one visible layer per instance,
                so "one shape, seven brands" is shown rather than asserted.
                Each layer is inset and offset upward from the card's top edge,
                which is why they are positioned rather than stacked in flow. */}
            {tier.instances && tier.instances > 1 && (
              <div aria-hidden>
                {Array.from({ length: Math.min(tier.instances - 1, 6) }).map((_, i) => {
                  const layer = i + 1
                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 h-3 -translate-x-1/2 rounded-t-md border border-b-0 border-border bg-card"
                      style={{
                        top: `-${layer * 4}px`,
                        width: `calc(100% - ${layer * 12}px)`,
                        zIndex: -layer,
                      }}
                    />
                  )
                })}
              </div>
            )}

            <div
              className={
                "relative z-0 rounded-md border bg-card p-4 " +
                (tier.accent ? "border-primary/40" : "border-border")
              }
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className={
                    "font-mono text-xs uppercase tracking-wide " +
                    (tier.accent ? "text-primary" : "text-muted-foreground")
                  }
                >
                  {tier.name}
                </span>
                <span className="font-mono text-sm font-medium text-foreground">
                  {tier.count}
                </span>
                {tier.instances && tier.instances > 1 && (
                  <span className="font-mono text-xs text-muted-foreground">
                    &times; {tier.instances} brands
                  </span>
                )}
              </div>

              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              {tier.segments && (
                <>
                  {/* Proportional, so the ratio is visible without a chart. */}
                  <div
                    className="mt-3 flex h-1.5 gap-px overflow-hidden rounded-full"
                    aria-hidden
                  >
                    {tier.segments.map((segment, i) => (
                      <div
                        key={segment.label}
                        className={
                          i === 0
                            ? "bg-primary"
                            : i === 1
                              ? "bg-primary/45"
                              : "bg-primary/20"
                        }
                        style={{ flexGrow: segment.count }}
                      />
                    ))}
                  </div>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {tier.segments
                      .map((segment) => `${segment.count} ${segment.label}`)
                      .join(" · ")}
                  </p>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>

      {caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
