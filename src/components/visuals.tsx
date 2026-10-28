import type { ReactNode } from "react";

/**
 * Visual editoriali originali in SVG (nessuna foto stock, nessun diritto da acquisire).
 * Sono sostituibili con fotografie autentiche: vedi README, sezione "Immagini".
 */

type SvgProps = { className?: string; title?: string };

/** Studio di proporzioni del profilo facciale: linee guida dei terzi del volto e del profilo. */
export function FacialStudy({ className = "", title = "Studio grafico delle proporzioni del profilo facciale" }: SvgProps) {
  const guides = [
    { y: 92, label: "Trichion" },
    { y: 232, label: "Glabella" },
    { y: 352, label: "Subnasale" },
    { y: 482, label: "Menton" },
  ];
  return (
    <svg viewBox="0 0 420 560" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id="fs-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#AA9174" stopOpacity="0" />
          <stop offset=".25" stopColor="#AA9174" stopOpacity=".9" />
          <stop offset=".8" stopColor="#AA9174" stopOpacity=".9" />
          <stop offset="1" stopColor="#AA9174" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* griglia */}
      <g stroke="#F7F5F0" strokeOpacity=".07" strokeWidth="1">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 42} y1="0" x2={i * 42} y2="560" />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="420" y2={i * 40} />
        ))}
      </g>

      {/* cerchio di proporzione */}
      <g className="draw-line" fill="none" stroke="#AA9174" strokeOpacity=".35" strokeWidth="1">
        <circle cx="206" cy="290" r="196" style={{ ["--draw-delay" as string]: "0.1s" }} />
        <circle cx="206" cy="290" r="121" strokeDasharray="2 6" style={{ ["--draw-delay" as string]: "0.4s" }} />
      </g>

      {/* asse verticale */}
      <line x1="300" y1="30" x2="300" y2="530" stroke="url(#fs-fade)" strokeWidth="1" />

      {/* linee dei terzi */}
      <g fontFamily="var(--font-sans)" fontSize="8.5" letterSpacing="2" fill="#AA9174">
        {guides.map((g) => (
          <g key={g.label}>
            <line x1="48" y1={g.y} x2="372" y2={g.y} stroke="#AA9174" strokeOpacity=".45" strokeWidth="1" strokeDasharray="1 5" />
            <circle cx="300" cy={g.y} r="2.6" fill="#AA9174" />
            <text x="48" y={g.y - 8}>{g.label.toUpperCase()}</text>
          </g>
        ))}
        <g fill="#F7F5F0" fillOpacity=".55">
          <text x="384" y="166" textAnchor="end">I</text>
          <text x="384" y="296" textAnchor="end">II</text>
          <text x="384" y="421" textAnchor="end">III</text>
        </g>
      </g>

      {/* profilo */}
      <g className="draw-line" fill="none" stroke="#F7F5F0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path
          style={{ ["--draw-delay" as string]: "0.3s" }}
          d="M118 70 C 170 40, 250 44, 280 92 C 296 120, 300 168, 298 204 C 297 220, 302 228, 300 236 C 298 244, 294 250, 296 260 C 304 284, 324 312, 330 328 C 334 340, 322 348, 306 350 C 296 352, 292 354, 292 358 C 294 366, 306 368, 306 378 C 306 386, 296 388, 294 392 C 296 398, 304 402, 302 412 C 300 422, 286 424, 286 434 C 286 446, 300 456, 300 468 C 300 482, 290 490, 274 494 C 252 498, 226 496, 206 502 C 196 506, 190 514, 188 530"
        />
        <path
          style={{ ["--draw-delay" as string]: "0.6s" }}
          strokeOpacity=".35"
          d="M118 70 C 80 96, 66 150, 70 206 C 74 262, 96 300, 128 324"
        />
      </g>

      {/* misure */}
      <g stroke="#346E70" strokeWidth="1.2" fill="none" className="draw-line">
        <path style={{ ["--draw-delay" as string]: "1.2s" }} d="M330 328 L 300 468" strokeDasharray="3 4" />
        <path style={{ ["--draw-delay" as string]: "1.3s" }} d="M300 236 L 330 328" strokeDasharray="3 4" />
      </g>
      <g fill="#346E70">
        <circle cx="330" cy="328" r="3" />
        <circle cx="300" cy="468" r="3" />
        <circle cx="300" cy="236" r="3" />
      </g>
    </svg>
  );
}

