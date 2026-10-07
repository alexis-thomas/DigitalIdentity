// Deploy dist/ to S3 + CloudFront.
//
// Astro emits /resume.html; S3 (REST origin) cannot map /resume -> /resume.html,
// so every page except index.html is ALSO uploaded under its extensionless key
// (e.g. "resume", "projects/prismo") with Content-Type text/html. Clean URLs
// then resolve directly, without CloudFront Functions or error-page tricks.
//
// Usage: npm run deploy        (or: npm run prod  to build + deploy)
// Env:   AWS credentials (env vars or AWS_PROFILE; falls back to profile "Elial"),
//        S3_BUCKET (default "alexisthomas"),
//        CF_DISTRIBUTION_ID (default "E2XOW6SZZECWR1"), DRY_RUN=1 to print only.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

// Use explicit env credentials if present, otherwise a named profile.
const profileArgs = process.env.AWS_ACCESS_KEY_ID ? [] : ["--profile", process.env.AWS_PROFILE || "Elial"];
const bucket = process.env.S3_BUCKET ?? "alexisthomas";
const distribution = process.env.CF_DISTRIBUTION_ID ?? "E2XOW6SZZECWR1";
const dry = process.env.DRY_RUN === "1";

const aws = (...args) => {
  const full = [...args, ...profileArgs];
  console.log("$ aws " + full.join(" "));
  if (!dry) execFileSync("aws", full, { stdio: "inherit" });
};

if (!fs.existsSync("dist/index.html")) {
  console.error("dist/ is missing. Run `npm run build` first.");
  process.exit(1);
}

// 1. Fingerprinted assets: cache for a year.
aws("s3", "sync", "dist/_astro", `s3://${bucket}/_astro`, "--cache-control", "public,max-age=31536000,immutable");

// 2. Everything else except HTML: cache for a day.
aws("s3", "sync", "dist", `s3://${bucket}`, "--exclude", "_astro/*", "--exclude", "*.html", "--cache-control", "public,max-age=86400");

// 3. HTML: short cache so content updates show up quickly.
const html = [];
const walk = (dir) => {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (p.endsWith(".html")) html.push(path.relative("dist", p).replaceAll("\\", "/"));
  }
};
walk("dist");
const htmlArgs = ["--content-type", "text/html; charset=utf-8", "--cache-control", "public,max-age=300,must-revalidate"];
for (const rel of html) {
  aws("s3", "cp", `dist/${rel}`, `s3://${bucket}/${rel}`, ...htmlArgs);
  if (rel !== "index.html") aws("s3", "cp", `dist/${rel}`, `s3://${bucket}/${rel.replace(/\.html$/, "")}`, ...htmlArgs);
}

// 4. Invalidate CloudFront.
aws("cloudfront", "create-invalidation", "--distribution-id", distribution, "--paths", "/*");
console.log(dry ? "Dry run complete." : "Deployed.");
