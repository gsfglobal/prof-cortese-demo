"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scrive lo stato di scroll su <html> (data-scrolled, data-scrolled-far) e aggiorna
 * l'avanzamento dei blocchi [data-progress] (variabile CSS --p). Tutto lo stile è in globals.css.
 */
export function ScrollState() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      root.toggleAttribute("data-scrolled", y > 24);
      root.toggleAttribute("data-scrolled-far", y > window.innerHeight * 0.6);
      document.querySelectorAll<HTMLElement>("[data-progress]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const start = window.innerHeight * 0.75;
        const p = Math.min(1, Math.max(0, (start - r.top) / (r.height * 0.85)));
        el.style.setProperty("--p", p.toFixed(3));
        el.querySelectorAll<HTMLElement>("[data-step]").forEach((s) => {
          s.classList.toggle("is-on", p >= Number(s.dataset.step));
        });
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);
  return null;
}
