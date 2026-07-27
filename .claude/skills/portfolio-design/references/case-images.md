# Case images — exporting from Figma

How case figures get from a Figma file into `src/assets/cases/<slug>/`. Written after a
bug that took a whole session to find; the trap in §1 is the expensive part.

## 1. Export in Light Mode, always

**Esfera's section backgrounds are bound to a design token, not a fixed colour.** The fill on
a section node aliases `Layout/Body` in the **Colors** collection, which resolves per mode:

| Mode | Alias | Value |
|---|---|---|
| Light Mode | `Core Colors/Neutral/White` | `#FFFFFF` |
| Dark Mode | `Core Colors/Gray/800` | `rgb(41,41,41)` |

Export with the file in Dark Mode and every image arrives with a **dark surround baked into
the pixels**. That is image content — no CSS `border-radius`, background, or `clip-path` can
touch it. Inside a scrolling frame it draws a square white corner through the rounded border,
because the frame scrolls past the dark margin into the white artboard, whose own edge is square.

**So: switch the Figma file to Light Mode before exporting case figures.** It costs one click
and avoids the entire class of bug.

Symptom to recognise: a figure with a hard dark or white edge that ignores every CSS fix you
try. Check the exported file's corner pixel before touching any component —
`sharp(file).extract({left:0,top:0,width:1,height:1}).raw()`. If it is ~`30,30,30`, it is this.

### The MCP export ignores a mode pin

`setExplicitVariableModeForCollection` on the node does change what `use_figma`'s own
`node.screenshot()` renders — but `download_assets` kept returning the dark version at every
scale, apparently from cache. Do not trust the REST export to honour a mode you set
programmatically. Either flip the file's mode in the Figma UI and re-export, or fix the margin
locally (§3).

## 2. `node.exportAsync` cannot return bytes here

The obvious escape — export inside `use_figma` and hand the PNG back — does not work:

- `figma.io.write(...)` writes into the desktop app's sandbox, not the filesystem. Nothing
  appears under Downloads/Desktop/Documents.
- Returning base64 works but the tool response is **truncated** well before a real export
  finishes, so the file cannot be reconstructed.

Use `download_assets` for pixels; use `use_figma` for reading structure and variables.

## 3. `scripts/to-webp.mjs` crops the margin

The script scans in from the middle row and column and crops anything darker than
`CANVAS_MAX` (70). Exports with no dark margin pass through untouched, so it is safe to run
on anything.

`sharp`'s own `.trim()` was tried first and **under-crops these files at every threshold**
(10→60) — WebP noise along the boundary stops it finding a uniform border. That is why the
script walks pixels instead. Don't swap it back for `.trim()`.

```
node scripts/to-webp.mjs src/assets/cases/<slug>
```

It reads PNGs and writes WebP beside them. It does **not** re-crop existing `.webp` files.

## 4. Crop flush or keep a margin?

Not the same answer for every figure — this is what the session got wrong at first.

- **Crop flush** when the margin is Figma's dark canvas, i.e. dead space. This is the usual case.
- **Keep a margin** when the export is an annotated spec (bracket/label overlays around a
  matrix). Cropping those flush pushes the annotations against the frame border and it reads
  as cramped, dense edges. Give them ~40px of **white** padding instead.

The Button matrix is the example: exported tighter than its siblings, cropped flush by
mistake, and had to be rebuilt at 2800×392 with 40px of white.

## 5. After changing an image's dimensions, re-check `scale`

Case figures set `scale` (the `overflowScale`) per figure. Changing an image's aspect ratio
changes how tall it renders at that scale. Frame cap is `sm:max-h-[32rem]` (512px) over a
624px reading column, so:

```
rendered height = 624 * scale * (imageHeight / imageWidth)
```

Keep it under 512 or the figure gains an unintended vertical scroll. Button at `scale={4}`:
2496×349 — fine.

## 6. Which figures actually scroll

Only Esfera uses scrolling figures. Onfly and Whirlpool have none, so changes to the scroll
path in `case-image.tsx` / `case-figure.tsx` / `case-gallery.tsx` cannot regress them — but
the non-scroll path is shared by all three, so changes *there* do.

Only figures with an `overflowScale` (a `scale` prop) render wider than their frame. Those are
the ones where a baked-in margin becomes visible mid-frame; `scroll="y"` figures render at
`w-full` and hide it on the frame edge.
