import Link from "next/link";
import { contacts, nav, specialties } from "@/lib/site";

export function Footer() {
  return (
    <footer className="grain bg-ink pb-24 text-ivory lg:pb-0">
      <div className="container-x pb-10 pt-20 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-[2.4rem] leading-[1.05] lg:text-[3.2rem]">
              Prof. Antonio Cortese
            </p>
            <p className="eyebrow mt-4 text-bronze">Chirurgia Maxillo-Facciale e Odontoiatria</p>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory/70">
              Studio in Napoli, nel centro storico. Visite specialistiche su appuntamento.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="eyebrow text-bronze">Studio</h2>
              <address className="mt-5 space-y-1.5 text-sm not-italic leading-relaxed text-ivory/85">
                <p>{contacts.street}</p>
                <p>
                  {contacts.postalCode} {contacts.city} ({contacts.province})
                </p>
                <p className="pt-3">
                  <a className="link-underline" href={contacts.phoneHref}>
                    Tel. {contacts.phoneLabel}
                  </a>
                </p>
                <p>
                  <a className="link-underline" href={contacts.mobileHref}>
                    Cell. {contacts.mobileLabel}
                  </a>
                </p>
                <p>
                  <a className="link-underline break-all" href={contacts.emailHref}>
                    {contacts.email}
                  </a>
                </p>
              </address>
            </div>
            <div>
              <h2 className="eyebrow text-bronze">Sito</h2>
              <ul className="mt-5 space-y-2.5 text-sm text-ivory/85">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link className="link-underline" href={n.href}>
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow text-bronze">Specializzazioni</h2>
              <ul className="mt-5 space-y-2.5 text-sm text-ivory/85">
                {specialties.map((s) => (
                  <li key={s.id}>
                    <Link className="link-underline" href={`/specializzazioni#${s.id}`}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline mt-20 text-ivory" />

        <div className="mt-8 grid gap-6 text-xs leading-relaxed text-ivory/55 lg:grid-cols-12">
          <p className="lg:col-span-7">
            Prof. Dott. Antonio Cortese — Medico Chirurgo, Specialista in Chirurgia Maxillo-Facciale e Odontoiatra.
            <br />
            Iscrizione all’Albo: <span className="text-bronze">[n. e Ordine da inserire]</span> · P.IVA:{" "}
            <span className="text-bronze">[da inserire]</span>
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 lg:col-span-5 lg:justify-end">
            <Link className="link-underline" href="/privacy">
              Privacy (bozza)
            </Link>
            <Link className="link-underline" href="/cookie">
              Cookie (bozza)
            </Link>
            <span>Anteprima di restyling a cura di Dental Go</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
