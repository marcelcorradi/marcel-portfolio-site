export type CaseType = "design-system" | "product-ai"

export interface CaseFrontmatter {
  title: string
  summary: string
  date: string
  cover?: string
  type: CaseType
  tags: string[]
  role?: string
  /** Human-readable period, e.g. "Sep 2025 to Jul 2026". Shown in the case header. */
  timeframe?: string
  /** Client or employer the work was done for. Drives the header's brand logo. */
  company?: string
}

export interface CaseStudy extends CaseFrontmatter {
  slug: string
  /** Raw Markdown body (frontmatter stripped), ready for react-markdown. */
  body: string
}

// Eagerly import every case's raw Markdown at build time.
// `?raw` gives us the file contents as a string so we can parse frontmatter.
const modules = import.meta.glob("../content/cases/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "")
}

/**
 * Minimal YAML-ish frontmatter parser for our controlled case files.
 * Supports `key: "value"`, `key: value`, and inline arrays `key: ["a", "b"]`.
 * Kept dependency-free on purpose — gray-matter pulls in `eval` and ~500kB.
 */
function parseFrontmatter(raw: string): {
  data: Record<string, unknown>
  content: string
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, content: raw }

  const [, fm, content] = match
  const data: Record<string, unknown> = {}

  for (const line of fm.split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line.trim())
    if (!kv) continue
    const [, key, rawValue] = kv
    let value = rawValue.trim()

    if (value.startsWith("[") && value.endsWith("]")) {
      // inline array of quoted strings
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean)
    } else {
      value = value.replace(/^["']|["']$/g, "")
      data[key] = value
    }
  }

  return { data, content: content.trimStart() }
}

const allCases: CaseStudy[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      body: content,
      ...(data as unknown as CaseFrontmatter),
    }
  })
  // Newest first.
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getAllCases(): CaseStudy[] {
  return allCases
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return allCases.find((c) => c.slug === slug)
}
