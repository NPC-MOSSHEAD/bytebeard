"use client";

import { useState } from "react";
import { site } from "@/content/site";

type ContactLink = {
  label: string;
  title: string;
  href: string;
  handle?: string;
};

/** Public social profiles only. Private contact details are never hardcoded. */
export default function ContactOptions() {
  const [copied, setCopied] = useState(false);
  const links: ContactLink[] = [
    { label: "FIND THE FRAMES", title: "INSTAGRAM", href: site.instagram, handle: "@bytebeard_" },
    { label: "THE CASUAL SIDE", title: "SNAPCHAT", href: site.snapchat, handle: "byte_beard" },
    { label: "SEE THE CODE", title: "GITHUB", href: site.github, handle: "NPC-MOSSHEAD" },
  ];

  // This row appears only after the owner sets a dedicated, public business link.
  if (site.whatsappBusinessUrl) {
    links.push({ label: "BUSINESS INQUIRIES", title: "WHATSAPP", href: site.whatsappBusinessUrl });
  }

  return (
    <div className="contact-options" aria-label="Contact and social links">
      {links.map((link, i) => (
        <a href={link.href} key={link.title} target="_blank" rel="noopener noreferrer">
          <span>{String(i + 1).padStart(2, "0")} / {link.label}</span>
          <strong>{link.title}</strong>
          <span className="option-arr" aria-hidden="true">↗</span>
          {link.handle && <small className="contact-handle">{link.handle}</small>}
        </a>
      ))}
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(site.github);
            setCopied(true);
          } catch {
            setCopied(false);
          }
        }}
      >
        <span>{String(links.length + 1).padStart(2, "0")} / TAKE IT WITH YOU</span>
        <strong>{copied ? "COPIED!" : "COPY MY GITHUB"}</strong>
        <span className="option-arr" aria-hidden="true">{copied ? "✓" : "↗"}</span>
      </button>
      <p className="contact-note">FOR COLLABORATIONS, SEND ME A DM ON INSTAGRAM.</p>
    </div>
  );
}
