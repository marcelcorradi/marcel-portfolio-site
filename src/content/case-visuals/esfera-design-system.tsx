import { CaseFigure } from "@/components/case-figure"
import { CaseGallery, type GalleryItem } from "@/components/case-gallery"
import { CaseImageSwitch } from "@/components/case-image-switch"
import { EsferaLogo } from "@/components/brand-logos"
import type { CaseVisuals } from "./types"
import colorsLightImg from "@/assets/cases/esfera-design-system/tokens-semantic-colors-light.webp"
import colorsDarkImg from "@/assets/cases/esfera-design-system/tokens-semantic-colors-dark.webp"
import typographyImg from "@/assets/cases/esfera-design-system/tokens-typography-guidelines.webp"
import buttonImg from "@/assets/cases/esfera-design-system/component-button-variants.webp"
import iconButtonImg from "@/assets/cases/esfera-design-system/component-icon-button-variants.webp"
import checkboxImg from "@/assets/cases/esfera-design-system/component-checkbox.webp"
import switchImg from "@/assets/cases/esfera-design-system/component-switch.webp"
import orderSummaryImg from "@/assets/cases/esfera-design-system/component-order-summary.webp"
import progressStepsImg from "@/assets/cases/esfera-design-system/component-progress-steps.webp"
// Imported rather than referenced by path, so Vite fingerprints them and the
// build fails loudly on a typo instead of shipping a broken <img>.
import d01 from "@/assets/cases/esfera-design-system/onboarding-desktop-01-sign-in.webp"
import d02 from "@/assets/cases/esfera-design-system/onboarding-desktop-02-sign-up.webp"
import d03 from "@/assets/cases/esfera-design-system/onboarding-desktop-03-email.webp"
import d04 from "@/assets/cases/esfera-design-system/onboarding-desktop-04-cpf.webp"
import d05 from "@/assets/cases/esfera-design-system/onboarding-desktop-05-phone.webp"
import d06 from "@/assets/cases/esfera-design-system/onboarding-desktop-06-get-code.webp"
import d07 from "@/assets/cases/esfera-design-system/onboarding-desktop-07-code.webp"
import d08 from "@/assets/cases/esfera-design-system/onboarding-desktop-08-password.webp"
import d09 from "@/assets/cases/esfera-design-system/onboarding-desktop-09-terms.webp"
import d10 from "@/assets/cases/esfera-design-system/onboarding-desktop-10-done.webp"
import m01 from "@/assets/cases/esfera-design-system/onboarding-mobile-01-sign-in.webp"
import m02 from "@/assets/cases/esfera-design-system/onboarding-mobile-02-sign-up.webp"
import m03 from "@/assets/cases/esfera-design-system/onboarding-mobile-03-email.webp"
import m04 from "@/assets/cases/esfera-design-system/onboarding-mobile-04-cpf.webp"
import m05 from "@/assets/cases/esfera-design-system/onboarding-mobile-05-phone.webp"
import m06 from "@/assets/cases/esfera-design-system/onboarding-mobile-06-get-code.webp"
import m07 from "@/assets/cases/esfera-design-system/onboarding-mobile-07-code.webp"
import m08 from "@/assets/cases/esfera-design-system/onboarding-mobile-08-password.webp"
import m09 from "@/assets/cases/esfera-design-system/onboarding-mobile-09-terms.webp"
import m10 from "@/assets/cases/esfera-design-system/onboarding-mobile-10-done.webp"

/**
 * The onboarding pilot, at both breakpoints.
 *
 * Desktop and mobile carry the same ten steps in the same order, so the two
 * lists are built from one description of the flow. Switching viewport keeps
 * the reader on the step they were looking at, which is the whole point: the
 * comparison is per step, not per gallery.
 */
const steps: {
  desktop: string
  mobile: string
  title: string
  caption: string
}[] = [
  {
    desktop: d01,
    mobile: m01,
    title: "Sign in.",
    caption:
      "Santander SSO sits above the credential fields, so an existing bank customer never types an ID at all.",
  },
  {
    desktop: d02,
    mobile: m02,
    title: "Sign up.",
    caption: "The entry point to the flow, offered to anyone without an Esfera account.",
  },
  {
    desktop: d03,
    mobile: m03,
    title: "Email.",
    caption: "One decision per screen. The progress bar tracks how much of the flow is left.",
  },
  {
    desktop: d04,
    mobile: m04,
    title: "CPF or CNPJ.",
    caption:
      "One field serving both an individual and a company tax ID, which the marketplace needs to tell the two account types apart.",
  },
  {
    desktop: d05,
    mobile: m05,
    title: "Phone.",
    caption: "Collected before the verification step that depends on it.",
  },
  {
    desktop: d06,
    mobile: m06,
    title: "Get code.",
    caption: "The choice of where to receive the code, kept separate from entering it.",
  },
  {
    desktop: d07,
    mobile: m07,
    title: "Code.",
    caption:
      "Verification, with the timer and resend state the OTP Timer component was built for.",
  },
  {
    desktop: d08,
    mobile: m08,
    title: "Password.",
    caption:
      "Requirements are listed as they are met rather than reported as an error afterwards.",
  },
  {
    desktop: d09,
    mobile: m09,
    title: "Terms.",
    caption:
      "Acceptance and the marketing opt-in are separate checkboxes, so consent to one is not consent to the other.",
  },
  {
    desktop: d10,
    mobile: m10,
    title: "Done.",
    caption: "The account exists, and the flow says so before handing the reader to the product.",
  },
]

