import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, matchRoutes } from "react-router"
import { RouterProvider } from "react-router/dom"
import "./index.css"
import { routes } from "./routes"

// The landing route's lazy chunk loads before the router exists. Otherwise the
// first render commits an empty tree while the chunk downloads, and that
// commit wipes the prerendered page: a blank flash on every first visit.
// (React Router's documented pattern for server-rendered lazy routes.)
const landing = matchRoutes(routes, window.location)?.filter((m) => m.route.lazy)
await Promise.all(
  (landing ?? []).map(async ({ route }) => {
    const resolved = await (route.lazy as () => Promise<object>)()
    Object.assign(route, resolved, { lazy: undefined })
  }),
)

const router = createBrowserRouter(
  routes,
  // Keep in sync with Vite's `base` so links work on GitHub Pages.
  { basename: import.meta.env.BASE_URL },
)

// #root arrives filled with the page the build prerendered (scripts/prerender.mjs).
// createRoot, not hydrateRoot: React replaces that markup with its own render
// of the same page, so a difference between the two (the stored theme, a
// measured logo width) can never raise a hydration error.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
