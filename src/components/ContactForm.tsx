"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { Info } from "lucide-react";
import { contacts } from "@/lib/site";

/**
 * Modulo DIMOSTRATIVO.
 * Non invia e non salva alcun dato: nessuna chiamata di rete, nessun storage.
 * Per attivarlo servono: endpoint sicuro (es. API route con invio email via provider UE),
 * informativa privacy validata, base giuridica del consenso e registro dei trattamenti.
 */
export function ContactForm() {
  const id = useId();
  const [attempted, setAttempted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setAttempted(true);
  }

  const field =
    "mt-2 block w-full rounded-none border-0 border-b border-midnight/25 bg-transparent px-0 py-3 text-[1rem] text-midnight placeholder:text-mist/70 focus:border-midnight focus:outline-none focus:ring-0";
  const label = "eyebrow text-[0.62rem] text-mist";

  return (
    <div>
      <div className="flex gap-3 border border-bronze/40 bg-bronze/10 p-4 text-sm leading-relaxed text-graphite">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-bronze-dark" aria-hidden />
        <p>
          <strong className="font-semibold">Modulo in modalità dimostrativa.</strong> In questa anteprima nessun dato viene
          inviato o salvato. Per richiedere un appuntamento usare telefono, WhatsApp o email.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-7" aria-describedby={`${id}-note`} noValidate={false}>
        <div className="grid gap-7 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-nome`} className={label}>
              Nome e cognome
            </label>
            <input id={`${id}-nome`} name="nome" type="text" autoComplete="name" required className={field} />
          </div>
          <div>
            <label htmlFor={`${id}-tel`} className={label}>
              Telefono
            </label>
            <input id={`${id}-tel`} name="telefono" type="tel" autoComplete="tel" inputMode="tel" required className={field} />
          </div>
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            Email
          </label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-msg`} className={label}>
            Breve richiesta
          </label>
          <textarea
            id={`${id}-msg`}
            name="richiesta"
            rows={4}
            maxLength={500}
            required
            placeholder="Es. desidero fissare una prima visita e conoscere le disponibilità."
            className={`${field} resize-none`}
          />
          <p id={`${id}-note`} className="mt-2 text-xs leading-relaxed text-mist">
            Non inserire diagnosi, referti o altre informazioni sulla salute: verranno valutate solo durante la visita.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <input
            id={`${id}-privacy`}
            name="privacy"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded-none border-midnight/40 accent-[#142B38]"
          />
          <label htmlFor={`${id}-privacy`} className="text-sm leading-relaxed text-graphite/80">
            Ho letto l’
            <Link href="/privacy" className="underline underline-offset-4">
              informativa privacy
            </Link>{" "}
            (bozza in attesa di validazione).
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-midnight bg-midnight px-7 py-3 text-sm font-semibold text-ivory transition-colors duration-500 hover:bg-transparent hover:text-midnight"
        >
          Verifica il modulo (demo)
        </button>

        <div aria-live="polite" className="min-h-[1px]">
          {attempted && (
            <div className="border-l-2 border-teal bg-white/70 p-5 text-sm leading-relaxed text-graphite">
              <p className="font-semibold text-midnight">Richiesta non inviata.</p>
              <p className="mt-1">
                Questo modulo è dimostrativo e non trasmette dati. Per contattare lo studio:{" "}
                <a className="underline underline-offset-4" href={contacts.phoneHref}>
                  {contacts.phoneLabel}
                </a>
                ,{" "}
                <a className="underline underline-offset-4" href={contacts.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>{" "}
                o{" "}
                <a className="underline underline-offset-4" href={contacts.emailHref}>
                  email
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
