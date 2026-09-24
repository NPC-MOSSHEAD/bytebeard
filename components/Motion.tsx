"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/** Intentional, limited reveals. Content remains visible if JS is disabled. */
export default function Motion() {
 const pathname = usePathname();
 useEffect(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.registerPlugin(ScrollTrigger);
  const id = requestAnimationFrame(() => {
   gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.fromTo(element, { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 90%", once: true } });
   });
   gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((element) => {
    gsap.fromTo(element, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: element.closest("section") || element, scrub: .9, start: "top bottom", end: "bottom top" } });
   });
   ScrollTrigger.refresh();
  });
  return () => { cancelAnimationFrame(id); ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); gsap.killTweensOf("[data-reveal], [data-drift]"); };
 }, [pathname]);
 return null;
}
