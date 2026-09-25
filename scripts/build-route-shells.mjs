// Copies the built index.html to dist/<route>.html for every real route, so each
// one answers with an HTTP 200. Runs after `vite build` (see package.json).
//
// Deep links on GitHub Pages otherwise go through public/404.html, which the
// server returns with a 404 status before its script redirects into the SPA.
// A browser ends up on the right page, but anything that checks the status
// sees a 404: Google drops the page instead of indexing it, and link checkers
// report it broken. GitHub Pages serves `foo.html` for `/foo`, with no redirect
// and no trailing slash, so a copy of the shell is enough: React Router then
// renders the route as usual.
//
// Cases are read from the Markdown files, like build-sitemap.mjs, so publishing
// a case is enough to get its shell. Unknown URLs still fall through to
// 404.html, which is right: those really don't exist.

import { copyFileSync, mkdirSync, readdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const dist = join(root, "dist")

const caseRoutes = readdirSync(join(root, "src/content/cases"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => `cases/${f.replace(/\.md$/, "")}`)

const pages = ["tools"]

const ROUTES = [
  ...caseRoutes,
  ...pages,
  // Linked from the Chrome Web Store listing; store review must reach it.
  "design-audit/privacy",
]

for (const route of ROUTES) {
  const target = join(dist, `${route}.html`)
  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(join(dist, "index.html"), target)
}

console.log(
  `route shells: ${ROUTES.length} (${caseRoutes.length} cases + ${pages.join(", ")} + privacy)`,
)
