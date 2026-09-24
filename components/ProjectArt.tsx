import type { Project } from "@/content/projects";
export default function ProjectArt({ project, large = false }: { project: Project; large?: boolean }) {
 return <div className={`project-art project-art-${project.shape} ${large ? "project-art-large" : ""}`} aria-hidden="true">
  {project.shape === "nexa" && <div className="nexa-art"><span className="nexa-art-top">NEXA® <small>CREATIVE TECHNOLOGY</small></span><div className="nexa-orb"><span/><span/><span/><span/><span/></div><strong>WE BUILD<br/>WHAT&apos;S <em>NEXT.</em></strong><span className="nexa-art-bottom">STRATEGY / SYSTEMS / EXPERIENCES</span></div>}
  {project.shape === "food" && <div className="food-art"><span className="food-sticker">YUM<br/>YUM!</span><span className="food-plate"><span className="food-pasta"><i/><i/><i/><i/><i/></span></span><strong>FOOD<br/>SANJI<span>.</span></strong><small>GOOD FOOD, BETTER MOOD ↗</small></div>}
  {project.shape === "world" && <div className="world-art"><span className="world-art-label">A DIFFERENT DIMENSION / 003</span><span className="world-sun"/><span className="world-mountain left"/><span className="world-mountain right"/><strong>META<br/>VERSUS</strong><span className="world-bottom">IMAGINARY WORLD / INTERFACE STUDY</span></div>}
  {project.shape === "thunder" && <div className="thunder-art"><span className="thunder-noise"/><svg viewBox="0 0 300 320" preserveAspectRatio="none"><path d="m179 3-65 124h58L76 309l142-179h-73L179 3Z" fill="#f3f0dd"/><path d="m162 35-37 92h40l-70 153 114-140h-73L162 35Z" fill="#a8cced"/></svg><strong>THUNDER<br/>TEXT</strong><span>JS / CANVAS / INTERACTION</span></div>}
 </div>;
}
