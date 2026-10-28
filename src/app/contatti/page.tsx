import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Navigation, Phone, Smartphone } from "lucide-react";
import { Eyebrow, PageIntro } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { MapCard } from "@/components/visuals";
import { ContactForm } from "@/components/ContactForm";
import { contacts } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contatti — Studio di Chirurgia Maxillo-Facciale a Napoli",
  description:
    "Contatti dello studio del Prof. Antonio Cortese: Via Ponte di Tappia 62, 80133 Napoli. Telefono 081 551 5304, cellulare e WhatsApp +39 347 454 2237, email ancortesemaxillo@gmail.com.",
  path: "/contatti",
});

const actions = [
  { href: contacts.phoneHref, icon: Phone, label: "Telefono", value: contacts.phoneLabel, external: false },
  { href: contacts.whatsappHref, icon: MessageCircle, label: "WhatsApp", value: contacts.mobileLabel, external: true },
  { href: contacts.emailHref, icon: Mail, label: "Email", value: contacts.email, external: false },
  { href: contacts.mapsHref, icon: Navigation, label: "Indicazioni stradali", value: "Apri in Google Maps", external: true },
];

export default function ContattiPage() {
  return (
    <>
      <PageIntro
        label="Contatti"
        lines={["Contatti", {text: "e appuntamenti.", italic: true}]}
        lead="Le visite si svolgono su appuntamento. La segreteria è raggiungibile per telefono, WhatsApp o email."
      />

      <section className="container-x" aria-label="Recapiti diretti">
        <ul className="grid gap-px overflow-hidden border border-midnight/10 bg-midnight/10 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((a, i) => (
            <Reveal as="li" key={a.label} delay={i * 70} className="bg-ivory">
              <a
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col gap-10 p-7 transition-colors duration-500 hover:bg-midnight lg:p-8"
              >
                <a.icon className="h-6 w-6 text-teal transition-colors duration-500 group-hover:text-bronze" aria-hidden />
                <div>
                  <p className="eyebrow text-[0.6rem] text-mist transition-colors duration-500 group-hover:text-ivory/60">{a.label}</p>
                  <p className="mt-2 break-all font-serif text-[1.5rem] leading-tight text-ink transition-colors duration-500 group-hover:text-ivory sm:break-normal">
                    {a.value}
                  </p>
                </div>
                {a.external && <span className="sr-only">(si apre in una nuova scheda)</span>}
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-x py-20 lg:py-28" aria-labelledby="sede-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <div className="overflow-hidden border border-midnight/10 bg-white">
              <MapCard className="block h-auto w-full" />
              <div className="p-7 lg:p-9">
                <Eyebrow>Sede</Eyebrow>
                <h2 id="sede-title" className="mt-5 font-serif text-[2.2rem] leading-tight text-ink">
                  Studio di Napoli
                </h2>
                <address className="mt-5 space-y-3 text-[0.9375rem] not-italic text-graphite/85">
                  <p className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze-dark" aria-hidden />
                    {contacts.addressFull}
                  </p>
                  <p className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bronze-dark" aria-hidden />
                    <a className="link-underline" href={contacts.phoneHref}>
                      Tel. {contacts.phoneLabel}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-bronze-dark" aria-hidden />
                    <a className="link-underline" href={contacts.mobileHref}>
                      Cell. {contacts.mobileLabel}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-bronze-dark" aria-hidden />
                    <a className="link-underline break-all" href={contacts.emailHref}>
                      {contacts.email}
                    </a>
                  </p>
                </address>
                <p className="mt-7 border-t border-midnight/10 pt-5 text-sm text-mist">
                  {contacts.hours}. Orari di segreteria: <span className="text-bronze-dark">da confermare</span>.
                </p>
                <a
                  href={contacts.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full border border-midnight/30 px-6 text-sm font-semibold text-ink transition-colors duration-500 hover:bg-midnight hover:text-ivory"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Indicazioni stradali
                  <span className="sr-only">(si apre in una nuova scheda)</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
            <Eyebrow>Scrivere allo studio</Eyebrow>
            <h2 className="display-md mt-6 text-ink">Richiesta di informazioni</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
