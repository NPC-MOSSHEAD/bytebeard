"use client";
import { useEffect, useRef } from "react";
export default function Cursor() {
 const dot = useRef<HTMLDivElement>(null);
 const ring = useRef<HTMLDivElement>(null);
 useEffect(() => {
  if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
  let x = -100, y = -100, rx = -100, ry = -100, id = 0;
  const move = (event: MouseEvent) => {
   x = event.clientX; y = event.clientY;
   const el = event.target instanceof Element ? event.target.closest("a, button, [data-cursor]") : null;
   const label = el?.getAttribute("data-cursor") || (el ? "↗" : "");
   if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
   if (ring.current) { ring.current.dataset.active = el ? "true" : "false"; ring.current.textContent = label; }
  };
  const frame = () => {
   rx += (x-rx) * .17; ry += (y-ry) * .17;
   if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
   id = requestAnimationFrame(frame);
  };
  const hide = () => { if(dot.current) dot.current.style.opacity = "0"; if(ring.current) ring.current.style.opacity = "0"; };
  const show = () => { if(dot.current) dot.current.style.opacity = "1"; if(ring.current) ring.current.style.opacity = "1"; };
  window.addEventListener("mousemove", move); window.addEventListener("mouseout", hide); window.addEventListener("mouseover", show); id = requestAnimationFrame(frame);
  return () => { window.removeEventListener("mousemove", move);window.removeEventListener("mouseout", hide);window.removeEventListener("mouseover", show);cancelAnimationFrame(id); };
 }, []);
 return <><div ref={dot} className="cursor-dot" aria-hidden="true"/><div ref={ring} className="cursor-ring" aria-hidden="true"/></>;
}
