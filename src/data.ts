export type Kind = "program" | "stage" | "end";
export interface Ev { kind: Kind; icon: string; title: string; lines: string[] }
export const START = "2026-11-20";
export const END = "2027-01-07";
export const KIND_LABEL: Record<Kind, string> = { program: "label_program", stage: "label_stage", end: "label_end" };

// "$key" parts are translated (see i18n.ts); names of artists stay literal.
const E = (kind: Kind, icon: string, title: string, lines: string[]): Ev => ({ kind, icon, title, lines });

export const EVENTS: Record<string, Ev> = {
  "2026-11-20": E("program", "🎺", "$t_open", ["16:45 – $march", "17:00 – $ceremony", "17:20 – $treeo", "$from10"]),
  "2026-11-28": E("program", "📻", "$t_radio", ["$live"]),
  "2026-11-29": E("program", "📻", "$t_radio", ["$live"]),
  "2026-12-04": E("program", "💡", "$t_light", ["$santa", "$jingle"]),
  "2026-12-06": E("program", "🎅", "$t_parade", ["$colorShow"]),
  "2026-12-13": E("program", "🧝", "$t_elves", ["$elfShow"]),
  "2026-12-20": E("program", "🔥", "$t_fire", ["$fireShow"]),
  "2027-01-02": E("stage", "🎤", "$t_stage", [
    "16:00 – Alutka – $kids", "17:00 – $majo", "17:40 – „Śpiewające Studio” Kamili Bakalarczyk", "19:00 – Gosia Andrzejewicz – $xmas"]),
  "2027-01-03": E("stage", "🎶", "$t_stage", [
    "16:00 – $sing „Dźwiękodzieło”", "17:40 – Tadeusz Seibert – $xmas", "19:00 – Iwona Węgrowska – $hits"]),
  "2027-01-04": E("stage", "🪗", "$t_stage", [
    "16:00 – $sing „Vocalverse”", "16:50 – $folk", "17:45 – Natalia Pławiak", "19:00 – Mirek Bieliński"]),
  "2027-01-05": E("stage", "🎁", "$t_kraina", ["$krDesc"]),
  "2027-01-06": E("stage", "👑", "$t_kings", ["$kings"]),
  "2027-01-07": E("end", "👋", "$t_end", ["$endDesc"]),
};

export const isClosed = (iso: string) => ["2026-12-24", "2026-12-25", "2027-01-01"].includes(iso);
/** Opening hours per organizer (wroclaw.pl, 27.10.2026). Default 10:00–21:00. */
export function hoursFor(iso: string): string {
  if (isClosed(iso)) return "$closed";
  if (iso === "2026-12-26") return "13:00–21:00";
  if (iso === "2026-12-31") return "10:00–17:00 · $gastro 2:00";
  return "10:00–21:00";
}
