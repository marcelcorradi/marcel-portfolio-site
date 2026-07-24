import { AvatarPlaceholder } from "@/components/avatar-placeholder"

/**
 * Hero — "spec ring" over a section-wide dot grid.
 * Circular photo annotated with design-system spec labels (diameter, a token
 * marker), sitting on a subtle dot grid that spans the whole hero and fades
 * out at the edges. Text left, photo right.
 */
export function HeroSpec() {
  return (
    <section className="relative overflow-hidden">
      {/* Dot grid across the whole hero, with a soft circular vignette fade:
          full in the center, dissolving gently toward all edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(color-mix(in_oklch,var(--foreground)_11%,transparent)_1.5px,transparent_1.5px)] [background-size:22px_22px] [mask-image:radial-gradient(75%_75%_at_50%_50%,black_25%,transparent_100%)]"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 sm:py-28 md:grid-cols-[1.3fr_1fr]">
        {/* Copy — second on mobile (photo leads), first on desktop */}
        <div className="order-2 md:order-none">
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Marcel Corradi
          </h1>
          <p className="mt-3 text-xl text-foreground/80">
            Product Designer specializing in Design Systems.
          </p>
          <p className="mt-5 max-w-md text-muted-foreground">
            I own design systems end to end, from design tokens and component
            architecture to governance. I also build the tools that ship them,
            with code and AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              See work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Photo with spec annotations — first on mobile, right side on desktop */}
        <div className="order-1 justify-self-center md:order-none md:justify-self-end">
          <div className="relative">
            {/* diameter spec, top */}
            <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-px w-6 bg-border" />
              <span>⌀ 224px</span>
              <span className="h-px w-6 bg-border" />
            </div>

            <div className="rounded-full bg-background/40 p-1.5 ring-1 ring-border backdrop-blur-sm">
              <AvatarPlaceholder className="size-56" />
            </div>

            {/* token marker, bottom-right */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground shadow-sm">
              <span className="size-2.5 rounded-full bg-primary" />
              <span>--primary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
