---
description: Apply accepted candidates from the pending-sources triage file to index.html and SOURCES.md.
allowed-tools: Read, Edit, Bash, Grep
---

# Apply sources

Commit accepted triage items from `.claude/pending-sources.md` into the arrow dataset. This is the companion to `/refresh-sources`.

## Steps

1. **Read** `.claude/pending-sources.md`. If the file does not exist, tell the user to run `/refresh-sources` first and stop.

2. **Parse candidates.** For each candidate, extract `outlet`, `date`, `url`, `headline`, `summary`, `disposition`, and `decision`. Ignore any candidate whose `decision:` is blank, `decline`, or `defer`.

3. **Group accepted items by target arrow.** For each `accept` item:
   - If `disposition: add-to-arrow`, the target arrow id is the section heading.
   - If `disposition: new-arrow`, flag for a separate new-arrow proposal step (see step 6).
   - If `disposition: context-only`, add the citation to `SOURCES.md` under the relevant actor section but do not touch `index.html`.

4. **Edit `index.html`.** For each `add-to-arrow` acceptance, locate the arrow by `id:` in `CONFLICT_DATA.arrows.{sudan|ethiopia|somalia}` and append a new entry to its `sources` array in the existing one-line object style:
   ```
   { pub: "<outlet>", head: "<short headline>", date: "<Mon YYYY>", url: "<url>" }
   ```
   Preserve existing indentation and trailing commas. Do not reorder existing entries. Keep the total sources at or below 8; if the arrow is already at 8, ask the user which existing item to drop.

5. **Edit `SOURCES.md`.** For every accepted item (including `context-only`), append a bullet under the matching arrow entry in `SOURCES.md`, using the existing bullet format:
   ```
   - *<Outlet>*, "<headline>", <Mon YYYY>, <url>
   ```
   If no matching SOURCES.md entry exists yet, create one under the correct conflict + actor section.

6. **New-arrow items.** Do **not** auto-create new arrows. Instead, list them for the user with a one-line proposed `{ id, from, to, side, type, tier, title, dates }` based on the candidate's content, and ask the user to confirm before invoking `/add-source` (which handles the full new-arrow workflow) or edit manually.

7. **Validate.** Run the verification snippet from `CLAUDE.md`:
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
   If this throws or reports missing anchors, revert the edits for the offending arrow and report.

8. **Archive processed items.** Append the accepted items (with today's ISO date) to `.claude/applied-sources.log`, then remove the applied blocks from `.claude/pending-sources.md`. Leave any `decline` / `defer` / blank blocks untouched so the user can come back to them.

9. **Report.** Print a short summary: arrows modified, SOURCES.md sections touched, new-arrow proposals (if any), and the validation result. Show `git diff --stat` at the end. Do **not** commit — leave that to the user.
