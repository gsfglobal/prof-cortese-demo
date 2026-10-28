import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/il-professore", priority: 0.8 },
    { path: "/specializzazioni", priority: 0.9 },
    { path: "/lo-studio", priority: 0.7 },
    { path: "/contatti", priority: 0.8 },
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
