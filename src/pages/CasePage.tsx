import { Link, useParams } from "react-router"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CaseHeader } from "@/components/case-header"
import { CaseContents } from "@/components/case-contents"
import { CaseMetrics, type Metric } from "@/components/case-metrics"
import { CaseViolation, type Violation } from "@/components/case-violation"
import { caseProse } from "@/components/case-prose"
import { OnflyLogo } from "@/components/brand-logos"
import { getCaseBySlug, getCaseSections } from "@/lib/cases"
import contrastImg from "@/assets/cases/onfly/acessibilidade1-imageonly.png"
import carouselImg from "@/assets/cases/onfly/acessibilidade3-imageonly.png"
import altTextImg from "@/assets/cases/onfly/acessibilidade4-imageonly.png"

/** Brand logos by slug, so the header matches the card the reader clicked. */
const logos = {
  "onfly-design-system": { logo: OnflyLogo, className: "h-6" },
} as const

/** The sentence the accessibility findings follow. */
const VIOLATIONS_ANCHOR = "Three of them show the range of what was failing."

/** Split a body just after `marker`, so a component can sit mid-article. */
function splitAt(body: string, marker: string): [string, string] {
  const index = body.indexOf(marker)
  if (index === -1) return [body, ""]
  const cut = index + marker.length
  return [body.slice(0, cut), body.slice(cut)]
}

/**
 * Accessibility findings, shown as evidence plus text rather than as exported
 * slides. A section about accessibility should not ship its argument as a
 * picture of words.
 */
const violations: Record<string, Violation[]> = {
  "onfly-design-system": [
    {
      criterion: "1.4.3 AA",
      requirement: "Text must meet a minimum contrast ratio.",
      image: contrastImg,
      alt: "Three shortcut buttons labelled Relatórios, Reservar and Despesas, with a contrast checker showing #007DC7 on white at a ratio of 4.41 to 1, failing AA for normal text.",
      problem:
        "The primary blue on white measured 4.41:1. It passes for large text and fails for the size these labels actually used, on the shortcuts sitting at the top of the home screen.",
      fix: "Darken the blue used for text until it clears 4.5:1, and keep the original tone for large text and graphics, where it already passed.",
    },
    {
      criterion: "4.1.2 A",
      requirement: "Controls must expose an accessible name.",
      image: carouselImg,
      alt: "A promotional carousel with its two pagination dots highlighted, the controls that announce no name to a screen reader.",
      problem:
        'The carousel dots announced as "button" and nothing else. A screen reader user could tell something was focusable but not what it would do.',
      fix: 'aria-label="Previous slide" / aria-label="Next slide"',
      fixIsCode: true,
    },
    {
      criterion: "1.1.1 A",
      requirement: "Non-text content must have a text alternative.",
      image: altTextImg,
      alt: "A greeting banner with an aeroplane illustration highlighted, marking an image with no text alternative.",
      problem:
        "The banner illustration carried no alternative text, so a screen reader skipped it entirely. The same was true of the product logo, which announced its element id.",
      fix: 'alt="An aeroplane in flight"',
      fixIsCode: true,
    },
  ],
}

/**
 * The figures worth reading before the prose. Kept here rather than in the
 * Markdown so the writing stays prose and the numbers stay structured.
 */
const metrics: Record<string, Metric[]> = {
  "onfly-design-system": [
    { value: "611", label: "Design tokens", note: "primitive, semantic, component" },
    { value: "143", label: "Components", note: "Figma library rebuilt from scratch" },
    { value: "~40", label: "Developers", note: "plus 5 designers" },
    { value: "44% → 98%", label: "Design system conformance", note: "AI-generated screens" },
  ],
}

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
    study.outcome && { label: "Outcome", value: study.outcome },
  ].filter(Boolean) as { label: string; value: string }[]

  const sections = getCaseSections(study.body)
  const caseMetrics = slug ? metrics[slug] : undefined
  const caseViolations = slug ? violations[slug] : undefined

  // The violations belong inside the audit section, so the body is split at the
  // paragraph that introduces them rather than appended after everything.
  const [before, after] = splitAt(study.body, VIOLATIONS_ANCHOR)

  return (
    <>
      <SiteNav />
      <CaseContents sections={sections} />

      {/* pt clears the fixed nav pill */}
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-28 sm:pt-32">
        <CaseHeader
          title={study.title}
          company={study.company}
          logo={brand?.logo}
          logoClassName={brand?.className}
          facts={facts}
        />

        {caseMetrics && <CaseMetrics metrics={caseMetrics} />}

        <article className={caseMetrics ? undefined : "mt-12"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={caseProse}>
            {before}
          </ReactMarkdown>

          {caseViolations?.map((violation) => (
            <CaseViolation key={violation.criterion + violation.image} {...violation} />
          ))}

          {after && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={caseProse}>
              {after}
            </ReactMarkdown>
          )}
        </article>
      </main>

      <SiteFooter />
    </>
  )
}
