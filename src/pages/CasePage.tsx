import { Link, useParams } from "react-router"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getCaseBySlug } from "@/lib/cases"

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseBySlug(slug) : undefined

  if (!study) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-foreground">
          Case not found
        </h1>
        <p className="mt-4">
          <Link to="/cases" className="text-primary hover:underline">
            Back to cases
          </Link>
        </p>
      </main>
    )
  }

  // Article/reading layout — single column, max readability (Medium-like).
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm">
        <Link to="/cases" className="text-primary hover:underline">
          ← Cases
        </Link>
      </p>

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          {study.title}
        </h1>
        {study.role && (
          <p className="mt-2 text-muted-foreground">{study.role}</p>
        )}
        <time className="mt-1 block text-sm text-muted-foreground">
          {study.date}
        </time>
      </header>

      <article className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{study.body}</ReactMarkdown>
      </article>
    </main>
  )
}
