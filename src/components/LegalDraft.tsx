import type { ReactNode } from "react";
import { PageIntro } from "@/components/ui";

export function LegalDraft({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageIntro label="Documento in bozza" lines={[title]} />
      <section className="container-x pb-28">
        <div className="max-w-3xl">
          <div className="border border-bronze/40 bg-bronze/10 p-6 text-sm leading-relaxed text-graphite">
            <p className="font-semibold text-midnight">Bozza non pubblicabile.</p>
            <p className="mt-1">
              Questo testo è un segnaposto strutturale. Deve essere redatto e validato dal titolare del trattamento con il
              proprio consulente privacy prima della messa online. Nessun dato in questa pagina è definitivo.
            </p>
          </div>
          <div className="mt-12 space-y-10 text-[1rem] leading-[1.8] text-graphite/85 [&_h2]:font-serif [&_h2]:text-[1.8rem] [&_h2]:leading-tight [&_h2]:text-midnight [&_li]:ml-5 [&_li]:list-disc [&_p]:mt-3 [&_ul]:mt-3">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="bg-bronze/15 px-1 font-medium text-bronze-dark">[{children}]</span>;
}
