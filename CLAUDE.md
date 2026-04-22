# East Africa Conflict Map — Claude notes

Project-specific gotchas to check before editing `index.html`.

## Git workflow: push directly to `main`

Solo project, no review gate. When a change is complete and the verification
script in the section below passes, commit and push straight to `main` — do
**not** open a pull request or stage work on a feature branch for review.
If the session is scoped to a pre-created feature branch, fast-forward merge
it into `main` and push `main`; don't leave work stranded on a branch waiting
for a PR.

## Adding a new country (on-map actor)

A country shows up on the map only if **every** step below is done. Skipping any one of them produces a silent failure — no label, no tint, no click target, no arrow endpoint — with no console error.

1. **`ANCHORS`** (around line 1820) — add `[lon, lat]` for the country centroid. Without this, arrows using the code render nothing (`anchorProjected` returns `null`, line 2815).
2. **`FOCUS_ACTORS`** (around line 1559) — add the ISO-3 code. `LABEL_COUNTRIES` and `SELECTABLE_COUNTRIES` both alias this set.
3. **`countries:` block** in `window.CONFLICT_DATA` — add a profile with `name`, `capital`, `pop`, `gdp`, `gdpPc`, `mil`, and per-mode `roles` for `sudan` / `ethiopia` / `somalia`. The country-detail panel reads from here.
4. **`NAME_TO_OUR`** (around line 1911) — this is the one that's bitten us. See next section.

## `NAME_TO_OUR` must include Natural Earth short names

The map loads polygons via `d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json')` (line 2353). That bundle wraps Natural Earth 1:50m admin-0, whose `NAME` column uses **abbreviated** short names for several countries. If `NAME_TO_OUR[feature.properties.name]` is undefined, the feature is silently dropped from `state.countriesByIso` (line 2367), which kills:

- `renderCountryLabels()` — no label (line 2827).
- `renderTints()` — no polygon tint, and no clickable country body.
- Arrow origins that resolve via the country feature.

Known Natural Earth short names that must be aliased in `NAME_TO_OUR`:

| Natural Earth `NAME`  | Country / our code       |
|-----------------------|--------------------------|
| `S. Sudan`            | South Sudan / `SSD`      |
| `Central African Rep.`| Central African Republic / `CAF` |
| `Dem. Rep. Congo`     | DR Congo / `COD`         |
| `Eq. Guinea`          | Equatorial Guinea / `GNQ` |
| `Dominican Rep.`      | Dominican Republic / `DOM` |
| `Bosnia and Herz.`    | Bosnia / `BIH`           |
| `eSwatini`            | Eswatini / `SWZ`         |

**Always include both the long form and the Natural Earth short form** for any country that has one. Additive — keep both keys for robustness if the dataset ever changes.

This was the root cause of the "South Sudan is not selectable" bug (fixed in PR #4, Apr 2026). SSD was in every other table but missing from `NAME_TO_OUR` under `"S. Sudan"`.

## Adding a new off-map actor (global power / far-away state)

Follow this checklist:

1. **`ANCHORS`** — add `[lon, lat]` with coords well outside the focus bbox (lon `15..60`, lat `-10..47`) so the arrow enters the viewport from an edge. Existing off-map anchors sit at ~lon `-15` (west), `75` (east), `lat 55` (north), `-10` (south).
2. **`GATEWAYS`** (around line 1839) — add `{ label, code, side }`. `side` must be one of `left` / `right` / `top` / `bottom` (see switch at line 2990). This is what draws the edge chip.
3. **`offmap[]`** inside `window.CONFLICT_DATA` — add a per-mode entry for each conflict where the actor appears (`sudan` / `ethiopia` / `somalia`), with `{ id, name, lean, color, posture, types }`. `lean` must match a side key used by that mode's arrows (e.g., `"fed"`, `"fgs"`, `"rsf"`, etc.) or `"mixed"`.
4. Off-map actors don't need a `countries:` entry — the rail panel reads their posture from the `offmap[]` entry directly.

## Arrow data invariants

- Every arrow in `CONFLICT_DATA.arrows.{sudan|ethiopia|somalia}` needs `id`, `from`, `to`, `side`, `type`, `tier`, `title`, `dates`, `summary`, `sources[]`.
- `type` ∈ `{ military, diplomatic, financial, trade, illicit }` (matches `arrowStyle` at line 1849).
- `tier` ∈ `{ 1, 2, 3 }` (maps to line weight in `tierWidth` at line 1859).
- `from` and `to` must both exist in `ANCHORS`. The renderer returns silently if either is missing — always grep-verify after adding a new actor code.

## Verifying JS + arrow endpoints before push

Before committing changes to `CONFLICT_DATA` or `ANCHORS`, run:

```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const am = html.match(/const ANCHORS = (\{[\s\S]*?\n\});/);
const anchors = (new Function('return ' + am[1]))();
const m = html.match(/window\.CONFLICT_DATA\s*=\s*(\{[\s\S]*?\n\});\s*<\/script>/);
const data = (new Function('return ' + m[1]))();
const codes = new Set();
for (const mode of ['sudan','ethiopia','somalia']) {
  data.arrows[mode].forEach(a => { codes.add(a.from); codes.add(a.to); });
}
const missing = [...codes].filter(c => !anchors[c]);
console.log('Missing anchors:', missing.length ? missing.join(', ') : 'NONE');
console.log('Arrow counts:', Object.fromEntries(['sudan','ethiopia','somalia'].map(m => [m, data.arrows[m].length])));
"
```

This catches both JS syntax errors (the `new Function` will throw) and orphaned actor codes in one pass.

## SOURCES.md is the spec

`SOURCES.md` at the repo root is the sourcing document for the arrow set. When adding or updating arrows in `index.html`, keep SOURCES.md in sync and reference the arrow `id` so the two files can be cross-checked. The "Final verification caveat" section lists primary citations that should be body-verified before merging major changes.
