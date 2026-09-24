import type { Metadata } from "next";
import Link from "next/link";
import Starburst from "@/components/Starburst";
import TypeToy from "@/components/TypeToy";
export const metadata: Metadata = { title: "Playground", description: "Little interactive experiments and sketches by bytebeard_." };
export default function PlaygroundPage() {return <main className="page-main playground-page paper-section"><div className="page-eyebrow"><span>THE EXPERIMENT DRAWER / 004</span><span>TOUCH THINGS. THEY REACT.</span></div><section className="play-head"><span className="eyebrow">SOMETIMES THE POINT IS JUST TO PLAY.</span><h1>THE<br/><em>PLAY</em>GROUND<span>.</span></h1><Starburst className="star"/><p>No client brief. No imaginary award. Just messing around to see what happens.</p></section><TypeToy/><div className="play-note"><div><span className="eyebrow">ANOTHER CORNER OF THE INTERNET</span><h2 className="hand-title">Wanna see<br/><em>more stuff?</em></h2></div><p>More sketches will show up as I make them. In the meantime, the project archive has real sites and a few experiments I learned from.</p><Link href="/work" className="pill-link">TO THE PROJECTS ↗</Link></div></main>; }
