import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CaseVisuals } from "./types"

const PRODUCT_URL = "https://radardoscoop.com"

/**
 * Radar do Scoop.
 *
 * Prose only for now: screenshots come later. The site is live and free, so
 * the case still ends on the way in, like the other product cases.
 */
export const radarDoScoopVisuals: CaseVisuals = {
  inserts: [
    {
      anchor: "It is live at radardoscoop.com.",
      node: (
        <div className="mt-10">
          <Button asChild size="lg">
            <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
              Open Radar do Scoop
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      ),
    },
  ],
}
