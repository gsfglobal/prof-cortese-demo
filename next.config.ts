import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 produce una versione statica (cartella /out) usata solo per
 * l'anteprima privata. Il deploy standard (es. Vercel) usa la build normale.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";
/** BASE_PATH serve solo per GitHub Pages (es. /prof-cortese-demo). Sul dominio definitivo resta vuoto. */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {}),
  poweredByHeader: false,
  ...(basePath ? { basePath } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
