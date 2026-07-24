import { SiteNav } from "@/components/site-nav"
import { HeroSpec } from "@/components/hero-spec"
import { FeaturedWork } from "@/components/featured-work"
import { WhatIDo } from "@/components/what-i-do"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
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
