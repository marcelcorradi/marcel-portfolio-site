import { Outlet } from "react-router"
import { ScrollToTop } from "@/components/scroll-to-top"

/** Wraps every route so navigation always lands at the top of the page. */
export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}
