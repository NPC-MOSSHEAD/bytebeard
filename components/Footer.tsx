import Link from "next/link";
import Starburst from "./Starburst";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <span>© {new Date().getFullYear()} BYTEBEARD_</span>
        <span>DESIGNED WITH CURIOSITY. DEPLOYED WITH PATIENCE.</span>
        <a href="#top" className="back-top">BACK TO TOP ↑</a>
      </div>
      <div className="footer-word"><span>KEEP</span><Starburst/><span>MAKING.</span></div>
      <div className="footer-bottom">
        <span>MADE ON THE INTERNET.</span>
        <nav aria-label="Footer navigation">
          <Link href="/work">WORK</Link>
          <Link href="/frames">FRAMES</Link>
          <Link href="/contact">CONTACT</Link>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
        </nav>
      </div>
    </footer>
  );
}
