import Image from "next/image";
import type { Frame } from "@/content/frames";

/** The gallery always uses bytebeard's real photos, never illustration stand-ins. */
export default function FrameArt({
  frame,
  priority = false,
}: {
  frame: Frame;
  priority?: boolean;
}) {
  return (
    <div className={`frame-art frame-photo frame-${frame.orientation}`}>
      <Image
        src={frame.src}
        alt={frame.alt}
        width={frame.width}
        height={frame.height}
        priority={priority}
        sizes="(max-width: 700px) 85vw, (max-width: 1100px) 44vw, 46vw"
        className="frame-photo-image"
      />
    </div>
  );
}
