import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import "./index.css"
import Home from "./pages/Home"
import CasesList from "./pages/CasesList"
import CasePage from "./pages/CasePage"

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/cases", element: <CasesList /> },
    { path: "/cases/:slug", element: <CasePage /> },
  ],
  // Keep in sync with Vite's `base` so links work on GitHub Pages.
  { basename: import.meta.env.BASE_URL },
)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
