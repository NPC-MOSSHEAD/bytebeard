export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  strap: string;
  overview: string;
  note: string;
  stack: string[];
  external?: string;
  shape: "nexa" | "food" | "world" | "thunder";
  theme: "dark" | "peach" | "mint" | "blue";
};

// Real projects and clearly named experiments. No fake client counts or fake results.
export const projects: Project[] = [
  {
    slug: "nexa",
    number: "01",
    title: "NEXA",
    category: "CREATIVE TECH / AI-ASSISTED BUILD",
    year: "2026",
    strap: "A website with a mind of its own.",
    overview: "A cinematic agency-site concept with experimental motion and a strong digital identity. I shaped the direction, worked with AI-assisted code, and shipped the site online.",
    note: "A collaborative experiment in ambitious web design, debugging, Git and deployment. Not presented as solo-written engineering.",
    stack: ["Next.js", "TypeScript", "GSAP", "Creative direction", "Vercel"],
    external: "https://nexa-beta-five.vercel.app/",
    shape: "nexa",
    theme: "dark",
  },
  {
    slug: "food-sanji",
    number: "02",
    title: "FOOD SANJI",
    category: "FRONT-END / EXPERIMENT",
    year: "2025",
    strap: "A little flavor for the browser.",
    overview: "A playful restaurant-inspired front-end built as a hands-on exercise in layout, interaction and figuring things out one line at a time.",
    note: "Personal practice project, not a live food-ordering business.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive layout"],
    external: "https://food-sanji.netlify.app/",
    shape: "food",
    theme: "peach",
  },
  {
    slug: "metaversus",
    number: "03",
    title: "METAVERSUS",
    category: "INTERFACE STUDY / FRONT-END",
    year: "2025",
    strap: "An exercise in imaginary worlds.",
    overview: "A multi-section metaverse-themed website exercise exploring dramatic layouts, imagery and front-end composition.",
    note: "An interface-building study. This is not claimed as an original metaverse product or original brand concept.",
    stack: ["HTML", "CSS", "UI implementation"],
    external: "https://hello-i-m-me.netlify.app/",
    shape: "world",
    theme: "mint",
  },
  {
    slug: "thunder-text",
    number: "04",
    title: "THUNDER TEXT",
    category: "JAVASCRIPT / CREATIVE CODING STUDY",
    year: "2026",
    strap: "Words, with a little electricity.",
    overview: "A typography-and-canvas coding exercise made to study expressive interaction and learn from an existing creative-coding example.",
    note: "Learning experiment based on an attributed example, not an original invention. A small interactive homage lives in the playground.",
    stack: ["JavaScript", "Canvas", "Animation", "Learning exercise"],
    shape: "thunder",
    theme: "blue",
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
