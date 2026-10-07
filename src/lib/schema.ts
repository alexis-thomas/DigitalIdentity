// schema.org JSON-LD builders. Every page emits an @graph that references
// one canonical Person node (#person) so search engines consolidate the entity.
import { SITE_URL, profile, experience, education, certifications, publications, awards } from "../data/profile";
import type { Project } from "../data/projects";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function personNode(imageUrl: string) {
  const current = experience[0];
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    url: SITE_URL,
    image: imageUrl,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    description: profile.headline,
    worksFor: { "@type": "Organization", name: current.company, url: "https://www.amazon.com" },
    workLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: profile.locality, addressCountry: profile.country },
    },
    address: { "@type": "PostalAddress", addressLocality: profile.locality, addressCountry: profile.country },
    alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.school, ...(e.url ? { url: e.url } : {}) })),
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.name,
      credentialCategory: "Professional certification",
      recognizedBy: { "@type": "Organization", name: c.issuer },
      url: c.url,
    })),
    award: awards.map((a) => a.title),
    knowsAbout: profile.knowsAbout,
    knowsLanguage: profile.languages.map((l) => l.name),
    sameAs: [profile.social.linkedin, profile.social.scholar, profile.social.github, profile.social.gitlab],
    hasOccupation: {
      "@type": "Occupation",
      name: profile.role,
      occupationalCategory: "15-2051.00 Data Scientists",
      description: "Applied scientist building demand forecasting and machine learning systems, with a software engineering and AWS cloud background.",
      occupationLocation: { "@type": "City", name: profile.locality },
      skills: profile.knowsAbout.join(", "),
    },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: profile.name,
    description: profile.headline,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

export function breadcrumbNode(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

export function pageNode(type: string, url: string, name: string, description: string, extra: Record<string, unknown> = {}) {
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    ...(type === "ProfilePage" ? { mainEntity: { "@id": PERSON_ID } } : { about: { "@id": PERSON_ID } }),
    ...extra,
  };
}

export function projectNode(p: Project, url: string, imageUrl: string) {
  const store = p.links.find((l) => l.kind === "appstore");
  const web = p.links.find((l) => l.kind === "web");
  const os = [
    ...(p.platforms.some((x) => x.startsWith("iOS")) ? ["iOS"] : []),
    ...(p.platforms.includes("Android") ? ["Android"] : []),
    ...(p.platforms.includes("Web") ? ["Web browser"] : []),
  ].join(", ");
  return {
    "@type": p.platforms.includes("Web") && !store ? "WebApplication" : "MobileApplication",
    "@id": `${url}#app`,
    name: p.name,
    description: p.tagline,
    applicationCategory: p.category,
    operatingSystem: os,
    url: web?.url ?? store?.url ?? url,
    image: imageUrl,
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    dateCreated: p.startDate,
    sameAs: p.links.map((l) => l.url),
  };
}

export function scholarlyNodes() {
  return publications
    .filter((p) => p.public)
    .map((p) => ({
      "@type": "ScholarlyArticle",
      headline: p.title,
      name: p.title,
      datePublished: p.year,
      author: p.authors!.split(", ").map((a) => (a === "A. Thomas" ? { "@id": PERSON_ID } : { "@type": "Person", name: a })),
      isPartOf: { "@type": "Periodical", name: p.venue },
      url: p.links![0].url,
      sameAs: p.links!.slice(1).map((l) => l.url),
      abstract: p.summary,
    }));
}

export function graph(...nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
