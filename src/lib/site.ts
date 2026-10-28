/**
 * Dati centrali del sito.
 * Tutti i contenuti provengono dal sito attuale www.antoniocortesemaxillo.it
 * (consultato il 28/10/2026) o da fonti bibliografiche verificabili.
 * I campi marcati "DA CONFERMARE" vanno validati dal Professore prima della pubblicazione.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.antoniocortesemaxillo.it").replace(/\/$/, "");

/** Prefisso dei file statici (solo per GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/** Origine pubblica dove sono raggiungibili immagini e anteprima social. */
export const ASSET_ORIGIN = (process.env.NEXT_PUBLIC_ASSET_URL ?? SITE_URL).replace(/\/$/, "");
export const asset = (path: string) => `${BASE_PATH}${path}`;

/** In modalità demo il sito non è indicizzabile (robots noindex). */
export const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

export const doctor = {
  name: "Prof. Antonio Cortese",
  fullName: "Prof. Dott. Antonio Cortese",
  shortRole: "Chirurgia Maxillo-Facciale",
  role: "Specialista in Chirurgia Maxillo-Facciale e Odontoiatra",
};

export const contacts = {
  street: "Via Ponte di Tappia, 62",
  postalCode: "80133",
  city: "Napoli",
  province: "NA",
  country: "IT",
  addressFull: "Via Ponte di Tappia, 62 — 80133 Napoli (NA)",
  phoneLabel: "081 551 5304",
  phoneHref: "tel:+390815515304",
  mobileLabel: "+39 347 454 2237",
  mobileHref: "tel:+393474542237",
  email: "ancortesemaxillo@gmail.com",
  emailHref: "mailto:ancortesemaxillo@gmail.com?subject=Richiesta%20informazioni",
  whatsappHref:
    "https://wa.me/393474542237?text=Buongiorno%2C%20vorrei%20richiedere%20informazioni%20per%20un%20appuntamento.",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Via%20Ponte%20di%20Tappia%2062%2C%2080133%20Napoli",
  geo: { lat: 40.8411974, lng: 14.2500606 },
  hours: "Visite su appuntamento",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/il-professore", label: "Il Professore" },
  { href: "/specializzazioni", label: "Specializzazioni" },
  { href: "/lo-studio", label: "Lo Studio" },
  { href: "/contatti", label: "Contatti" },
] as const;

export type Specialty = {
  id: string;
  index: string;
  title: string;
  label: string;
  short: string;
  intro: string;
  purpose: string;
  scope: string[];
  note?: string;
};