const glyphPaths: Record<string, ReactNode> = {
  "chirurgia-maxillo-facciale": (
    <>
      <path d="M14 30 C 14 14, 50 14, 50 30" />
      <path d="M10 34 C 10 52, 54 52, 54 34" />
      <line x1="32" y1="6" x2="32" y2="58" strokeDasharray="1.5 3" />
      <circle cx="32" cy="34" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  "chirurgia-ortognatica": (
    <>
      <path d="M12 22 C 22 12, 42 12, 52 22" />
      <path d="M12 42 C 22 52, 42 52, 52 42" />
      <path d="M8 32 H 22 M 42 32 H 56" />
      <path d="M18 28 L 22 32 L 18 36 M 46 28 L 42 32 L 46 36" />
    </>
  ),
  "chirurgia-orale-rigenerativa": (
    <>
      <path d="M26 8 H 38 L 36 14 H 28 Z" />
      <path d="M28 14 V 46 L 32 56 L 36 46 V 14" />
      <path d="M24 22 H 40 M 24 28 H 40 M 24 34 H 40 M 25 40 H 39" strokeOpacity=".6" />
      <path d="M8 50 C 18 44, 46 44, 56 50" strokeDasharray="1.5 3" />
    </>
  ),
  "chirurgia-malformativa-estetica": (
    <>
      <line x1="32" y1="4" x2="32" y2="60" strokeDasharray="1.5 3" />
      <path d="M32 10 C 14 14, 12 34, 18 44 C 22 52, 28 56, 32 56" />
      <path d="M32 10 C 50 14, 52 34, 46 44 C 42 52, 36 56, 32 56" strokeOpacity=".5" />
    </>
  ),
  ortodonzia: (
    <>
      <path d="M10 44 C 10 18, 54 18, 54 44" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const a = Math.PI * (1 - i / 6);
        const x = 32 + 22 * Math.cos(a);
        const y = 40 - 18 * Math.sin(a);
        return <rect key={i} x={x - 2.5} y={y - 2.5} width="5" height="5" fill="currentColor" stroke="none" />;
      })}
    </>
  ),
  "implanto-protesi": (
    <>
      <path d="M16 10 C 16 6, 48 6, 48 10 C 50 18, 46 24, 42 26 H 22 C 18 24, 14 18, 16 10 Z" />
      <path d="M26 26 V 50 L 32 58 L 38 50 V 26" />
      <path d="M26 34 H 38 M 26 40 H 38 M 26 46 H 38" strokeOpacity=".6" />
    </>
  ),
};

export function SpecialtyGlyph({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {glyphPaths[id]}
    </svg>
  );
}

