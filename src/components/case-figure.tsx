interface CaseFigureProps {
  src: string
  /** Describes the image for screen readers. Required: the figures carry evidence. */
  alt: string
  /** Visible caption. Optional, but most case figures need the context. */
  caption?: string
}

/**
 * An image with a caption, sized to the reading column.
 *
 * Figures stay inside the measure rather than breaking out of it: on a page
 * built for reading, a figure that starts left of the text unsettles the line
 * the eye is following.
 */
export function CaseFigure({ src, alt, caption }: CaseFigureProps) {
  return (
    <figure className="my-10">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-xl border border-border"
      />
      {caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
