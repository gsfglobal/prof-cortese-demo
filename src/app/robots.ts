import type { MetadataRoute } from "next";
import { IS_DEMO, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (IS_DEMO) {
    // Anteprima: nessuna indicizzazione finché il sito non viene approvato.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/privacy", "/cookie"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
