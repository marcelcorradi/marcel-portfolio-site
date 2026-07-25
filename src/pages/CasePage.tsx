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
import { CaseFigure } from "@/components/case-figure"
import contrastImg from "@/assets/cases/onfly/acessibilidade1-imageonly.png"
import carouselImg from "@/assets/cases/onfly/acessibilidade3-imageonly.png"
import altTextImg from "@/assets/cases/onfly/acessibilidade4-imageonly.png"
import insightsImg from "@/assets/cases/onfly/research-insights.png"
import panoramaImg from "@/assets/cases/onfly/interview-panorama.png"
import typographyImg from "@/assets/cases/onfly/audit-typography.png"
import colorsImg from "@/assets/cases/onfly/audit-colors.png"
import spacingImg from "@/assets/cases/onfly/audit-spacing.png"
import inventoryImg from "@/assets/cases/onfly/component-inventory.png"

/** Brand logos by slug, so the header matches the card the reader clicked. */
const logos = {
  "onfly-design-system": { logo: OnflyLogo, className: "h-6" },
} as const

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

  // Visuals sit inside the sections they belong to, anchored to the sentence
  // they follow, so the Markdown stays the source of the writing.
  const inserts =
    slug === "onfly-design-system"
      ? [
          {
            anchor: "filtered by team, by type, and by theme.",
            node: (
              <CaseFigure
                src={insightsImg}
                alt="Diagnosis slide: 482 insights collected, 36% of them pains, 54% of those pains related to the absence of a design system, with the distribution by insight type."
                caption="482 insights, categorised by type. Pains were 36% of everything raised, and over half of them traced to the missing design system."
              />
            ),
          },
          {
            anchor: "take into any room in the company and point at.",
            node: (
              <CaseFigure
                src={panoramaImg}
                alt="The dashboard's final overview: total stakeholders and insights, most-cited themes by type, and a table pairing each recommendation with the evidence behind it."
                caption="Every recommendation carried the evidence that produced it. Prioritise standardisation, because the tag came up 101 times."
              />
            ),
          },
          {
            anchor: "used one family on a modular scale.",
            node: (
              <CaseFigure
                src={typographyImg}
                alt="Audit slide showing Onfly's 102 typographic variants against Travelperk's 17 and Expensify's 39."
                caption="102 type variants against Travelperk's 17."
              />
            ),
          },
          {
            anchor: "not different enough for anyone to see why.",
            node: (
              <CaseFigure
                src={colorsImg}
                alt="Audit slide showing the 60 colours found in the product, including 16 greys and 13 blues, several of them nearly identical."
                caption="60 colours with no organisation. The blues at the bottom are separate values that look the same."
              />
            ),
          },
          {
            anchor: "no scale underneath for anything to land on.",
            node: (
              <CaseFigure
                src={spacingImg}
                alt="Audit slide listing 101 unique spacing values, including decimals like 4.8px, 6.4px and 14.69px."
                caption="101 spacing values against Travelperk's 44, decimals included."
              />
            ),
          },
          {
            anchor: "or on whether labels were uppercase.",
            node: (
              <CaseFigure
                src={inventoryImg}
                alt="Inventory slide showing the buttons found across the product side by side: different colours, corner radii, heights and label casing."
                caption="A single component type, as found in the product. Nobody decided this; it accumulated."
              />
            ),
          },
          {
            anchor: "Three of them show the range of what was failing.",
            node: (
              <>
                {caseViolations?.map((violation) => (
                  <CaseViolation
                    key={violation.criterion + violation.image}
                    {...violation}
                  />
                ))}
              </>
            ),
          },
        ]
      : []

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
          logo={brand?.logo}
          logoClassName={brand?.className}
          facts={facts}
        />

        {caseMetrics && <CaseMetrics metrics={caseMetrics} />}

        <article className={caseMetrics ? undefined : "mt-12"}>
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
      </main>

      <SiteFooter />
    </>
  )
}
