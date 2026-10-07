// One-off generator for raster icons and the public portrait used in JSON-LD.
// Run with `node scripts/generate-static-assets.mjs`; outputs are committed.
import sharp from "sharp";

const mark = (pad = 0) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} ${-pad} ${32 + pad * 2} ${32 + pad * 2}">
  <rect x="${-pad}" y="${-pad}" width="${32 + pad * 2}" height="${32 + pad * 2}" fill="#0e0f12"/>
  <path d="M5 22 L10.5 16.5 L14.5 19.5 L18.5 12.5" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="square"/>
  <path d="M18.5 12.5 L27 7.5" fill="none" stroke="#f04a14" stroke-width="2.6" stroke-dasharray="2.6 2.6"/>
  <rect x="16.4" y="10.4" width="4.2" height="4.2" fill="#f04a14"/>
</svg>`;
const rounded = mark(0);

const out = async (svg, size, file) => {
  await sharp(Buffer.from(svg), { density: 2000 }).resize(size, size).png({ compressionLevel: 9 }).toFile(`public/${file}`);
  console.log("wrote", file);
};

await out(rounded, 32, "favicon-32.png");
// Apple and maskable icons need a full-bleed square with safe padding.
await out(mark(4), 180, "apple-touch-icon.png");
await out(mark(4), 192, "icon-192.png");
await out(mark(4), 512, "icon-512.png");

await sharp("src/assets/alexis.jpeg").resize(800, 800).jpeg({ quality: 82, mozjpeg: true }).toFile("public/alexis-thomas.jpg");
console.log("wrote alexis-thomas.jpg");

// favicon.ico: a single 48px PNG wrapped in an ICO container (supported by every browser).
{
  const png = await sharp(Buffer.from(rounded), { density: 2000 }).resize(48, 48).png().toBuffer();
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  header.writeUInt8(48, 6); // width
  header.writeUInt8(48, 7); // height
  header.writeUInt8(0, 8); // palette
  header.writeUInt8(0, 9); // reserved
  header.writeUInt16LE(1, 10); // planes
  header.writeUInt16LE(32, 12); // bpp
  header.writeUInt32LE(png.length, 14); // size
  header.writeUInt32LE(22, 18); // offset
  const { writeFile } = await import("node:fs/promises");
  await writeFile("public/favicon.ico", Buffer.concat([header, png]));
  console.log("wrote favicon.ico");
}
