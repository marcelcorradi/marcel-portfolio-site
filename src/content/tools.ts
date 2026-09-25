/**
 * The tools on /tools, and the one place their public URLs live.
 *
 * The case visuals import these URLs for their closing CTA, so a store link or
 * a download that moves is fixed here once and both pages follow.
 */

export const DESIGN_AUDIT_URL =
  "https://chromewebstore.google.com/detail/design-audit/oihmfjoenjcpcaceidphihopgjkljaih"
export const ATOMIC_COLORS_URL = "https://atomicolors.com"
export const SPEC_FORGE_URL =
  "https://www.figma.com/community/plugin/1616922079963177675/spec-forge"
// Always the newest release, so nothing needs editing when the kit ships a
// new version.
export const PORTFOLIO_KIT_URL =
  "https://github.com/marcelcorradi/portfolio-kit/releases/latest"

/** Shown by the support block. Personal PayPal: there is no donate link. */
export const SUPPORT_EMAIL = "marcelcorradi@hotmail.com"

export interface Tool {
  name: string
  /** What kind of thing it is, in the reader's words. */
  kind: string
  description: string
  action: { label: string; href: string; download?: boolean }
  /** The case that explains how it was built. */
  slug: string
}

export const tools: Tool[] = [
  {
    name: "Design Audit",
    kind: "Chrome extension",
    description:
      "Reads a website's colours, type, icons, spacing and layout while you browse it, and audits the pages against WCAG.",
    action: { label: "Add to Chrome", href: DESIGN_AUDIT_URL },
    slug: "design-audit",
  },
  {
    name: "Atomic Colors",
    kind: "Web app",
    description:
      "Turns one brand colour into an eleven-shade scale and a set of semantic colours checked for colour blindness, exported as code.",
    action: { label: "Open", href: ATOMIC_COLORS_URL },
    slug: "atomic-colors",
  },
  {
    name: "Spec Forge",
    kind: "Figma plugin",
    description:
      "Extracts a component's layers, variants and token names as a spec a coding agent can read.",
    action: { label: "Get it in Figma", href: SPEC_FORGE_URL },
    slug: "spec-forge",
  },
  {
    name: "Portfolio Kit",
    kind: "Starter kit",
    description:
      "The foundation and Claude Code skills this site was built with, to build your own portfolio with AI.",
    action: { label: "Download", href: PORTFOLIO_KIT_URL, download: true },
    slug: "portfolio-kit",
  },
]
