import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../../components/Reveal";
import "./portfolio.css";

export const metadata = { title: "Selected Work", description: "Selected Northstar projects across brand, digital experiences, content and campaigns." };
export default function PortfolioPage() {
  return <div className="portfolio-page page-shell"><section className="portfolio-hero page-gutter"><div className="portfolio-hero-inner mx-auto"><Reveal><div className="eyebrow">GOOD WORK, GOOD PEOPLE <span className="eyebrow-line" /> SELECTED WORK</div><h1>A few things we<br /><span className="gradient-text">put into the world.</span></h1><p>Every brief is a chance to make something that connects, shifts perspective or just makes someone&apos;s day a little better.</p></Reveal><div className="portfolio-orb"><i>✳</i><span /></div></div></section>
    <section className="portfolio-gallery page-gutter"><div className="portfolio-grid mx-auto">{projects.map((project, i) => <Reveal key={project.id} delay={i * .06}><article className={`portfolio-card portfolio-${project.visual}`} id={project.id}><div className="portfolio-art"><div className="portfolio-art-copy"><span className="portfolio-art-kicker">NORTHSTAR / {project.year}</span><b>{project.name}</b><small>{project.category}</small></div><span className="portfolio-art-shape">✳</span><span className="portfolio-art-index">0{i + 1}</span></div><div className="portfolio-card-copy"><div><span className="portfolio-category">{project.category}</span><h2>{project.name}</h2><p>{project.description}</p></div><Link href={`#${project.id}-story`} aria-label={`Read about ${project.name}`}><ArrowUpRight size={18} /></Link></div><div className="portfolio-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="portfolio-story" id={`${project.id}-story`}><span>THE OUTCOME</span><p>{project.result}</p></div></article></Reveal>)}</div></section>
    <section className="portfolio-cta page-gutter"><Reveal className="portfolio-cta-inner mx-auto"><span className="eyebrow">YOUR STORY COULD BE NEXT</span><h2>Let&apos;s make something<br /><span className="gradient-text">worth sharing.</span></h2><Link className="button-primary" href="/contact">Start a project <ArrowUpRight size={15} /></Link></Reveal></section>
  </div>;
}
