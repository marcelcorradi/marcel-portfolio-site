import { useState } from "react"
import { NavLink } from "react-router"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Everything lives on the Home, so Work and Contact are in-page anchors.
// About is the one separate route (NavLink gets the active state).
const navItems = [
  { label: "Work", href: "/#work", type: "anchor" as const },
  { label: "About", to: "/about", type: "route" as const },
  { label: "Contact", href: "/#contact", type: "anchor" as const },
]

const pillLinkBase =
  "rounded-full px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
const pillLinkInactive = "text-muted-foreground hover:text-foreground"

/** Desktop nav links (rendered inside the unified pill). */
function DesktopLinks() {
  return (
    <div className="hidden items-center gap-1 sm:flex">
      {navItems.map((item) =>
        item.type === "route" ? (
          <NavLink
            key={item.label}
            to={item.to}
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
          <a key={item.label} href={item.href} className={cn(pillLinkBase, pillLinkInactive)}>
            {item.label}
          </a>
        )
      )}
    </div>
  )
}

const mobileLinkBase =
  "flex items-center gap-3 rounded-lg px-3 py-3 text-base transition-colors"

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
              <a
                key={item.label}
                href={item.href}
                onClick={close}
                className={cn(mobileLinkBase, "text-foreground hover:bg-accent")}
              >
                {item.label}
              </a>
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
