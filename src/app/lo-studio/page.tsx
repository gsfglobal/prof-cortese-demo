import type { Metadata } from "next";
import { DraftTag, Eyebrow, PageIntro } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PhotoSlot } from "@/components/visuals";
import { Photo } from "@/components/Photo";
import { ContactBlock, PatientPath } from "@/components/sections";
import { photos, team } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Lo Studio — Via Ponte di Tappia, Napoli",
  description:
    "Lo studio del Prof. Antonio Cortese nel centro di Napoli, in Via Ponte di Tappia 62: l'équipe, l'accoglienza del paziente e come si svolge il primo contatto.",
  path: "/lo-studio",
});


export default function LoStudioPage() {
  return (
    <>
      <PageIntro
        label="Lo Studio"
        lines={["Nel cuore di Napoli,", {text: "un ambiente pensato", italic: true}, {text: "per la persona.", italic: true}]}
        lead="Lo studio si trova in Via Ponte di Tappia, nel centro della città. Il paziente viene accolto in un ambiente moderno e confortevole, dove esperienza clinica e attenzione alla persona procedono insieme."
      />

      {/* GALLERIA */}
      <section className="container-x pb-24 lg:pb-36" aria-labelledby="ambienti-title">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <Eyebrow>Gli ambienti</Eyebrow>
            <h2 id="ambienti-title" className="display-md mt-6 text-ink">
              Galleria dello studio
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-sm leading-relaxed text-mist">
              Fotografie tratte dal sito attuale dello studio. Gli spazi segnati sono riservati alle foto di
              accoglienza e sala d’attesa, da realizzare.
              <DraftTag>2 foto da fornire</DraftTag>
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[19rem_19rem]">
          <Reveal className="col-span-2 lg:col-span-7 lg:row-span-2">
            <Photo
              src={photos.team}
              alt="L’équipe dello studio: Dott. Giovanni Del Gaudio, Prof. Antonio Cortese e Dott. Maurizio Del Gaudio"
              sizes="(min-width:1024px) 40vw, 100vw"
              position="50% 40%"
              caption="L’équipe dello studio"
              className="aspect-[4/5] w-full lg:aspect-auto lg:h-full"
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <PhotoSlot label="Accoglienza" tone="midnight" className="h-36 lg:h-full rounded-[1.25rem]" />
          </Reveal>
          <Reveal delay={160} className="lg:col-span-5">
            <PhotoSlot label="Sala d’attesa" className="h-36 lg:h-full rounded-[1.25rem]" />
          </Reveal>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="bg-white/60 py-24 lg:py-36" aria-labelledby="equipe-title">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Eyebrow>L’équipe</Eyebrow>
              <h2 id="equipe-title" className="display-md mt-7 text-ink">
                I professionisti dello studio
              </h2>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-5 lg:col-start-8 lg:pt-14">
              <p className="text-[1.0625rem] leading-relaxed text-graphite/80">
                Il Prof. Cortese, insieme al suo team, si impegna nell’offrire cure personalizzate, mettendo insieme
                esperienza e attenzione alla persona.
              </p>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-10 sm:grid-cols-3">
            {team.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 90}>
                <Photo src={m.photo} alt={`${m.name}, ${m.role}`} sizes="(min-width:640px) 33vw, 100vw" position="50% 20%" className="aspect-[4/5] w-full rounded-[1.25rem]" />
                <div className="mt-6 border-t border-midnight/10 pt-5">
                  <h3 className="font-serif text-[1.75rem] leading-tight text-ink">{m.name}</h3>
                  <p className="mt-1.5 text-sm text-mist">{m.role}</p>
                  {!m.lead && (
                    <p className="mt-3 text-xs text-mist">
                      Breve profilo e iscrizione all’Albo <DraftTag>Da fornire</DraftTag>
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <PatientPath />
      <ContactBlock />
    </>
  );
}
