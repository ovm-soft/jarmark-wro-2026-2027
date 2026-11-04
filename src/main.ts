import { EVENTS, END, START, KIND_LABEL, hoursFor, type Ev } from "./data";

const DAY = 86400000;
const WD = ["nd", "pn", "wt", "śr", "cz", "pt", "sb"];
const MON = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];
const utc = (iso: string) => { const [y, m, d] = iso.split("-").map(Number); return Date.UTC(y, m - 1, d); };
// "today" in Poland, so the counter is right for visitors in any timezone
const todayIso = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Warsaw" }).format(new Date());
const plural = (n: number) => (n === 1 ? "dzień" : "dni");

const tree = `<svg class="tree" viewBox="0 0 60 80" aria-hidden="true">
  <polygon class="g" points="30,12 12,38 48,38"/><polygon class="g" points="30,24 8,54 52,54"/>
  <polygon class="g" points="30,36 4,70 56,70"/><rect class="t" x="26" y="68" width="8" height="8"/>
  <polygon class="s" points="30,12 22,26 26,24 30,28 34,24 38,26"/>
  <polygon class="s" points="30,24 19,40 25,37 30,42 35,37 41,40"/>
  <polygon class="s" points="30,36 14,58 22,54 30,60 38,54 46,58"/>
  <polygon class="star" points="30,2 32,8 38,8 33,12 35,18 30,14 25,18 27,12 22,8 28,8"/>
  <ellipse class="s" cx="30" cy="77" rx="26" ry="3"/></svg>`;

function renderCounter(today: string) {
  const el = document.getElementById("counter")!;
  const t = utc(today), s = utc(START), e = utc(END);
  if (t < s) {
    const n = Math.round((s - t) / DAY);
    el.innerHTML = `<span class="num">${n}</span><span class="lbl">${plural(n)} do Jarmarku</span>`;
  } else if (t <= e) {
    const n = Math.round((t - s) / DAY) + 1, total = Math.round((e - s) / DAY) + 1;
    el.innerHTML = `<span class="lbl big">Jarmark trwa! 🎄</span><span class="lbl">dzień ${n} z ${total}</span>`;
  } else el.innerHTML = `<span class="lbl big">Do zobaczenia za rok! ✨</span>`;
}

function renderGrid(today: string) {
  const grid = document.getElementById("grid")!;
  const tip = document.getElementById("tip")!;
  const t = utc(today);
  let html = "";
  for (let ms = utc(START); ms <= utc(END); ms += DAY) {
    const d = new Date(ms), iso = d.toISOString().slice(0, 10);
    const ev = EVENTS[iso], hours = hoursFor(iso);
    const cls = ["day", ms < t ? "past" : "", ms === t ? "today" : "", ev ? "special " + ev.kind : "", hours === "Nieczynne" ? "closed" : ""].join(" ");
    html += `<button class="${cls}" data-iso="${iso}" ${ev ? "" : 'tabindex="-1"'} aria-label="${d.getUTCDate()} ${MON[d.getUTCMonth()]}${ev ? ", " + ev.title : ""}">
      <span class="date"><b>${d.getUTCDate()}</b> ${MON[d.getUTCMonth()]} <i>${WD[d.getUTCDay()]}</i></span>
      <span class="glyph">${ev ? `<span class="icon">${ev.icon}</span>` : tree}</span>
      <span class="hours">${hours}</span></button>`;
  }
  grid.innerHTML = html;

  const hide = () => { tip.hidden = true; };
  const show = (btn: HTMLElement) => {
    const ev: Ev | undefined = EVENTS[btn.dataset.iso!];
    if (!ev) return hide();
    tip.innerHTML = `<h3>${KIND_LABEL[ev.kind]}</h3><strong>${ev.icon} ${ev.title}</strong><ul>${ev.lines.map(l => `<li>${l}</li>`).join("")}</ul>`;
    tip.hidden = false;
    const r = btn.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    const x = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), window.innerWidth - w - 8);
    const y = r.top - h - 10 > 8 ? r.top - h - 10 : r.bottom + 10;
    tip.style.left = `${x + window.scrollX}px`; tip.style.top = `${y + window.scrollY}px`;
  };
  grid.querySelectorAll<HTMLElement>(".special").forEach(b => {
    b.addEventListener("mouseenter", () => show(b));
    b.addEventListener("mouseleave", hide);
    b.addEventListener("focus", () => show(b));
    b.addEventListener("blur", hide);
    b.addEventListener("click", e => { e.stopPropagation(); tip.hidden ? show(b) : hide(); }); // touch devices
  });
  document.addEventListener("click", hide);
}

const today = todayIso();
renderCounter(today);
renderGrid(today);
