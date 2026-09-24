import { site } from "@/content/site";
export default function Portrait({ className = "" }: { className?: string }) {
  return <div className={`portrait ${className}`}>
    {/* Personal photo, if provided, must have its own transparent background. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="portrait-figure" src={site.portraitImage || "/illustrations/portrait-sticker.svg"} alt={site.portraitImage ? "Bytebeard's portrait" : "Original illustrated placeholder: developer wearing a cap and sunglasses, at a laptop"}/>
  </div>;
}
