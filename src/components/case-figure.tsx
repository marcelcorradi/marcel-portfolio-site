interface CaseFigureProps {
  src: string
  /** Describes the image for screen readers. Required: the figures carry evidence. */
  alt: string
  /** Visible caption. Optional, but most case figures need the context. */
  caption?: string
  /** Let a wide figure break out of the reading column on large screens. */
  wide?: boolean
}

/**
 * An image with a caption, sized for the reading column.
 *
 * `wide` pulls the figure past the prose measure on large screens — useful for
 * dense evidence like the audit slides, where shrinking to text width would
 * make the detail unreadable.
 */
export function CaseFigure({ src, alt, caption, wide = false }: CaseFigureProps) {
  return (
    <figure className={wide ? "my-10 lg:-mx-24" : "my-10"}>
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
