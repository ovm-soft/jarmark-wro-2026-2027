export type Kind = "program" | "stage";
export interface Ev { kind: Kind; icon: string; title: string; lines: string[] }

export const START = "2026-11-20";
export const END = "2027-01-07";
export const KIND_LABEL: Record<Kind, string> = {
  program: "PROGRAM",
  stage: "WYSTĘPY NA ŚWIĄTECZNEJ SCENIE",
};

const P = (icon: string, title: string, lines: string[]): Ev => ({ kind: "program", icon, title, lines });
const S = (icon: string, title: string, lines: string[]): Ev => ({ kind: "stage", icon, title, lines });

export const EVENTS: Record<string, Ev> = {
  "2026-11-20": P("🎺", "Oficjalne otwarcie Jarmarku (godz. 17:00)", [
    "16:45 – przemarsz orkiestry dętej wokół Rynku, postój przy pomniku Fredry",
    "17:00 – uroczyste otwarcie Jarmarku",
    "17:20 – koncert „Christmas Tree-O” z balkonu domku pod Krasnalem",
    "Jarmark otwarty dla zwiedzających już od 10:00",
  ]),
  "2026-11-28": P("📻", "Radio Zet na żywo z Placu Solnego", ["Transmisja na żywo (28–29 listopada)"]),
  "2026-11-29": P("📻", "Radio Zet na żywo z Placu Solnego", ["Transmisja na żywo (28–29 listopada)"]),
  "2026-12-04": P("💡", "Rozświetlenie wrocławskiej choinki (18:00)", [
    "Powitanie Mikołaja",
    "Koncert świąteczny „Jingle Beats Duo”",
  ]),
  "2026-12-06": P("🎅", "Parada z Mikołajem i przyjaciółmi (17:00)", ["Kolorowe widowisko artystyczne w pobliżu choinki"]),
  "2026-12-13": P("🧝", "„Magiczna opowieść Elfów” (17:00)", ["Świąteczne widowisko na specjalnie przygotowanej scenie, przy choince"]),
  "2026-12-20": P("🔥", "Fire-show „Przygody Świętego Mikołaja” (17:00)", ["Widowisko z efektami pirotechnicznymi, przy choince"]),
  "2027-01-02": S("🎤", "Scena świąteczna 16:00–20:00", [
    "16:00 – Alutka, animacje dla dzieci",
    "17:00 – mażoretki ze szkoły Mari Mar",
    "17:40 – „Śpiewające Studio” Kamili Bakalarczyk",
    "19:00 – Gosia Andrzejewicz w świątecznym wydaniu",
  ]),
  "2027-01-03": S("🎶", "Scena świąteczna 16:00–20:00", [
    "16:00 – szkoła śpiewu „Dźwiękodzieło”",
    "17:40 – Tadeusz Seibert świątecznie",
    "19:00 – Iwona Węgrowska: największe hity i świąteczne klasyki",
  ]),
  "2027-01-04": S("🪗", "Scena świąteczna 16:00–20:00", [
    "16:00 – szkoła śpiewu „Vocalverse”",
    "16:50 – Zespół Regionalny „Skalnik” z Sądecczyzny",
    "17:45 – Natalia Pławiak",
    "19:00 – Mirek Bieliński",
  ]),
  "2027-01-05": S("🎁", "„Kraina Mikołaja” 16:00–20:00", ["Program artystyczny: animacje, zabawy i konkursy z nagrodami"]),
  "2027-01-06": S("👑", "Trzech Króli", ["Scena do dyspozycji organizatorów przemarszu „Trzech Króli”"]),
};

/** Opening hours per organizer info (wroclaw.pl, 27.10.2026). Default 10:00–21:00. */
export function hoursFor(iso: string): string {
  switch (iso) {
    case "2026-12-24": case "2026-12-25": case "2027-01-01": return "Nieczynne";
    case "2026-12-26": return "13:00–21:00";
    case "2026-12-31": return "10:00–17:00 · gastro do 2:00";
    default: return "10:00–21:00";
  }
}
