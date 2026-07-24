import { cn } from "@/lib/utils"

/**
 * Project/brand logo lockup. Real logos vary in aspect ratio (wide wordmarks
 * vs. square marks), so we fix the HEIGHT and let width flow, with the image
 * using object-contain so nothing distorts or crops.
 *
 * Until Marcel provides real logos, we render the project name as a text
 * wordmark in the same fixed-height slot, so swapping in an <img> later won't
 * shift the layout. When a real logo exists, pass `src`.
 */
export function ProjectLogo({
  name,
  src,
  className,
}: {
  name: string
  src?: string
  className?: string
}) {
  // Real logos get a fixed-height slot for visual consistency across cards.
  // The text fallback uses its natural line height so it sits tight to the
  // role line below it (a fixed height would leave an awkward gap).
  if (src) {
    return (
      <div className={cn("flex h-7 items-center", className)}>
        <img
          src={src}
          alt={`${name} logo`}
          className="h-full w-auto max-w-[160px] object-contain"
        />
      </div>
    )
  }

  return (
    <span
      className={cn(
        "block font-semibold leading-tight tracking-tight text-foreground",
        className
      )}
    >
      {name}
    </span>
  )
}
