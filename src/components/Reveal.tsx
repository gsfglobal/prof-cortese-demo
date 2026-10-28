"use client";

import { useEffect, useRef, type ReactNode, type ElementType, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  /** "fade": comparsa con dissolvenza; "plain": aggiunge solo .is-visible (usato dai titoli parola per parola). */
  variant?: "fade" | "plain";
  id?: string;
  style?: CSSProperties;
};

/** Comparsa discreta all'ingresso nel viewport. Disattivata con prefers-reduced-motion (vedi globals.css). */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "", variant = "fade", id, style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${variant === "fade" ? "reveal" : "reveal-plain"} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms`, ["--d" as string]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
