import { Button } from "@/components/ui/button"

function App() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Marcel Corradi
      </h1>
      <p className="text-muted-foreground max-w-md text-center">
        Product Designer · Design Systems. Setup working — shadcn/ui with the
        indigo token system.
      </p>
      <div className="flex gap-3">
        <Button>Primary (indigo)</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </main>
  )
}

export default App
