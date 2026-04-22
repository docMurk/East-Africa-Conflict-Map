# `.claude/` — project slash commands and config

Custom slash commands for the East Africa Conflict Map live in `commands/`. They are loaded automatically by Claude Code when this repo is the working directory. Each `*.md` file in `commands/` becomes a command — the filename (minus the extension) is the command name. (This README lives at `.claude/README.md` on purpose — keeping it out of `commands/` avoids registering a spurious `/README` command.)

## Commands

### `/refresh-sources [mode|arrowId|all]`

Scan for recent news and think-tank items that could strengthen the citation coverage of arrows in `CONFLICT_DATA.arrows`. Target is **3–5 credible sources per arrow**.

- Scope is the argument: `all` (default), one of `sudan` / `ethiopia` / `somalia`, or a specific arrow `id` (e.g. `uae-rsf`).
- Reads the preferred-outlet list from `sources-allowlist.txt`.
- Output: a triage file at `pending-sources.md` with each candidate's outlet / date / headline / summary / suggested disposition and a blank `decision:` field.
- Does **not** edit `index.html` or `SOURCES.md`.

Workflow: run `/refresh-sources`, edit the triage file (mark each `decision:` as `accept`, `decline`, or `defer`), then run `/apply-sources`.

### `/apply-sources`

Read `pending-sources.md`, take everything marked `decision: accept`, and apply the edits to `index.html` (arrow `sources[]`) and `SOURCES.md`.

- Appends, does not replace. Caps arrow `sources[]` at 8 — asks what to drop if full.
- For `disposition: new-arrow` items, it flags them but does **not** auto-create arrows — use `/add-source` or edit manually, because new arrows have multi-step invariants (see `CLAUDE.md`).
- Runs the `node -e` validation snippet from `CLAUDE.md` before reporting success. Reverts if validation fails.
- Archives applied items to `applied-sources.log` and removes them from the pending file. `decline` / `defer` / blank entries are left in place.
- Never commits. Final `git diff --stat` is printed for the user to commit.

### `/add-source <URL> [arrow-id]`

Single-URL intake. Hand Claude a link to an article / report / filing and it will fold the citation into the map.

- Fetches the URL, extracts outlet / date / headline / claims.
- Matches against existing arrows (or jumps straight to the arrow id if provided as `$2`).
- Proposes one of four dispositions: `append` (new entry in an arrow's `sources[]`), `modify` (rewrite arrow `summary` / `tier` / `dates`), `new-arrow` (draft a full arrow object), or `context-only` (SOURCES.md bullet only).
- Waits for explicit user approval before editing. Runs the validation snippet after editing. Never commits.

## Supporting files in this directory

- `sources-allowlist.txt` — preferred outlet domains, grouped by category. Edit freely; commands read it verbatim.
- `pending-sources.md` — triage worklist, created by `/refresh-sources`. Gitignore-worthy only if you want to keep the triage personal; otherwise leave it tracked so reviewers can see proposed additions.
- `applied-sources.log` — append-only log of accepted sources with ISO dates, written by `/apply-sources`.

## Conventions these commands assume

- Arrow invariants live in `../CLAUDE.md` under "Arrow data invariants". Commands should respect them.
- The `node -e` verification snippet in `CLAUDE.md` is the canonical pre-push check. Any command that mutates `index.html` runs it.
- `SOURCES.md` is the companion spec document. Any citation added to `index.html` should also be reflected there (and vice versa for context-only items).
- Nothing in this folder auto-commits. The user always reviews `git diff` first.
