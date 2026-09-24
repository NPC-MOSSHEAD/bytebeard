import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import Starburst from "@/components/Starburst";
export const metadata: Metadata = { title: "Work", description: "Experiments, websites and creative-coding studies from bytebeard_." };
export default function WorkPage() { return <main className="page-main work-page paper-section"><div className="page-eyebrow"><span>INDEX / PROJECTS</span><span>001 — 004</span></div><div className="work-page-header"><h1>GOOD<br/><em>STUFF.</em></h1><div><Starburst className="star"/><p>Things I&apos;ve actually made, practiced or helped ship. Different styles. Same curiosity.</p></div></div><ProjectList/><div className="postscript">MORE COMING WHEN I ACTUALLY BUILD IT. <span>✳</span></div></main>; }
