// Copies the built index.html to dist/<route>.html for routes that must answer
// with a real HTTP 200. Runs after `vite build` (see package.json).
//
// Deep links on GitHub Pages otherwise go through public/404.html, which the
// server returns with a 404 status before its script redirects into the SPA.
// A browser ends up on the right page, but anything that checks the status or
// doesn't run JS sees a 404. GitHub Pages serves `foo.html` for `/foo`, with no
// redirect and no trailing slash, so a copy of the shell is enough: React Router
// then renders the route as usual.
//
// design-audit/privacy is here because the Chrome Web Store listing links to it
// and store review must be able to reach it.

import { copyFileSync, mkdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist")

const ROUTES = ["design-audit/privacy"]

for (const route of ROUTES) {
  const target = join(dist, `${route}.html`)
  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(join(dist, "index.html"), target)
}

console.log(`route shells: ${ROUTES.map((r) => `/${r}`).join(", ")}`)
