import { Link } from "react-router"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { caseProse } from "@/components/case-prose"
import { usePageMeta } from "@/lib/use-page-meta"
import policy from "@/content/legal/design-audit-privacy.md?raw"

/** Bump when the policy text changes; the Chrome Web Store listing links here. */
const LAST_UPDATED = "September 2026"

/**
 * Privacy policy for the Design Audit Chrome extension.
 *
 * The Chrome Web Store requires a public, stable URL for it, so this path is
 * part of the extension's store listing: don't rename it. The text lives in
 * Markdown like the cases and reuses the same prose styles, so it reads as part
 * of the site rather than a pasted legal page.
 */
export default function DesignAuditPrivacy() {
  usePageMeta({
    title: "Design Audit privacy policy — Marcel Corradi",
    description:
      "Privacy policy for the Design Audit Chrome extension: all analysis runs locally, and no data leaves your device.",
    path: "/design-audit/privacy",
  })

  return (
    <>
      <SiteNav />

      {/* pt clears the fixed nav pill */}
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-28 sm:pt-32">
        <header>
          <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Design Audit · Chrome extension
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            Privacy policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated {LAST_UPDATED}
          </p>
        </header>

        <article className="mt-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={caseProse}>
            {policy}
          </ReactMarkdown>
        </article>

        <p className="mt-16 border-t border-border pt-8">
          <Link
            to="/cases/design-audit"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            How Design Audit was built
            <ArrowRight className="size-4" />
          </Link>
        </p>
      </main>

      <SiteFooter />
    </>
  )
}
