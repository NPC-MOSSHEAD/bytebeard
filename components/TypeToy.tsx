"use client";
import { useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";
const colors = ["#a82b22", "#143b37", "#383250", "#8d3e26"];
export default function TypeToy() {
 const [input, setInput] = useState("MAKE NOISE");
 const [index, setIndex] = useState(0);
 const [jumbled, setJumbled] = useState(false);
 const letters = useMemo(() => input.split("").slice(0, 16), [input]);
 const zone = useRef<HTMLDivElement>(null);
 const interact = (event: PointerEvent<HTMLDivElement>) => {
  if (!zone.current || event.pointerType !== "mouse") return;
  const {left,top,width,height} = zone.current.getBoundingClientRect();
  zone.current.style.setProperty("--px", `${((event.clientX-left)/width-.5)*16}deg`);
  zone.current.style.setProperty("--py", `${((event.clientY-top)/height-.5)*12}deg`);
 };
 return <div className="type-toy"><div className="toy-toolbar"><span>TYPE EXPERIMENT / 001</span><span>MOVE YOUR POINTER / TYPE / REMIX</span></div><div ref={zone} className={`toy-zone ${jumbled ? "toy-jumbled" : ""}`} onPointerMove={interact} style={{"--toy-color": colors[index]} as CSSProperties} aria-live="polite">{letters.map((letter,i) => <span key={`${i}-${letter}`} style={{"--n": i} as CSSProperties}>{letter === " " ? "\u00a0" : letter}</span>)}</div><div className="toy-controls"><label htmlFor="toy-input">YOUR MESSAGE <input id="toy-input" maxLength={16} value={input} onChange={(event) => setInput(event.target.value.toUpperCase())} placeholder="TYPE SOMETHING"/></label><button onClick={() => setJumbled(!jumbled)} type="button">{jumbled ? "PUT IT BACK" : "MAKE A MESS"} ↗</button><button onClick={() => setIndex((index+1)%colors.length)} type="button">CHANGE INK ↗</button></div></div>;
}
