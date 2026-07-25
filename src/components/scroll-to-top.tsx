import { useEffect } from "react"
import { useLocation } from "react-router"

/**
 * Start every navigation at the top of the page.
 *
 * React Router keeps the scroll position across route changes, so leaving a
 * case from its footer would open the next page halfway down. Hash links are
 * left alone: those are asking for a specific section.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname, hash])

  return null
}
