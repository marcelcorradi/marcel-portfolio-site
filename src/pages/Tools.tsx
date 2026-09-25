import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ToolRow } from "@/components/tool-row"
import { Button } from "@/components/ui/button"
import { usePageMeta } from "@/lib/use-page-meta"
import { SUPPORT_EMAIL, tools } from "@/content/tools"

/**
 * /tools, "My tools" in the nav.
 *
 * Everything Marcel has built for design work, free, with the way in first and
 * the case second. Radar do Scoop is left out on purpose: it is a consumer site
 * in Portuguese, not a design tool, and it lives on the Home as a case.
 */
export default function Tools() {
  usePageMeta({
    title: "My tools — Marcel Corradi",
    description:
      "Free tools by Marcel Corradi for design systems work: Design Audit, Atomic Colors, Spec Forge and Portfolio Kit.",
    path: "/tools",
  })

  return (
    <>
      <SiteNav />

      {/* pt clears the fixed nav pill */}
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:pt-32">
        <header className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            My tools
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tools I built, free to use
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I would rather show what my tools are worth by giving them away. These
            are the ones I built for design work, each with the case that explains
            how.
          </p>
        </header>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {tools.map((tool) => (
            <ToolRow key={tool.slug} {...tool} />
          ))}
        </ul>

        <SupportBlock />
      </main>

      <SiteFooter />
    </>
  )
}

function SupportBlock() {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL)
      setFailed(false)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setFailed(true)
    }
  }

  return (
    <section
      aria-labelledby="support-heading"
      className="mt-16 max-w-2xl rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <h2
        id="support-heading"
        className="text-lg font-semibold tracking-tight text-foreground"
      >
        Support the tools
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        They are free, with nothing locked behind a payment. If one of them helps
        your work, you can support it by sending any amount via PayPal to this
        email:
      </p>
      <p className="mt-4 break-all font-mono text-sm text-foreground">
        {SUPPORT_EMAIL}
      </p>
      <Button variant="outline" size="sm" className="mt-4" onClick={copy}>
        {copied ? "Copied" : "Copy PayPal email"}
        {copied ? <Check data-icon="inline-end" /> : <Copy data-icon="inline-end" />}
      </Button>
      {/* Announces the result to screen readers; the button label alone changes
          silently. */}
      <p aria-live="polite" className="mt-2 text-xs text-muted-foreground">
        {failed
          ? "Could not copy the email. Please copy it manually."
          : copied
            ? "PayPal email copied to the clipboard."
            : ""}
      </p>
    </section>
  )
}
