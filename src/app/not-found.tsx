import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow text-bronze-dark">Errore 404</p>
      <h1 className="display mt-6 text-[3rem] text-midnight sm:text-[4.5rem]">Pagina non trovata.</h1>
      <p className="mt-6 max-w-lg text-lg text-graphite/80">La pagina richiesta non esiste o è stata spostata.</p>
      <div className="mt-10">
        <Button href="/">Torna alla home</Button>
      </div>
    </section>
  );
}
