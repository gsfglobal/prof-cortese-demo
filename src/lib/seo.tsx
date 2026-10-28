import type { Metadata } from "next";
import { ASSET_ORIGIN, SITE_URL, contacts, doctor, specialties } from "./site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "it_IT",
      siteName: "Prof. Antonio Cortese — Chirurgia Maxillo-Facciale",
      images: [{ url: `${ASSET_ORIGIN}/og-image.png`, width: 1200, height: 630, alt: "Prof. Antonio Cortese — Chirurgia Maxillo-Facciale, Napoli" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${ASSET_ORIGIN}/og-image.png`] },
  };
}

/**
 * Dati strutturati: solo informazioni presenti sul sito attuale.
 * Nessuna valutazione, recensione o rating.
 */
export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${SITE_URL}/#studio`,
        name: doctor.fullName,
        url: SITE_URL,
        image: `${ASSET_ORIGIN}/og-image.png`,
        telephone: "+39 081 551 5304",
        email: contacts.email,
        medicalSpecialty: ["https://schema.org/Surgical", "https://schema.org/Dentistry"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via Ponte di Tappia, 62",
          postalCode: contacts.postalCode,
          addressLocality: contacts.city,
          addressRegion: contacts.province,
          addressCountry: contacts.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: contacts.geo.lat, longitude: contacts.geo.lng },
        availableService: specialties.map((s) => ({ "@type": "MedicalProcedure", name: s.title })),
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/il-professore#persona`,
        name: "Antonio Cortese",
        honorificPrefix: "Prof. Dott.",
        jobTitle: "Specialista in Chirurgia Maxillo-Facciale",
        worksFor: { "@id": `${SITE_URL}/#studio` },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Università degli Studi di Napoli" },
        affiliation: { "@type": "CollegeOrUniversity", name: "Università degli Studi di Salerno" },
      },
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