export const specialties: Specialty[] = [
  {
    id: "chirurgia-maxillo-facciale",
    index: "01",
    title: "Chirurgia maxillo-facciale",
    label: "Chirurgia maxillo-facciale",
    short:
      "La disciplina chirurgica che si occupa delle ossa mascellari, della mandibola e dei tessuti del volto, nella funzione e nella forma.",
    intro:
      "La chirurgia maxillo-facciale si occupa delle strutture scheletriche e dei tessuti molli del terzo medio e inferiore del volto: mascellari, mandibola, articolazione e tessuti di rivestimento. È l'ambito specialistico in cui il Prof. Cortese ha conseguito la specializzazione nel 1987 e su cui si concentra la sua attività clinica e di ricerca.",
    purpose:
      "Ripristinare la corretta funzionalità del distretto maxillo-facciale — masticazione, occlusione, respirazione, fonazione — tenendo conto in ogni fase dell'equilibrio estetico del volto, su base sia scheletrica sia dei tessuti molli.",
    scope: [
      "Valutazione specialistica dei problemi facciali e mascellari",
      "Pazienti di ogni età, in un percorso calibrato sulla singola persona",
      "Approccio integrato tra chirurgia e odontoiatria",
    ],
  },
  {
    id: "chirurgia-ortognatica",
    index: "02",
    title: "Chirurgia ortognatica avanzata",
    label: "Chirurgia ortognatica",
    short:
      "Correzione chirurgica delle discrepanze tra mascellare e mandibola, anche con tecniche osteodistrattive.",
    intro:
      "La chirurgia ortognatica interviene quando la posizione o le dimensioni dei mascellari non sono in armonia tra loro o con il resto del volto. Il riposizionamento delle basi ossee consente di correggere l'occlusione e, di conseguenza, il profilo e le proporzioni facciali.",
    purpose:
      "Ristabilire un rapporto corretto tra le arcate e un equilibrio delle proporzioni del viso. Nei casi indicati la tecnica osteodistrattiva — la distrazione graduale dei segmenti ossei — permette di ottenere nuova formazione ossea e adattamento progressivo dei tessuti molli.",
    scope: [
      "Chirurgia ortognatica osteodistrattiva",
      "Distrazione mandibolare e distrazione palatale",
      "Coordinamento con l'ortodonzia pre-chirurgica",
    ],
    note:
      "L'osteodistrazione maxillo-facciale è tra i temi principali delle pubblicazioni scientifiche del Professore.",
  },
  {
    id: "chirurgia-orale-rigenerativa",
    index: "03",
    title: "Chirurgia orale rigenerativa e implantologia",
    label: "Chirurgia orale rigenerativa",
    short:
      "Ricostruzione dei volumi ossei e gengivali necessari a una riabilitazione implantare stabile nel tempo.",
    intro:
      "Quando l'osso o i tessuti gengivali non sono sufficienti per accogliere un impianto, la chirurgia orale rigenerativa consente di ricostruirne i volumi. È una fase che precede o accompagna l'inserimento implantare e che richiede una pianificazione attenta di ciascun caso.",
    purpose:
      "Creare le condizioni biologiche e anatomiche per una riabilitazione implantare funzionale, con particolare attenzione alla qualità dei tessuti di supporto.",
    scope: [
      "Implantologia",
      "Incrementi ossei",
      "Incrementi mucogengivali",
      "Tecniche di chirurgia pre-implantare (es. split crest)",
    ],
  },
  {
    id: "chirurgia-malformativa-estetica",
    index: "04",
    title: "Chirurgia malformativa ed estetica del distretto facciale",
    label: "Chirurgia malformativa ed estetica",
    short:
      "Trattamento delle alterazioni congenite o acquisite del volto, con attenzione congiunta a funzione e armonia.",
    intro:
      "La chirurgia malformativa si rivolge alle alterazioni dello sviluppo del distretto maxillo-facciale, presenti dalla nascita o comparse durante la crescita. L'aspetto estetico non è separato da quello funzionale: le due dimensioni vengono valutate insieme.",
    purpose:
      "Migliorare la funzione e l'equilibrio del volto attraverso un percorso chirurgico studiato sulle caratteristiche scheletriche e dei tessuti molli del singolo paziente.",
    scope: [
      "Alterazioni dello sviluppo dei mascellari",
      "Asimmetrie del distretto facciale",
      "Interventi con finalità funzionali ed estetiche del viso e del sorriso",
    ],
    note:
      "Malformazioni vascolari e microchirurgia rientrano negli interessi di ricerca indicati nel curriculum del Professore.",
  },
  {
    id: "ortodonzia",
    index: "05",
    title: "Ortodonzia pre-chirurgica, non estrattiva e osteodistrattiva",
    label: "Ortodonzia",
    short:
      "Ortodonzia integrata con la chirurgia, orientata alla conservazione degli elementi dentari e dello smalto.",
    intro:
      "L'ortodonzia è spesso parte integrante del percorso chirurgico: prepara le arcate prima dell'intervento e ne rifinisce l'allineamento dopo. Lo studio adotta un approccio ortodontico non estrattivo e non riduttivo dello smalto, quando clinicamente indicato.",
    purpose:
      "Allineare le arcate dentarie e preparare l'occlusione al riposizionamento scheletrico, evitando ove possibile estrazioni o riduzioni dello smalto.",
    scope: [
      "Ortodonzia pre-chirurgica",
      "Ortodonzia osteodistrattiva",
      "Ortodonzia non estrattiva e non riduttiva dello smalto",
    ],
  },
  {
    id: "implanto-protesi",
    index: "06",
    title: "Implanto-protesi e riabilitazione dento-maxillo-facciale",
    label: "Implanto-protesi",
    short:
      "La fase protesica che completa il percorso: denti fissi su impianti, integrati con la funzione dell'intero distretto.",
    intro:
      "L'implanto-protesi è la riabilitazione protesica su impianti osteointegrati. Inserita in una visione dento-maxillo-facciale, considera non solo i denti da sostituire ma il rapporto tra arcate, tessuti di supporto e proporzioni del viso.",
    purpose:
      "Restituire funzione masticatoria ed estetica del sorriso con una riabilitazione coerente con la corretta funzione stomatognatica.",
    scope: [
      "Implanto-protesi",
      "Riabilitazione dento-maxillo-facciale",
      "Pianificazione coordinata con la fase chirurgica",
    ],
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  place: string;
  detail?: string;
  kind: "formazione" | "estero" | "accademia";
};

export const timeline: TimelineItem[] = [
  { year: "1982", title: "Laurea in Medicina e Chirurgia", place: "Università di Napoli", kind: "formazione" },
  {
    year: "1985 · 1988",
    title: "Plastic Surgery",
    place: "New York University — Prof. McCarthy",
    kind: "estero",
  },
  { year: "1986", title: "Esperienza clinica", place: "Ospedale di Nancy — Prof. Stricker", kind: "estero" },
  {
    year: "1987",
    title: "Specializzazione in Chirurgia Maxillo-Facciale",
    place: "Sede da confermare",
    kind: "formazione",
  },
  { year: "1987", title: "Esperienza clinica", place: "Università di Zurigo — Prof. Obwegeser", kind: "estero" },
  {
    year: "1990 — 2006",
    title: "Assistant Professor",
    place: "Dipartimento di Odontoiatria e Chirurgia Maxillo-Facciale, Università di Napoli",
    detail: "Ruolo storico",
    kind: "accademia",
  },
  { year: "1991", title: "Specializzazione in Stomatologia", place: "Sede da confermare", kind: "formazione" },
  { year: "1994", title: "Microchirurgia", place: "Hôpitaux de Paris — Prof. Germain", kind: "estero" },
  { year: "1997", title: "Esperienza clinica", place: "Chang Gung Memorial Hospital, Taiwan — Prof. Wei", kind: "estero" },
  {
    year: "2006 — oggi",
    title: "Professore Aggregato",
    place: "Dipartimento di Medicina, Chirurgia e Odontoiatria, Università degli Studi di Salerno",
    detail: "Incarico indicato sul sito attuale",
    kind: "accademia",
  },
];

export const internationalCentres = [
  { city: "New York", country: "Stati Uniti", institution: "New York University", mentor: "Prof. McCarthy", year: "1985 · 1988" },
  { city: "Nancy", country: "Francia", institution: "Ospedale di Nancy", mentor: "Prof. Stricker", year: "1986" },
  { city: "Zurigo", country: "Svizzera", institution: "Università di Zurigo", mentor: "Prof. Obwegeser", year: "1987" },
  { city: "Parigi", country: "Francia", institution: "Hôpitaux de Paris", mentor: "Prof. Germain", year: "1994" },
  { city: "Taiwan", country: "Asia orientale", institution: "Chang Gung Memorial Hospital", mentor: "Prof. Wei", year: "1997" },
];

export const researchInterests = [
  "Malformazioni vascolari",
  "Microchirurgia",
  "Chirurgia ortognatica",
  "Incrementi ossei",
  "Osteodistrazione",
];

export type Publication = {
  authors: string;
  title: string;
  source: string;
  year: string;
  href: string;
  linkLabel: string;
};

/** Selezione verificata su fonti bibliografiche pubbliche (IRIS, PubMed, IntechOpen). */
export const publications: Publication[] = [
  {
    authors: "Cortese A.",
    title: "Le Fort I Osteotomy for Maxillary Repositioning and Distraction Techniques",
    source:
      "In: Waddell J.P. (ed.), The Role of Osteotomy in the Correction of Congenital and Acquired Disorders of the Skeleton. InTech",
    year: "2012",
    href: "https://www.intechopen.com/chapters/35330",
    linkLabel: "DOI 10.5772/37211",
  },
  {
    authors: "Cortese A., Savastano M., Cantone A., Claudio P.P.",
    title:
      "A new palatal distractor device for bodily movement of maxillary bones by rigid self-locking miniplates and screws system",
    source: "The Journal of Craniofacial Surgery, 24(4):1341–1346",
    year: "2013",
    href: "https://doi.org/10.1097/SCS.0b013e31828041a7",
    linkLabel: "DOI 10.1097/SCS.0b013e31828041a7",
  },
  {
    authors: "Cortese A., Savastano M., Savastano G., Claudio P.P.",
    title:
      "One-step transversal palatal distraction and maxillary repositioning: technical considerations, advantages, and long-term stability",
    source: "The Journal of Craniofacial Surgery, 22:1714–1719",
    year: "2011",
    href: "https://pubmed.ncbi.nlm.nih.gov/21959418/",
    linkLabel: "PubMed 21959418",
  },
  {
    authors: "Cortese A., Savastano M., Savastano G., Papa F., Howard C.M., Claudio P.P.",
    title:
      "Maxillary constriction treated by a new palatal distractor device: surgical and occlusal evaluations of 10 patients",
    source: "The Journal of Craniofacial Surgery, 21(2):339–343",
    year: "2010",
    href: "https://iris.unina.it/handle/11588/366369",
    linkLabel: "Archivio IRIS Federico II",
  },
  {
    authors: "Cortese A., Savastano G., Savastano M., Spagnuolo G., Papa F.",
    title: "New technique: Le Fort I osteotomy for maxillary advancement and palatal distraction in 1 stage",
    source: "Journal of Oral and Maxillofacial Surgery, 67(1):223–228",
    year: "2009",
    href: "https://iris.unina.it/handle/11588/343455",
    linkLabel: "Archivio IRIS Federico II",
  },
  {
    authors: "Califano L., Cortese A., Zupi A., Tajana G.",
    title: "Mandibular lengthening by external distraction: an experimental study in the rabbit",
    source: "Journal of Oral and Maxillofacial Surgery, 52:1179–1183",
    year: "1994",
    href: "https://pubmed.ncbi.nlm.nih.gov/?term=Mandibular+lengthening+by+external+distraction+experimental+study+rabbit",
    linkLabel: "Ricerca su PubMed",
  },
];

export const team = [
  {
    name: "Prof. Antonio Cortese",
    role: "Chirurgo Maxillo-Facciale e Odontoiatra",
    initials: "AC",
    lead: true,
    photo: "/images/professore/prof-cortese-studio.webp",
  },
  {
    name: "Dott. Maurizio Del Gaudio",
    role: "Odontoiatra",
    initials: "MDG",
    lead: false,
    photo: "/images/team/dott-maurizio-del-gaudio.webp",
  },
  {
    name: "Dott. Giovanni Del Gaudio",
    role: "Medico",
    initials: "GDG",
    lead: false,
    photo: "/images/team/dott-giovanni-del-gaudio.webp",
  },
];

/** Foto autentiche tratte dal sito attuale del Professore (riuso da autorizzare prima della pubblicazione). */
export const photos = {
  portrait: "/images/professore/prof-cortese-studio.webp",
  archive: "/images/professore/prof-cortese-archivio.webp",
  team: "/images/studio/equipe-studio.webp",
};

export type Article = { title: string; kind: string; href: string };

/** Approfondimenti pubblicati sul blog del sito attuale. */
export const articles: Article[] = [
  {
    title: "Distrazione mandibolare trasversale",
    kind: "Caso clinico",
    href: "https://www.antoniocortesemaxillo.it/Post?postid=3",
  },
  {
    title: "Split crest modificato in chirurgia pre-implantare",
    kind: "Caso clinico",
    href: "https://www.antoniocortesemaxillo.it/Post?postid=1",
  },
  {
    title: "Distrazione mandibolare",
    kind: "Caso clinico",
    href: "https://www.antoniocortesemaxillo.it/Post?postid=0",
  },
  {
    title: "Elenco completo delle pubblicazioni",
    kind: "Pubblicazioni",
    href: "https://www.antoniocortesemaxillo.it/Post?postid=2",
  },
];

/** Domande frequenti: contenuto informativo, non sostituisce la visita. */
export const faq = [
  {
    q: "Di cosa si occupa il chirurgo maxillo-facciale?",
    a: "Della diagnosi e del trattamento chirurgico delle alterazioni delle ossa mascellari, della mandibola e dei tessuti del volto. L’obiettivo è doppio: la funzione (masticazione, occlusione, respirazione) e l’equilibrio del viso.",
  },
  {
    q: "Quando si valuta la chirurgia ortognatica?",
    a: "Quando posizione o dimensioni dei mascellari non sono in armonia tra loro e la sola ortodonzia non basta a correggere l’occlusione. L’indicazione si pone soltanto dopo la visita e gli esami specifici.",
  },
  {
    q: "Che cos’è l’osteodistrazione?",
    a: "È una tecnica che allontana gradualmente, nei giorni successivi all’intervento, due segmenti ossei. Così si ottiene nuova formazione di osso e un adattamento progressivo dei tessuti molli. È uno dei temi di ricerca del Professore.",
  },
  {
    q: "Prima dell’intervento serve l’ortodonzia?",
    a: "Spesso sì. L’ortodonzia pre-chirurgica prepara le arcate al riposizionamento scheletrico e quella successiva rifinisce l’allineamento. Tempi e modalità dipendono dal singolo caso.",
  },
  {
    q: "Come si prenota una prima visita?",
    a: "Contattando la segreteria al numero 081 551 5304, al cellulare o su WhatsApp (+39 347 454 2237) oppure via email. Le visite si svolgono su appuntamento nello studio di Via Ponte di Tappia 62, a Napoli.",
  },
];
