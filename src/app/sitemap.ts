import { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://sitelytc.com";

    const staticRoutes: MetadataRoute.Sitemap = [
        "",
        "/services",
        "/work",
        "/process",
        "/about",
        "/founder",
        "/portals",
        "/contact",
        "/privacy",
        "/terms",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));

    const dynamicRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
        url: `${baseUrl}/work/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...dynamicRoutes];
}
