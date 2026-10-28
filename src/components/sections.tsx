import { Mail, MapPin, Phone, Plus, MessageCircle } from "lucide-react";
import { Button, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";
import { SplitTitle } from "./SplitTitle";
import { ContactForm } from "./ContactForm";
import { contacts, faq } from "@/lib/site";

/* ───────── Domande frequenti ───────── */
export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="border-t border-ink/10 py-24 lg:py-36">
      <div className="container-x grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-4">
          <SplitTitle id="faq-title" lines={["Domande", "frequenti"]} className="display-lg text-ink" />
          <Reveal>
            <p className="mt-6 max-w-[22rem] text-mist">
              Risposte informative ai dubbi più comuni. Ogni situazione è diversa: le indicazioni personali si danno solo
              dopo la visita.
            </p>
          </Reveal>
        </div>
        <div className="faq lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-ink/10">
            {faq.map((f, i) => (
              <li key={f.q} className="border-b border-ink/10">
                <details open={i === 0}>
                  <summary className="flex w-full items-start justify-between gap-6 py-6 text-left">
                    <h3 className="font-serif text-[1.35rem] font-medium leading-snug text-ink sm:text-[1.6rem]">{f.q}</h3>
                    <span className="faq-plus mt-1.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/25" aria-hidden>
                      <Plus size={16} strokeWidth={1.5} />
                    </span>
                  </summary>
                  <p className="max-w-[42rem] pb-7 pr-12 text-mist">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────── Percorso del paziente ───────── */
const steps = [
  {
    title: "Il primo contatto",
    text: "Si contatta la segreteria per telefono, WhatsApp o email per fissare la visita. A distanza non vengono richieste informazioni cliniche.",
  },
  {
    title: "La visita specialistica",
    text: "Il Professore ascolta la storia del paziente, valuta il caso e, se serve, indica gli esami utili a completare la diagnosi.",
  },
  {
    title: "Il piano condiviso",
    text: "Obiettivi, passaggi, tempi e alternative vengono spiegati con parole semplici. La scelta si prende insieme, con tutte le informazioni.",
  },
];

export function PatientPath({ white = true }: { white?: boolean }) {
  return (
    <section aria-labelledby="percorso-title" className={`border-t border-ink/10 py-24 lg:py-36 ${white ? "bg-paper" : ""}`}>
      <div className="container-x grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Il percorso del paziente</Eyebrow>
            <SplitTitle
              id="percorso-title"
              lines={["Dal primo contatto", "a un piano costruito", "sulla persona."]}
              className="display-lg mt-5 text-ink"
            />
          </div>
        </div>
        <ol data-progress className="relative lg:col-span-6 lg:col-start-7">
          <span className="absolute bottom-0 left-[1.4rem] top-0 w-px bg-ink/12" aria-hidden />
          <span className="path-fill absolute bottom-0 left-[1.4rem] top-0 w-px bg-ink" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.title} data-step={(i / steps.length + 0.02).toFixed(2)} className="path-step relative grid grid-cols-[2.8rem_1fr] gap-6 pb-16 last:pb-0">
              <span className="path-dot relative z-10 grid h-[2.8rem] w-[2.8rem] place-items-center rounded-full border border-ink bg-paper font-serif text-[1.25rem] tabular-nums text-ink" aria-hidden>
                {i + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="font-serif text-[1.85rem] font-medium leading-tight text-ink sm:text-[2.2rem]">{s.title}</h3>
                <p className="mt-3 max-w-[32rem] text-mist">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────── Contatti con modulo in card ───────── */
export function ContactBlock({ id = "prenota", headingLevel = "h2" }: { id?: string; headingLevel?: "h1" | "h2" }) {
  const Sub = headingLevel === "h1" ? "h2" : "h3";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="on-dark grain relative bg-midnight text-ivory">
      <div className="container-x grid gap-y-14 py-24 lg:grid-cols-12 lg:gap-x-10 lg:py-32">
        <div className="lg:col-span-5">
          <Eyebrow light>Contatti</Eyebrow>
          <SplitTitle
            as={headingLevel}
            id={`${id}-title`}
            lines={["Il percorso", "inizia da una", "conversazione."]}
            className="display-lg mt-5"
          />
          <Reveal>
            <p className="lead mt-6 max-w-[26rem]">
              Chiami lo studio per fissare una visita oppure scriva su WhatsApp: la segreteria la ricontatterà per trovare
              insieme giorno e orario.
            </p>
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap gap-3">
            <Button href={contacts.phoneHref} variant="light" icon="none">
              Chiama lo studio
            </Button>
            <Button href={contacts.whatsappHref} variant="ghost-light" icon="external">
              Scrivi su WhatsApp
            </Button>
          </Reveal>
          <Reveal>
            <dl className="mt-12 space-y-6 border-t border-ivory/15 pt-8 text-[0.98rem]">
              <div className="flex gap-4">
                <dt>
                  <Phone size={18} strokeWidth={1.4} className="mt-1 text-bronze" aria-hidden />
                  <span className="sr-only">Telefono</span>
                </dt>
                <dd>
                  <a href={contacts.phoneHref} className="font-serif text-[1.7rem] leading-none">
                    {contacts.phoneLabel}
                  </a>
                  <p className="mt-1 text-[0.85rem] text-ivory/60">
                    Cellulare{" "}
                    <a href={contacts.mobileHref} className="link-underline">
                      {contacts.mobileLabel}
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt>
                  <MessageCircle size={18} strokeWidth={1.4} className="mt-1 text-bronze" aria-hidden />
                  <span className="sr-only">WhatsApp</span>
                </dt>
                <dd>
                  <a href={contacts.whatsappHref} target="_blank" rel="noopener noreferrer" className="link-underline">
                    WhatsApp {contacts.mobileLabel}
                    <span className="sr-only"> (si apre in una nuova scheda)</span>
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt>
                  <Mail size={18} strokeWidth={1.4} className="mt-1 text-bronze" aria-hidden />
                  <span className="sr-only">Email</span>
                </dt>
                <dd>
                  <a href={contacts.emailHref} className="link-underline break-all">
                    {contacts.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt>
                  <MapPin size={18} strokeWidth={1.4} className="mt-1 text-bronze" aria-hidden />
                  <span className="sr-only">Indirizzo</span>
                </dt>
                <dd>
                  <address className="not-italic">{contacts.addressFull}</address>
                  <a href={contacts.mapsHref} target="_blank" rel="noopener noreferrer" className="link-underline mt-1 inline-block text-[0.88rem] text-ivory/75">
                    Indicazioni stradali<span className="sr-only"> (si apre in una nuova scheda)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal>
            <div className="mt-10 border-t border-ivory/15 pt-8">
              <Sub className="label">Appuntamenti</Sub>
              <p className="mt-3 max-w-[22rem] text-[0.95rem] text-ivory/80">
                Visite su appuntamento. Orari di segreteria da confermare.
              </p>
            </div>
          </Reveal>
        </div>

        <div id={`${id}-richiesta`} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[1.25rem] bg-ivory p-6 text-ink sm:p-10 lg:sticky lg:top-28">
            <Sub className="font-serif text-[2rem] font-medium leading-tight">Richiesta di informazioni</Sub>
            <p className="mb-8 mt-2 text-[0.95rem] text-mist">Lasci nome e recapiti: la segreteria la ricontatterà.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
