import { useCallback, useEffect, useRef, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { CaseImage } from "@/components/case-image"
import { cn } from "@/lib/utils"

export interface GalleryItem {
  src: string
  /** Component name, shown as the slide's label. */
  title: string
  /** What this component demonstrates about the system. */
  caption: string
  alt: string
}

/**
 * A carousel of component screenshots.
 *
 * One image of 143 components is a wall; one component per slide gives each
 * grid room to be read. The label and caption carry the point, so a reader who
 * cannot make out the detail still learns what the slide proves.
 */
export function CaseGallery({ items }: { items: GalleryItem[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [height, setHeight] = useState<number>()
  const slideRefs = useRef<(HTMLElement | null)[]>([])

  // The screenshots differ in height, so the frame follows the active slide
  // instead of every slide stretching to the tallest one.
  const measure = useCallback((index: number) => {
    const slide = slideRefs.current[index]
    if (slide) setHeight(slide.getBoundingClientRect().height)
  }, [])

  useEffect(() => {
    if (!api) return
    const update = () => {
      const index = api.selectedScrollSnap()
      setCurrent(index)
      measure(index)
    }
    update()
    api.on("select", update)
    return () => {
      api.off("select", update)
    }
  }, [api, measure])

  // Images arrive after first paint, and the viewport width changes the height.
  useEffect(() => {
    const remeasure = () => measure(current)
    window.addEventListener("resize", remeasure)
    return () => window.removeEventListener("resize", remeasure)
  }, [current, measure])

  return (
    <div className="my-10">
      <Carousel setApi={setApi} opts={{ align: "start" }}>
        {/* items-start stops every slide from stretching to the tallest one;
            the animated height then keeps the controls from jumping. */}
        <CarouselContent
          className="items-start transition-[height] duration-300 motion-reduce:transition-none"
          style={height ? { height } : undefined}
        >
          {items.map((item, index) => (
            <CarouselItem key={item.src}>
              <figure
                ref={(node) => {
                  slideRefs.current[index] = node
                }}
              >
                <CaseImage
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  // The first slide is measured on mount, so it must not wait.
                  eager={index === 0}
                  onLoad={() => index === current && measure(index)}
                  framed
                />
                <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">{item.title}</span>{" "}
                  {item.caption}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-4 flex items-center gap-3">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />

          <div className="flex gap-1.5" role="tablist" aria-label="Components">
            {items.map((item, index) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={current === index}
                aria-label={item.title}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  current === index
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                )}
              />
            ))}
          </div>

          <span className="ml-auto font-mono text-xs text-muted-foreground">
            {current + 1}/{items.length}
          </span>
        </div>
      </Carousel>
    </div>
  )
}
