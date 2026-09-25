import { SiteNav } from "@/components/site-nav"
import { HeroSpec } from "@/components/hero-spec"
import { FeaturedWork } from "@/components/featured-work"
import { WhatIDo } from "@/components/what-i-do"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { usePageMeta } from "@/lib/use-page-meta"

export default function Home() {
  // Title and description are the site defaults in use-page-meta.ts.
  usePageMeta({ path: "/" })

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
