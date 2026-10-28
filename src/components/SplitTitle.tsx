import { Fragment, type ElementType } from "react";
import { Reveal } from "./Reveal";

type Props = {
  /** Ogni riga va a capo; le parole salgono una alla volta. */
  lines: (string | { text: string; italic?: boolean })[];
  as?: ElementType;
  className?: string;
  id?: string;
  /** true = anima al caricamento (titolo d'apertura), altrimenti all'ingresso nel viewport. */
  onLoad?: boolean;
  delay?: number;
};

function Words({ lines }: { lines: Props["lines"] }) {
  let i = 0;
  return (
    <>
      {lines.map((raw, li) => {
        const line = typeof raw === "string" ? { text: raw } : raw;
        const words = line.text.split(" ");
        return (
          <Fragment key={li}>
          {li > 0 && " "}
          <span className={`block ${line.italic ? "italic text-bronze-dark" : ""}`}>
            {words.map((w, wi) => {
              const idx = i++;
              return (
                <span key={wi} className="w">
                  <span style={{ ["--i" as string]: idx }}>{w}</span>
                  {wi < words.length - 1 && " "}
                </span>
              );
            })}
          </span>
          </Fragment>
        );
      })}
    </>
  );
}

export function SplitTitle({ lines, as: Tag = "h2", className = "", id, onLoad, delay = 0 }: Props) {
  if (onLoad) {
    return (
      <Tag id={id} className={`split split-load ${className}`} style={{ ["--d" as string]: `${delay}ms` }}>
        <Words lines={lines} />
      </Tag>
    );
  }
  return (
    <Reveal as={Tag} id={id} variant="plain" delay={delay} className={`split ${className}`}>
      <Words lines={lines} />
    </Reveal>
  );
}
