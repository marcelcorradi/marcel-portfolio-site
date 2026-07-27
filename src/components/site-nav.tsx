import { useState, type MouseEvent } from "react"
import { Link, NavLink, useLocation } from "react-router"
import { Menu, X } from "lucide-react"
import { scrollToSection } from "@/lib/scroll-to-section"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Work, About and Contact are all sections of the Home. They navigate through
// the router: a plain <a href="/#work"> would trigger a full page load, and the
// browser would drop the hash before React had rendered the section to scroll
// to. ScrollToTop does the scrolling.
const navItems = [
  { label: "Home", to: "/", type: "route" as const, end: true },
  { label: "Work", to: "/#work", type: "hash" as const, hash: "#work" },
  { label: "About", to: "/#about", type: "hash" as const, hash: "#about" },
  { label: "Contact", to: "/#contact", type: "hash" as const, hash: "#contact" },
]

const pillLinkBase =
  "rounded-full px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
const pillLinkInactive = "text-muted-foreground hover:text-foreground"

/**
 * Re-clicking the section you are already on doesn't change the location, so
 * the router never re-renders and ScrollToTop never fires. Scroll here in that
 * case; otherwise let the Link navigate and ScrollToTop finish the job.
 */
function useHashClick(hash: string) {
  const location = useLocation()
  const scroll = scrollToSection(hash)

  return (event: MouseEvent) => {
    if (location.pathname !== "/" || location.hash !== hash) return
    scroll(event)
  }
}

/** A Home section link: routes when away from Home, scrolls when already there. */
function DesktopHashLink({ to, hash, label }: { to: string; hash: string; label: string }) {
  const onClick = useHashClick(hash)
  return (
    <Link to={to} onClick={onClick} className={cn(pillLinkBase, pillLinkInactive)}>
      {label}
    </Link>
  )
}

/** Desktop nav links (rendered inside the unified pill). */
function DesktopLinks() {
  return (
    <div className="hidden items-center gap-1 sm:flex">
      {navItems.map((item) =>
        item.type === "route" ? (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                pillLinkBase,
                isActive ? "bg-primary text-primary-foreground" : pillLinkInactive
              )
            }
          >
            {item.label}
          </NavLink>
        ) : (
          <DesktopHashLink
            key={item.label}
            to={item.to}
            hash={item.hash}
            label={item.label}
          />
        )
      )}
    </div>
  )
}

const mobileLinkBase =
  "flex items-center gap-3 rounded-lg px-3 py-3 text-base transition-colors"

/** The mobile counterpart: same routing, and it closes the sheet. */
function MobileHashLink({
  to,
  hash,
  label,
  onNavigate,
}: {
  to: string
  hash: string
  label: string
  onNavigate: () => void
}) {
  const onHashClick = useHashClick(hash)
  return (
    <Link
      to={to}
      onClick={(event) => {
        onHashClick(event)
        onNavigate()
      }}
      className={cn(mobileLinkBase, "text-foreground hover:bg-accent")}
    >
      {label}
    </Link>
  )
}

/** Mobile: hamburger that opens a Sheet with the links. */
function MobileMenu() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex size-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground shadow-sm backdrop-blur-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-72 gap-0 p-6"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>

        {/* Custom close with a 44px touch target (accessible minimum) */}
        <SheetClose
          aria-label="Close menu"
          className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-5" />
        </SheetClose>

        <nav className="mt-6 flex flex-col gap-1">
          {navItems.map((item) =>
            item.type === "route" ? (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={close}
                className={({ isActive }) =>
                  cn(
                    mobileLinkBase,
                    isActive
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-foreground hover:bg-accent"
                  )
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <MobileHashLink
                key={item.label}
                to={item.to}
                hash={item.hash}
                label={item.label}
                onNavigate={close}
              />
            )
          )}
        </nav>

        <div className="mt-auto flex items-center justify-between rounded-lg border border-border px-3 py-2">
          <span className="text-sm text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function SiteNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-3 sm:py-4">
      {/* Desktop: a centered floating pill with the links + toggle. */}
      <nav className="pointer-events-auto mx-auto hidden w-fit items-center gap-1 rounded-full border border-border bg-card/70 p-1.5 shadow-sm backdrop-blur-md sm:flex">
        <DesktopLinks />
        <span className="inline-flex">
          <ThemeToggle />
        </span>
      </nav>

      {/* Mobile: just a hamburger in the top-right corner. */}
      <div className="pointer-events-auto flex justify-end sm:hidden">
        <MobileMenu />
      </div>
    </header>
  )
}
