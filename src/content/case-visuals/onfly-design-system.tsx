import { CaseFigure } from "@/components/case-figure"
import { CaseGallery } from "@/components/case-gallery"
import { CaseViolation, type Violation } from "@/components/case-violation"
import { OnflyLogo } from "@/components/brand-logos"
import type { CaseVisuals } from "./types"
import contrastImg from "@/assets/cases/onfly/acessibilidade1-imageonly.webp"
import carouselImg from "@/assets/cases/onfly/acessibilidade3-imageonly.webp"
import altTextImg from "@/assets/cases/onfly/acessibilidade4-imageonly.webp"
import insightsImg from "@/assets/cases/onfly/research-insights.webp"
import panoramaImg from "@/assets/cases/onfly/interview-panorama.webp"
import typographyImg from "@/assets/cases/onfly/audit-typography.webp"
import colorsImg from "@/assets/cases/onfly/audit-colors.webp"
import spacingImg from "@/assets/cases/onfly/audit-spacing.webp"
import inventoryImg from "@/assets/cases/onfly/component-inventory.webp"
import tokensBrandImg from "@/assets/cases/onfly/tokens-1.webp"
import tokensThemeImg from "@/assets/cases/onfly/tokens-2.webp"
import buttonImg from "@/assets/cases/onfly/Button.webp"
import textInputImg from "@/assets/cases/onfly/Text-input.webp"
import metricsCardImg from "@/assets/cases/onfly/Metrics-card.webp"
import chipImg from "@/assets/cases/onfly/Chip.webp"
import avatarImg from "@/assets/cases/onfly/Avatar.webp"

/**
 * Accessibility findings, shown as evidence plus text rather than as exported
 * slides. A section about accessibility should not ship its argument as a
 * picture of words.
 */
const violations: Violation[] = [
  {
    criterion: "1.4.3 AA",
    requirement: "Text must meet a minimum contrast ratio.",
    image: contrastImg,
    alt: "Three shortcut buttons labelled Relatórios, Reservar and Despesas, with a contrast checker showing #007DC7 on white at a ratio of 4.41 to 1, failing AA for normal text.",
    problem:
      "The primary blue on white measured 4.41:1. It passes for large text and fails for the size these labels actually used, on the shortcuts sitting at the top of the home screen.",
    fix: "Darken the blue used for text until it clears 4.5:1, and keep the original tone for large text and graphics, where it already passed.",
  },
  {
    criterion: "4.1.2 A",
    requirement: "Controls must expose an accessible name.",
    image: carouselImg,
    alt: "A promotional carousel with its two pagination dots highlighted, the controls that announce no name to a screen reader.",
    problem:
      'The carousel dots announced as "button" and nothing else. A screen reader user could tell something was focusable but not what it would do.',
    fix: 'aria-label="Previous slide" / aria-label="Next slide"',
    fixIsCode: true,
  },
  {
    criterion: "1.1.1 A",
    requirement: "Non-text content must have a text alternative.",
    image: altTextImg,
    alt: "A greeting banner with an aeroplane illustration highlighted, marking an image with no text alternative.",
    problem:
      "The banner illustration carried no alternative text, so a screen reader skipped it entirely. The same was true of the product logo, which announced its element id.",
    fix: 'alt="An aeroplane in flight"',
    fixIsCode: true,
  },
]