/** Segnaposto per il ritratto: dichiaratamente non una foto del Professore. */
export function PortraitSlot({ className = "", label = "Ritratto del Professore" }: { className?: string; label?: string }) {
  return (
    <figure className={`grain relative overflow-hidden bg-midnight ${className}`}>
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ps-glow" cx="65%" cy="30%" r="70%">
            <stop offset="0" stopColor="#346E70" stopOpacity=".55" />
            <stop offset="1" stopColor="#142B38" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#ps-glow)" />
        <g fill="none" stroke="#AA9174" strokeOpacity=".35">
          <circle cx="200" cy="210" r="150" />
          <circle cx="200" cy="210" r="96" strokeDasharray="2 6" />
          <line x1="200" y1="20" x2="200" y2="480" strokeOpacity=".2" />
          <line x1="20" y1="210" x2="380" y2="210" strokeOpacity=".2" />
        </g>
      </svg>
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <span className="font-serif text-[5.5rem] leading-none text-ivory/90 sm:text-[7rem]">AC</span>
        <figcaption className="text-ivory/70">
          <span className="eyebrow block text-bronze">{label}</span>
          <span className="mt-2 block text-xs leading-relaxed">
            Spazio riservato a una fotografia autentica, da fornire e autorizzare.
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

/** Cornice fotografica per la galleria dello studio, chiaramente segnalata come da fornire. */
export function PhotoSlot({
  label,
  className = "",
  tone = "ivory",
}: {
  label: string;
  className?: string;
  tone?: "ivory" | "midnight" | "teal";
}) {
  const bg = tone === "midnight" ? "bg-midnight text-ivory" : tone === "teal" ? "bg-teal text-ivory" : "bg-ivory-2 text-midnight";
  return (
    <figure className={`grain relative overflow-hidden ${bg} ${className}`}>
      <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="none" aria-hidden>
        <g fill="none" stroke="currentColor" strokeOpacity=".14">
          <line x1="0" y1="0" x2="300" y2="200" />
          <line x1="300" y1="0" x2="0" y2="200" />
        </g>
      </svg>
      <figcaption className="absolute bottom-0 left-0 right-0 flex flex-col-reverse items-start gap-1.5 p-5">
        <span className="font-serif text-xl leading-tight sm:text-2xl">{label}</span>
        <span className="eyebrow shrink-0 text-[0.58rem] text-bronze">Foto da fornire</span>
      </figcaption>
    </figure>
  );
}

export function Monogram({ initials, dark }: { initials: string; dark?: boolean }) {
  return (
    <div
      className={`grid aspect-[4/3] w-full place-items-center ${
        dark ? "bg-midnight text-ivory" : "bg-ivory-2 text-midnight"
      }`}
      aria-hidden
    >
      <span className="font-serif text-5xl tracking-[0.02em]">{initials}</span>
    </div>
  );
}

/** Mappa stilizzata (nessun servizio di terze parti, nessun cookie). */
export function MapCard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 420" className={className} role="img" aria-label="Rappresentazione grafica della posizione dello studio nel centro di Napoli">
      <rect width="600" height="420" fill="#EFEBE3" />
      <g stroke="#142B38" strokeOpacity=".09" strokeWidth="14" strokeLinecap="round" fill="none">
        <path d="M-20 300 C 120 280, 240 250, 620 140" />
        <path d="M60 -20 C 120 120, 160 260, 140 440" />
        <path d="M-20 120 C 200 160, 400 200, 620 260" />
        <path d="M380 -20 C 360 140, 340 300, 400 440" />
      </g>
      <g stroke="#142B38" strokeOpacity=".06" strokeWidth="6" fill="none">
        <path d="M-20 60 L 620 20" />
        <path d="M-20 380 L 620 330" />
        <path d="M240 -20 L 280 440" />
        <path d="M500 -20 L 470 440" />
      </g>
      <path d="M0 420 C 120 380, 300 400, 600 360 L 600 420 Z" fill="#346E70" fillOpacity=".18" />
      <g>
        <circle cx="300" cy="205" r="46" fill="#AA9174" fillOpacity=".14" />
        <circle cx="300" cy="205" r="22" fill="#AA9174" fillOpacity=".25" />
        <circle cx="300" cy="205" r="7" fill="#142B38" />
      </g>
      <g fontFamily="var(--font-sans)" fill="#142B38">
        <text x="322" y="196" fontSize="13" fontWeight="600">Via Ponte di Tappia, 62</text>
        <text x="322" y="214" fontSize="10" letterSpacing="2" fillOpacity=".6">80133 NAPOLI</text>
      </g>
      <text x="24" y="404" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="2" fill="#142B38" fillOpacity=".55">
        GOLFO DI NAPOLI
      </text>
    </svg>
  );
}
