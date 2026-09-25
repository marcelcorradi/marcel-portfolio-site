import { ArrowUpRight } from "lucide-react"
import { CaseFigure } from "@/components/case-figure"
import { Button } from "@/components/ui/button"
import { ATOMIC_COLORS_URL } from "@/content/tools"
import type { CaseVisuals } from "./types"
// Imported rather than referenced by path, so Vite fingerprints them and the
// build fails loudly on a typo instead of shipping a broken <img>.
import semanticImg from "@/assets/cases/atomic-works/semantic-suggestions.webp"
import scaleImg from "@/assets/cases/atomic-works/screen-logged.webp"


/**
 * Atomic Colors.
 *
 * The only case whose subject is still running, so it ends on a link to the
 * live product rather than on a result. Screenshots are browser captures in the
 * app's dark theme, not Figma exports: they were converted straight to WebP,
 * skipping `to-webp.mjs`, whose canvas crop reads a dark UI as margin and eats
 * the interface.
 */
export const atomicColorsVisuals: CaseVisuals = {
  metrics: [
    { value: "11", label: "shades per scale" },
    { value: "6", label: "semantic colours" },
    { value: "5", label: "export formats" },
  ],

  inserts: [
    {
      // The thesis, on screen. Discovery failing while the rest pass is the
      // whole argument for the check existing, so it leads.
      anchor: "If two of them are not, it fixes that before you ever see it.",
      node: (
        <CaseFigure
          src={semanticImg}
          alt="The Semantic Colors panel: success, warning, error, discovery, info and neutral generated from a blue reference, each carrying three colour blindness scores and a verdict. Discovery reads fail, info reads borderline, the rest read accessible."
          caption="Every semantic colour carries three scores, one per type of colour blindness, and is judged on the worst of them. Discovery failed against the palette here, which is the check doing its job."
          framed
        />
      ),
    },
    {
      anchor: "That means the code it exports matches what you would have got by hand.",
      node: (
        <CaseFigure
          src={scaleImg}
          alt="The generator: one blue brand colour, the eleven shades derived from it, and the export panel showing tabs for CSS, SCSS, JavaScript, JSON and Figma Variables."
          caption="One hex in, eleven shades out, and the export sitting directly underneath. Shade 500 is the colour you typed; the rest are it, layered over white or black."
          framed
        />
      ),
    },
    {
      // The only case still running, so it closes on a way in rather than on a
      // result. New tab: the reader is mid-portfolio and should keep their place.
      anchor: "It is live at atomicolors.com, free, with no account to create.",
      node: (
        <div className="mt-10">
          <Button asChild size="lg">
            <a href={ATOMIC_COLORS_URL} target="_blank" rel="noopener noreferrer">
              Open Atomic Colors
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      ),
    },
  ],
}