export const onflyVisuals: CaseVisuals = {
  logo: OnflyLogo,
  logoClassName: "h-6",

  // The three numbers that describe the system itself. The agent's conformance
  // result (44% without the skill, 98% with it) used to sit here as a fourth
  // card and read as a before/after of the design system, because a row of
  // counts sets that expectation and an arrow reinforces it. It is a controlled
  // comparison of two conditions, so it belongs in the prose that explains the
  // method, next to the paragraph describing how it was measured.
  metrics: [
    { value: "611", label: "Design tokens", note: "primitive, semantic, component" },
    { value: "143", label: "Components", note: "Figma library rebuilt from scratch" },
    { value: "~40", label: "Developers", note: "plus 5 designers" },
  ],

  inserts: [
    {
      anchor: "filtered by team, by type, and by theme.",
      node: (
        <CaseFigure
          src={insightsImg}
          alt="Diagnosis slide: 482 insights collected, 36% of them pains, 54% of those pains related to the absence of a design system, with the distribution by insight type."
          caption="482 insights, categorised by type. Pains were 36% of everything raised, and over half of them traced to the missing design system."
          framed
        />
      ),
    },
    {
      anchor: "take into any room in the company and point at.",
      node: (
        <CaseFigure
          src={panoramaImg}
          alt="The dashboard's final overview: total stakeholders and insights, most-cited themes by type, and a table pairing each recommendation with the evidence behind it."
          caption="Every recommendation carried the evidence that produced it. Prioritise standardisation, because the tag came up 101 times."
        />
      ),
    },
    {
      anchor: "used one family on a modular scale.",
      node: (
        <CaseFigure
          src={typographyImg}
          alt="Audit slide showing Onfly's 102 typographic variants against Travelperk's 17 and Expensify's 39."
          caption="102 type variants against Travelperk's 17."
          framed
        />
      ),
    },
    {
      anchor: "not different enough for anyone to see why.",
      node: (
        <CaseFigure
          src={colorsImg}
          alt="Audit slide showing the 60 colours found in the product, including 16 greys and 13 blues, several of them nearly identical."
          caption="60 colours with no organisation. The blues at the bottom are separate values that look the same."
          framed
        />
      ),
    },
    {
      anchor: "no scale underneath for anything to land on.",
      node: (
        <CaseFigure
          src={spacingImg}
          alt="Audit slide listing 101 unique spacing values, including decimals like 4.8px, 6.4px and 14.69px."
          caption="101 spacing values against Travelperk's 44, decimals included."
          framed
        />
      ),
    },
    {
      anchor: "or on whether labels were uppercase.",
      node: (
        <CaseFigure
          src={inventoryImg}
          alt="Inventory slide showing the buttons found across the product side by side: different colours, corner radii, heights and label casing."
          caption="A single component type, as found in the product. Nobody decided this; it accumulated."
          framed
        />
      ),
    },
    {
      anchor: "Three of them show the range of what was failing.",
      node: (
        <>
          {violations.map((violation) => (
            <CaseViolation key={violation.criterion + violation.image} {...violation} />
          ))}
        </>
      ),
    },
    {
      anchor: "for cases where a specific part needs its own decision.",
      node: (
        <CaseFigure
          src={tokensBrandImg}
          alt="The Figma Variables panel showing the collections: Brand 136, Foundation 37, Theme 118, Layout 43, Typography 101, Effects 80 and Grid 24, with the brand colour scale from 50 to 950."
          caption="The primitive layer. Each collection holds raw values, with the brand colour running 50 to 950."
        />
      ),
    },
    {
      anchor: "everyone after had copied.",
      node: (
        <CaseFigure
          src={tokensThemeImg}
          alt="The Theme collection in Figma, where semantic tokens like brand-solid, error-subtle-1 and disabled-subtle resolve to primitive values such as color/brand/500 and color/danger/50."
          caption="The semantic layer, pointing back at the primitives. `brand-solid` is not a hex, it is a reference to `color/brand/500`."
        />
      ),
    },
    {
      anchor: "rebuilding cost less than repairing.",
      node: (
        <CaseGallery
          items={[
            {
              src: buttonImg,
              title: "Button.",
              caption:
                "Four styles across five intents, five states and three sizes, in both orientations. This is the same component the audit found scattered in eight unrelated versions.",
              alt: "The button component in Figma: a large matrix of solid, light, outlined and text styles crossed with primary, success, warning, danger and info intents, each in enabled, focused, hovered, pressed and disabled states, at three sizes.",
            },
            {
              src: textInputImg,
              title: "Text input.",
              caption:
                "Seven states at three sizes. The focus ring is its own token, so every field in the product treats focus the same way.",
              alt: "The text input component showing empty, active, filled, error, success, disabled and read-only states at large, medium and small sizes.",
            },
            {
              src: metricsCardImg,
              title: "Metrics card.",
              caption:
                "The semantic intents applied to a composite component: brand, info, success, warning and danger, each across three states.",
              alt: "The metrics card component in brand, info, success, warning and danger variants, each shown enabled, hovered and selected.",
            },
            {
              src: chipImg,
              title: "Chip.",
              caption:
                "Composition in practice. The close button inside it carries its own component tokens rather than inheriting the chip's.",
              alt: "The chip component and its variants, including the version with a close button.",
            },
            {
              src: avatarImg,
              title: "Avatar.",
              caption:
                "The component with the most dedicated tokens in the system, covering sizes, fallbacks and grouping.",
              alt: "The avatar component across its sizes and fallback treatments.",
            },
          ]}
        />
      ),
    },
  ],
}
