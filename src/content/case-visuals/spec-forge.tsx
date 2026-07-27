import { ArrowUpRight } from "lucide-react"
import { CaseFigure } from "@/components/case-figure"
import { Button } from "@/components/ui/button"
import type { CaseVisuals } from "./types"
// Imported rather than referenced by path, so Vite fingerprints them and the
// build fails loudly on a typo instead of shipping a broken <img>.
import coverImg from "@/assets/cases/spec-forge/cover.webp"
import optionsImg from "@/assets/cases/spec-forge/print1.webp"
import resultImg from "@/assets/cases/spec-forge/print2.webp"

const PLUGIN_URL = "https://www.figma.com/community/plugin/1616922079963177675/spec-forge"

/**
 * Spec Forge.
 *
 * No metrics row. The numbers this case has (421 layers, 1,131 bindings, 72
 * variants) describe one run over one button, not something built: as figures
 * at the top they read as achievement, and they are evidence. They carry the
 * argument in the result figure's caption instead, where the screenshot backs
 * them up.
 *
 * The two panel shots are narrow (~425px), so they are held to their own width.
 * Stretched to the reading column they blur, and a plugin panel that wide would
 * misrepresent how it actually sits inside Figma.
 */
export const specForgeVisuals: CaseVisuals = {
  inserts: [
    {
      anchor: "It runs entirely inside Figma with no network access, so nothing about the design system leaves the file.",
      node: (
        <CaseFigure
          src={coverImg}
          alt="Spec Forge cover art: the plugin panel over a dark grid, beside the product name."
          framed
        />
      ),
    },
    {
      anchor: "You select a component, an instance, a variant set or a frame, choose how much detail you want, and run it. The spec comes back as Markdown, ready to paste.",
      node: (
        <CaseFigure
          src={optionsImg}
          alt="The plugin panel: a Compact and Detailed toggle, then six checkboxes for nested components, bound variables, component properties, text and paint styles, layout data and hidden layers."
          caption="Two levels of detail and six switches. The defaults keep everything except hidden layers, which is the right starting point for a component and the wrong one for a page."
          width="max-w-xs"
          framed
        />
      ),
    },
    {
      // The summary line is the case's argument, stated by the product itself.
      anchor: "Those reasons ship in the spec, so the agent can see what the plugin kept and why rather than trusting a black box.",
      node: (
        <CaseFigure
          src={resultImg}
          alt="The generated result for a Button: 421 layers, 1131 token bindings, 1131 inferences, above the Markdown spec listing the variant groups Hierarchy, Size and State."
          caption="One button, extracted: three variant axes producing 72 variants, 421 layers and 1,131 token bindings. The spec opens by naming the axes before it lists anything, so the agent reads the shape of the component before its contents."
          width="max-w-xs"
          framed
        />
      ),
    },
    {
      // The plugin is public and installable, so the case ends on the way in.
      anchor: "It is on the [Figma Community](https://www.figma.com/community/plugin/1616922079963177675/spec-forge).",
      node: (
        <div className="mt-10">
          <Button asChild size="lg">
            <a href={PLUGIN_URL} target="_blank" rel="noopener noreferrer">
              Open Spec Forge on Figma
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      ),
    },
  ],
}
