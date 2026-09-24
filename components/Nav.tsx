"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Starburst from "./Starburst";
const links = [
  ["/", "HOME"],
  ["/work", "WORK"],
  ["/about", "ABOUT"],
  ["/frames", "FRAMES"],
  ["/playground", "PLAYGROUND"],
  ["/contact", "CONTACT"]
] as const;
export default function Nav() {
 const pathname = usePathname();
 const [open, setOpen] = useState(false);
 useEffect(() => { setOpen(false); }, [pathname]);
 useEffect(() => {
  const onKey = (event: KeyboardEvent) => { if(event.key === "Escape") setOpen(false); };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
 }, []);
 useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";
  return () => { document.body.style.overflow = ""; };
 }, [open]);
 return <>
  <header className="site-header" id="top">
   <Link className="brand" href="/" aria-label="Bytebeard home" data-cursor="OPEN"><span className="brand-mark">b<span>.</span></span><span>bytebeard_<small>CREATIVE WORKSPACE</small></span></Link>
   <div className="nav-center" aria-hidden="true"><span className="little-dot"/> A WORK IN PROGRESS, ON PURPOSE <span className="little-dot"/></div>
   <div className="header-right"><a className="desktop-contact" href="/contact">HAVE AN IDEA? <span>↗</span></a><button type="button" className={`menu-button ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-menu"><span>{open ? "CLOSE" : "MENU"}</span><i/><i/></button></div>
  </header>
  <div className={`menu-panel ${open ? "is-open" : ""}`} id="site-menu" aria-hidden={!open}>
   <Starburst className="menu-star"/>
   <div className="menu-inner"><span className="eyebrow">THE INDEX / 001</span><nav aria-label="Primary navigation">{links.map(([href, label], index) => <Link key={href} href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} aria-current={pathname === href ? "page" : undefined}><small>0{index + 1}</small>{label}<span aria-hidden="true">↗</span></Link>)}</nav><div className="menu-foot"><span>MADE TO PLAY. BUILT TO LEARN.</span><span>SCROLL, CLICK, GET LOST.</span></div></div>
  </div>
 </>;
}
