import { cn } from "@/lib/utils"
import photo from "@/assets/profile-photo.png"

/**
 * Marcel's profile photo, filling the circular hero slot.
 * `className` sets the size (e.g. "size-56"); the image covers the circle so
 * swapping the source later won't shift the layout.
 */
export function ProfileAvatar({ className }: { className?: string }) {
  return (
    <img
      src={photo}
      alt="Marcel Corradi"
      className={cn(
        "size-full rounded-full object-cover select-none",
        className
      )}
    />
  )
}
