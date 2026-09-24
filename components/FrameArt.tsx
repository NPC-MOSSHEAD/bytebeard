import type { Frame } from "@/content/frames";
export default function FrameArt({ frame }: { frame: Frame }) {
 return <div className={`frame-art frame-${frame.illustration}`}>
  {frame.src ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={frame.src} alt={frame.name} loading="lazy"/> : <>
   <span className="art-grain" aria-hidden="true"/>
   {frame.illustration === "sky" && <><span className="sky-sun"/><span className="sky-cloud one"/><span className="sky-cloud two"/><span className="sky-cloud three"/><span className="sky-wire"/></>}
   {frame.illustration === "walk" && <><span className="walk-sun"/><span className="walk-road"/><span className="walk-building one"/><span className="walk-building two"/><span className="walk-wire"/></>}
   {frame.illustration === "flower" && <><span className="flower-stem"/><span className="flower-head"><i/><i/><i/><i/><i/><i/><i/><i/></span><span className="flower-small"/></>}
   {frame.illustration === "glow" && <><span className="glow-disc"/><span className="glow-arch one"/><span className="glow-arch two"/><span className="glow-ground"/></>}
  </>}
  {!frame.src && <span className="art-label">ILLUSTRATED PLACEHOLDER</span>}
 </div>;
}
