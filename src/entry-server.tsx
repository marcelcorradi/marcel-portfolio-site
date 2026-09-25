import { renderToString } from "react-dom/server"
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router"
import { routes } from "./routes"
import { getAllCases } from "./lib/cases"
import {
  MetaCollectorContext,
  SITE_URL,
  type ResolvedMeta,
} from "./lib/use-page-meta"
import { siteSchema } from "./lib/structured-data"
import { tools } from "./content/tools"

/**
 * Build-time server render. `vite build --ssr` bundles this file, and
 * scripts/prerender.mjs imports it to write one HTML file per route, with the
 * page's content and its own head. Never runs in the browser.
 */

export interface PrerenderRoute {
  path: string
  /** Legal pages ship as HTML but stay out of the sitemap. */
  sitemap: boolean
  priority?: string
  lastmod?: string
}

/**
 * Every route that gets its own HTML file, and the only list of them: the
 * sitemap and llms.txt are built from it too. Cases register themselves from
 * src/content/cases. A new page is added here, once.
 */
export function listRoutes(): PrerenderRoute[] {
  const cases = getAllCases() // newest first
  const newest = cases[0]?.date
  return [
    { path: "/", sitemap: true, priority: "1.0", lastmod: newest },
    { path: "/tools", sitemap: true, priority: "0.9", lastmod: newest },
    ...cases.map((c) => ({
      path: `/cases/${c.slug}`,
      sitemap: true,
      priority: "0.8",
      lastmod: c.date,
    })),
    // Linked from the Chrome Web Store listing; store review must reach it.
    { path: "/design-audit/privacy", sitemap: false },
  ]
}

export interface RenderedPage {
  html: string
  meta: ResolvedMeta
  /** The page's own nodes plus the site-wide Person and WebSite. */
  schema: object
}

const { query, dataRoutes } = createStaticHandler(routes)

export async function render(path: string): Promise<RenderedPage> {
  const context = await query(new Request(SITE_URL + path))
  if (context instanceof Response) {
    throw new Error(`prerender: ${path} answered a redirect`)
  }

  const router = createStaticRouter(dataRoutes, context)
  const collector: { meta?: ResolvedMeta } = {}
  const html = renderToString(
    <MetaCollectorContext value={collector}>
      {/* hydrate={false}: the browser builds its own router, so no router
          state is embedded in the page. */}
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </MetaCollectorContext>,
  )

  if (!collector.meta) {
    throw new Error(`prerender: ${path} never called usePageMeta`)
  }

  return {
    html,
    meta: collector.meta,
    schema: {
      "@context": "https://schema.org",
      "@graph": [...siteSchema, ...collector.meta.schema],
    },
  }
}

/**
 * llms.txt (llmstxt.org): a plain map of the site for AI assistants. Google
 * doesn't use it; ChatGPT, Claude and Perplexity can.
 */
export function llmsTxt(): string {
  const cases = getAllCases()
  const line = (title: string, path: string, note: string) =>
    `- [${title}](${SITE_URL}${path}): ${note}`

  const byType = (type: string) =>
    cases
      .filter((c) => c.type === type)
      .map((c) =>
        line(c.seoTitle ?? c.title, `/cases/${c.slug}`, c.outcome ?? c.summary),
      )

  return [
    "# Marcel Corradi",
    "",
    "> Product Designer specializing in Design Systems, with a Computer Science degree. He owns design systems end to end, from design tokens and component architecture to governance, and builds the tools that ship them, with code and AI.",
    "",
    "## Design system case studies",
    "",
    ...byType("design-system"),
    "",
    "## Products he designed and built",
    "",
    ...byType("product-ai"),
    "",
    "## Free tools",
    "",
    ...tools.map((t) => `- [${t.name}](${t.action.href}): ${t.kind}. ${t.description}`),
    "",
    "## Contact",
    "",
    `- [Home and contact](${SITE_URL}/#contact)`,
    "- [LinkedIn](https://www.linkedin.com/in/marcel-c-84b26931/)",
    "- [GitHub](https://github.com/marcelcorradi)",
    "",
  ].join("\n")
}
