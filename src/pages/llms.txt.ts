// /llms.txt: a plain-text summary for LLM-powered search and assistants (llmstxt.org).
import type { APIRoute } from "astro";
import { SITE_URL, profile, experience, education, certifications, publications, awards, skills } from "../data/profile";
import { projects } from "../data/projects";
import { formatRange, stripMd } from "../lib/format";

export const GET: APIRoute = () => {
  const lines: string[] = [];
  lines.push(`# ${profile.name}`, "", `> ${profile.headline}`, "");
  lines.push(profile.shortBio, "");
  lines.push(`- Current role: ${profile.role} at ${profile.company} (${profile.location})`);
  lines.push(`- Email: ${profile.email}`);
  lines.push(`- LinkedIn: ${profile.social.linkedin}`);
  lines.push(`- Google Scholar: ${profile.social.scholar}`);
  lines.push(`- GitHub: ${profile.social.github}`, "");

  lines.push("## Pages", "");
  lines.push(`- [Résumé](${SITE_URL}/resume): full work history, education, skills and certifications`);
  lines.push(`- [Projects](${SITE_URL}/projects): case studies of apps I built`);
  for (const p of projects) lines.push(`- [${p.name}](${SITE_URL}/projects/${p.slug}): ${p.tagline}`);
  lines.push(`- [Research](${SITE_URL}/research): publications and awards`);
  lines.push(`- [CV (PDF)](${SITE_URL}/Alexis-Thomas-Resume.pdf)`);
  lines.push(`- [Contact](${SITE_URL}/contact)`, "");

  lines.push("## Experience", "");
  for (const e of experience) {
    for (const r of e.roles) {
      lines.push(`### ${r.title}, ${e.company} (${formatRange(r.start, r.end)}, ${r.location})`, "");
      for (const b of r.bullets) lines.push(`- ${stripMd(b)}`);
      lines.push("");
    }
  }

  lines.push("## Projects", "");
  for (const p of projects) {
    lines.push(`### ${p.name} (${p.period}, ${p.status})`, "", p.tagline, "");
    for (const h of p.highlights) lines.push(`- ${h.title}: ${stripMd(h.body)}`);
    lines.push(`- Stack: ${p.stack.flatMap((s) => s.items).join(", ")}`);
    lines.push(`- Links: ${p.links.map((l) => l.url).join(", ")}`, "");
  }

  lines.push("## Education", "");
  for (const e of education) lines.push(`- ${e.school}: ${e.degree} (${e.start}–${e.end})`);
  lines.push("", "## Publications, awards & certifications", "");
  for (const p of publications) lines.push(`- ${p.title}. ${p.venue}${p.year ? `, ${p.year}` : ""}.${p.links ? " " + p.links[0].url : ""}`);
  for (const a of awards) lines.push(`- ${a.title} (${a.date})`);
  for (const c of certifications) lines.push(`- ${c.name} (${c.date}) ${c.url}`);
  lines.push("", "## Skills", "");
  for (const s of skills) lines.push(`- ${s.group}: ${s.items.join(", ")}`);

  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
