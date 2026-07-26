/**
 * Convert case images to WebP.
 *
 *   node scripts/to-webp.mjs src/assets/cases/<case>
 *
 * Case figures are exported from Figma as PNG, which is the format Figma gives
 * you, and PNG is the wrong thing to ship: these are large, detail-dense
 * screenshots and WebP cuts them by roughly 80% with no visible loss at q90.
 *
 * Originals are left in place. Delete them once the case references the .webp
 * files and the build is green.
 */
import sharp from "sharp"
import { readdirSync, statSync, existsSync } from "fs"
import path from "path"

const dir = process.argv[2]

if (!dir || !existsSync(dir)) {
  console.error("Usage: node scripts/to-webp.mjs <directory>")
  process.exit(1)
}

// The reading column is 672px, so 1400px covers a 2x display. Wide, detail-dense
// exports (variable panels, component matrices) get 2000px.
const WIDE = 2000
const NORMAL = 1400
const WIDE_THRESHOLD = 3000

const files = readdirSync(dir).filter((f) => /\.png$/i.test(f))

if (files.length === 0) {
  console.log(`No PNGs in ${dir}`)
  process.exit(0)
}

let before = 0
let after = 0

for (const file of files) {
  const src = path.join(dir, file)
  const out = src.replace(/\.png$/i, ".webp")
  const meta = await sharp(src).metadata()

  // Never upscale: a small export stays its own size.
  const target = meta.width > WIDE_THRESHOLD ? WIDE : NORMAL
  const width = Math.min(meta.width, target)

  const info = await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(out)

  const inSize = statSync(src).size
  before += inSize
  after += info.size

  const saved = Math.round((1 - info.size / inSize) * 100)
  console.log(
    `${file.padEnd(42)} ${meta.width} -> ${width}px  ` +
      `${(inSize / 1024).toFixed(0)}kB -> ${(info.size / 1024).toFixed(0)}kB  (-${saved}%)`
  )
}

console.log(
  `\nTOTAL ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB ` +
    `(-${Math.round((1 - after / before) * 100)}%)`
)
