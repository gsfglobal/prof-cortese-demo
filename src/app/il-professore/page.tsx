import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Button, DraftTag, Eyebrow, PageIntro } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactBlock } from "@/components/sections";
import { Photo } from "@/components/Photo";
import { articles, internationalCentres, photos, publications, researchInterests, timeline } from "@/lib/site";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Il Professore — Formazione, carriera accademica e ricerca",
  description:
    "Biografia del Prof. Dott. Antonio Cortese, chirurgo maxillo-facciale a Napoli: formazione all'Università di Napoli, esperienze a New York, Nancy, Zurigo, Parigi e Taiwan, docenza universitaria e pubblicazioni.",
  path: "/il-professore",
});

const kindLabel = { formazione: "Formazione", estero: "Esperienza all'estero", accademia: "Carriera accademica" } as const;

export default function ProfessorePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${SITE_URL}/il-professore`,
          mainEntity: { "@id": `${SITE_URL}/il-professore#persona` },
        }}
      />

      <PageIntro
        label="Il Professore"
        lines={["Prof. Dott.", {text: "Antonio Cortese", italic: true}]}
        lead="Specialista in Chirurgia Maxillo-Facciale e in Stomatologia. Oltre quarant'anni di attività clinica, una formazione costruita tra Napoli e alcuni dei centri chirurgici internazionali di riferimento, una lunga attività di docenza e ricerca."
      />

      {/* BIOGRAFIA — layout magazine */}
      <section className="container-x pb-24 lg:pb-36" aria-labelledby="bio-title">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Photo src={photos.portrait} alt="Il Prof. Antonio Cortese nel suo studio" priority sizes="(min-width:1024px) 30vw, 100vw" position="50% 25%" className="aspect-[4/5] w-full rounded-[1.25rem]" />
              </Reveal>
              <Reveal delay={100}>
                <dl className="mt-8 divide-y divide-midnight/10 border-y border-midnight/10 text-sm">
                  {[
                    ["Laurea", "Medicina e Chirurgia, 1982"],
                    ["Specializzazioni", "Chirurgia Maxillo-Facciale (1987) · Stomatologia (1991)"],
                    ["Università", "Salerno — Professore Aggregato"],
                    ["Pubblicazioni", "Oltre 100"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3.5">
                      <dt className="eyebrow pt-0.5 text-[0.6rem] text-mist">{k}</dt>
                      <dd className="text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>

          <article className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <h2 id="bio-title" className="display-md text-ink">
                Una carriera dedicata al distretto maxillo-facciale.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-9 space-y-6 text-[1.0625rem] leading-[1.85] text-graphite/85">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:text-ink">
                  Laureato in Medicina e Chirurgia all’Università di Napoli nel 1982, il Prof. Antonio Cortese ha
                  conseguito la specializzazione in Chirurgia Maxillo-Facciale nel 1987 e quella in Stomatologia nel 1991.
                  Una doppia formazione — chirurgica e odontoiatrica — che caratterizza ancora oggi il suo modo di
                  affrontare i problemi del volto e delle arcate dentarie.
                </p>
                <p>
                  Negli anni della formazione ha frequentato centri esteri di riferimento per la chirurgia del volto: la
                  New York University con il Prof. McCarthy, l’Ospedale di Nancy con il Prof. Stricker, l’Università di
                  Zurigo con il Prof. Obwegeser, gli Hôpitaux de Paris per la microchirurgia con il Prof. Germain e il
                  Chang Gung Memorial Hospital di Taiwan con il Prof. Wei.
                </p>
                <p>
                  Nel suo studio di Napoli effettua interventi di chirurgia ortognatica e implantologica avanzata e
                  terapie ortodontiche non estrattive, rivolgendosi a pazienti di ogni età con un approccio che unisce
                  rigore professionale e attenzione alla persona.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <blockquote className="my-14 border-l border-bronze pl-7">
                <p className="font-serif text-[1.9rem] italic leading-[1.3] text-ink sm:text-[2.2rem]">
                  Ripristinare la funzionalità e migliorare l’estetica, su base sia scheletrica che dei tessuti molli.
                </p>
                <footer className="eyebrow mt-5 text-bronze-dark">Dal profilo professionale del Prof. Cortese</footer>
              </blockquote>
            </Reveal>
          </article>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white/60 py-24 lg:py-36" aria-labelledby="timeline-title">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Percorso</Eyebrow>
            <h2 id="timeline-title" className="display-md mt-7 max-w-3xl text-ink">
              Titoli, formazione e carriera accademica.
            </h2>
          </Reveal>

          <ol className="relative mt-16 lg:mt-20">
            <span className="absolute bottom-0 left-[0.4rem] top-0 w-px bg-midnight/15 lg:left-[13.4rem]" aria-hidden />
            {timeline.map((t, i) => (
              <Reveal
                as="li"
                key={`${t.year}-${t.title}`}
                delay={(i % 4) * 60}
                className="relative grid gap-2 pb-11 pl-9 lg:grid-cols-[12rem_1fr] lg:gap-14 lg:pl-0"
              >
                <span
                  className={`absolute left-0 top-2 h-[0.85rem] w-[0.85rem] rounded-full border-2 border-ivory lg:left-[13rem] ${
                    t.kind === "accademia" ? "bg-teal" : t.kind === "estero" ? "bg-bronze" : "bg-midnight"
                  }`}
                  aria-hidden
                />
                <p className="font-serif text-[1.6rem] leading-none text-ink lg:text-right lg:text-[1.9rem]">{t.year}</p>
                <div className="lg:pl-4">
                  <p className="eyebrow text-[0.6rem] text-mist">{kindLabel[t.kind]}</p>
                  <h3 className="mt-2 font-serif text-[1.55rem] leading-tight text-ink">{t.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] text-graphite/75">
                    {t.place}
                    {t.place.includes("da confermare") ? null : t.detail ? (
                      <span className="ml-2 text-xs text-mist">· {t.detail}</span>
                    ) : null}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-mist">
            Fonte: curriculum pubblicato sul sito attuale del Professore. Le qualifiche accademiche sono riportate come
            indicate nel curriculum e saranno aggiornate dopo verifica.
            <DraftTag>Da confermare</DraftTag>
          </p>
        </div>
      </section>

      {/* ESPERIENZE INTERNAZIONALI */}
      <section className="container-x py-24 lg:py-36" aria-labelledby="estero-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Formazione internazionale</Eyebrow>
            <h2 id="estero-title" className="display-md mt-7 text-ink">
              Cinque centri, tre continenti.
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-graphite/80">
              Esperienze presso scuole chirurgiche che hanno contribuito allo sviluppo della chirurgia cranio-maxillo-facciale
              moderna.
            </p>
          </Reveal>
          <ul className="grid border-l border-t border-midnight/10 sm:grid-cols-2 lg:col-span-8">
            {internationalCentres.map((c, i) => (
              <Reveal as="li" key={c.city} delay={(i % 2) * 80} className="border-b border-r border-midnight/10 p-7 lg:p-9">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-serif text-[2.2rem] leading-none text-ink">{c.city}</p>
                  <p className="eyebrow text-[0.6rem] text-bronze-dark">{c.year}</p>
                </div>
                <p className="mt-4 text-[0.9375rem] font-semibold text-graphite">{c.institution}</p>
                <p className="mt-1 text-sm text-mist">
                  {c.country} · {c.mentor}
                </p>
              </Reveal>
            ))}
            <li className="hidden border-b border-r border-midnight/10 bg-midnight p-9 text-ivory sm:block">
              <p className="font-serif text-xl italic leading-snug text-ivory/85">
                New York · Nancy · Zurigo · Parigi · Taiwan
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ATTIVITÀ ACCADEMICA */}
      <section className="grain bg-midnight py-24 text-ivory lg:py-32" aria-labelledby="accademia-title">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow light>Attività accademica</Eyebrow>
            <h2 id="accademia-title" className="display-md mt-7">
              Docenza universitaria dal 1990.
            </h2>
          </Reveal>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="border-t border-ivory/15 pt-6">
                <p className="eyebrow text-bronze">Incarico attuale · dal 2006</p>
                <h3 className="mt-3 font-serif text-[1.8rem] leading-tight">Professore Aggregato</h3>
                <p className="mt-2 text-ivory/70">
                  Dipartimento di Medicina, Chirurgia e Odontoiatria — Università degli Studi di Salerno
                </p>
                <p className="mt-3 text-xs text-ivory/50">
                  Come indicato sul sito attuale; stato dell’incarico da riconfermare alla data di pubblicazione.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="border-t border-ivory/15 pt-6">
                <p className="eyebrow text-ivory/50">Ruolo storico · 1990 — 2006</p>
                <h3 className="mt-3 font-serif text-[1.8rem] leading-tight">Assistant Professor</h3>
                <p className="mt-2 text-ivory/70">
                  Dipartimento di Odontoiatria e Chirurgia Maxillo-Facciale — Università di Napoli
                </p>
                <p className="mt-3 text-xs text-ivory/50">Denominazione italiana del ruolo da confermare.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RICERCA */}
      <section id="ricerca" className="container-x py-24 lg:py-36" aria-labelledby="ricerca-title">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Ricerca</Eyebrow>
            <h2 id="ricerca-title" className="display-md mt-7 text-ink">
              Ricerca e pubblicazioni scientifiche.
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-graphite/80">
              Il curriculum del Professore riporta oltre cento pubblicazioni scientifiche. Qui una selezione di lavori
              verificabili su archivi bibliografici pubblici.
            </p>
            <p className="eyebrow mt-10 text-mist">Interessi di ricerca</p>
            <ul className="mt-4 space-y-2.5">
              {researchInterests.map((r) => (
                <li key={r} className="flex items-center gap-3 font-serif text-xl text-ink">
                  <span className="h-px w-5 bg-bronze" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <ol className="lg:col-span-7 lg:col-start-6">
            {publications.map((p, i) => (
              <Reveal as="li" key={p.title} delay={(i % 3) * 60} className="border-t border-midnight/10 py-8 last:border-b">
                <div className="grid gap-3 sm:grid-cols-[5rem_1fr]">
                  <p className="font-serif text-[1.7rem] leading-none text-bronze-dark">{p.year}</p>
                  <div>
                    <h3 className="font-serif text-[1.4rem] leading-snug text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm text-graphite/75">{p.authors}</p>
                    <p className="mt-1 text-sm italic text-mist">{p.source}</p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal"
                    >
                      <span className="link-underline">{p.linkLabel}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      <span className="sr-only">(si apre in una nuova scheda)</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="mt-20 border-t border-midnight/10 pt-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <Eyebrow>Dal blog dello studio</Eyebrow>
                <h3 className="mt-5 font-serif text-[2rem] leading-tight text-ink">Casi e approfondimenti</h3>
              </div>
              <p className="max-w-sm text-sm text-mist">Documenti pubblicati dal Professore sul sito dello studio (PDF).</p>
            </div>
          </Reveal>
          <ul className="mt-8 grid gap-px overflow-hidden border border-midnight/10 bg-midnight/10 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a, i) => (
              <Reveal as="li" key={a.href} delay={i * 70} className="bg-ivory">
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-44 flex-col justify-between gap-8 p-6 transition-colors duration-500 hover:bg-midnight"
                >
                  <span className="eyebrow text-[0.6rem] text-bronze-dark transition-colors group-hover:text-bronze">{a.kind}</span>
                  <span className="flex items-end justify-between gap-4">
                    <span className="font-serif text-[1.45rem] leading-snug text-ink transition-colors group-hover:text-ivory">{a.title}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/40 transition-colors group-hover:text-bronze" aria-hidden />
                  </span>
                  <span className="sr-only">(si apre in una nuova scheda)</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-midnight/10 bg-white/60 p-8 sm:flex-row sm:items-center lg:p-10">
            <p className="max-w-xl font-serif text-[1.6rem] leading-snug text-ink">
              Per informazioni su una visita specialistica, la segreteria dello studio è a disposizione.
            </p>
            <Button href="/contatti">Contatta lo studio</Button>
          </div>
        </Reveal>
      </section>
      <ContactBlock />
    </>
  );
}
