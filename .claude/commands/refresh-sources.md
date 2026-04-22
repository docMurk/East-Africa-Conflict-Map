---
description: Scan news and think tank sites for recent items that could strengthen arrow sources, then write a triage file for review.
argument-hint: "[mode|arrowId|all]  — e.g. `sudan`, `uae-rsf`, or omit for `all`"
allowed-tools: WebSearch, WebFetch, Read, Write, Bash, Grep
---

# Refresh sources

Goal: build a triage file of recent candidate sources so the user can accept/decline each one. Target coverage is **3–5 credible sources per arrow** in `CONFLICT_DATA.arrows`.

## Scope

Argument `$ARGUMENTS` (default `all`) determines scope:

- `all` — every arrow across all three modes.
- `sudan` / `ethiopia` / `somalia` — every arrow for that mode.
- Any other token — treat as an arrow `id` and scope to that single arrow.

## Steps

1. **Load the arrow set.** Read `index.html`, locate `CONFLICT_DATA.arrows` (near line 611), and extract the arrows matching the scope. For each arrow, capture `id`, `title`, `dates`, `summary`, and `sources.length`.

2. **Compute coverage.** For each scoped arrow, compute `gap = max(0, 3 - sources.length)` and flag arrows with `< 3` sources as **priority**. Print a short coverage table up front (id, current count, gap).

3. **Load the allowlist.** Read `.claude/sources-allowlist.txt`. Each non-comment line is a preferred outlet domain (think tanks, wire services, UN/OFAC primary docs, reputable investigative outlets). Treat this as the preferred universe; you may include items from outside the list only if the source is clearly primary (e.g. a UN PoE report, ICJ filing, OFAC designation, court document, or official government release).

4. **Search for each arrow.** For every scoped arrow, run `WebSearch` with queries built from the arrow's `title` + distinctive keywords from `summary`, constrained to the allowlist domains where possible. Bias toward results from the last 12 months. Aim for 4–8 candidate hits per priority arrow and 2–4 per already-covered arrow.

   De-duplicate against the arrow's existing `sources[]` (match on URL host + headline fuzz).

5. **Lightly verify.** For each candidate that looks promising but whose date/outlet isn't obvious from the search snippet, `WebFetch` the URL to confirm outlet, publication date, and a one-line summary. Skip fetching items from the big-name primary sources (UN, OFAC, ICJ, Treasury, ACLED) where the URL is already canonical.

6. **Write the triage file.** Overwrite `.claude/pending-sources.md` using the format in `TEMPLATE` below. Group by arrow id. For each candidate, pre-fill a `disposition:` field with your best guess (`add-to-arrow` / `new-arrow` / `context-only`) but leave the `decision:` field blank for the user to mark `accept` / `decline` / `defer`.

7. **Report.** Print:
   - Coverage summary (arrows still below target after this pass, if any).
   - Count of candidates per arrow.
   - One-line instruction: *"Edit `.claude/pending-sources.md`, mark each `decision:` field, then run `/apply-sources`."*

Do **not** edit `index.html` or `SOURCES.md` in this command. This is read-only triage.

## TEMPLATE for `.claude/pending-sources.md`

```markdown
# Pending source triage

Generated: <ISO date>
Scope: <argument>
Arrows scanned: <N>
Candidates found: <N>

Instructions: for each candidate, set `decision:` to one of `accept` / `decline` / `defer`. Leave blank to skip. Then run `/apply-sources`.

---

## Arrow: `uae-rsf` — UAE → RSF (current sources: 6)

### Candidate 1
- outlet: Reuters
- date: 2026-03-14
- url: https://www.reuters.com/...
- headline: "..."
- summary: 1–2 lines on what the piece adds beyond existing sources.
- disposition: add-to-arrow
- decision:

### Candidate 2
...
```
