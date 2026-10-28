import type { Metadata } from "next";
import { Button, Eyebrow, PageIntro } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactBlock } from "@/components/sections";
import { SpecialtyGlyph } from "@/components/visuals";
import { contacts, specialties } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Specializzazioni — Chirurgia ortognatica, rigenerativa e implantologia a Napoli",
  description:
    "Chirurgia maxillo-facciale, chirurgia ortognatica, chirurgia orale rigenerativa e implantologia, chirurgia malformativa, ortodonzia pre-chirurgica e implanto-protesi presso lo studio del Prof. Antonio Cortese a Napoli.",
  path: "/specializzazioni",
});

export default function SpecializzazioniPage() {
  return (
    <>
      <PageIntro
        label="Specializzazioni"
        lines={["Sei aree,", {text: "un solo sguardo", italic: true}, {text: "sul volto.", italic: true}]}
        lead="Informazioni generali sugli ambiti di attività dello studio. Indicazioni, tempi e alternative di ciascun trattamento vengono definiti solo dopo una visita specialistica."
      >
        <nav aria-label="Indice delle specializzazioni" className="mt-14">
          <ol className="grid gap-px overflow-hidden border border-midnight/10 bg-midnight/10 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s) => (
              <li key={s.id} className="bg-ivory">
                <a
                  href={`#${s.id}`}
                  className="group flex h-full items-center gap-5 px-5 py-5 transition-colors duration-500 hover:bg-white"
                >
                  <span className="font-serif text-lg italic text-bronze-dark">{s.index}</span>
                  <span className="text-[0.9375rem] font-medium text-ink">{s.label}</span>
                  <SpecialtyGlyph id={s.id} className="ml-auto h-8 w-8 shrink-0 text-teal/70 transition-colors group-hover:text-teal" />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageIntro>

      <div className="pb-12">
        {specialties.map((s, i) => {
          const dark = i % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className={dark ? "grain bg-midnight text-ivory" : "bg-transparent"}
            >
              <div className="container-x grid gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-32">
                <div className="lg:col-span-5">
                  <div className="lg:sticky lg:top-32">
                    <Reveal>
                      <div className="flex items-center gap-5">
                        <span className={`font-serif text-[4.5rem] leading-none ${dark ? "text-bronze" : "text-bronze-dark"} lg:text-[6rem]`}>
                          {s.index}
                        </span>
                        <SpecialtyGlyph id={s.id} className={`h-16 w-16 ${dark ? "text-bronze" : "text-teal"} lg:h-20 lg:w-20`} />
                      </div>
                      <h2
                        id={`${s.id}-title`}
                        className={`display mt-8 text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] ${dark ? "text-ivory" : "text-ink"}`}
                      >
                        {s.title}
                      </h2>
                      <p className={`mt-6 font-serif text-[1.35rem] italic leading-snug ${dark ? "text-ivory/70" : "text-graphite/70"}`}>
                        {s.short}
                      </p>
                    </Reveal>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <Reveal delay={80}>
                    <Eyebrow light={dark}>Di cosa si tratta</Eyebrow>
                    <p className={`mt-5 text-[1.0625rem] leading-[1.85] ${dark ? "text-ivory/85" : "text-graphite/85"}`}>{s.intro}</p>
                  </Reveal>

                  <Reveal delay={120}>
                    <div className={`mt-12 border-t pt-10 ${dark ? "border-ivory/15" : "border-midnight/10"}`}>
                      <Eyebrow light={dark}>Finalità</Eyebrow>
                      <p className={`mt-5 text-[1.0625rem] leading-[1.85] ${dark ? "text-ivory/85" : "text-graphite/85"}`}>{s.purpose}</p>
                    </div>
                  </Reveal>

                  <Reveal delay={160}>
                    <div className={`mt-12 border-t pt-10 ${dark ? "border-ivory/15" : "border-midnight/10"}`}>
                      <Eyebrow light={dark}>Ambiti clinici</Eyebrow>
                      <ul className="mt-6 space-y-0">
                        {s.scope.map((item) => (
                          <li
                            key={item}
                            className={`flex items-baseline gap-4 border-b py-4 font-serif text-[1.35rem] leading-snug ${
                              dark ? "border-ivory/10 text-ivory" : "border-midnight/10 text-ink"
                            }`}
                          >
                            <span className={`h-1.5 w-1.5 shrink-0 translate-y-[-0.2rem] rounded-full ${dark ? "bg-bronze" : "bg-teal"}`} aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {s.note && (
                        <p className={`mt-6 text-sm leading-relaxed ${dark ? "text-ivory/60" : "text-mist"}`}>{s.note}</p>
                      )}
                    </div>
                  </Reveal>

                  <Reveal delay={200}>
                    <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                      <Button href="/contatti" variant={dark ? "light" : "solid"}>
                        Richiedi una valutazione
                      </Button>
                      <Button href={contacts.phoneHref} variant={dark ? "ghost-light" : "outline"} icon="none">
                        {contacts.phoneLabel}
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="container-x pb-24 lg:pb-32">
        <Reveal>
          <p className="max-w-3xl border-l border-bronze pl-6 text-sm leading-relaxed text-mist">
            Le informazioni di questa pagina hanno carattere generale e non sostituiscono la visita medica. Ogni percorso
            terapeutico viene valutato individualmente dal medico, che illustra al paziente indicazioni, benefici attesi,
            rischi e possibili alternative.
          </p>
        </Reveal>
      </section>
      <ContactBlock />
    </>
  );
}
