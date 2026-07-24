import { Link } from "react-router"
import { ArrowRight, Mail } from "lucide-react"

const EMAIL = "marcelcorradi@hotmail.com"
const LINKEDIN = "https://www.linkedin.com/in/marcelc-84b26931/"

// Lucide dropped brand icons, so LinkedIn is an inline SVG.
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 pt-12 pb-20 sm:pt-20"
    >
      {/* About (short) */}
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        About
      </h2>
      <div className="mt-6 max-w-2xl">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I'm Marcel, a Product Designer specialized in Design Systems, with 13+
          years in tech and a Computer Science degree. I build the technical
          foundation that lets design and engineering move fast together.
        </p>
        <Link
          to="/about"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:opacity-80"
        >
          More about me
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Contact — the close */}
      <div className="mt-14 border-t border-border pt-14">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Contact
          </h2>
          {/* Availability badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </span>
        </div>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          Let's talk. Open to Design Systems and Product Design roles. The
          fastest way to reach me is email or LinkedIn.
        </p>

        {/* Full-width stacked on mobile, inline on desktop */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-2.5"
          >
            <Mail className="size-4" />
            Email
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-2.5"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
