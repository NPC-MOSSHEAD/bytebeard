import Link from "next/link";
import { projects } from "@/content/projects";
import ProjectArt from "./ProjectArt";
export default function ProjectList({ limit = projects.length }: { limit?: number }) {return <div className="project-list">{projects.slice(0, limit).map((project) => <Link className="project-row" href={`/work/${project.slug}`} data-cursor="VIEW" key={project.slug} data-reveal><span className="project-row-no">/{project.number}</span><div className="project-row-visual"><ProjectArt project={project}/></div><div className="project-row-main"><span className="project-row-category">{project.category}</span><h3>{project.title}</h3><p>{project.strap}</p></div><div className="project-row-side"><span>{project.year}</span><span className="round-arrow">↗</span></div></Link>)}</div>}
