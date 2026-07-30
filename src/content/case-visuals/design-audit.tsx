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
import typeImg from "@/assets/cases/design-audit/print5.webp"
import iconsImg from "@/assets/cases/design-audit/print6.webp"
import spacingImg from "@/assets/cases/design-audit/print7.webp"
import a11yReportImg from "@/assets/cases/design-audit/print8.webp"

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
          alt="The Design Audit side panel open beside a website, listing the current page above export and global action buttons, with collapsed sections for screenshots, colours, typography and icons."
          caption="The panel sits beside the site and fills itself in, one section per audit. It is pointed at my own portfolio here, which is the fairest thing to audit in public."
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
          alt="The exported HTML report: a tab bar reading Overview, Colors, Typography, Icons, Grid & Layout, Spacing and Accessibility, with the colour tab open on a full palette of twenty-seven swatches labelled with their hex values."
          caption="The exported report, one tab per audit. Twenty-seven unique colours off a single page, de-duplicated into one palette."
          framed
        />
      ),
    },
    {
      // The 4px-grid adherence number is the clearest example of the point the
      // paragraph makes: frequency is what separates a system from a mistake.
      anchor:
        "Spacing reads eleven, converts rem and em to pixels so the values are comparable, and counts how often each one appears, because the number that shows up four hundred times is the system and the one that shows up once is a mistake.",
      node: (
        <CaseFigure
          src={spacingImg}
          alt="The Spacing tab of the report: 36 unique values across one page, zero inconsistencies, and a 4px grid adherence meter reading 50 percent, above a spacing scale where 4px appears 193 times and 2px appears 4 times."
          caption="Thirty-six spacing values, half of them off the 4px grid. The occurrence counts are the tell: 4px appears 193 times and 2px four times, so one of them is the system and the other is a slip."
          framed
        />
      ),
    },
    {
      anchor:
        "Typography has to make a judgement. It carries a list of thirty-four system fonts, so it can tell you which typefaces a site actually chose and which ones it merely fell back to.",
      node: (
        <CaseFigure
          src={typeImg}
          alt="A typeface entry in the report: Outfit, tagged as a web font with 60 occurrences and 7 variants, shown as a specimen with size, weight, line height, letter spacing and the usage context each variant appears in."
          caption="Each typeface comes back as a specimen with its variants counted. Seven variants of one family, each carrying the context it was found in."
          framed
        />
      ),
    },
    {
      anchor:
        "It recognises nine of the common libraries by their own class names, and for a bare SVG with no library behind it, it tries five different ways to work out what the thing is called before giving up.",
      node: (
        <CaseFigure
          src={iconsImg}
          alt="The Icons tab: 73 total icons split into 1 icon font, 38 SVG icons and 34 image icons, with the detected libraries listed, above a grid of individual SVG icons showing their names and viewBox values."
          caption="Seventy-three icons, sorted by how they arrive and by which library they came from. The ones it cannot name still come back, with their viewBox, rather than being dropped."
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
          alt="The Grid & Layout tab of the report: 51 unique layouts, 4 CSS Grid patterns, 47 Flexbox patterns across one page analysed, above a bar chart of container widths with occurrence counts."
          caption="Container widths ranked by how often each one appears. The widths a site repeats are its layout system, whether or not anyone wrote them down."
          framed
        />
      ),
    },
    {
      // The panel figure earlier shows a11y findings mid-browse; this is the
      // same audit consolidated, which is the artefact you actually hand over.
      anchor:
        "The accessibility audit runs axe-core against WCAG A and AA, scores the pages you visited, and sorts what it finds into categories you can act on.",
      node: (
        <CaseFigure
          src={a11yReportImg}
          alt="The Accessibility tab of the report: 20 percent conformance against WCAG 2.1 Level AA, with 3 critical, 95 serious, 14 needing review and 25 passed checks, above violations grouped by category with occurrence counts."
          caption="A conformance score with the counts behind it, and every violation grouped by what it breaks. The score is the headline; the grouping is what makes it fixable."
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
