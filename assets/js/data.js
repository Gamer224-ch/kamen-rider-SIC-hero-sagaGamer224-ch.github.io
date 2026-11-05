/* ============================================================
   Kamen Rider S.I.C. Hero Saga Translations — Datos del sitio
   Historias, series y metadatos (textos bilingües ES/EN).
   Fuente original: https://kamenridersictranslations.wordpress.com
   ============================================================ */

const SITE = {
  source: "https://kamenridersictranslations.wordpress.com",
  sourceLabel: "kamenridersictranslations.wordpress.com",
  title: {
    es: "Kamen Rider S.I.C. Hero Saga Translations",
    en: "Kamen Rider S.I.C. Hero Saga Translations"
  },
  tagline: {
    es: "Traducciones de las Hero Saga de S.I.C. reunidas en un solo lugar",
    en: "Translations of S.I.C. Hero Saga stories collected in one place"
  }
};

/* ----- Series (grupos por saga de Kamen Rider) ----- */
const SERIES = [
  { id: "showa",   name: { es: "Kamen Rider",                en: "Kamen Rider" },                badge: "bg-red-600 text-white" },
  { id: "v3",      name: { es: "Kamen Rider V3 y Riderman",  en: "Kamen Rider V3 & Riderman" },  badge: "bg-emerald-600 text-white" },
  { id: "kuuga",   name: { es: "Kamen Rider Kuuga",          en: "Kamen Rider Kuuga" },          badge: "bg-red-500 text-white" },
  { id: "agito",   name: { es: "Kamen Rider Agito",          en: "Kamen Rider Agito" },          badge: "bg-amber-500 text-zinc-900" },
  { id: "ryuki",   name: { es: "Kamen Rider Ryuki",          en: "Kamen Rider Ryuki" },          badge: "bg-rose-600 text-white" },
  { id: "faiz",    name: { es: "Kamen Rider 555",            en: "Kamen Rider 555" },            badge: "bg-yellow-400 text-zinc-900" },
  { id: "blade",   name: { es: "Kamen Rider Blade",          en: "Kamen Rider Blade" },          badge: "bg-blue-600 text-white" },
  { id: "hibiki",  name: { es: "Kamen Rider Hibiki",         en: "Kamen Rider Hibiki" },         badge: "bg-purple-600 text-white" },
  { id: "kabuto",  name: { es: "Kamen Rider Kabuto",         en: "Kamen Rider Kabuto" },         badge: "bg-orange-600 text-white" },
  { id: "kiva",    name: { es: "Kamen Rider Kiva",           en: "Kamen Rider Kiva" },           badge: "bg-yellow-600 text-white" },
  { id: "heisei",  name: { es: "Riders Heisei",              en: "Heisei Riders" },              badge: "bg-zinc-700 text-white" }
];

