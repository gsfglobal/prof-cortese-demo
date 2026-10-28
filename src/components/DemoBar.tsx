import { Phone } from "lucide-react";
import { IS_DEMO, contacts } from "@/lib/site";

/** Etichetta discreta "Concept dimostrativo" (solo in modalità demo). */
export function DemoBar() {
  if (!IS_DEMO) return null;
  return (
    <div className="demo-pill pointer-events-none fixed bottom-3 left-3 z-40 transition-opacity duration-500 lg:bottom-5 lg:left-5">
      <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ivory/90 px-3 py-1.5 text-[0.7rem] tracking-wide text-mist shadow-sm backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-bronze" aria-hidden />
        Concept dimostrativo · Dental Go
      </span>
    </div>
  );
}

/** Barra fissa su smartphone: telefono e WhatsApp sempre a portata di pollice. */
export function MobileActions() {
  return (
    <div className="mobile-actions fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-ivory/92 px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] pt-2.5 backdrop-blur-xl lg:hidden">
      <div className="flex gap-2">
        <a
          href={contacts.phoneHref}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-ink/25 text-[0.95rem] font-medium text-ink"
        >
          <Phone size={16} strokeWidth={1.6} aria-hidden />
          Chiama lo studio
        </a>
        <a
          href={contacts.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-ink text-[0.95rem] font-medium text-ivory"
        >
          Scrivi su WhatsApp
        </a>
      </div>
    </div>
  );
}
