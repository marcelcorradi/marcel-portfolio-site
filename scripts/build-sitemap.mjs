// Generates public/sitemap.xml from the case files, so publishing a case is
// enough to get it listed. Runs before `vite build` (see package.json), which
// copies public/ into dist/.
//
// /cases is deliberately absent: it is an unstyled stub, disallowed in
// robots.txt and noindexed in the page itself.

import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const SITE_URL = "https://marcelcorradi.com"

const casesDir = join(root, "src/content/cases")
const files = readdirSync(casesDir).filter((f) => f.endsWith(".md"))

/** Pull one quoted frontmatter field without a YAML dependency. */
function field(raw, key) {
  const match = new RegExp(`^${key}:\\s*"?([^"\\n]*)"?\\s*$`, "m").exec(raw)
  return match?.[1]?.trim()
}

const cases = files
  .map((file) => {
    const raw = readFileSync(join(casesDir, file), "utf8")
    return {
      slug: file.replace(/\.md$/, ""),
      date: field(raw, "date") || new Date().toISOString().slice(0, 10),
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

const urls = [
  { loc: `${SITE_URL}/`, priority: "1.0", lastmod: cases[0]?.date },
  ...cases.map((c) => ({
    loc: `${SITE_URL}/cases/${c.slug}`,
    priority: "0.8",
    lastmod: c.date,
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority, lastmod }) =>
      `  <url>\n    <loc>${loc}</loc>\n${
        lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""
      }    <priority>${priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`

writeFileSync(join(root, "public/sitemap.xml"), xml)
console.log(`sitemap.xml: ${urls.length} URLs (1 home + ${cases.length} cases)`)
