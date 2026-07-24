import { NavLink } from "react-router"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

// Route links use NavLink (active state). Contact is an in-page anchor, so it's
// a plain link with no active state — that was making it light up alongside Work.
const routeLinks = [
  { to: "/", label: "Work", end: true },
  { to: "/about", label: "About" },
]

const pillLinkBase =
  "rounded-full px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand */}
        <NavLink
          to="/"
          className="rounded-full font-semibold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Marcel Corradi, home"
        >
          Marcel Corradi
        </NavLink>

        {/* Floating pill of links */}
        <div className="flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 shadow-sm backdrop-blur-md">
          {routeLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  pillLinkBase,
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href="/#contact" className={cn(pillLinkBase, "text-muted-foreground hover:text-foreground")}>
            Contact
          </a>
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </nav>
    </header>
  )
}
