// Post-build checks: fail loudly if something SEO-critical is missing.
import fs from "node:fs";
import path from "node:path";

const dist = "dist";
const htmlFiles = [];
const walk = (dir) => {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (p.endsWith(".html")) htmlFiles.push(p);
  }
};
walk(dist);

const problems = [];
const titles = new Map();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(dist, file).replaceAll("\\", "/");
  if (rel === "achievements.html" || rel === "cv.html") continue; // redirect stubs
  const noindex = html.includes("noindex");
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) problems.push(`${rel}: missing <title>`);
  if (!desc) problems.push(`${rel}: missing meta description`);
  if (title && title.length > 70) problems.push(`${rel}: title is ${title.length} chars`);
  if (desc && !noindex && (desc.length < 70 || desc.length > 165)) problems.push(`${rel}: description is ${desc.length} chars`);
  if (!html.includes('rel="canonical"')) problems.push(`${rel}: missing canonical`);
  if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) problems.push(`${rel}: expected exactly one <h1>`);
  // A bare `alt` (empty, decorative) is valid; only a missing attribute is an error.
  if (/<img(?![^>]*\salt[\s=>])[^>]*>/.test(html)) problems.push(`${rel}: <img> without alt`);
  if (title) titles.set(title, [...(titles.get(title) ?? []), rel]);
}
for (const [t, files] of titles) if (files.length > 1) problems.push(`duplicate title "${t}": ${files.join(", ")}`);

for (const f of ["sitemap-index.xml", "robots.txt", "llms.txt", "og/home.png", "favicon.ico", "Alexis-Thomas-Resume.pdf"]) {
  if (!fs.existsSync(path.join(dist, f))) problems.push(`missing dist/${f}`);
}

// Image sitemap: attach each page's key image so the portrait and project
// visuals can surface in Google Images for name and project searches.
const SITE = "https://alexisthomas.fr";
const images = {
  [`${SITE}/`]: [`${SITE}/alexis-thomas.jpg`, `${SITE}/og/home.png`],
  [`${SITE}/resume`]: [`${SITE}/alexis-thomas.jpg`, `${SITE}/og/resume.png`],
};
for (const f of fs.readdirSync(path.join(dist, "og"))) {
  const slug = f.replace(/\.png$/, "");
  const page = ["home", "resume"].includes(slug) ? null : `${SITE}/${["projects", "research", "contact"].includes(slug) ? slug : "projects/" + slug}`;
  if (page) images[page] = [...(images[page] ?? []), `${SITE}/og/${f}`];
}
for (const f of fs.readdirSync(dist).filter((f) => /^sitemap-\d+\.xml$/.test(f))) {
  const p = path.join(dist, f);
  // Idempotent: drop any image entries from a previous run before adding.
  let xml = fs.readFileSync(p, "utf8").replace(/<image:image>[\s\S]*?<\/image:image>/g, "");
  let added = 0;
  xml = xml.replace(/<url><loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g, (m, loc, rest) => {
    const list = images[loc] ?? images[loc.replace(/\/$/, "")];
    if (!list) return m;
    added += list.length;
    return `<url><loc>${loc}</loc>${rest}${list.map((u) => `<image:image><image:loc>${u}</image:loc></image:image>`).join("")}</url>`;
  });
  fs.writeFileSync(p, xml);
  console.log(`postbuild: added ${added} images to ${f}`);
}

console.log(`postbuild: checked ${htmlFiles.length} HTML pages`);
if (problems.length) {
  console.error(problems.map((p) => "  ✗ " + p).join("\n"));
  process.exit(1);
}
console.log("postbuild: all SEO checks passed");
