export type Lang = "pl" | "uk" | "en" | "fr" | "de" | "cs";
export const LANGS: Lang[] = ["pl", "uk", "en", "fr", "de", "cs"];
export const LANG_BTN: Record<Lang, string> = { pl: "PL", uk: "UA", en: "EN", fr: "FR", de: "DE", cs: "CS" };
type Row = [string, string, string, string, string, string]; // pl, uk, en, fr, de, cs

export const DAYS: Record<Lang, Record<string, string>> = {
  pl: { one: "dzień", few: "dni", many: "dni", other: "dni" },
  uk: { one: "день", few: "дні", many: "днів", other: "днів" },
  cs: { one: "den", few: "dny", many: "dní", other: "dní" },
  en: { one: "day", other: "days" }, fr: { one: "jour", other: "jours" }, de: { one: "Tag", other: "Tage" },
};

const T: Record<string, Row> = {
  kicker: ["Jarmark Bożonarodzeniowy · Wrocław", "Різдвяний ярмарок · Вроцлав", "Christmas Market · Wrocław", "Marché de Noël · Wrocław", "Weihnachtsmarkt · Breslau", "Vánoční trhy · Vratislav"],
  toFair: ["do Jarmarku", "до Ярмарку", "until the Market", "avant le marché", "bis zum Markt", "do začátku trhů"],
  running: ["Jarmark trwa! 🎄", "Ярмарок триває! 🎄", "The Market is on! 🎄", "Le marché est ouvert ! 🎄", "Der Markt läuft! 🎄", "Trhy právě probíhají! 🎄"],
  dayOf: ["dzień {n} z {t}", "день {n} з {t}", "day {n} of {t}", "jour {n} sur {t}", "Tag {n} von {t}", "den {n} z {t}"],
  farewell: ["Do zobaczenia za rok! ✨", "До зустрічі наступного року! ✨", "See you next year! ✨", "À l’année prochaine ! ✨", "Bis nächstes Jahr! ✨", "Na shledanou za rok! ✨"],
  legend: ["★ ikona = dzień z programem · najedź lub dotknij, by zobaczyć szczegóły", "★ значок = день із програмою · наведіть або торкніться, щоб побачити деталі", "★ icon = day with a programme · hover or tap for details", "★ icône = jour avec programme · survolez ou touchez pour les détails", "★ Symbol = Tag mit Programm · Maus darüber oder antippen für Details", "★ ikona = den s programem · najeďte nebo klepněte pro podrobnosti"],
  note: ["Godziny i program wg organizatora – sprawdzaj aktualizacje.", "Години та програма за даними організатора – стежте за оновленнями.", "Hours and programme per the organiser – check for updates.", "Horaires et programme selon l’organisateur – vérifiez les mises à jour.", "Zeiten und Programm laut Veranstalter – bitte Aktualisierungen beachten.", "Hodiny a program dle pořadatele – sledujte aktualizace."],
  closed: ["Nieczynne", "Зачинено", "Closed", "Fermé", "Geschlossen", "Zavřeno"],
  gastro: ["gastro do", "гастро до", "food & drinks until", "restauration jusqu’à", "Gastro bis", "gastro do"],
  label_program: ["PROGRAM", "ПРОГРАМА", "PROGRAM", "PROGRAMME", "PROGRAMM", "PROGRAM"],
  label_stage: ["WYSTĘPY NA ŚWIĄTECZNEJ SCENIE", "ВИСТУПИ НА СВЯТКОВІЙ СЦЕНІ", "PERFORMANCES ON THE CHRISTMAS STAGE", "SPECTACLES SUR LA SCÈNE DE NOËL", "AUFTRITTE AUF DER WEIHNACHTSBÜHNE", "VYSTOUPENÍ NA VÁNOČNÍM PODIU"],
  label_end: ["OSTATNI DZIEŃ", "ОСТАННІЙ ДЕНЬ", "LAST DAY", "DERNIER JOUR", "LETZTER TAG", "POSLEDNÍ DEN"],
  t_open: ["Oficjalne otwarcie Jarmarku (17:00)", "Офіційне відкриття Ярмарку (17:00)", "Official opening of the Market (5 pm)", "Ouverture officielle du marché (17h00)", "Offizielle Eröffnung des Marktes (17:00)", "Slavnostní zahájení trhů (17:00)"],
  t_radio: ["Radio Zet na żywo z Placu Solnego", "Radio Zet наживо з Plac Solny", "Radio Zet live from Plac Solny", "Radio Zet en direct de la place Solny", "Radio Zet live vom Plac Solny", "Radio Zet živě z náměstí Solného"],
  t_light: ["Rozświetlenie wrocławskiej choinki (18:00)", "Запалення вроцлавської ялинки (18:00)", "Lighting of the Wrocław Christmas tree (6 pm)", "Illumination du sapin de Wrocław (18h00)", "Entzündung des Breslauer Weihnachtsbaums (18:00)", "Rozsvícení vratislavského stromu (18:00)"],
  t_parade: ["Parada z Mikołajem i przyjaciółmi (17:00)", "Парад зі Святим Миколаєм і друзями (17:00)", "Parade with Santa and friends (5 pm)", "Défilé avec le Père Noël et ses amis (17h00)", "Parade mit dem Weihnachtsmann und Freunden (17:00)", "Průvod s Mikulášem a přáteli (17:00)"],
  t_elves: ["„Magiczna opowieść Elfów” (17:00)", "«Чарівна історія Ельфів» (17:00)", "“The Magical Tale of the Elves” (5 pm)", "« Le conte magique des elfes » (17h00)", "„Die magische Geschichte der Elfen“ (17:00)", "„Kouzelný příběh Elfů“ (17:00)"],
  t_fire: ["Fire-show „Przygody Świętego Mikołaja” (17:00)", "Вогняне шоу «Пригоди Святого Миколая» (17:00)", "Fire show “The Adventures of Santa Claus” (5 pm)", "Spectacle de feu « Les aventures du Père Noël » (17h00)", "Feuershow „Die Abenteuer des Weihnachtsmanns“ (17:00)", "Ohnivá show „Dobrodružství Mikuláše“ (17:00)"],
  t_stage: ["Scena świąteczna 16:00–20:00", "Святкова сцена 16:00–20:00", "Christmas stage 4–8 pm", "Scène de Noël 16h00–20h00", "Weihnachtsbühne 16:00–20:00", "Vánoční pódium 16:00–20:00"],
  t_kraina: ["„Kraina Mikołaja” 16:00–20:00", "«Країна Миколая» 16:00–20:00", "“Santa’s Land” 4–8 pm", "« Le Pays du Père Noël » 16h00–20h00", "„Land des Weihnachtsmanns“ 16:00–20:00", "„Země Mikuláše“ 16:00–20:00"],
  t_kings: ["Trzech Króli", "Три королі", "Three Kings’ Day", "Épiphanie – les Rois mages", "Heilige Drei Könige", "Tři králové"],
  t_end: ["Ostatni dzień Jarmarku – do zobaczenia za rok!", "Останній день Ярмарку – до зустрічі наступного року!", "Last day of the Market – see you next year!", "Dernier jour du marché – à l’année prochaine !", "Letzter Markttag – bis nächstes Jahr!", "Poslední den trhů – na shledanou za rok!"],
  march: ["przemarsz orkiestry dętej wokół Rynku, postój przy pomniku Fredry", "марш духового оркестру навколо Ринку, зупинка біля пам’ятника Фредру", "brass band march around the Market Square, stopping at the Fredro monument", "défilé de l’orchestre autour de la place, arrêt au monument Fredro", "Marsch der Blaskapelle um den Ring, Halt am Fredro-Denkmal", "pochod dechové kapely kolem Rynku, zastávka u pomníku Fredra"],
  ceremony: ["uroczyste otwarcie Jarmarku", "урочисте відкриття Ярмарку", "grand opening of the Market", "ouverture solennelle du marché", "feierliche Eröffnung des Marktes", "slavnostní zahájení trhů"],
  treeo: ["koncert „Christmas Tree-O” z balkonu domku pod Krasnalem", "концерт «Christmas Tree-O» з балкона будиночка під Гномиком", "“Christmas Tree-O” concert from the balcony of the house under the Gnome", "concert de « Christmas Tree-O » depuis le balcon de la maisonnette sous le Nain", "Konzert „Christmas Tree-O“ vom Balkon des Häuschens unter dem Zwerg", "koncert „Christmas Tree-O“ z balkonu domku pod Trpaslíkem"],
  from10: ["Jarmark otwarty dla zwiedzających już od 10:00", "Ярмарок відкритий для відвідувачів вже від 10:00", "The Market is open to visitors from 10:00", "Le marché est ouvert aux visiteurs dès 10h00", "Der Markt ist schon ab 10:00 für Besucher geöffnet", "Trhy jsou pro návštěvníky otevřené už od 10:00"],
  live: ["transmisja na żywo (28–29 listopada)", "пряма трансляція (28–29 листопада)", "live broadcast (28–29 November)", "émission en direct (28–29 novembre)", "Live-Übertragung (28.–29. November)", "živé vysílání (28.–29. listopadu)"],
  santa: ["powitanie Mikołaja", "зустріч зі Святим Миколаєм", "welcome for Santa", "accueil du Père Noël", "Begrüßung des Weihnachtsmanns", "přivítání Mikuláše"],
  jingle: ["koncert świąteczny „Jingle Beats Duo”", "різдвяний концерт «Jingle Beats Duo»", "Christmas concert by “Jingle Beats Duo”", "concert de Noël de « Jingle Beats Duo »", "Weihnachtskonzert „Jingle Beats Duo“", "vánoční koncert „Jingle Beats Duo“"],
  colorShow: ["kolorowe widowisko artystyczne w pobliżu choinki", "барвисте мистецьке шоу біля ялинки", "colourful performance near the Christmas tree", "spectacle coloré près du sapin", "buntes Kunstspektakel am Weihnachtsbaum", "barevné představení u stromu"],
  elfShow: ["widowisko na specjalnie przygotowanej scenie, przy choince", "вистава на спеціально підготовленій сцені біля ялинки", "show on a specially built stage by the tree", "spectacle sur une scène spécialement aménagée près du sapin", "Show auf einer eigens errichteten Bühne am Baum", "představení na zvláštním pódiu u stromu"],
  fireShow: ["widowisko z efektami pirotechnicznymi, przy choince", "вистава з піротехнічними ефектами біля ялинки", "show with pyrotechnic effects by the tree", "spectacle avec effets pyrotechniques près du sapin", "Show mit Pyrotechnik am Weihnachtsbaum", "představení s pyrotechnikou u stromu"],
  kids: ["animacje dla dzieci", "розваги для дітей", "entertainment for kids", "animations pour enfants", "Kinderanimation", "animace pro děti"],
  majo: ["mażoretki ze szkoły Mari Mar", "мажоретки зі школи Mari Mar", "majorettes from the Mari Mar school", "majorettes de l’école Mari Mar", "Majoretten der Schule Mari Mar", "mažoretky ze školy Mari Mar"],
  xmas: ["w świątecznym wydaniu", "у різдвяному виконанні", "in a Christmas edition", "version de Noël", "weihnachtlich", "ve vánočním vydání"],
  hits: ["największe hity i świąteczne klasyki", "найбільші хіти та різдвяна класика", "greatest hits and Christmas classics", "ses plus grands tubes et classiques de Noël", "größte Hits und Weihnachtsklassiker", "největší hity a vánoční klasika"],
  sing: ["szkoła śpiewu", "школа співу", "singing school", "école de chant", "Gesangsschule", "pěvecká škola"],
  folk: ["Zespół Regionalny „Skalnik” z Sądecczyzny", "фольклорний ансамбль «Skalnik» з Сондецчини", "“Skalnik” folk ensemble from the Sącz region", "ensemble folklorique « Skalnik » de la région de Sącz", "Folkloreensemble „Skalnik“ aus der Region Sącz", "soubor „Skalnik“ z regionu Sądecczyzna"],
  krDesc: ["program artystyczny: animacje, zabawy i konkursy z nagrodami", "мистецька програма: розваги, ігри та конкурси з призами", "entertainment programme: animations, games and contests with prizes", "programme artistique : animations, jeux et concours avec cadeaux", "Kunstprogramm: Animationen, Spiele und Wettbewerbe mit Preisen", "umělecký program: animace, hry a soutěže o ceny"],
  kings: ["scena do dyspozycji organizatorów przemarszu „Trzech Króli”", "сцена в розпорядженні організаторів ходи «Трьох королів»", "the stage is at the disposal of the Three Kings’ procession organisers", "la scène est à la disposition des organisateurs du cortège des Rois mages", "die Bühne steht den Veranstaltern des Dreikönigszugs zur Verfügung", "pódium je k dispozici pořadatelům Průvodu tří králů"],
  endDesc: ["dziękujemy za wspólne świętowanie – do zobaczenia za rok! 🎄", "дякуємо, що святкували разом – до зустрічі наступного року! 🎄", "thanks for celebrating with us – see you next year! 🎄", "merci d’avoir fêté avec nous – à l’année prochaine ! 🎄", "danke fürs Mitfeiern – bis nächstes Jahr! 🎄", "děkujeme, že jste slavili s námi – na shledanou za rok! 🎄"],
  credit: ["Wykonanie", "Виконання", "Made by", "Réalisation", "Umsetzung", "Provedení"],
  official: ["Oficjalna strona Jarmarku", "Офіційний сайт Ярмарку", "Official Market website", "Site officiel du marché", "Offizielle Website des Marktes", "Oficiální web trhů"],
  my_ad_ikze: ["Kalkulator IKZE", "Калькулятор IKZE", "IKZE Calculator", "Calculateur IKZE", "IKZE-Rechner", "Kalkulator IKZE"],
  unofficial: ["Nieoficjalna strona, stworzona dla zabawy i dla społeczności – nie jest powiązana z organizatorem Jarmarku.", "Неофіційний сайт, створений заради розваги та для спільноти – не пов’язаний з організатором Ярмарку.", "Unofficial site, made for fun and for the community – not affiliated with the Market’s organiser.", "Site non officiel, créé pour le plaisir et pour la communauté – sans lien avec l’organisateur du marché.", "Inoffizielle Seite, aus Spaß und für die Community gemacht – nicht mit dem Veranstalter des Marktes verbunden.", "Neoficiální stránka vytvořená pro zábavu a pro komunitu – nemá žádnou spojitost s pořadatelem trhů."],
  ads_title: ["Od autora", "Від автора", "From the author", "De l’auteur", "Vom Autor", "Od autora"],
  my_ad_look_n_trace: ["Rysowanie po konturze z użyciem kamery", "Малювання за контуром за допомогою камери", "Tracing over contours using the camera", "Dessin sur les contours à l’aide de la caméra", "Zeichnen nach Kontur mithilfe der Kamera", "Kreslení podle obrysu pomocí kamery"],
  my_ad_pl_guide: ["Wrocław i Polska – Przewodnik po Życiu", "Провідник по життю у Вроцлаві та Польщі", "Wrocław & Poland Life Guide", "Guide de la vie à Wrocław et en Pologne", "Life-Guide für Breslau und Polen", "Průvodce životem ve Vratislavi a Polsku"],
  my_ad_tmaps: ["Google Maps Barszcz – różne niestandardowe mapy Google", "Google Maps Борщ – різноманітні власні карти Google", "Google Maps Borscht – various custom Google maps", "Google Maps Borsch – diverses cartes Google personnalisées", "Google Maps Borschtsch – verschiedene benutzerdefinierte Google Maps", "Google Maps Boršč – různé vlastní mapy Google"],
};

export const tr = (key: string, lang: Lang) => T[key]?.[LANGS.indexOf(lang)] ?? key;
/** Replaces every $key in a string with its translation; other text (names) stays as is. */
export const fill = (s: string, lang: Lang) => s.replace(/\$(\w+)/g, (_, k: string) => tr(k, lang));

/** IKZE calculator page per language (Czech uses the Polish version). */
export const IKZE_URL: Record<Lang, string> = {
  pl: "https://ovm-soft.github.io/ikze/pl", cs: "https://ovm-soft.github.io/ikze/pl", uk: "https://ovm-soft.github.io/ikze/uk",
  en: "https://ovm-soft.github.io/ikze/en", fr: "https://ovm-soft.github.io/ikze/fr", de: "https://ovm-soft.github.io/ikze/de",
};
