// Drive Chrome headless to screenshot each of the three modes.
import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs';

const PORT = 8770;
const OUT_DIR = 'C:/Users/chase/AppData/Local/Temp';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

// Inject JS to click a mode button then wait briefly before screenshot.
// Chrome --screenshot runs once at load; for mode-switching we use a small
// html shim per mode that sets state in localStorage before navigating.

const modes = ['sudan', 'ethiopia', 'somalia'];
for (const m of modes) {
  fs.writeFileSync(`${OUT_DIR}/shim_${m}.html`, `
<!doctype html><meta charset="utf-8">
<title>shim ${m}</title>
<script>
localStorage.setItem('conflict_mode', '${m}');
location.replace('/index.html');
</script>`);
}

// Serve the repo directory via a trivial python http.server started outside.
// Here we only invoke Chrome.
function shoot(mode) {
  const url = `http://localhost:${PORT}/shim_${mode}.html`;
  // Can't use shim files with relative URL — put them in the repo dir.
  const args = [
    '--headless=new', '--no-sandbox', '--disable-gpu',
    '--window-size=1600,1000',
    `--screenshot=${OUT_DIR}/verify_${mode}.png`,
    '--virtual-time-budget=10000',
    url
  ];
  execSync(`"${CHROME}" ${args.join(' ')}`, { stdio: 'inherit' });
}

for (const m of modes) {
  // Copy shim to repo dir so the server serves it.
  fs.copyFileSync(`${OUT_DIR}/shim_${m}.html`, `shim_${m}.html`);
}
for (const m of modes) shoot(m);
// Cleanup shims
for (const m of modes) fs.unlinkSync(`shim_${m}.html`);
console.log('done');
