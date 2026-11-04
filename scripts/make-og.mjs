// Generates public/og-image.png (1200x630) with the days counter for TODAY (Europe/Warsaw)
// and stamps a cache-busting ?v=<date> on og:image in index.html. Runs before every build.
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const START = "2026-11-20", END = "2027-01-07";
const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Warsaw" }).format(new Date());
const utc = (iso) => { const [y, m, d] = iso.split("-").map(Number); return Date.UTC(y, m - 1, d); };
const DAY = 86400000, t = utc(today);
const word = (n) => (n === 1 ? "dzień" : "dni");

let big, size, line;
if (t < utc(START)) { const n = (utc(START) - t) / DAY; big = String(n); size = 280; line = `${word(n)} do Jarmarku`; }
else if (t < utc(END)) { const n = (utc(END) - t) / DAY; big = String(n); size = 280; line = `${word(n)} do końca Jarmarku`; }
else if (t === utc(END)) { big = "Dziś"; size = 190; line = "ostatni dzień Jarmarku!"; }
else { big = "Do zobaczenia"; size = 110; line = "za rok!"; }

const tree = `<svg x="740" y="70" width="380" height="507" viewBox="0 0 60 80">
  <polygon fill="#2e8b57" points="30,12 12,38 48,38"/><polygon fill="#2e8b57" points="30,24 8,54 52,54"/>
  <polygon fill="#2e8b57" points="30,36 4,70 56,70"/><rect fill="#7a4a24" x="26" y="68" width="8" height="8"/>
  <polygon fill="#fff" points="30,12 22,26 26,24 30,28 34,24 38,26"/><polygon fill="#fff" points="30,24 19,40 25,37 30,42 35,37 41,40"/>
  <polygon fill="#fff" points="30,36 14,58 22,54 30,60 38,54 46,58"/>
  <circle fill="#e63946" cx="22" cy="46" r="2.3"/><circle fill="#ffd24a" cx="38" cy="50" r="2.3"/><circle fill="#3a86ff" cx="30" cy="34" r="2.1"/>
  <circle fill="#ffd24a" cx="16" cy="62" r="2.3"/><circle fill="#e63946" cx="44" cy="63" r="2.3"/>
  <polygon fill="#ffd24a" points="30,2 32,8 38,8 33,12 35,18 30,14 25,18 27,12 22,8 28,8"/>
  <ellipse fill="#fff" cx="30" cy="77" rx="26" ry="3"/></svg>`;
const flakes = Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 197) % 1200}" cy="${(i * 113) % 630}" r="${2 + (i % 4)}" fill="#fff" opacity=".7"/>`).join("");
const F = `font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="700"`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d7cc2"/><stop offset="1" stop-color="#a9d3f3"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>${flakes}${tree}
  <text x="70" y="110" ${F} font-size="36" fill="#fff" letter-spacing="3">JARMARK BOŻONARODZENIOWY · WROCŁAW</text>
  <text x="64" y="${190 + size * 0.75}" ${F} font-size="${size}" fill="#ffd24a" stroke="#b07a00" stroke-width="3">${big}</text>
  <text x="70" y="${190 + size * 0.75 + 80}" ${F} font-size="58" fill="#fff">${line}</text>
  <text x="70" y="590" ${F} font-size="30" fill="#12335f">PL Guide · nieoficjalna strona</text></svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
const html = readFileSync("index.html", "utf8").replace(/og-image\.png\?v=[^"]*/g, `og-image.png?v=${today}`);
writeFileSync("index.html", html);
console.log(`og-image for ${today}: ${big} / ${line}`);
