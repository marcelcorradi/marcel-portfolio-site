import type { CaseStudy } from "@/lib/cases"
import { SITE_NAME, SITE_URL } from "@/lib/use-page-meta"
import { tools, type Tool } from "@/content/tools"

/**
 * JSON-LD for search engines and AI systems. It says what each page is (a
 * person, an article about a client's design system, a free tool), so an
 * ambiguous name like "Onfly" resolves to this work.
 *
 * Only describe what the page visibly shows: a claim here that the page does
 * not make is a spam signal. The rules and the reasoning are in the
 * portfolio-seo skill, references/structured-data.md.
 */

export const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

/**
 * Profiles verified to be Marcel's. Add Upwork, Contra or Dribbble only once
 * he confirms the URL.
 */
const SAME_AS = [
  "https://www.linkedin.com/in/marcel-c-84b26931/",
  "https://github.com/marcelcorradi",
  "https://medium.com/@marcelestevescorradi",
]

/** On every page, so each one carries the entity the others point at. */
export const siteSchema: object[] = [
  {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    jobTitle: "Product Designer, Design Systems",
    description:
      "Product Designer specializing in Design Systems. Owns design systems end to end, from design tokens and component architecture to governance, and builds the tools that ship them, with code and AI.",
    // Mirrors the Home's "What I do". Keep the two in step.
    knowsAbout: [
      "Design systems",
      "Design tokens",
      "Component architecture",
      "Design system governance",
      "Design Ops",
      "Product design",
      "Prototyping",
      "Design engineering",
      "Accessibility",
    ],
    sameAs: SAME_AS,
  },
  {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { "@id": PERSON_ID },
  },
]

/** Where each tool runs, as schema.org's `operatingSystem` expects it. */
const TOOL_PLATFORM: Record<string, { os: string; category: string; license?: string }> = {
  "design-audit": { os: "Chrome", category: "DesignApplication" },
  // Free, but not open source: no license field.
  "atomic-colors": { os: "Web", category: "DesignApplication" },
  "spec-forge": { os: "Figma", category: "DesignApplication" },
  "portfolio-kit": {
    os: "Any",
    category: "DeveloperApplication",
    license: "https://opensource.org/licenses/MIT",
  },
}

function softwareFor(tool: Tool): object {
  const platform = TOOL_PLATFORM[tool.slug]
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/cases/${tool.slug}#software`,
    name: tool.name,
    description: tool.description,
    url: tool.action.href,
    applicationCategory: platform?.category,
    operatingSystem: platform?.os,
    ...(platform?.license && { license: platform.license }),
    // Every tool on the site is free.
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@id": PERSON_ID },
  }
}

/** A case is an article by Marcel; a design-system case is also about its client. */
export function caseSchema(study: CaseStudy, image?: string): object[] {
  const url = `${SITE_URL}/cases/${study.slug}`
  const article = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: study.title,
    description: study.seoDescription ?? study.summary,
    datePublished: study.date,
    ...(image && { image }),
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    mainEntityOfPage: url,
    ...(study.type === "design-system" &&
      study.company && {
        about: { "@type": "Organization", name: study.company },
      }),
  }

  const tool = tools.find((t) => t.slug === study.slug)
  return tool ? [article, softwareFor(tool)] : [article]
}

/** /tools lists the same software entities the case pages describe. */
export function toolsSchema(): object[] {
  return [
    {
      "@type": "ItemList",
      itemListElement: tools.map((tool, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: softwareFor(tool),
      })),
    },
  ]
}
