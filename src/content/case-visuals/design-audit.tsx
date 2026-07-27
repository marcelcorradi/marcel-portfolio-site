import { ArrowUpRight } from "lucide-react"
import { CaseFigure } from "@/components/case-figure"
import { Button } from "@/components/ui/button"
import type { CaseVisuals } from "./types"
// Imported rather than referenced by path, so Vite fingerprints them and the
// build fails loudly on a typo instead of shipping a broken <img>.
import panelImg from "@/assets/cases/design-audit/print1.webp"
import a11yImg from "@/assets/cases/design-audit/print2.webp"
import reportImg from "@/assets/cases/design-audit/print3.webp"
import gridImg from "@/assets/cases/design-audit/print4.webp"

const STORE_URL =
  "https://chromewebstore.google.com/detail/design-audit/oihmfjoenjcpcaceidphihopgjkljaih"

/**
 * Design Audit.
 *
 * No metrics row: it has 13 installs and no reviews, so any adoption number
 * would undersell a product whose argument is what it extracts, not who uses it.
 * The evidence lives in the figures instead, where the panel and the report show
 * the mechanic working on a real site.
 *
 * The captures are the product in Portuguese, which is what it actually ships
 * in. Captions carry the reading in English rather than restating the labels,
 * so the screenshots stay evidence instead of needing translation.
 */
export const designAuditVisuals: CaseVisuals = {
  inserts: [
    {
      // The mechanic described just above: browse, and it collects on its own.
      anchor:
        "By the time you have clicked through a product, a checkout and a settings page, you are holding that site's visual language.",
      node: (
        <CaseFigure
          src={panelImg}
          alt="The Design Audit side panel open beside a website, showing an extracted colour palette of eleven swatches under a Cores section, above export and global action buttons."
          caption="The panel sits beside the site and fills itself in. Eleven colours off one page here, and the count keeps climbing as you browse."
          framed
        />
      ),
    },
    {
      anchor:
        "It runs the pages you visited against WCAG and scores them, which means the same walk through a site that tells you what its design system is also tells you where it fails the people using it.",
      node: (
        <CaseFigure
          src={a11yImg}
          alt="The accessibility section of the panel: counts for critical, serious and passed checks, then violations listed with their WCAG criterion, including a contrast failure and a missing alt attribute."
          caption="Every violation arrives tied to the criterion it breaks, grouped by severity. A finding you cannot trace to a rule is a finding nobody acts on."
          framed
        />
      ),
    },
    {
      // The consolidated report is the payoff the section has been building to.
      anchor:
        "Then it hands it back in a form you can use: an SVG per audit, built to drop into Figma, or one report with everything in it.",
      node: (
        <CaseFigure
          src={reportImg}
          alt="The exported HTML report: a tab bar reading Visão Geral, Cores, Tipografia, Ícones, Grid & Layout, Spacing and Acessibilidade, with the colour tab open on a full palette of twenty-six swatches labelled with their hex values."
          caption="The exported report, one tab per audit. Twenty-six colours here, collected across three pages and de-duplicated into a single palette."
          framed
        />
      ),
    },
    {
      anchor:
        "Grid and layout is the sixth. It reads the containers a page is built from, the way they arrange their children, and the gaps between them, so the layout rhythm comes out alongside the spacing values.",
      node: (
        <CaseFigure
          src={gridImg}
          alt="The Grid & Layout tab of the report: counters for unique layouts, CSS Grid patterns, Flexbox patterns and pages analysed, above a bar chart of container widths with occurrence counts."
          caption="Container widths ranked by how often each one appears. The widths a site repeats are its layout system, whether or not anyone wrote them down."
          framed
        />
      ),
    },
    {
      // The extension is public and installable, so the case ends on the way in.
      anchor: "It is live on the Chrome Web Store.",
      node: (
        <div className="mt-10">
          <Button asChild size="lg">
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
              Get Design Audit on the Chrome Web Store
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      ),
    },
  ],
}
