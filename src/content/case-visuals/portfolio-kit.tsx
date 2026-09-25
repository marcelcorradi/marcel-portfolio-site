import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PORTFOLIO_KIT_URL } from "@/content/tools"
import type { CaseVisuals } from "./types"

/**
 * Portfolio Kit.
 *
 * Prose only for now. The kit is this site's own foundation, so the case
 * itself is the screenshot. It ends on the download, not on a live product.
 */
export const portfolioKitVisuals: CaseVisuals = {
  inserts: [
    {
      anchor: "The latest version is on GitHub.",
      node: (
        <div className="mt-10">
          <Button asChild size="lg">
            <a href={PORTFOLIO_KIT_URL} target="_blank" rel="noopener noreferrer">
              Download Portfolio Kit
              <Download data-icon="inline-end" />
            </a>
          </Button>
        </div>
      ),
    },
  ],
}
