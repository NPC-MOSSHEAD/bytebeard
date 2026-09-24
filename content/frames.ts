export type Frame = { number: string; name: string; detail: string; illustration: "sky" | "walk" | "flower" | "glow"; src?: string };
// Replace each src with your REAL photographs after adding them to /public/images/.
export const frames: Frame[] = [
  { number: "01", name: "BETWEEN CLOUDS", detail: "SKY / PLACEHOLDER ART", illustration: "sky" },
  { number: "02", name: "AFTER THE RAIN", detail: "EMPTY STREETS / PLACEHOLDER ART", illustration: "walk" },
  { number: "03", name: "ROOTS & THINGS", detail: "NATURE / PLACEHOLDER ART", illustration: "flower" },
  { number: "04", name: "THE LAST LIGHT", detail: "LIGHT / PLACEHOLDER ART", illustration: "glow" },
];
