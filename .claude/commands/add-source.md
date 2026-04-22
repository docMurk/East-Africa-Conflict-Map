---
description: Accept a single URL, classify it against the arrow set, and propose an edit — append to an existing arrow, modify an arrow, or draft a new one.
argument-hint: "<URL> [arrow-id]"
allowed-tools: WebFetch, Read, Edit, Grep, Bash
---

# Add source

Single-URL intake. The user is handing you a recent article / report / filing and wants it folded into the map's arrow dataset.

Arguments: `$1` is the URL (required). `$2`, if present, is a specific arrow id to target (skip auto-matching).

## Steps

1. **Validate arguments.** If `$1` is missing or doesn't look like an http(s) URL, stop and ask the user for a URL.

2. **Fetch and extract.** `WebFetch` the URL. Extract:
   - `outlet` (publisher — normalize to the canonical short form used elsewhere in the file, e.g. "Reuters", "UN Panel of Experts on Sudan", "ICG").
   - `date` (publication date, formatted `Mon YYYY` to match existing entries).
   - `headline` (≤ 12 words, trimmed).
   - `key_claims` (bulleted list of 2–5 concrete claims — actors, type of support, timeframe, geography).
   - `tier_hint` — 3 if it's a primary investigative source (UN PoE, ICJ, OFAC, long-form investigation by Reuters/FT/WSJ/NYT/Sentry/Amnesty/HRW), 2 if it's a solid wire/think-tank report, 1 if it's commentary or indirectly sourced.

   If the fetch fails or the page is paywalled/empty, report the failure, ask the user for the outlet + date + a 2-line summary, and proceed from there.

3. **Match against arrows.** Read `index.html` and scan `CONFLICT_DATA.arrows.{sudan|ethiopia|somalia}`.
   - If `$2` was provided, use that arrow id directly.
   - Otherwise, for each `key_claim` identify the likely `(from, to, type)` tuple and search for an arrow whose `from`/`to`/`type`/`title` match. Use `ANCHORS` / `FOCUS_ACTORS` to resolve actor names → codes.
   - Produce up to 3 ranked matches with a confidence note each.

4. **Propose a disposition.** Pick one of:
   - **`append`** — article strengthens an existing arrow. Propose an entry for that arrow's `sources[]` in the file's one-line style:
     ```
     { pub: "<outlet>", head: "<headline>", date: "<Mon YYYY>", url: "<url>" }
     ```
     Also propose the matching bullet for `SOURCES.md`.
   - **`modify`** — article changes the arrow's `summary`, `tier`, or `dates`. Show the current arrow and a proposed diff (summary rewrite ≤ 3 sentences, matching the terse style of neighbouring arrows).
   - **`new-arrow`** — no existing arrow fits. Draft a full arrow object using the shape documented in `CLAUDE.md` (`id`, `from`, `to`, `side`, `type`, `tier`, `title`, `dates`, `summary`, `sources`). Before proposing, verify that `from` and `to` exist in `ANCHORS`; if either is missing, flag the gap per the "Adding a new country" or "Adding a new off-map actor" checklist in `CLAUDE.md` and stop — do **not** silently add an anchor.
   - **`context-only`** — useful for `SOURCES.md` but doesn't map to a specific arrow. Propose a SOURCES.md-only insert.

5. **Confirm with the user.** Print the proposed disposition, target arrow (if any), and the exact edit. Wait for explicit approval before writing. If the user proposes changes, revise and re-confirm.

6. **Apply the edit.** On approval:
   - Edit `index.html` for `append` / `modify` / `new-arrow`.
   - Edit `SOURCES.md` for every disposition (including `new-arrow` — add under the right conflict + actor section).
   - Keep `sources[]` length ≤ 8 per arrow; if at the cap, ask which entry to drop.

7. **Validate.** Run the `node -e` verification snippet from `CLAUDE.md` to check JS parseability and anchor coverage. If it errors, revert the edit and report.

8. **Report.** Show `git diff --stat` and the arrow id touched. Do **not** commit — the user commits when a batch is ready.
