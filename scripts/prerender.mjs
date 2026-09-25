// Writes one HTML file per route, with the page's content and its own head,
// plus sitemap.xml and llms.txt. Runs after both Vite builds (see package.json):
// the client build in dist/ and the server build of src/entry-server.tsx in
// dist-ssr/.
//
// Why: the site is a client-side SPA on GitHub Pages. Before this, every route
// was a byte-for-byte copy of index.html, so a crawler that doesn't run
// JavaScript (AI crawlers, LinkedIn, Slack, WhatsApp) saw every case as an
// empty page titled like the Home, with a canonical pointing at the Home. Now
// each file carries its own title, description, canonical, Open Graph and
// JSON-LD, and the rendered page inside #root.
//
// GitHub Pages serves `foo.html` for `/foo` with a 200, so writing
// dist/cases/<slug>.html is also what makes every case URL answer 200.
// Unknown URLs still fall through to public/404.html, which is right.
//
// The checks at the bottom fail the build on the mistakes that would
// otherwise ship silently. The portfolio-seo skill explains each one.

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import sharp from "sharp"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const dist = join(root, "dist")
const ssrDir = join(root, "dist-ssr")

const { listRoutes, render, llmsTxt } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
)

const SITE_URL = "https://marcelcorradi.com"
const template = readFileSync(join(dist, "index.html"), "utf8")

const HEAD_BLOCK = /<!-- page-meta:start[\s\S]*?<!-- page-meta:end -->/
const ROOT = '<div id="root"></div>'
if (!HEAD_BLOCK.test(template) || !template.includes(ROOT)) {
  throw new Error("prerender: index.html lost its page-meta markers or #root")
}

/**
 * Case covers ship as WebP, which not every link unfurler accepts (LinkedIn
 * documents JPG, PNG and GIF). Each cover becomes a 1200x630 JPEG, the ratio
 * those cards crop to, fitted whole onto the dark theme's background so a
 * screenshot is never cut mid-interface.
 */
async function shareImage(image, route) {
  if (!image.startsWith(SITE_URL) || !/\.webp$/i.test(image)) return image
  const source = join(dist, decodeURIComponent(image.slice(SITE_URL.length)))
  const name = `og${route.path}.jpg`
  mkdirSync(dirname(join(dist, name)), { recursive: true })
  await sharp(source)
    .resize(1200, 630, { fit: "contain", background: "#0a0a0a" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(dist, name))
  return `${SITE_URL}/${name}`
}

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
const escapeText = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

function headTags(meta, schema) {
  const tag = (attr, key, value) =>
    `    <meta ${attr}="${key}" content="${escapeAttr(value)}" />`
  // `<` escaped so a string in the data can never close the script tag.
  const jsonLd = JSON.stringify(schema).replace(/</g, "\\u003c")
  return [
    `<title>${escapeText(meta.title)}</title>`,
    tag("name", "description", meta.description),
    ...(meta.noIndex ? [tag("name", "robots", "noindex, follow")] : []),
    `    <link rel="canonical" href="${escapeAttr(meta.url)}" />`,
    tag("property", "og:site_name", "Marcel Corradi"),
    tag("property", "og:type", meta.type),
    tag("property", "og:url", meta.url),
    tag("property", "og:title", meta.title),
    tag("property", "og:description", meta.description),
    tag("property", "og:image", meta.image),
    tag("name", "twitter:card", "summary_large_image"),
    tag("name", "twitter:title", meta.title),
    tag("name", "twitter:description", meta.description),
    tag("name", "twitter:image", meta.image),
    `    <script type="application/ld+json">${jsonLd}</script>`,
  ].join("\n")
}

const routes = listRoutes()
const problems = []
const seenTitles = new Map()

for (const route of routes) {
  const { html, meta, schema } = await render(route.path)
  meta.image = await shareImage(meta.image, route)
  const expectedUrl = SITE_URL + route.path

  // Each check here is a way the page would ship wrong with a green build.
  if (meta.url !== expectedUrl)
    problems.push(`${route.path}: canonical is ${meta.url}, expected ${expectedUrl}`)
  if (/[—–]/.test(meta.title) || /[—–]/.test(meta.description))
    problems.push(`${route.path}: a dash in the title or description`)
  if (!/^https:\/\//.test(meta.image) || /\.svg$/i.test(meta.image))
    problems.push(`${route.path}: og:image must be an absolute raster URL, got ${meta.image}`)
  else if (
    meta.image.startsWith(SITE_URL) &&
    !existsSync(join(dist, decodeURIComponent(meta.image.slice(SITE_URL.length))))
  )
    problems.push(`${route.path}: og:image ${meta.image} is not in dist/`)
  if (meta.noIndex && route.sitemap)
    problems.push(`${route.path}: noindex but listed in the sitemap`)
  if (!html.includes("<h1"))
    problems.push(`${route.path}: rendered without an <h1>`)
  if (seenTitles.has(meta.title))
    problems.push(`${route.path}: same title as ${seenTitles.get(meta.title)}`)
  seenTitles.set(meta.title, route.path)

  const page = template
    .replace(HEAD_BLOCK, headTags(meta, schema).trimStart())
    .replace(ROOT, `<div id="root">${html}</div>`)

  const file =
    route.path === "/" ? join(dist, "index.html") : join(dist, `${route.path.slice(1)}.html`)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, page)
}

if (problems.length) {
  throw new Error(`prerender found problems:\n  ${problems.join("\n  ")}`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((r) => r.sitemap)
  .map(
    ({ path, priority, lastmod }) =>
      `  <url>\n    <loc>${SITE_URL}${path}</loc>\n${
        lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""
      }${priority ? `    <priority>${priority}</priority>\n` : ""}  </url>`,
  )
  .join("\n")}
</urlset>
`
writeFileSync(join(dist, "sitemap.xml"), sitemap)
writeFileSync(join(dist, "llms.txt"), llmsTxt())

rmSync(ssrDir, { recursive: true, force: true })

const inSitemap = routes.filter((r) => r.sitemap).length
console.log(
  `prerender: ${routes.length} pages, ${inSitemap} in sitemap.xml, llms.txt written`,
)