/* ----- Historias ----- */
const STORIES = [
  {
    id: "kamen-rider-99",
    series: "showa",
    title: { es: "Kamen Rider #99", en: "Kamen Rider #99" },
    synopsis: {
      es: "Tras la caída de Gel Shocker, Takeshi Hongo y Hayato Ichimonji encuentran a Kenji y Mieko, dos cíborgs fugitivos perseguidos por una nueva organización. El prólogo que conecta con el nacimiento de Kamen Rider V3.",
      en: "After Gel Shocker's fall, Takeshi Hongo and Hayato Ichimonji meet Kenji and Mieko, two fugitive cyborgs hunted by a new organization. The prologue that leads to the birth of Kamen Rider V3."
    },
    cover: "assets/img/covers/kamen-rider-99.jpg",
    episodes: ["Eve of V3", "Eve of V3 2", "Eve of V3 3", "Birth of V3", "Birth of V3 2"],
    original: "https://kamenridersictranslations.wordpress.com/eve-of-v3-1-masked-rider-99-episode-1/",
    featured: true
  },
  {
    id: "riderman-another-after",
    series: "v3",
    title: { es: "Riderman: Otro Después", en: "Riderman Another After" },
    synopsis: {
      es: "La historia de Joji Yuki, Riderman: su pasado como científico de Destron, la trágica muerte de su madre y su sacrificio en el cohete Plutón... ¿y qué hay después?",
      en: "The story of Joji Yuki, Riderman: his past as a Destron scientist, his mother's tragic death and his sacrifice aboard the Pluton Rocket... and what comes after?"
    },
    cover: "assets/img/covers/riderman-another-after.png",
    episodes: ["Divine Station", "Attachment", "Destron Rider", "Joji Yuki"],
    original: "https://kamenridersictranslations.wordpress.com/divine-station-riderman-another-after-episode-1/",
    featured: false
  },
  {
    id: "odyssey",
    series: "kuuga",
    title: { es: "Odisea", en: "Odyssey" },
    synopsis: {
      es: "En la antigüedad, el joven Riku recibe la piedra Amadam y se transforma en Kuuga para proteger al pueblo Rinto de la amenaza de los Gurongi.",
      en: "In ancient times, young Riku receives the Amadam stone and becomes Kuuga to protect the Rinto people from the Gurongi threat."
    },
    cover: "assets/img/covers/odyssey.png",
    episodes: ["Rinto", "Gurongi", "Gouram", "Daguva"],
    original: "https://kamenridersictranslations.wordpress.com/rinto-odyssey-episode-1/",
    featured: true
  },
  {
    id: "darkside",
    series: "kuuga",
    title: { es: "El Lado Oscuro", en: "Darkside" },
    synopsis: {
      es: "El lado oscuro de Kuuga: la historia de N-Daguva-Zeba, el Rey de los Gurongi, y su descenso a la oscuridad definitiva.",
      en: "The dark side of Kuuga: the story of N-Daguva-Zeba, King of the Gurongi, and his fall into ultimate darkness."
    },
    cover: "assets/img/covers/darkside.png",
    episodes: ["Darkside"],
    original: "https://kamenridersictranslations.wordpress.com/darkside/",
    featured: false
  },
  {
    id: "heavens-door",
    series: "agito",
    title: { es: "La Puerta del Cielo", en: "Heaven's Door" },
    synopsis: {
      es: "El origen de Agito: los poderes psíquicos despiertan en la humanidad y los Unknown comienzan su caza. Shoichi Tsugami, Mana Kazaya y la «Puerta del Cielo».",
      en: "The origin of Agito: psychic powers awaken in humanity and the Unknown begin their hunt. Shoichi Tsugami, Mana Kazaya and the 'Heaven's Door'."
    },
    cover: "assets/img/covers/heavens-door.jpg",
    episodes: ["Origin", "Agito", "Operation", "Conceit", "Capable Person", "Α and Ω"],
    original: "https://kamenridersictranslations.wordpress.com/origin-heavens-door-episode-1/",
    featured: true
  },
  {
    id: "project-g1",
    series: "agito",
    title: { es: "Proyecto G-1", en: "Project G-1" },
    synopsis: {
      es: "El proyecto militar de la serie G: el traje G4 destruido, la armadura G1 desaparecida y los secretos del arsenal sellado de la Policía Metropolitana.",
      en: "The military G-series project: the destroyed G4 suit, the missing G1 armor and the secrets of the Metropolitan Police's sealed arsenal."
    },
    cover: "assets/img/covers/project-g1.jpg",
    episodes: ["Generation 1", "G4-X", "V-1", "AgitΩ"],
    original: "https://kamenridersictranslations.wordpress.com/generation-1-project-g1-episode-1/",
    featured: false
  },
  {
    id: "man-who-became",
    series: "agito",
    title: { es: "El Hombre que se Convirtió en Kamen Rider", en: "The Man who Became Kamen Rider" },
    synopsis: {
      es: "Ryo Ashihara (Gills) solo desea una vida normal, pero el regreso de Another Agito lo arrastra de nuevo al combate. La carga del poder Agito.",
      en: "Ryo Ashihara (Gills) just wants a normal life, but Another Agito's return drags him back into battle. The burden of Agito power."
    },
    cover: "assets/img/covers/man-who-became.jpg",
    episodes: ["Doctor", "Machine", "Metamorphose", "Gon"],
    original: "https://kamenridersictranslations.wordpress.com/doctor-the-man-who-became-kamen-rider-episode-1/",
    featured: false
  },
  {
    id: "advent-calendar",
    series: "ryuki",
    title: { es: "Calendario de Adviento", en: "Advent Calendar" },
    synopsis: {
      es: "La cuenta regresiva de la Batalla de los Riders: Ren Akiyama (Knight) y Shinji Kido (Ryuki) enfrentan la guerra en el Mundo Espejo.",
      en: "The Rider Battle countdown: Ren Akiyama (Knight) and Shinji Kido (Ryuki) face the war in the Mirror World."
    },
    cover: "assets/img/covers/advent-calendar.jpg",
    episodes: ["Advent-4", "Advent-3", "Advent-2", "Advent-1", "Nightmare Before"],
    original: "https://kamenridersictranslations.wordpress.com/advent-4-advent-calender-episode-1/",
    featured: false
  },
  {
    id: "world-of-if",
    series: "ryuki",
    title: { es: "Mundo de los «Si»", en: "World of If" },
    synopsis: {
      es: "Historias de «¿y si...?»: el oscuro Ryuga toma el cuerpo de Shinji, mientras Alternative y Odin aparecen para alterar la batalla.",
      en: "What-if stories: the dark Ryuga takes over Shinji's body, while Alternative and Odin appear to alter the battle."
    },
    cover: "assets/img/covers/world-of-if.jpg",
    episodes: ["Ryuga", "Alternative", "Odin"],
    original: "https://kamenridersictranslations.wordpress.com/ryuga-world-of-if-episode-1/",
    featured: false
  },
  {
    id: "special-edition",
    series: "ryuki",
    title: { es: "Edición Especial (2020)", en: "Special Edition (2020)" },
    synopsis: {
      es: "Una edición especial de 2020 que revisita la saga de Ryuki con páginas inéditas del Mundo Espejo.",
      en: "A 2020 special edition revisiting the Ryuki saga with unpublished pages from the Mirror World."
    },
    cover: "assets/img/covers/special-edition.png",
    episodes: ["Pg. 1-2", "Pg. 3"],
    original: "https://kamenridersictranslations.wordpress.com/special-edition-pg-1-2/",
    featured: false
  },
  {
    id: "lost-world",
    series: "faiz",
    title: { es: "Mundo Perdido", en: "Lost World" },
    synopsis: {
      es: "Takumi Inui (Faiz) protege a una niña cuya madre se convirtió en Orphnoch. El mundo perdido de 555 y los portadores de los Gear.",
      en: "Takumi Inui (Faiz) protects a girl whose mother became an Orphnoch. The lost world of 555 and the Gear wielders."
    },
    cover: "assets/img/covers/lost-world.jpg",
    episodes: ["Faiz", "Kaixa", "Delta", "Psyga"],
    original: "https://kamenridersictranslations.wordpress.com/faiz-lost-world-episode-1/",
    featured: true
  },
  {
    id: "day-after-tomorrow",
    series: "blade",
    title: { es: "El Día Después de Mañana", en: "Day After Tomorrow" },
    synopsis: {
      es: "Tras la batalla final, los cuatro Riders de Blade lidian con las consecuencias. El regreso de Kenzaki reabre heridas del pasado.",
      en: "After the final battle, the four Blade Riders deal with the aftermath. Kenzaki's return reopens old wounds."
    },
    cover: "assets/img/covers/day-after-tomorrow.jpg",
    episodes: ["Mutsuki Kamijo's Depression", "Hajime Aikawa's Howl", "Sakuya Tachibana's Blunder", "Kazuma Kenzaki's Heart"],
    original: "https://kamenridersictranslations.wordpress.com/mutsuki-kamijos-depressionday-after-tomorrow-episode-1/",
    featured: false
  },
  {
    id: "seven-ogres",
    series: "hibiki",
    title: { es: "Los Siete Ogros", en: "Seven Ogres" },
    synopsis: {
      es: "Asumu funda «Takeshi» para proteger a los oni, mientras los siete ogros se enfrentan a Orochi y a los Makamou.",
      en: "Asumu founds 'Takeshi' to protect the oni, as the seven ogres battle Orochi and the Makamou."
    },
    cover: "assets/img/covers/seven-ogres.jpg",
    episodes: ["Takeshi", "Kabuki", "Crimson", "Orochi"],
    original: "https://kamenridersictranslations.wordpress.com/takeshi-seven-ogres-episode-1/",
    featured: false
  },
  {
    id: "since-1986",
    series: "kabuto",
    title: { es: "Desde 1986", en: "Since 1986" },
    synopsis: {
      es: "1986: el sistema «Zapatos Rojos» se instala en el Masked Rider System. Soichi Kusakabe y el origen de los Riders de ZECT.",
      en: "1986: the 'Red Shoes' system is installed in the Masked Rider System. Soichi Kusakabe and the origin of the ZECT Riders."
    },
    cover: "assets/img/covers/since-1986.png",
    episodes: ["Since 1986"],
    original: "https://kamenridersictranslations.wordpress.com/since-1986/",
    featured: false
  },
  {
    id: "king-of-vampire",
    series: "kiva",
    title: { es: "El Rey de los Vampiros", en: "King of Vampire" },
    synopsis: {
      es: "El Rey de los Vampiros: la boda de Nago y Megumi desvela el origen del sistema Ixa y el legado de los Fangire.",
      en: "The King of Vampire: Nago and Megumi's wedding reveals the origin of the Ixa system and the Fangire legacy."
    },
    cover: "assets/img/covers/king-of-vampire.jpg",
    episodes: ["A Midsummer Night's Dream: Wedding March", "Lohengrin♭ Wedding March Part 2", "Saint-Saëns: Marche Héroïque", "Last Scene Again"],
    original: "https://kamenridersictranslations.wordpress.com/a-midsummer-nights-dreamwedding-march-king-of-vampire-episode-1/",
    featured: true
  },
  {
    id: "lost-train",
    series: "heisei",
    title: { es: "El Tren Perdido", en: "Lost Train" },
    synopsis: {
      es: "Decade aborda el DenLiner: los 10 Riders Showa han desaparecido de sus líneas temporales. Un crossover de los Riders Heisei.",
      en: "Decade boards the DenLiner: the 10 Showa Riders have vanished from their timelines. A Heisei Riders crossover."
    },
    cover: "assets/img/covers/lost-train.jpg",
    episodes: ["From the Window of Denliner"],
    original: "https://kamenridersictranslations.wordpress.com/from-the-window-of-denliner-lost-train-episode-1/",
    featured: false
  }
];

/* ----- Helpers ----- */
function seriesById(id) {
  return SERIES.find(function (s) { return s.id === id; });
}

function storiesBySeries(id) {
  return STORIES.filter(function (s) { return s.series === id; });
}

function totalEpisodes() {
  return STORIES.reduce(function (acc, s) { return acc + s.episodes.length; }, 0);
}
