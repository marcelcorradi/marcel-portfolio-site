import { Link, useParams } from "react-router"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CaseHeader } from "@/components/case-header"
import { CaseContents } from "@/components/case-contents"
import { CaseMetrics } from "@/components/case-metrics"
import { caseProse } from "@/components/case-prose"
import { getCaseBySlug, getCaseSections } from "@/lib/cases"
import { getCaseVisuals } from "@/content/case-visuals"
import { CaseFooterNav } from "@/components/case-footer-nav"
import { usePageMeta, resolveCoverUrl } from "@/lib/use-page-meta"

/**
 * Split a body into segments at each anchor sentence, so components can sit
 * between paragraphs. Anchors are matched in order and each one ends the
 * segment it appears in, which keeps the Markdown the source of the writing
 * while the page owns the visuals.
 */
function splitByAnchors(body: string, anchors: string[]): string[] {
  const segments: string[] = []
  let rest = body

  for (const anchor of anchors) {
    const index = rest.indexOf(anchor)
    if (index === -1) {
      segments.push("")
      continue
    }
    const cut = index + anchor.length
    segments.push(rest.slice(0, cut))
    rest = rest.slice(cut)
  }

  segments.push(rest)
  return segments
}

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseBySlug(slug) : undefined

  // Called before the not-found return: hooks cannot sit behind a branch. An
  // unknown slug gets the site defaults plus noindex, so a bad case URL is
  // never indexed as if it were a real page.
  usePageMeta({
    title: study && `${study.title} — Marcel Corradi`,
    description: study?.summary,
    image: resolveCoverUrl(study?.cover),
    path: study && `/cases/${study.slug}`,
    type: "article",
    noIndex: !study,
  })

  if (!study) {
    return (
      <>
        <SiteNav />
        <main className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="text-2xl font-semibold text-foreground">
            Case not found
          </h1>
          {/* Sends people to the work on the Home, not to /cases: that route is
              an unstyled stub nothing links to. */}
          <p className="mt-4">
            <Link to="/#work" className="text-primary hover:underline">
              See the work
            </Link>
          </p>
        </main>
        <SiteFooter />
      </>
    )
  }

  // Logo, metrics and figures live per case in src/content/case-visuals.
  // A case with no entry there renders as prose, which is a valid state.
  const visuals = getCaseVisuals(slug)
  const inserts = visuals.inserts ?? []

  // The scannable TL;DR. A recruiter who reads nothing else should still leave
  // knowing the role, the period, and the outcome.
  const facts = [
    study.role && { label: "Role", value: study.role },
    study.timeframe && { label: "When", value: study.timeframe },
    { label: "Scope", value: study.tags.join(", ") },
    study.outcome && { label: "Outcome", value: study.outcome },
  ].filter(Boolean) as { label: string; value: string }[]

  const sections = getCaseSections(study.body)

  const segments = splitByAnchors(
    study.body,
    inserts.map((insert) => insert.anchor)
  )

  return (
    <>
      <SiteNav />
      <CaseContents sections={sections} />

      {/* pt clears the fixed nav pill */}
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-28 sm:pt-32">
        <CaseHeader
          title={study.title}
          company={study.company}
          logo={visuals.logo}
          logoClassName={visuals.logoClassName}
          facts={facts}
        />

        {visuals.metrics && <CaseMetrics metrics={visuals.metrics} />}

        <article className={visuals.metrics ? undefined : "mt-12"}>
          {segments.map((segment, index) => (
            <div key={index}>
              {segment && (
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={caseProse}>
                  {segment}
                </ReactMarkdown>
              )}
              {inserts[index]?.node}
            </div>
          ))}
        </article>

        <CaseFooterNav />
      </main>

      <SiteFooter />
    </>
  )
}
