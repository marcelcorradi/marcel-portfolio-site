import { Link } from "react-router"
import { getAllCases } from "@/lib/cases"

export default function Home() {
  const cases = getAllCases()
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Marcel Corradi
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Product Designer · Design Systems. I own the technical foundation of
        design systems and build real products with AI.
      </p>

      <h2 className="mt-14 text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Selected work
      </h2>
      <ul className="mt-4 space-y-4">
        {cases.map((c) => (
          <li key={c.slug}>
            <Link
              to={`/cases/${c.slug}`}
              className="block rounded-lg border p-5 transition-colors hover:border-primary hover:bg-accent"
            >
              <h3 className="font-medium text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.summary}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-14 text-sm text-muted-foreground">
        <Link to="/cases" className="text-primary hover:underline">
          See all cases →
        </Link>
      </p>
    </main>
  )
}
