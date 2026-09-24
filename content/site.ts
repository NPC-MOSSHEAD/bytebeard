/** Public details reused throughout the portfolio. Keep private info out of source control. */
export const site = {
  name: "bytebeard_",
  title: "bytebeard_ | Creative developer & curious maker",
  tagline: "I design, code and collect interesting light.",
  statement: "A student who builds for the web, collects strange-looking skies, and dreams of making game worlds someday.",
  availability: "OPEN TO CREATIVE CONVERSATIONS",
  github: "https://github.com/NPC-MOSSHEAD",
  instagram: "https://www.instagram.com/bytebeard_/",
  snapchat: "https://www.snapchat.com/add/byte_beard",
  // Optional: only configure this if you have a DEDICATED, publicly shareable business contact.
  // Example .env.local: NEXT_PUBLIC_WHATSAPP_BUSINESS_URL=https://wa.me/<business-number>
  // .env.local is ignored by Git. Never add a private personal number to a public repository.
  whatsappBusinessUrl: (() => {
    const link = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_URL?.trim() ?? "";
    return /^https:\/\/(?:wa\.me|api\.whatsapp\.com)\//i.test(link) ? link : "";
  })(),
  // For your own transparent cutout, save public/images/portrait.png and set the path below.
  portraitImage: "",
  photoCredits: "Original photography by bytebeard_",
} as const;
