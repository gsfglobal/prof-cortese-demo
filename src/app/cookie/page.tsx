import type { Metadata } from "next";
import { LegalDraft, Placeholder } from "@/components/LegalDraft";

export const metadata: Metadata = {
  title: "Cookie policy (bozza)",
  robots: { index: false, follow: false },
  alternates: { canonical: "/cookie" },
};

export default function CookiePage() {
  return (
    <LegalDraft title="Cookie policy">
      <div>
        <h2>Stato attuale della demo</h2>
        <p>
          Questa anteprima non installa cookie di profilazione né strumenti di statistica, non incorpora mappe, video o
          widget di terze parti e utilizza caratteri tipografici ospitati localmente. Per questo motivo non è presente un
          banner cookie.
        </p>
      </div>
      <div>
        <h2>Prima della pubblicazione</h2>
        <ul>
          <li>censire eventuali strumenti aggiunti (statistiche, mappe incorporate, pixel pubblicitari);</li>
          <li>se presenti cookie non tecnici, attivare un banner conforme alle Linee guida del Garante (giugno 2021);</li>
          <li>
            completare la policy con titolare e recapiti: <Placeholder>da inserire</Placeholder>.
          </li>
        </ul>
      </div>
    </LegalDraft>
  );
}
