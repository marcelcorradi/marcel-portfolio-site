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
}: CaseImageProps) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden rounded-xl",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
        aria-label={`Enlarge: ${title ?? alt}`}
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onLoad={onLoad}
          className={cn("w-full border border-border bg-white", className)}
        />

        {/* Signifier: without it a plain image reads as decoration, not control. */}
        <span
          aria-hidden
          className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-lg bg-background/80 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          <Maximize2 className="size-4" />
        </span>
      </DialogTrigger>

      <DialogContent
        showCloseButton
        className="max-h-[92vh] max-w-[95vw] overflow-hidden p-0 sm:max-w-[92vw]"
      >
        <DialogTitle className="sr-only">{title ?? alt}</DialogTitle>
        <DialogDescription className="sr-only">{alt}</DialogDescription>

        {/* Natural width inside a scrollable frame: pinch and drag behave as
            the browser already does, on phones and trackpads alike. */}
        <div className="max-h-[92vh] overflow-auto overscroll-contain">
          <img src={src} alt="" className="h-auto w-auto max-w-none" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