function build(viewport: "desktop" | "mobile"): GalleryItem[] {
  return steps.map((step) => ({
    src: step[viewport],
    title: step.title,
    caption: step.caption,
    alt: `Esfera onboarding, ${step.title.replace(/\.$/, "")}, at ${viewport} width`,
  }))
}

export const esferaVisuals: CaseVisuals = {
  logo: EsferaLogo,
  logoClassName: "h-6",
  metrics: [
    { value: "224", label: "design tokens" },
    { value: "59", label: "components" },
    { value: "443", label: "variants" },
    { value: "12", label: "months" },
  ],
  inserts: [
    {
      // Lands right before the paragraph that reads the flow step by step, so
      // the reader sees the screens before the prose names what is in them.
      anchor:
        "There is no argument about what to build first, because the flow answers it.",
      node: (
        <CaseGallery
          variants={[
            { label: "Desktop", items: build("desktop") },
            {
              label: "Mobile",
              // A 375px frame stretched to the full column reads as broken.
              items: build("mobile"),
              className: "mx-auto max-w-[360px]",
            },
          ]}
        />
      ),
    },
    {
      // The claim is that both themes carry the same names. A toggle proves it
      // in place, where two stacked figures would make the reader hold one in
      // memory while scrolling to the other.
      anchor:
        "A theme is a set of values, not a second system, and the same is true of a viewport.",
      node: (
        <CaseImageSwitch
          scroll="y"
          options={[
            {
              label: "Light",
              src: colorsLightImg,
              alt: "Esfera semantic colour tokens in light mode, each card showing the semantic name, the token and the primitive it resolves to",
              caption:
                "Every card carries the semantic name, the token, and the primitive it resolves to. Switch the theme and the names hold still: Content Primary is gray 900 here and neutral white in dark, one token with two values.",
            },
            {
              label: "Dark",
              src: colorsDarkImg,
              alt: "Esfera semantic colour tokens in dark mode, carrying the same names in the same order as the light mode set",
              caption:
                "The same names, the same groups, the same order. Only the values behind them change.",
            },
          ]}
        />
      ),
    },
    {
      anchor:
        "It is the same ten screens reading the same tokens at a different scale.",
      node: (
        <CaseFigure
          src={typographyImg}
          alt="Esfera typography documentation showing correct and incorrect usage examples"
          caption="Typography did not ship as a scale alone. The foundations file documents how it should be used, and what not to do with it. Scroll the figure, or click to open it full size."
          scroll="y"
        />
      ),
    },
    {
      anchor:
        "Progress Steps is one public set over a private desktop step and a private mobile step.",
      node: (
        <CaseFigure
          src={progressStepsImg}
          alt="The Esfera Progress Steps anatomy: step states pending, current and completed on the left, and the assembled component at three, four and five steps for desktop and mobile on the right"
          caption="The step itself first, in its pending, current and completed states, with and without a label. Then the assembled component at three, four and five steps, desktop and mobile, each reading from its own private step."
          scroll="x"
          scale={2.5}
        />
      ),
    },
    {
      anchor:
        "The consumer picks Order Summary; the pieces it is made of stay out of the way.",
      node: (
        <CaseFigure
          src={orderSummaryImg}
          alt="The Esfera Order Summary anatomy: a private discount accordion, a base accordion in default, hover and focus, a product accordion at desktop and mobile, and the assembled Order Summary on the right"
          caption="The whole composition, left to right: the private discount accordion, the base accordion in its three states, the product accordion at both breakpoints, and on the right the Order Summary the consumer actually picks. Scroll to follow it across."
          scroll="both"
          scale={2.5}
        />
      ),
    },
    {
      anchor:
        "Button carries 72 variants, Icon Button 60, Checkbox 32, Switch 30.",
      node: (
        <CaseGallery
          items={[
            {
              src: buttonImg,
              title: "Button, 72 variants.",
              caption:
                "Four hierarchies across the top, each split into default, hover, focus, pressed, loading and disabled, against three sizes down the side. Focus is a column of its own in every hierarchy, not an afterthought. Click to read the labels.",
              alt: "The Esfera Button component set laid out as a matrix: primary, secondary, tertiary and danger hierarchies, each in six states, across small, medium and large sizes",
              // 2800x357: a long, short matrix. At a smaller scale the rows are
              // only ~130px tall and the buttons are unreadable, so it runs at
              // roughly its own pixel size and scrolls sideways.
              scroll: "x",
              scale: 4,
            },
            {
              src: iconButtonImg,
              title: "Icon Button, 60 variants.",
              caption:
                "The same state matrix without the label, so an icon-only control never loses a state the text button has.",
              alt: "The Esfera Icon Button component set, 60 variants",
              className: "mx-auto max-w-xs",
            },
            {
              src: checkboxImg,
              title: "Checkbox, 32 variants.",
              caption:
                "One public set over a private item set, so the group and the individual control stay in step.",
              alt: "The Esfera Checkbox component set",
              className: "mx-auto max-w-md",
            },
            {
              src: switchImg,
              title: "Switch, 30 variants.",
              caption: "Same composition: a public Switch built over a private Switch Item.",
              alt: "The Esfera Switch component set",
              className: "mx-auto max-w-xs",
            },
          ]}
        />
      ),
    },
  ],
}
