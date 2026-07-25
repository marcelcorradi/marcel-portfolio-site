import { Check, X } from "lucide-react"

export interface Violation {
  /** WCAG success criterion, e.g. "1.4.3 AA". */
  criterion: string
  /** What the criterion requires, in plain language. */
  requirement: string
  image: string
  /** Describes the evidence for screen readers. */
  alt: string
  /** What was wrong, and what it meant for the user. */
  problem: string
  /** The fix. `code` renders as a snippet rather than prose. */
  fix: string
  fixIsCode?: boolean
}

/**
 * An accessibility finding: the criterion, the evidence, and the fix.
 *
 * The text lives here rather than inside the exported slide on purpose. A
 * section about accessibility should not ship its argument as a picture of
 * words: this way it is selectable, translatable, responsive, and read aloud.
 */
export function CaseViolation({
  criterion,
  requirement,
  image,
  alt,
  problem,
  fix,
  fixIsCode = false,
}: Violation) {
  return (
    <div className="my-10">
      <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        WCAG {criterion}
      </p>
      <p className="mt-1 text-foreground">{requirement}</p>

      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="mt-5 w-full rounded-xl border border-border bg-white p-4"
      />

      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex gap-3">
          <dt className="mt-0.5 shrink-0">
            <X className="size-4 text-destructive" aria-hidden />
            <span className="sr-only">Problem</span>
          </dt>
          <dd className="leading-relaxed text-muted-foreground">{problem}</dd>
        </div>

        <div className="flex gap-3">
          <dt className="mt-0.5 shrink-0">
            <Check className="size-4 text-primary" aria-hidden />
            <span className="sr-only">Fix</span>
          </dt>
          <dd className="leading-relaxed text-muted-foreground">
            {fixIsCode ? (
              <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-secondary-foreground">
                {fix}
              </code>
            ) : (
              fix
            )}
          </dd>
        </div>
      </dl>
    </div>
  )
}
