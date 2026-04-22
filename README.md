# The Horn & the Nile

An interactive map of overlapping conflicts in East Africa — Sudan (SAF vs. RSF), Ethiopia (federal government vs. TPLF/Tigray and related fronts), and Somalia (FGS vs. Somaliland, with Al-Shabaab influence) — and the regional and extra-regional actors shaping each.

**Live:** open `index.html` in a browser, or visit the GitHub Pages URL if enabled.

## What it shows

Three switchable modes on a single map:

- **Sudan** — SAF (deep blue) vs. RSF (warm red); contested and neutral regions tinted or hatched.
- **Ethiopia** — Federal government (deep green) vs. TPLF / Tigray and aligned fronts (amber).
- **Somalia** — Federal Government of Somalia (teal) vs. Somaliland (purple); Al-Shabaab influence shown as hatched dark red.

Overlay arrows encode the *type* of external support — military (solid), diplomatic (dashed), financial (dotted), trade (double-line), illicit (wavy) — with thickness indicating scale (minor / significant / major). Arrow color matches the side being supported.

## Interactivity

- **Click an arrow** → side panel with the actor pair, support type, date range, short description, and links to public reporting.
- **Click a country** → country profile (flag, capital, population, GDP, military expenditure where relevant) and its role in the active conflict.
- **Right rail** defaults to a panel of global / off-map actors (United States, China, Russia) whose posture is shown without cluttering the geography.
- Mode toggle at top right swaps the overlay layer; the base map itself stays put.

## Scope

Current state of play, 2021–2026. Older sources are used only to establish durable relationships. Every arrow is backed by at least one public source (Reuters, AP, BBC, FT, Crisis Group, ACLED, CFR, Al Jazeera, Sudan Tribune, Addis Standard, etc.). Where evidence is thin, the flow is labeled "reported / unconfirmed" rather than stated as fact.

## Stack

- Single self-contained HTML file. No build step.
- [D3 v7](https://d3js.org) and [topojson-client](https://github.com/topojson/topojson-client) loaded from CDN.
- Base map: `world-atlas@2` countries-50m TopoJSON from jsDelivr.

Requires internet access on first load (for the CDN libraries and map data).

## Intent

This is an analytical illustration prototype, not a live intelligence product. It was generated with [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs) and is meant to make the web of alignments across the three conflicts graspable at a glance, with drill-down sources for anyone who wants to verify.
