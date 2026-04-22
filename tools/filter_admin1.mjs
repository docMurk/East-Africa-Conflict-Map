// Filter Natural Earth admin-1 to the four countries we care about, strip down the
// property list, and keep geometry as-is (coordinate precision reduction is done at
// read time below). Input is the raw 40 MB NE 10m admin-1 geojson; output is a much
// smaller JS module that assigns window.ADMIN1 for the HTML to consume.
import fs from 'node:fs';

const SRC = process.env.NE_SRC || 'C:/Users/chase/AppData/Local/Temp/ne_admin1.geojson';
const OUT_JSON = 'admin1.json';

// Note: Natural Earth splits Somaliland out as its own adm0 ('SOL') with a single admin-1 feature.
// We include it so Somaliland can be tinted distinctly from Somalia's federal member states.
const WANT_ISO = new Set(['SDN', 'ETH', 'SOM', 'SOL', 'LBY']);

const raw = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const kept = raw.features.filter(f => WANT_ISO.has(f.properties.adm0_a3));

// Reduce coordinate precision to 4 decimal places (~11 m). Huge size win, visually imperceptible at our zoom levels.
const round = (n) => Math.round(n * 1e4) / 1e4;
const roundRing = (ring) => ring.map(([x, y]) => [round(x), round(y)]);
const roundPoly = (coords) => coords.map(roundRing);
const roundMulti = (coords) => coords.map(roundPoly);

for (const f of kept) {
  if (f.geometry.type === 'Polygon') f.geometry.coordinates = roundPoly(f.geometry.coordinates);
  else if (f.geometry.type === 'MultiPolygon') f.geometry.coordinates = roundMulti(f.geometry.coordinates);
  // Strip to the fields we need.
  const p = f.properties;
  f.properties = {
    adm0_a3: p.adm0_a3,
    iso_3166_2: p.iso_3166_2,
    name: p.name,
    name_en: p.name_en,
    name_alt: p.name_alt,
    type: p.type,
    admin: p.admin,
  };
}

const out = { type: 'FeatureCollection', features: kept };
fs.writeFileSync(OUT_JSON, JSON.stringify(out));
console.error(`wrote ${OUT_JSON}: ${kept.length} features, ${fs.statSync(OUT_JSON).size} bytes`);

// Summary by country
const byCountry = {};
for (const f of kept) {
  const c = f.properties.adm0_a3;
  byCountry[c] = byCountry[c] || [];
  byCountry[c].push(f.properties.name);
}
for (const c of Object.keys(byCountry).sort()) {
  console.error(`\n${c} (${byCountry[c].length} regions):`);
  byCountry[c].sort().forEach(n => console.error(`  - ${n}`));
}
