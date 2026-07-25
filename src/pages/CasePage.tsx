import { Link, useParams } from "react-router"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CaseHeader } from "@/components/case-header"
import { OnflyLogo } from "@/components/brand-logos"
import { getCaseBySlug } from "@/lib/cases"

/** Brand logos by slug, so the header matches the card the reader clicked. */
const logos = {
  "onfly-design-system": { logo: OnflyLogo, className: "h-6" },
} as const

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseBySlug(slug) : undefined

  if (!study) {
    return (
      <>
        <SiteNav />
        <main className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="text-2xl font-semibold text-foreground">
            Case not found
          </h1>
          <p className="mt-4">
            <Link to="/cases" className="text-primary hover:underline">
              Back to cases
            </Link>
          </p>
        </main>
        <SiteFooter />
      </>
    )
  }

  const brand = slug ? logos[slug as keyof typeof logos] : undefined

  // The scannable TL;DR. A recruiter who reads nothing else should still leave
  // knowing the role, the period, and the outcome.
  const facts = [
    study.role && { label: "Role", value: study.role },
    study.timeframe && { label: "When", value: study.timeframe },
    { label: "Scope", value: study.tags.join(", ") },
    { label: "Outcome", value: study.summary },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <>
      <SiteNav />

      {/* pt clears the fixed nav pill */}
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-28 sm:pt-32">
        <CaseHeader
          title={study.title}
          company={study.company}
          logo={brand?.logo}
          logoClassName={brand?.className}
          facts={facts}
        />

        <article className="mt-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{study.body}</ReactMarkdown>
        </article>
      </main>

      <SiteFooter />
    </>
  )
}
