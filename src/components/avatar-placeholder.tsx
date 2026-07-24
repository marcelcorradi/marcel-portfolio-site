import { cn } from "@/lib/utils"

/**
 * Stand-in for Marcel's real photo until he provides one.
 * Same circular footprint the real image will occupy, so swapping it in later
 * won't change the layout. `className` sets the size (e.g. "size-56").
 */
export function AvatarPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-muted text-muted-foreground select-none",
        className
      )}
      aria-label="Photo of Marcel Corradi (coming soon)"
    >
      <span className="text-2xl font-medium tracking-tight">MC</span>
    </div>
  )
}
