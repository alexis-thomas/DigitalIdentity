// Build-time Open Graph images (1200×630 PNG) for every page, rendered with
// satori (JSX-like tree -> SVG) and rasterized with sharp. No runtime cost.
import type { APIRoute, GetStaticPaths } from "astro";
import fs from "node:fs/promises";
import path from "node:path";
// Pinned to satori 0.35.x: 0.36.0 crashes under Node ESM (references __dirname).
import satori from "satori";
import sharp from "sharp";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";

type Card = { kicker: string; title: string; subtitle: string; image?: string; imageShape?: "portrait" | "icon"; accent?: string };

const pages: Record<string, Card> = {
  home: {
    kicker: "Portfolio · Applied science & engineering",
    title: profile.name,
    subtitle: "Demand forecasting at Amazon scale, and AI products shipped end to end.",
    image: "src/assets/alexis.jpeg",
    imageShape: "portrait",
  },
  resume: { kicker: "Résumé", title: "Alexis Thomas", subtitle: "Applied Scientist II at Amazon · ex-SDE II · AWS Solutions Architect Professional · Mines Paris – PSL" },
  projects: { kicker: "Projects", title: "Things I've built", subtitle: "Prismo, Giftruly and Aura: AI-powered apps for iOS, Android and the web." },
  research: { kicker: "Research", title: "Research & recognition", subtitle: "DMLR publication · 3rd place, Smarter Mobility Data Challenge · AWS Solutions Architect Professional" },
  contact: { kicker: "Contact", title: "Say hello", subtitle: "Forecasting, ML systems, cloud architecture or products. Let's talk." },
};
for (const p of projects) {
  pages[p.slug] = {
    kicker: `Case study · ${p.status}`,
    title: p.name,
    subtitle: p.tagline,
    image: `src/assets/projects/${p.slug}/icon.png`,
    imageShape: "icon",
    accent: p.accent,
  };
}

export const getStaticPaths: GetStaticPaths = () => Object.keys(pages).map((slug) => ({ params: { slug } }));

const font = (p: string) => fs.readFile(path.resolve("node_modules", p));
const fontsPromise = Promise.all([
  font("@fontsource/archivo-narrow/files/archivo-narrow-latin-700-normal.woff"),
  font("@fontsource/source-serif-4/files/source-serif-4-latin-400-normal.woff"),
  font("@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff"),
]);

async function dataUri(file: string, w: number, h: number, gray = false) {
  let img = sharp(path.resolve(file)).resize(w, h, { fit: "cover", position: "attention" });
  if (gray) img = img.grayscale();
  const buf = await img.png().toBuffer();
  return `data:image/png;base64,${buf.toString("base64")}`;
}

// Tiny helper so the tree below reads like JSX.
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}) => ({
  type,
  props: { style, children, ...extra },
});

const INK = "#0e0f12";
const SIGNAL = "#f04a14";

export const GET: APIRoute = async ({ params }) => {
  const card = pages[params.slug as string];
  const [narrow, serif, mono] = await fontsPromise;
  const accent = card.accent ?? SIGNAL;
  const portrait = card.imageShape === "portrait";
  const img = card.image ? await dataUri(card.image, portrait ? 380 : 260, portrait ? 470 : 260, portrait) : null;

  const logo = h(
    "svg",
    { width: 40, height: 40 },
    [
      h("rect", {}, null, { width: 32, height: 32, fill: INK }),
      h("path", {}, null, { d: "M5 22 L10.5 16.5 L14.5 19.5 L18.5 12.5", fill: "none", stroke: "#fff", "stroke-width": 2.6 }),
      h("path", {}, null, { d: "M18.5 12.5 L27 7.5", fill: "none", stroke: SIGNAL, "stroke-width": 2.6, "stroke-dasharray": "2.6 2.6" }),
      h("rect", {}, null, { x: 16.4, y: 10.4, width: 4.2, height: 4.2, fill: SIGNAL }),
    ],
    { viewBox: "0 0 32 32" },
  );

  const titleSize = card.title.length > 16 ? 112 : card.title.length > 10 ? 150 : 184;

  const tree = h(
    "div",
    {
      width: 1200,
      height: 630,
      display: "flex",
      flexDirection: "column",
      padding: "48px 64px 44px",
      background: "#ffffff",
      backgroundImage: "linear-gradient(rgba(14,15,18,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,15,18,0.06) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      color: INK,
      fontFamily: "Plex Mono",
    },
    [
      // header row
      h("div", { display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 18, borderBottom: `4px solid ${INK}` }, [
        h("div", { display: "flex", alignItems: "center", gap: 14 }, [logo, h("div", { fontSize: 22, letterSpacing: 2 }, "ALEXISTHOMAS.FR")]),
        h("div", { fontSize: 20, letterSpacing: 2, color: accent }, card.kicker.toUpperCase()),
      ]),
      // body
      h("div", { display: "flex", flex: 1, alignItems: "center", gap: 48 }, [
        h("div", { display: "flex", flexDirection: "column", flex: 1 }, [
          h("div", { fontFamily: "Archivo Narrow", fontSize: titleSize, lineHeight: 0.86, textTransform: "uppercase", letterSpacing: -2, marginBottom: 26 }, card.title),
          h("div", { fontFamily: "Source Serif", fontSize: 34, lineHeight: 1.3, color: "#3b3e45", maxWidth: img ? 700 : 1000 }, card.subtitle),
        ]),
        img
          ? h("img", { width: portrait ? 300 : 220, height: portrait ? 370 : 220, border: `3px solid ${INK}`, borderRadius: portrait ? 0 : 48 }, null, { src: img })
          : null,
      ].filter(Boolean)),
      // footer row
      h("div", { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: `1.5px solid ${INK}`, fontSize: 19, letterSpacing: 1.5, color: "#6c7079" }, [
        h("div", { display: "flex", alignItems: "center", gap: 12 }, [h("div", { width: 14, height: 14, background: SIGNAL }), "APPLIED SCIENTIST II · AMAZON · LONDON"]),
        h("div", {}, "FORECASTING · ML · CLOUD · PRODUCT"),
      ]),
    ],
  );

  const svg = await satori(tree as any, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Archivo Narrow", data: narrow, weight: 700, style: "normal" },
      { name: "Source Serif", data: serif, weight: 400, style: "normal" },
      { name: "Plex Mono", data: mono, weight: 500, style: "normal" },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
