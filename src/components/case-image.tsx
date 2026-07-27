import type { CSSProperties } from "react"
import { Maximize2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface CaseImageProps {
  src: string
  alt: string
  /** Names the enlarged view for screen readers. Falls back to the alt text. */
  title?: string
  className?: string
  /** Skip lazy loading when the image is measured on mount. */
  eager?: boolean
  onLoad?: () => void
  /**
   * Frame the image with a border and a light backing. Needed for exports that
   * sit on transparent or white backgrounds, so they do not bleed into a dark
   * page. Screenshots that already carry their own frame should leave it off.
   */
  framed?: boolean
  /**
   * Render wider than the container, as a multiple of its width, from `sm` up.
   * The parent scrolls the overflow. 1.6 shows the image at 160% of the column,
   * which is enough to read a dense matrix without turning the frame into a
   * magnified corner.
   *
   * Below `sm` the image always fits. A 3000px matrix shows about a tenth of
   * itself on a phone, so panning means dragging through nine screens to find
   * the point, and a horizontal drag there competes with the browser's own back
   * gesture. Tapping opens it full size, where pinch-zoom already works.
   */
  overflowScale?: number
}

/**
 * A case image that opens full size on click.
 *
 * The figures sit inside the reading column, which keeps the page calm but
 * shrinks dense evidence like the button matrix past legibility. Enlarging
 * gives that detail back on demand.
 *
 * Inside the dialog the image renders at its natural width in a scrollable
 * frame, so pinch-zoom and dragging work the way they already do everywhere
 * else on a phone, without a lightbox library reimplementing the gesture.
 */
export function CaseImage({
  src,
  alt,
  title,
  className,
  eager = false,
  onLoad,
  framed = false,
  overflowScale,
}: CaseImageProps) {
  return (
    <Dialog>
      <DialogTrigger
        // The scale lives on the trigger, not the image: a percentage width on
        // the image would resolve against this button, so the button itself has
        // to be the multiple of the scroll frame. Below sm it stays w-full and
        // the image simply fits.
        style={
          overflowScale
            ? ({
                "--overflow-scale": `${overflowScale * 100}%`,
              } as CSSProperties)
            : undefined
        }
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden rounded-xl",
          overflowScale && "sm:w-(--overflow-scale) sm:max-w-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
        aria-label={`Enlarge: ${title ?? alt}`}
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onLoad={onLoad}
          className={cn(
            "w-full",
            framed && "rounded-xl border border-border bg-white",
            className
          )}
        />

        {/* Signifier: without it a plain image reads as decoration, not control.
            It stays visible on touch, where there is no hover to reveal it and
            where opening the image is the only way to read a dense one.
            On an oversized image it sits top left, since the right edge starts
            outside the scroll frame's view. */}
        <span
          aria-hidden
          className={cn(
            "absolute top-3 flex size-8 items-center justify-center rounded-lg bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition-opacity motion-reduce:transition-none sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100",
            overflowScale ? "left-3" : "right-3"
          )}
        >
          <Maximize2 className="size-4" />
        </span>
      </DialogTrigger>

      <DialogContent
        showCloseButton
        // w-fit lets the panel take the image's width, capped at the viewport:
        // a narrow export gets a narrow panel with no dead space beside it, and
        // a 3000px matrix gets the full 95vw to scroll inside. The base dialog's
        // w-full would force every panel to the cap, and a plain w-auto leaves
        // an oversized child measuring at its shrink-to-fit minimum instead.
        // block overrides the base dialog's grid: with a grid the sr-only title
        // and description still take part in sizing the single column.
        className="block max-h-[92vh] w-fit max-w-[95vw] overflow-hidden p-0 sm:max-w-[92vw]"
      >
        <DialogTitle className="sr-only">{title ?? alt}</DialogTitle>
        <DialogDescription className="sr-only">{alt}</DialogDescription>

        {/* Natural size inside a scrollable frame: pinch and drag behave as the
            browser already does, on phones and trackpads alike.
            `m-auto` on the image centres it while it fits and yields to the
            scroll once it does not. Centring via the container instead (grid
            place-items-center, or flex centring) shrinks an oversized child to
            the frame and kills the scroll with it. */}
        <div className="flex max-h-[92vh] w-full overflow-auto overscroll-contain">
          <img src={src} alt="" className="m-auto h-auto w-auto max-w-none" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
