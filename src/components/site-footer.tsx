export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {year} Marcel Corradi</p>
        <p className="font-mono text-xs">Built with React &amp; shadcn/ui</p>
      </div>
    </footer>
  )
}
