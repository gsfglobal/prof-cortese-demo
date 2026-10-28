import type { Metadata } from "next";
import { LegalDraft, Placeholder } from "@/components/LegalDraft";

export const metadata: Metadata = {
  title: "Informativa privacy (bozza)",
  robots: { index: false, follow: false },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalDraft title="Informativa privacy">
      <div>
        <h2>Titolare del trattamento</h2>
        <p>
          <Placeholder>Nome e cognome / ragione sociale, indirizzo, P.IVA, recapito email per l’esercizio dei diritti</Placeholder>
        </p>
      </div>
      <div>
        <h2>Dati trattati e finalità</h2>
        <p>Struttura da completare a cura del consulente privacy. Voci da prevedere:</p>
        <ul>
          <li>dati di contatto forniti spontaneamente tramite telefono, email, WhatsApp o modulo di contatto;</li>
          <li>finalità di riscontro alle richieste e gestione degli appuntamenti;</li>
          <li>base giuridica, tempi di conservazione, eventuali destinatari e responsabili esterni;</li>
          <li>modalità di esercizio dei diritti (artt. 15–22 GDPR) e reclamo al Garante.</li>
        </ul>
      </div>
      <div>
        <h2>Dati relativi alla salute</h2>
        <p>
          Il sito non richiede né raccoglie dati sanitari. Eventuali informazioni cliniche vengono trattate esclusivamente
          nell’ambito della visita, secondo l’informativa consegnata in studio.{" "}
          <Placeholder>da validare</Placeholder>
        </p>
      </div>
    </LegalDraft>
  );
}
