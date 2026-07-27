import type { CaseVisuals } from "./types"
import { onflyVisuals } from "./onfly-design-system"
import { whirlpoolVisuals } from "./whirlpool-design-system"
import { esferaVisuals } from "./esfera-design-system"
import { atomicColorsVisuals } from "./atomic-colors"

/**
 * Each case's visuals, by slug.
 *
 * A case with no entry here renders as prose, which is the correct fallback:
 * the Markdown is the case, and the figures are an enhancement on top of it.
 * Add a case by dropping a file in this folder and registering it below.
 */
const caseVisuals: Record<string, CaseVisuals> = {
  "onfly-design-system": onflyVisuals,
  "whirlpool-design-system": whirlpoolVisuals,
  "esfera-design-system": esferaVisuals,
  "atomic-colors": atomicColorsVisuals,
}

export function getCaseVisuals(slug: string | undefined): CaseVisuals {
  return (slug && caseVisuals[slug]) || {}
}

export type { CaseVisuals, CaseInsert } from "./types"
