import { cn } from "@/lib/utils"
import photo from "@/assets/profile-photo.webp"

/**
 * Marcel's profile photo, filling the circular hero slot.
 * `className` sets the size (e.g. "size-56"); the image covers the circle so
 * swapping the source later won't shift the layout.
 *
 * Stored at 560px for a 224px slot, which covers a 2.5x display. WebP with
 * alpha, because the photo is cut out and a flat format would square it off;
 * as a 800px PNG it was 476KB, the heaviest asset on the site and sitting in
 * the hero. Eager, not lazy: it is above the fold.
 */
export function ProfileAvatar({ className }: { className?: string }) {
  return (
    <img
      src={photo}
      alt="Marcel Corradi"
      width={560}
      height={560}
      decoding="async"
      className={cn(
        "size-full rounded-full object-cover select-none",
        className
      )}
    />
  )
}
