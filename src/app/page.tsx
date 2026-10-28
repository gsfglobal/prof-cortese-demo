import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Button, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SplitTitle } from "@/components/SplitTitle";
import { FacialStudy, SpecialtyGlyph } from "@/components/visuals";
import { Photo } from "@/components/Photo";
import { ContactBlock, FaqSection, PatientPath } from "@/components/sections";
import { faq, internationalCentres, photos, publications, researchInterests, specialties, team } from "@/lib/site";
import { JsonLd, pageMetadata, physicianJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Chirurgia Maxillo-Facciale a Napoli",
    description:
      "Prof. Dott. Antonio Cortese, chirurgo maxillo-facciale e odontoiatra a Napoli. Chirurgia ortognatica, chirurgia orale rigenerativa, implantologia e ortodonzia integrata. Studio in Via Ponte di Tappia.",
    path: "/",
  }),
  title: { absolute: "Chirurgo Maxillo-Facciale a Napoli | Prof. Antonio Cortese" },
};

const credentials = [
  { value: "1982", label: "Laurea in Medicina e Chirurgia", sub: "Università di Napoli" },
  { value: "40+", label: "Anni di attività clinica", sub: "Chirurgia maxillo-facciale e odontoiatria" },
  { value: "5", label: "Centri esteri di formazione", sub: "New York · Nancy · Zurigo · Parigi · Taiwan" },
  { value: "100+", label: "Pubblicazioni scientifiche", sub: "Secondo il curriculum del Professore" },
];

const principles = [
  {
    t: "Diagnosi",
    d: "La valutazione specialistica considera la persona nel suo insieme: storia clinica, funzione, proporzioni del volto ed esigenze individuali.",
  },
  {
    t: "Chirurgia e ortodonzia",
    d: "Quando necessario, ortodonzia pre-chirurgica, chirurgia e riabilitazione protesica lavorano in un unico piano coordinato.",
  },
  {
    t: "Metodiche conservative",
    d: "Ortodonzia non estrattiva e non riduttiva dello smalto, tecniche rigenerative per i tessuti di supporto, quando clinicamente indicate.",
  },
  {
    t: "Ascolto e chiarezza",
    d: "Obiettivi, tempi e alternative spiegati con parole semplici, per scelte consapevoli e condivise.",
  },
];

const milestones = [
  { year: "1982", text: "Laurea in Medicina e Chirurgia, Università di Napoli" },
  { year: "1987", text: "Specializzazione in Chirurgia Maxillo-Facciale" },
  { year: "1985 — 1997", text: "Formazione a New York, Nancy, Zurigo, Parigi e Taiwan" },
  { year: "dal 2006", text: "Professore Aggregato, Università degli Studi di Salerno" },
];

