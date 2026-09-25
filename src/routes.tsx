import type { ComponentType } from "react"
import type { RouteObject } from "react-router"
import Home from "./pages/Home"
import { RootLayout } from "./components/root-layout"

/**
 * Every page but the Home is its own chunk, so the Home doesn't download the
 * Markdown renderer, the carousel and every case's figures. main.tsx loads the
 * landing route's chunk before the first render (see there for why).
 */
const page = (load: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await load()).default,
})

/**
 * The route tree, shared by the browser (main.tsx) and the build's server
 * render (entry-server.tsx). Which of these get their own HTML file, and which
 * go in the sitemap, is decided in entry-server.tsx's listRoutes().
 */
export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cases", lazy: page(() => import("./pages/CasesList")) },
      { path: "/cases/:slug", lazy: page(() => import("./pages/CasePage")) },
      { path: "/tools", lazy: page(() => import("./pages/Tools")) },
      // Linked from the Chrome Web Store listing: the path must stay stable.
      {
        path: "/design-audit/privacy",
        lazy: page(() => import("./pages/DesignAuditPrivacy")),
      },
      // Anything else: a typo, a stale link, or a deep link to a case that
      // no longer exists. Must stay last.
      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
]
