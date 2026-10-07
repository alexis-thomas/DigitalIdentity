const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2024-10" -> "Oct 2024" */
export function formatMonth(iso: string): string {
  const [y, m] = iso.split("-");
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}

export function formatRange(start: string, end?: string): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}

/** Human duration such as "2 yrs 1 mo", computed at build time. */
export function duration(start: string, end?: string): string {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(months / 12);
  const mo = months % 12;
  return [y ? `${y} yr${y > 1 ? "s" : ""}` : "", mo ? `${mo} mo${mo > 1 ? "s" : ""}` : ""].filter(Boolean).join(" ");
}

/** Minimal **bold** / *italic* markdown for content strings. Input is trusted (our own data). */
export function md(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export function stripMd(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
}
