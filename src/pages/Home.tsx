import { SiteNav } from "@/components/site-nav"

export default function Home() {
  return (
    <>
      <SiteNav />
      {/* Sections below will be built one at a time. Placeholder for now. */}
      <main className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-6">
        <p className="text-sm text-muted-foreground">
          Nav preview. Hero and the rest come next.
        </p>
      </main>
    </>
  )
}
