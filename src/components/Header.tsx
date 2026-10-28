"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { contacts, nav } from "@/lib/site";

/**
 * Header: a riposo occupa tutta la larghezza; dopo il primo scroll si stringe in una
 * "pillola" in vetro (stato letto da html[data-scrolled], vedi ScrollState + globals.css).
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : (pathname?.startsWith(href.replace(/\/$/, "")) ?? false);

  return (
    <header className="site-header sticky top-0 z-50 h-[4.75rem] lg:h-[5.5rem]" data-open={open ? "true" : undefined}>
      <div className="header-bar mx-auto flex items-center justify-between gap-6">
        <Link href="/" className="flex flex-col leading-none text-midnight" aria-label="Prof. Antonio Cortese — Home" onClick={() => setOpen(false)}>
          <span className="font-serif text-[1.4rem] font-medium tracking-[-0.01em] lg:text-[1.6rem]">Prof. Antonio Cortese</span>
          <span className="header-sub mt-1.5 text-[0.68rem] tracking-[0.02em] text-mist">
            Chirurgia Maxillo-Facciale<span className="hidden sm:inline"> · Napoli</span>
          </span>
        </Link>

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.9rem]">
            {nav.slice(1).map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-link relative py-2 transition-colors hover:text-midnight ${active ? "text-midnight" : "text-mist"}`}
                  >
                    {item.label}
                    <span className="nav-line absolute inset-x-0 -bottom-0.5 h-px bg-current" aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contacts.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-[0.9rem] text-mist transition-colors hover:text-midnight xl:inline-flex"
          >
            <Phone size={15} strokeWidth={1.6} aria-hidden />
            {contacts.phoneLabel}
          </a>
          <Link
            href="/contatti"
            className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-[0.9rem] font-medium text-ivory transition-colors duration-300 hover:bg-midnight sm:inline-flex"
          >
            Richiedi appuntamento
          </Link>
          <a
            href={contacts.phoneHref}
            aria-label={`Chiama lo studio: ${contacts.phoneLabel}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/25 text-ink sm:hidden"
          >
            <Phone size={17} strokeWidth={1.6} aria-hidden />
          </a>
          <button
            type="button"
            className="menu-btn grid h-11 w-11 place-items-center rounded-full border border-ink/25 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-icon flex w-[18px] flex-col gap-[5px]" aria-hidden>
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-2/3 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="fixed inset-0 z-[-1] overflow-y-auto bg-ivory pt-[5.5rem] lg:hidden">
        <nav aria-label="Navigazione mobile" className="container-x flex min-h-full flex-col pb-10 pt-4">
          <ul className="border-t border-ink/10">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-ink/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="font-serif text-[2.1rem] font-medium leading-none text-midnight">{item.label}</span>
                  <span className="text-xs tabular-nums text-mist">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3 pt-10">
            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 text-[0.95rem] font-medium text-ivory"
            >
              Richiedi appuntamento
            </Link>
            <p className="text-center text-sm text-mist">{contacts.addressFull}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
