import { ArrowUpRight } from "lucide-react"
import { CaseFigure } from "@/components/case-figure"
import { Button } from "@/components/ui/button"
import type { CaseVisuals } from "./types"
// Imported rather than referenced by path, so Vite fingerprints them and the
// build fails loudly on a typo instead of shipping a broken <img>.
import semanticImg from "@/assets/cases/atomic-works/semantic-suggestions.webp"
import scaleImg from "@/assets/cases/atomic-works/screen-logged.webp"
import loginImg from "@/assets/cases/atomic-works/login.webp"
import codeImg from "@/assets/cases/atomic-works/login2.webp"

const PRODUCT_URL = "https://atomicolors.com"

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
          alt="The Semantic Colors panel. Six generated colours, each with three colour blindness scores and a verdict. Discovery reads fail; the rest read accessible or borderline."
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
      anchor: "None of that is design work, and all of it had to exist before the first person could pay for it.",
      node: (
        <>
          <CaseFigure
            src={loginImg}
            alt="The sign in dialog, asking for the email used on the Whop subscription."
            caption="Access is tied to the subscription rather than to a password, so there is no account to create and nothing to reset."
            framed
          />
          <CaseFigure
            src={codeImg}
            alt="The verification step, waiting on a six digit code sent by email, valid for ten minutes."
            caption="The code is generated, sent and expired by a backend I had to write for this, which is the part of shipping that never shows up in the product."
            framed
          />
        </>
      ),
    },
    {
      // The only case still running, so it closes on a way in rather than on a
      // result. New tab: the reader is mid-portfolio and should keep their place.
      anchor: "That was never the plan for a product with a checkout, and it is the part I would not have predicted at the start.",
      node: (
        <div className="mt-10">
          <Button asChild size="lg">
            <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
              Open Atomic Colors
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      ),
    },
  ],
}
