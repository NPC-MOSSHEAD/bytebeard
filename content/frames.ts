/** Real, user-provided photographs. Images are optimized for the web and metadata-stripped. */
export type Frame = {
  number: string;
  name: string;
  detail: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  orientation: "portrait" | "landscape";
};

export const frames: Frame[] = [
  {
    number: "01",
    name: "BETWEEN CLOUDS",
    detail: "SKY STUDY",
    src: "/images/between-clouds.webp",
    alt: "Sunlit billowing clouds opening into a deep blue sky over a leafy garden",
    width: 941,
    height: 1672,
    orientation: "portrait",
  },
  {
    number: "02",
    name: "AFTER THE RAIN",
    detail: "RAIN / STREETS",
    src: "/images/after-the-rain.webp",
    alt: "A wet, reflective street beside flowering bougainvillea and a white building at dusk",
    width: 940,
    height: 1672,
    orientation: "portrait",
  },
  {
    number: "03",
    name: "DUSK AT THE BRIDGE",
    detail: "SUNSET / REFLECTION",
    src: "/images/dusk-at-the-bridge.webp",
    alt: "Pink-orange sunset above a footbridge with its reflection in dark water",
    width: 1672,
    height: 941,
    orientation: "landscape",
  },
  {
    number: "04",
    name: "A ROOM IN GOLD",
    detail: "INTERIORS / LIGHT",
    src: "/images/a-room-in-gold.webp",
    alt: "Warm late-afternoon sunlight pouring through a doorway onto an armchair and tiled floor",
    width: 1152,
    height: 1536,
    orientation: "portrait",
  },
];
