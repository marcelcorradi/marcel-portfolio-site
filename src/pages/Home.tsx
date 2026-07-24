import { SiteNav } from "@/components/site-nav"
import { HeroSpec } from "@/components/hero-spec"
import { FeaturedWork } from "@/components/featured-work"
import { WhatIDo } from "@/components/what-i-do"

export default function Home() {
  return (
    <>
      <SiteNav />
      <HeroSpec />
      <FeaturedWork />
      <WhatIDo />
      {/* Next section (About + contact) comes next. */}
    </>
  )
}
