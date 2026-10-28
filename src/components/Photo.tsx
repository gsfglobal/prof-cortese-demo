import Image from "next/image";
import { asset } from "@/lib/site";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
  caption?: string;
  zoom?: boolean;
};

/** Fotografia con cornice editoriale, lazy loading e didascalia opzionale. */
export function Photo({ src, alt, className = "", sizes = "100vw", priority, position = "50% 30%", caption, zoom = true }: Props) {
  return (
    <figure className={`group relative overflow-hidden bg-ivory-2 ${className}`}>
      <Image
        src={src.startsWith("/") ? asset(src) : src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${zoom ? "transition-transform duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.035]" : ""}`}
        style={{ objectPosition: position }}
      />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/80 via-midnight/30 to-transparent px-5 pb-4 pt-12 text-xs leading-relaxed text-ivory/85">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