const panelTones = ["bg-ivory-2 text-teal", "bg-midnight text-bronze", "bg-teal text-ivory"];

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={physicianJsonLd()} />
      <JsonLd data={faqJsonLd()} />

      {/* HERO */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="container-x grid items-center gap-y-10 pb-20 pt-6 lg:grid-cols-12 lg:gap-x-10 lg:pb-24 lg:pt-4">
          <div className="relative z-10 lg:col-span-6">
            <p className="label fade-up">Chirurgia maxillo-facciale · Ricerca · Napoli</p>
            <SplitTitle
              as="h1"
              id="hero-title"
              onLoad
              delay={120}
              lines={["La chirurgia", "del volto.", { text: "Tra scienza,", italic: true }, { text: "funzione e armonia.", italic: true }]}
              className="display-xl mt-6 text-ink"
            />
            <p className="lead fade-up mt-8 max-w-[34rem]" style={{ ["--delay" as string]: "450ms" }}>
              Un approccio specialistico alla chirurgia maxillo-facciale e alla riabilitazione dento-facciale, fondato
              sull’esperienza clinica, sulla ricerca e sull’attenzione alla persona.
            </p>
            <div className="fade-up mt-10 flex flex-wrap items-center gap-3" style={{ ["--delay" as string]: "580ms" }}>
              <Button href="/contatti">Richiedi una visita</Button>
              <Button href="/il-professore" variant="outline" icon="none">
                Conosci il Professore
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="fade-up relative" style={{ ["--delay" as string]: "200ms" }}>
              <Photo
                src={photos.portrait}
                alt="Il Prof. Antonio Cortese nel suo studio di Napoli"
                priority
                zoom={false}
                sizes="(min-width:1024px) 46vw, 100vw"
                position="55% 25%"
                className="aspect-[4/5] w-full rounded-[1.25rem] lg:max-h-[78svh]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute right-4 top-4 rounded-full bg-ivory/90 px-4 py-2 text-[0.72rem] font-medium text-ink backdrop-blur sm:right-5 sm:top-5">
                Professore Aggregato · Università di Salerno
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-ivory sm:bottom-7 sm:left-7">
                <p className="font-serif text-[1.8rem] font-medium leading-none">Prof. Antonio Cortese</p>
                <p className="mt-2 text-[0.8rem] text-ivory/75">Chirurgo maxillo-facciale e odontoiatra</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-x pointer-events-none absolute inset-x-0 bottom-6 hidden lg:block" aria-hidden>
          <div className="flex items-center gap-4 text-[0.75rem] text-mist">
            <span className="relative block h-10 w-px overflow-hidden bg-ink/15">
              <span className="scroll-cue absolute inset-x-0 top-0 h-4 bg-ink" />
            </span>
            Scorri
          </div>
        </div>
      </section>

      {/* CREDENZIALI */}
      <section aria-labelledby="credenziali" className="border-y border-ink/10 bg-paper">
        <h2 id="credenziali" className="sr-only">
          Credenziali accademiche
        </h2>
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {credentials.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 80}
              className={`py-8 lg:px-8 lg:py-12 lg:first:pl-0 ${i % 2 === 0 ? "pr-4" : "border-l border-ink/10 pl-4"} ${i === 2 ? "lg:border-l" : ""} ${i < 2 ? "border-b border-ink/10 lg:border-b-0" : ""}`}
            >
              <p className="font-serif text-[2.8rem] font-medium leading-none tabular-nums text-ink sm:text-[3.4rem] lg:text-[4rem]">{c.value}</p>
              <p className="mt-4 text-sm font-medium text-ink sm:text-[0.95rem]">{c.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-mist sm:text-sm">{c.sub}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROCCIO */}
      <section aria-labelledby="approccio-title" className="py-24 lg:py-36">
        <div className="container-x">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
            <SplitTitle
              id="approccio-title"
              lines={["Funzione ed estetica", { text: "non sono due obiettivi", italic: true }, { text: "separati.", italic: true }]}
              className="display-lg text-ink lg:col-span-8"
            />
            <Reveal className="lg:col-span-4 lg:self-end">
              <p className="lead">
                Masticazione, occlusione e respirazione dipendono dalle stesse strutture che definiscono le proporzioni del
                viso. Per questo ogni percorso considera insieme base scheletrica e tessuti molli.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-y-12 lg:mt-24 lg:grid-cols-12 lg:gap-x-10">
            <Reveal className="lg:col-span-5">
              <figure className="grain relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-midnight">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(52,110,112,0.5),transparent_60%)]" />
                <FacialStudy className="absolute inset-0 m-auto h-[86%] w-[86%]" />
                <figcaption className="absolute bottom-5 left-6 text-[0.75rem] text-ivory/60">
                  Studio grafico delle proporzioni del volto
                </figcaption>
              </figure>
            </Reveal>
            <dl className="self-center lg:col-span-6 lg:col-start-7">
              {principles.map((p, i) => (
                <Reveal key={p.t} delay={i * 60} className="grid gap-2 border-t border-ink/10 py-7 last:border-b sm:grid-cols-[12rem_1fr] sm:gap-8">
                  <dt className="font-serif text-[1.55rem] font-medium leading-tight text-ink">{p.t}</dt>
                  <dd className="text-mist">{p.d}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* IL PROFESSORE */}
      <section aria-labelledby="professore-title" className="border-t border-ink/10 py-24 lg:py-36">
        <div className="container-x grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Photo
                src={photos.archive}
                alt="Il Prof. Antonio Cortese in una fotografia d’archivio"
                sizes="(min-width:1024px) 38vw, 100vw"
                position="50% 30%"
                className="aspect-[4/5] w-full rounded-[1.25rem]"
                caption="Dall’archivio del Professore"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>Il Professore</Eyebrow>
            <SplitTitle
              id="professore-title"
              lines={["Antonio Cortese.", "Oltre quarant’anni", { text: "di chirurgia del volto.", italic: true }]}
              className="display-lg mt-5 text-ink"
            />
            <Reveal>
              <p className="lead mt-8">
                Specialista in Chirurgia Maxillo-Facciale e in Stomatologia, si dedica a pazienti di ogni età con problemi
                facciali e mascellari. Alla formazione napoletana ha affiancato centri chirurgici di riferimento in Europa,
                negli Stati Uniti e in Asia.
              </p>
            </Reveal>
            <ol className="relative mt-12">
              <span className="absolute bottom-3 left-[0.6875rem] top-3 w-px bg-ink/12" aria-hidden />
              {milestones.map((m, i) => (
                <Reveal as="li" key={m.year} delay={i * 70} className="relative pb-7 pl-12 last:pb-0">
                  <span className="absolute left-0 top-1 grid h-[1.4rem] w-[1.4rem] place-items-center rounded-full border border-ink bg-ivory" aria-hidden>
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  </span>
                  <p className="label tabular-nums">{m.year}</p>
                  <p className="mt-1 font-serif text-[1.45rem] leading-tight text-ink">{m.text}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-12">
              <Button href="/il-professore" variant="outline">
                Il percorso completo
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SPECIALIZZAZIONI */}
      <section aria-labelledby="spec-title" className="border-t border-ink/10 py-24 lg:py-36">
        <div className="container-x">
          <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-7">
              <Eyebrow>Ambiti di attività</Eyebrow>
              <SplitTitle id="spec-title" lines={["Sei aree specialistiche,", { text: "un unico percorso.", italic: true }]} className="display-lg mt-5 text-ink" />
            </div>
            <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="text-mist">
                Chirurgia e odontoiatria lavorano insieme: ogni piano di trattamento nasce dallo studio accurato del singolo
                paziente.
              </p>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {specialties.map((s, i) => (
              <Reveal as="li" key={s.id} delay={(i % 3) * 80} className={i % 3 === 1 ? "lg:mt-24" : ""}>
                <article className="group relative">
                  <div className="overflow-hidden rounded-[1.25rem]">
                    <div className={`card-media grain relative grid aspect-[16/10] place-items-center sm:aspect-[4/5] ${panelTones[i % 3]}`}>
                      <SpecialtyGlyph id={s.id} className="h-[46%] w-[46%] sm:h-[42%] sm:w-[42%]" />
                      <span className="absolute left-6 top-5 font-serif text-xl italic opacity-70">{s.index}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <h3 className="font-serif text-[1.75rem] font-medium leading-[1.1] text-ink">
                      <Link href={`/specializzazioni#${s.id}`} className="after:absolute after:inset-0 after:content-['']">
                        {s.label}
                      </Link>
                    </h3>
                    <span className="chip mt-2 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/25" aria-hidden>
                      <ArrowUpRight size={14} strokeWidth={1.4} />
                    </span>
                  </div>
                  <p className="mt-3 text-[0.98rem] text-mist">{s.short}</p>
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-16 flex justify-center lg:mt-4 lg:justify-start">
            <Button href="/specializzazioni" variant="outline">
              Tutte le specializzazioni
            </Button>
          </Reveal>
        </div>
      </section>

      {/* RICERCA */}
      <section aria-labelledby="ricerca-title" className="on-dark grain relative overflow-hidden bg-ink text-ivory">
        <div className="container-x relative py-24 lg:py-36">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-8">
              <Eyebrow light>Ricerca scientifica</Eyebrow>
              <SplitTitle id="ricerca-title" lines={["Oltre la pratica clinica.", { text: "Il valore della ricerca.", italic: true }]} className="display-lg mt-5" />
            </div>
            <Reveal className="lg:col-span-4 lg:self-end">
              <p className="lead">
                Oltre cento pubblicazioni, con un filo conduttore: tecniche di osteodistrazione dei mascellari, chirurgia
                ortognatica e microchirurgia.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16 lg:mt-24">
            <div className="grid gap-8 border-y border-ivory/15 py-10 lg:grid-cols-12 lg:gap-10 lg:py-14">
              <div className="lg:col-span-4">
                <p className="label">Attività accademica · dal 2006</p>
                <p className="mt-4 font-serif text-[2rem] leading-tight">Università degli Studi di Salerno</p>
                <p className="mt-3 text-[0.9rem] text-ivory/60">
                  Professore Aggregato, Dipartimento di Medicina, Chirurgia e Odontoiatria
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="font-serif text-[1.6rem] italic leading-snug sm:text-[2.1rem]">
                  Docenza universitaria dal 1990, prima all’Università di Napoli e poi a Salerno.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {researchInterests.map((r) => (
                    <li key={r} className="rounded-full border border-ivory/20 px-4 py-2 text-[0.8125rem] text-ivory/85">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <ul>
            {publications.slice(0, 3).map((p) => (
              <Reveal as="li" key={p.title} className="border-b border-ivory/15">
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="group grid gap-3 py-8 sm:grid-cols-[6rem_1fr_auto] sm:gap-8">
                  <span className="font-serif text-2xl text-bronze">{p.year}</span>
                  <span>
                    <span className="block font-serif text-[1.35rem] leading-snug transition-colors group-hover:text-bronze sm:text-[1.55rem]">{p.title}</span>
                    <span className="mt-2 block text-sm text-ivory/55">{p.source}</span>
                  </span>
                  <ArrowUpRight className="hidden h-5 w-5 text-ivory/40 transition-colors group-hover:text-bronze sm:block" strokeWidth={1.4} aria-hidden />
                  <span className="sr-only">(si apre in una nuova scheda)</span>
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12">
            <p className="label">Formazione all’estero</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
              {internationalCentres.map((c) => (
                <li key={c.city}>
                  <p className="font-serif text-[1.9rem] leading-none">{c.city}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ivory/55">
                    {c.institution}
                    <br />
                    {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ivory/15 pt-10 sm:flex-row sm:items-center">
            <p className="max-w-[32rem] text-[0.88rem] text-ivory/60">Selezione di lavori verificabili su archivi bibliografici pubblici.</p>
            <Button href="/il-professore#ricerca" variant="light">
              Ricerca e pubblicazioni
            </Button>
          </Reveal>
        </div>
      </section>

      {/* LO STUDIO */}
      <section aria-labelledby="studio-title" className="py-24 lg:py-36">
        <div className="container-x">
          <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-7">
              <Eyebrow>Lo studio e l’équipe</Eyebrow>
              <SplitTitle id="studio-title" lines={["Nel cuore di Napoli,", { text: "un’équipe affiatata.", italic: true }]} className="display-lg mt-5 text-ink" />
            </div>
            <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="text-mist">
                Lo studio si trova in Via Ponte di Tappia 62. Il Professore lavora insieme al Dott. Maurizio Del Gaudio,
                odontoiatra, e al Dott. Giovanni Del Gaudio, medico.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-20 lg:grid-cols-12">
            <Reveal className="col-span-2 lg:col-span-7">
              <Photo
                src={photos.team}
                alt="L’équipe dello studio: Dott. Giovanni Del Gaudio, Prof. Antonio Cortese e Dott. Maurizio Del Gaudio"
                sizes="(min-width:1024px) 58vw, 100vw"
                position="50% 40%"
                className="aspect-[4/3] w-full rounded-[1.25rem] lg:aspect-auto lg:h-full lg:min-h-[34rem]"
              />
            </Reveal>
            <div className="col-span-2 grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5 lg:grid-cols-1">
              {team.slice(1).map((m, i) => (
                <Reveal key={m.name} delay={80 + i * 80}>
                  <figure>
                    <Photo src={m.photo} alt={`${m.name}, ${m.role}`} sizes="(min-width:1024px) 38vw, 50vw" position="50% 18%" className="aspect-[4/3] w-full rounded-[1.25rem]" />
                    <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3">
                      <span className="font-serif text-[1.25rem] text-ink">{m.name}</span>
                      <span className="text-xs text-mist">{m.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-[34rem] text-[0.8rem] leading-snug text-mist">Fotografie tratte dal sito attuale dello studio.</p>
            <Button href="/lo-studio" variant="outline">
              Scopri lo studio
            </Button>
          </Reveal>
        </div>
      </section>

      <PatientPath />
      <FaqSection />
      <ContactBlock />
    </>
  );
}
