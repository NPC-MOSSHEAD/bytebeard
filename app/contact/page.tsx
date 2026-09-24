import type { Metadata } from "next";
import Starburst from "@/components/Starburst";
import ContactOptions from "@/components/ContactOptions";
export const metadata: Metadata = { title: "Contact", description: "Find bytebeard_ on GitHub and start a creative conversation." };
export default function ContactPage() {return <main className="page-main contact-page paper-section"><div className="page-eyebrow"><span>INCOMING MESSAGE / 005</span><span>THE INTERNET IS A SMALL PLACE</span></div><section className="contact-hero"><Starburst className="star contact-star"/><span className="eyebrow">GOT SOMETHING WEIRD IN MIND?</span><h1>GO ON.<br/><em>SAY HEY.</em></h1><p>A project idea? A bug? A photo you think I&apos;d like? I&apos;m usually building something and happy to talk about interesting stuff.</p><ContactOptions/></section><div className="contact-end"><span>NO CORPORATE FORMS.<br/>JUST PEOPLE AND IDEAS.</span><span>BYTEBEARD_ / ONLINE SOMEWHERE ↗</span></div></main>; }
