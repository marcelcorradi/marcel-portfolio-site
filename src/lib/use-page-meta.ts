import { createContext, useContext, useEffect } from "react"

/** Canonical origin. Absolute URLs are required by Open Graph. */
export const SITE_URL = "https://marcelcorradi.com"
export const SITE_NAME = "Marcel Corradi"

/**
 * Titles end in "· Marcel Corradi". A middle dot, never a dash: dashes joining
 * text are banned in anything the site ships, and the prerender fails the build
 * if one appears in a title.
 */
const DEFAULT_TITLE = `Product Designer for Design Systems · ${SITE_NAME}`
const DEFAULT_DESCRIPTION =
  "Product Designer specialized in Design Systems, with a Computer Science degree. Design systems for Onfly, Whirlpool and Esfera, plus five products built end to end."
/** 1200×630 raster card. Unfurlers ignore SVG, so this is never the favicon. */
export const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`

/**
 * Case cover images, resolved through the same glob Vite fingerprints, so a
 * frontmatter `cover:` maps to the hashed filename that actually ships. A path
 * that does not match returns undefined and the page falls back to the site
 * default, rather than emitting an og:image that 404s.
 */
const coverUrls = import.meta.glob("../assets/cases/**/*.{webp,png,jpg}", {
  eager: true,
  import: "default",
}) as Record<string, string>

export function resolveCoverUrl(cover: string | undefined): string | undefined {
  if (!cover) return undefined
  const key = `../assets/cases/${cover}`
  const url = coverUrls[key]
  if (!url) return undefined
  return url.startsWith("http") ? url : SITE_URL + url
}

export interface PageMeta {
  /** The page's own title, without the site suffix. Omit for the Home. */
  title?: string
  description?: string
  /** Absolute URL, already resolved via resolveCoverUrl. */
  image?: string
  /** Path only, e.g. "/cases/design-audit". Becomes the canonical + og:url. */
  path?: string
  /** Cases are articles; everything else is a website. */
  type?: "website" | "article"
  /** Keep the page out of search results. */
  noIndex?: boolean
  /**
   * JSON-LD nodes this page adds to the site-wide Person and WebSite (see
   * src/lib/structured-data.ts). Written into the static HTML by the
   * prerender, so crawlers that don't run JavaScript still read them.
   */
  schema?: object[]
}

/** Every tag value a page needs, computed once for the browser and the build. */
export interface ResolvedMeta {
  title: string
  description: string
  url: string
  image: string
  type: "website" | "article"
  noIndex: boolean
  schema: object[]
}

export function resolveMeta(meta: PageMeta): ResolvedMeta {
  return {
    title: meta.title ? `${meta.title} · ${SITE_NAME}` : DEFAULT_TITLE,
    description: meta.description ?? DEFAULT_DESCRIPTION,
    url: SITE_URL + (meta.path ?? "/"),
    image: meta.image ?? DEFAULT_IMAGE,
    type: meta.type ?? "website",
    noIndex: meta.noIndex ?? false,
    schema: meta.schema ?? [],
  }
}

/**
 * Filled during the build's server render (src/entry-server.tsx), where
 * effects never run. That is how the prerender reads each page's meta from the
 * page itself instead of from a second copy. Null in the browser.
 */
export const MetaCollectorContext = createContext<{
  meta?: ResolvedMeta
} | null>(null)

/** Create the tag if missing, set its content, and report whether we made it. */
function setTag(
  attr: "name" | "property",
  key: string,
  content: string,
): () => void {
  const selector = `meta[${attr}="${key}"]`
  const existing = document.head.querySelector<HTMLMetaElement>(selector)

  if (existing) {
    const previous = existing.content
    existing.content = content
    return () => {
      existing.content = previous
    }
  }

  const created = document.createElement("meta")
  created.setAttribute(attr, key)
  created.content = content
  document.head.appendChild(created)
  return () => {
    created.remove()
  }
}

function setCanonical(href: string): () => void {
  const existing = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )
  if (existing) {
    const previous = existing.href
    existing.href = href
    return () => {
      existing.href = previous
    }
  }
  const created = document.createElement("link")
  created.rel = "canonical"
  created.href = href
  document.head.appendChild(created)
  return () => {
    created.remove()
  }
}

/**
 * Per-route document head: title, description, canonical and Open Graph.
 *
 * The build prerenders every route (scripts/prerender.mjs), so the HTML that
 * leaves the server already carries these values for the page it serves. This
 * hook keeps them right during client-side navigation, when the static head
 * still belongs to the page the visitor landed on.
 *
 * Every change is reverted on unmount so a client-side navigation cannot leave
 * one page's title or noindex behind on the next.
 */
export function usePageMeta(meta: PageMeta) {
  const resolved = resolveMeta(meta)
  const collector = useContext(MetaCollectorContext)
  // Server render only: hand the values to the prerender.
  if (collector) collector.meta = resolved

  const { title, description, url, image, type, noIndex } = resolved

  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const cleanups = [
      setTag("name", "description", description),
      setCanonical(url),
      setTag("property", "og:title", title),
      setTag("property", "og:description", description),
      setTag("property", "og:url", url),
      setTag("property", "og:type", type),
      setTag("property", "og:site_name", SITE_NAME),
      setTag("property", "og:image", image),
      setTag("name", "twitter:card", "summary_large_image"),
      setTag("name", "twitter:title", title),
      setTag("name", "twitter:description", description),
      setTag("name", "twitter:image", image),
    ]

    if (noIndex) cleanups.push(setTag("name", "robots", "noindex, follow"))

    return () => {
      document.title = previousTitle
      for (const undo of cleanups) undo()
    }
  }, [title, description, url, image, type, noIndex])
}
