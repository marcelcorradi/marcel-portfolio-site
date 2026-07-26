import { CaseFigure } from "@/components/case-figure"
import { CaseGallery } from "@/components/case-gallery"
import { CaseTokenTiers } from "@/components/case-token-tiers"
import { WhirlpoolLogo } from "@/components/brand-logos"
import type { CaseVisuals } from "./types"
import themeVariablesImg from "@/assets/cases/whirlpool/gds-theme-variables-1.webp"
import semanticVariablesImg from "@/assets/cases/whirlpool/gds-theme-variables-2.webp"
import polarisVariablesImg from "@/assets/cases/whirlpool/polaris-theme-variables-1.webp"
import atomicDesignImg from "@/assets/cases/whirlpool/web-atomic-design-example.webp"
import productContainerImg from "@/assets/cases/whirlpool/web-product-container-component.webp"
import polarisNavbarImg from "@/assets/cases/whirlpool/polaris-navbar-component.webp"
import polarisInputImg from "@/assets/cases/whirlpool/polaris-input-component.webp"
import polarisDropdownImg from "@/assets/cases/whirlpool/polaris-dropdown-component.webp"
import polarisCardButtonImg from "@/assets/cases/whirlpool/polaris-cardbutton-component.webp"
import aetherButtonImg from "@/assets/cases/whirlpool/web-button-aether-brand.webp"
import amanaButtonImg from "@/assets/cases/whirlpool/web-button-amana-brand.webp"
import jennairButtonImg from "@/assets/cases/whirlpool/web-button-jennair-brand.webp"
import kitchenaidButtonImg from "@/assets/cases/whirlpool/web-button-kitchenaid-brand.webp"
import maytagButtonImg from "@/assets/cases/whirlpool/web-button-maytag-brand.webp"
import whirlpoolButtonImg from "@/assets/cases/whirlpool/web-button-whirlpool-default-brand.webp"

/**
 * The Polaris components Marcel maintained and extended.
 *
 * Each one carries its own written description in the file, which is the
 * technical documentation the engagement produced, and each is shown across all
 * four brands: KitchenAid crimson, Maytag blue, Whirlpool gold, and JennAir's
 * dark treatment. Same component, four brands, one structure.
 */
const polarisComponents = [
  {
    src: polarisNavbarImg,
    title: "Navbar.",
    caption:
      "The clearest case for theming a component rather than forking it. The accent and the labels both change per brand: Inspiration for KitchenAid, Stain Guide for Maytag, Explore for Whirlpool, Culinary Center for JennAir. One component, four brand vocabularies.",
    alt: "The Polaris navbar component documented across four brands, each with a different accent colour and different navigation labels, shown with each of the three tabs active.",
  },
  {
    src: polarisInputImg,
    title: "Input field.",
    caption:
      "Six states per brand, including the password-rules variant. The usage note above it tells a designer how to change the field's height, which is the kind of documentation that stops a component being rebuilt by hand.",
    alt: "The Polaris input field component in four brand themes, each showing default, focused, filled, disabled, error and password-validation states.",
  },
  {
    src: polarisDropdownImg,
    title: "Dropdown.",
    caption:
      "The selection state is where brand colour has to be unambiguous, so the checkbox fill reads as the brand in every theme while the list structure stays identical.",
    alt: "The Polaris dropdown component across four brands, showing list items, a selected item with a brand-coloured checkbox, and the field-with-label composition.",
  },
  {
    src: polarisCardButtonImg,
    title: "Card button.",
    caption:
      "Default, disabled and pressed, in four brands. The disabled state is deliberately the one place all four agree, because a disabled control should not look brand-forward.",
    alt: "The Polaris card button component in default, disabled and pressed states across four brand themes.",
  },
]

/**
 * The same button, once per brand.
 *
 * Six slides for seven brands: Whirlpool Default and Whirlpool B2B resolve the
 * button to identical values, so they share a slide rather than shipping two
 * pixel-identical ones, which would read as a bug.
 *
 * Every slide is the same matrix in the same position: Large, Medium and Thin
 * across Primary, Secondary, Tertiary and Neutral, each in Active, Disabled and
 * Highlight. Only the values change. That is the case's argument, so the
 * carousel is the case's most important figure.
 *
 * Counts verified against the Figma variables panel: Primitives 213, Globals 61,
 * Themes 379 per brand.
 */
const brandButtons = [
  {
    src: kitchenaidButtonImg,
    title: "KitchenAid.",
    caption:
      "Crimson on white. The grid below is the full 99-variant matrix: three sizes across four hierarchies, each in active, disabled and highlight.",
    alt: "The KitchenAid button matrix: large, medium and thin sizes across primary, secondary, tertiary and neutral hierarchies, in active, disabled and highlight states, rendered in crimson on a white background.",
  },
  {
    src: jennairButtonImg,
    title: "JennAir.",
    caption:
      "Gold on black, and the same grid in the same order. Nothing about the structure moved; the brand supplied different values for the same tokens.",
    alt: "The JennAir button matrix in the identical layout to KitchenAid's, rendered in gold on a black background.",
  },
  {
    src: maytagButtonImg,
    title: "Maytag.",
    caption: "Same 379 tokens, filled in with Maytag's values.",
    alt: "The Maytag button matrix, in the same layout as the other brands.",
  },
  {
    src: amanaButtonImg,
    title: "Amana.",
    caption: "Same 379 tokens, filled in with Amana's values.",
    alt: "The Amana button matrix, in the same layout as the other brands.",
  },
  {
    src: aetherButtonImg,
    title: "Aether.",
    caption:
      "Aether carried the most primitives of any brand, at 45, and still resolves to the same 379 theme tokens as the rest.",
    alt: "The Aether button matrix, in the same layout as the other brands.",
  },
  {
    src: whirlpoolButtonImg,
    title: "Whirlpool, default and B2B.",
    caption:
      "Two separate brands that currently resolve the button identically. They stay independently themeable, so B2B can diverge later without anyone forking a library.",
    alt: "The Whirlpool button matrix, used by both the default and B2B brand themes.",
  },
]

