import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SplitTitle } from "./SplitTitle";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light" | "ghost-light";
  external?: boolean;
  className?: string;
  icon?: "arrow" | "external" | "none";
  ariaLabel?: string;
};

const styles: Record<NonNullable<BtnProps["variant"]>, string> = {
  solid: "bg-ink text-ivory border-ink hover:bg-midnight hover:border-midnight",
  outline: "bg-transparent text-ink border-ink/25 hover:border-ink",
  light: "bg-ivory text-ink border-ivory hover:bg-paper",
  "ghost-light": "bg-transparent text-ivory border-ivory/35 hover:border-ivory",
};

export function Button({ href, children, variant = "solid", external, className = "", icon = "arrow", ariaLabel }: BtnProps) {
  const cls = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 py-3 text-[0.95rem] font-medium tracking-[0.005em] transition-colors duration-300 ${styles[variant]} ${className}`;
  const Icon = icon === "external" ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <span>{children}</span>
      {icon !== "none" && (
        <Icon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={1.6} aria-hidden />
      )}
    </>
  );
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children, className = "", light }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={`label flex items-center gap-3 ${light ? "!text-ivory/65" : ""} ${className}`}>
      <span className={`inline-block h-px w-6 ${light ? "bg-bronze" : "bg-bronze-dark"}`} aria-hidden />
      {children}
    </p>
  );
}

export function PageIntro({
  label,
  lines,
  lead,
  children,
}: {
  label: string;
  lines: (string | { text: string; italic?: boolean })[];
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="container-x pb-16 pt-10 lg:pb-24 lg:pt-16">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="label fade-up">{label}</p>
          <SplitTitle as="h1" onLoad delay={80} lines={lines} className="display-xl mt-5 text-ink" />
        </div>
        {lead && (
          <div className="flex items-end lg:col-span-4">
            <p className="lead fade-up" style={{ ["--delay" as string]: "350ms" }}>
              {lead}
            </p>
          </div>
        )}
      </div>
      {children}
      <div className="mt-14 h-px bg-ink/10 lg:mt-20" />
    </section>
  );
}

export function DraftTag({ children = "Da confermare" }: { children?: ReactNode }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-full border border-bronze/50 bg-bronze/10 px-2 py-0.5 align-middle text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-bronze-dark">
      {children}
    </span>
  );
}
