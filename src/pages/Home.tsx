import { SiteNav } from "@/components/site-nav"
import { HeroSpec } from "@/components/hero-spec"
import { FeaturedWork } from "@/components/featured-work"
import { WhatIDo } from "@/components/what-i-do"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { usePageMeta } from "@/lib/use-page-meta"

export default function Home() {
  usePageMeta({
    description:
      "Product Designer specialized in Design Systems, with a Computer Science degree. Design systems for Onfly, Whirlpool and Esfera, plus three products built end to end.",
    path: "/",
  })

  return (
    <>
      <SiteNav />
      <HeroSpec />
      <FeaturedWork />
      <WhatIDo />
      <ContactSection />
      <SiteFooter />
    </>
  )
}
