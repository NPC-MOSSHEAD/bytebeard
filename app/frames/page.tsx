import type { Metadata } from "next";
import { frames } from "@/content/frames";
import FrameArt from "@/components/FrameArt";
import Starburst from "@/components/Starburst";

export const metadata: Metadata = {
  title: "Frames",
  description: "Original photography by bytebeard_: light, clouds, rain and unplanned moments.",
};

export default function FramesPage() {
  return (
    <main className="page-main frames-page paper-section">
      <div className="page-eyebrow">
        <span>VISUAL DIARY / 003</span>
        <span>POINT AND LOOK AGAIN</span>
      </div>
      <div className="frames-head">
        <span className="eyebrow">NOT EVERYTHING NEEDS CODE.</span>
        <h1>TAKE A<br /><em>SECOND</em><span>.</span></h1>
        <Starburst className="star" />
        <p>Clouds. Streets. Little accidents of light. All photographed by me, all worth a second look.</p>
      </div>
      <div className="frames-honesty">
        <span>SELECTED PHOTOGRAPHY BY BYTEBEARD_</span>
        <span>FOUR FRAMES / ONE WAY OF SEEING</span>
      </div>
      <div className="frame-grid">
        {frames.map((frame, i) => (
          <article
            className={`gallery-photo gallery-photo-${i + 1} gallery-photo--${frame.orientation}`}
            key={frame.number}
            data-reveal
          >
            <div className="gallery-mat">
              <FrameArt frame={frame} priority={i === 0} />
            </div>
            <div className="gallery-caption">
              <span>{frame.number} / {frame.name}</span>
              <span>{frame.detail}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="frames-end">
        <span>THE WORLD DOESN&apos;T POSE.<br />THAT&apos;S THE FUN PART.</span>
        <Starburst className="star" />
      </div>
    </main>
  );
}
