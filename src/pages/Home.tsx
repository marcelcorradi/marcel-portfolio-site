import { SiteNav } from "@/components/site-nav"
import { HeroSpec } from "@/components/hero-spec"
import { FeaturedWork } from "@/components/featured-work"

export default function Home() {
  return (
    <>
      <SiteNav />
      <HeroSpec />
      <FeaturedWork />
      {/* Next sections (What I do, About + contact) come next. */}
    </>
  )
}