export const whirlpoolVisuals: CaseVisuals = {
  logo: WhirlpoolLogo,
  logoClassName: "h-7",

  metrics: [
    { value: "1,139", label: "Design tokens", note: "653 on web, 486 on mobile" },
    { value: "7", label: "Brands", note: "on web, plus 4 on mobile" },
    { value: "379", label: "Tokens per brand", note: "the same ones in every theme" },
    { value: "2 months", label: "To live", note: "in use and evolving from then on" },
  ],

  // Anchors must appear in the same order as the Markdown, since each one is
  // matched against the remainder of the body.
  inserts: [
    // Section 1, the hook.
    {
      anchor: "variants, instead of one button per brand.",
      node: <CaseGallery items={brandButtons} />,
    },
    // Section 3, the diagnosis of the inherited system.
    {
      anchor: "Then there is no shared vocabulary to agree in.",
      node: (
        <CaseFigure
          src={polarisVariablesImg}
          alt="The Polaris variables panel, showing the Theme collection at 321 tokens with Components at 252 and Semantics at 69, and four brand columns where brand-primary resolves to red, blue, gold and brass."
          caption="Polaris, as I found it. The sidebar tells the story: 252 component tokens against 69 semantic. The four brands do resolve cleanly, but almost every decision lives at the component level rather than in a shared vocabulary."
        />
      ),
    },
    // Section 4, the architecture.
    {
      anchor: "40 component tokens, and 2 composites.",
      node: (
        <CaseTokenTiers
          caption="The three tiers, drawn the way they resolve. Primitives are per brand because a palette cannot be shared; globals are one set everyone agrees on; the theme layer is a single shape instantiated seven times."
          tiers={[
            {
              name: "Theme",
              count: 379,
              instances: 7,
              accent: true,
              description:
                "One shape, filled in once per brand. Every theme answers the same token names, so a brand is a configuration rather than a fork.",
              segments: [
                { label: "semantics", count: 337 },
                { label: "components", count: 40 },
                { label: "composite", count: 2 },
              ],
            },
            {
              name: "Globals",
              count: 61,
              description:
                "Border, scale, and structural colour. What every brand agrees on regardless of its identity, so it is defined once and never themed.",
            },
            {
              name: "Primitives",
              count: 213,
              description:
                "Raw values, organised by brand: Aether 45, Amana 33, Maytag 29, Whirlpool B2B 28, KitchenAid 27, Whirlpool Default 27, JennAir 24.",
            },
          ]}
        />
      ),
    },
    // The claim the case rests on, shown rather than asserted.
    {
      anchor: "Not similar ones. The same ones.",
      node: (
        <CaseFigure
          src={themeVariablesImg}
          alt="The Figma variables panel for GDS Foundations, showing the Themes collection with one column per brand: Aether, Amana, JennAir, KitchenAid, Maytag and Whirlpool Default. Each row is a single token name, such as components/button/background/brand, resolving to a different per-brand primitive in every column."
          caption="One row per token, one column per brand. `components/button/background/brand` exists once and resolves to each brand's own primitive. The sidebar counts the three tiers: Primitives 213, Globals 61, Themes 379."
        />
      ),
    },
    {
      anchor: "That is the part documentation cannot do.",
      node: (
        <CaseFigure
          src={semanticVariablesImg}
          alt="The semantics group of the Themes collection, showing text colour tokens such as primary, primary-hover, secondary, disabled and error-primary resolving to neutral and brand primitives across the KitchenAid, Maytag, Whirlpool Default and Whirlpool B2B columns."
          caption="The semantic layer, 337 of the 379. Tokens carry meanings like `primary-hover` and `disabled`, not values, and each brand answers them in its own palette. Whirlpool B2B is the only brand resolving these to a blue scale."
        />
      ),
    },
    {
      anchor: "each of those is a component in its own right.",
      node: (
        <CaseFigure
          src={productContainerImg}
          alt="The Product Container component documented for five brands, broken into its header, image gallery and product info parts, with the assembled component shown alongside."
          caption="Product Container, documented in parts and then assembled. The header, the gallery and the product info are each their own component. It was published to Figma and to Zeroheight."
        />
      ),
    },
    {
      anchor:
        "as the app needed them, while keeping the eventual migration path to the global foundation in view.",
      node: <CaseGallery items={polarisComponents} />,
    },
    // Section 6, what was left defined but unbuilt.
    {
      anchor: "with pages standing ready for the components that had not been built yet.",
      node: (
        <CaseFigure
          src={atomicDesignImg}
          alt="The web library's page structure in Figma: Base Components marked internal only, Simple components as Atoms listing Breadcrumbs through Toggle Icon, Compositions as Molecules listing Footer through Product Container, and Complex Components as Organisms."
          caption="The library's structure, atoms through organisms. The Organisms section is the honest part: defined, named, and waiting for the components that came after I left."
        />
      ),
    },
  ],
}
