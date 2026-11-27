import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Quote, Sparkles } from "lucide-react";
import { services } from "../data/services";
import Reveal from "../components/Reveal";
import "./home.css";

const projects = [
  { title: "Objects of calm", type: "E-commerce · Brand world", className: "project-object", label: "A softer kind of ritual" },
  { title: "Forma House", type: "Digital flagship · Strategy", className: "project-forma", label: "Space to feel more" },
  { title: "Goodside", type: "Campaign · Content", className: "project-goodside", label: "Find your sunny side" }
];
export default function Home() {
  return <div className="home-page">
    <section className="home-hero section-pad">
      <div className="hero-glow" /><div className="hero-grid" />
      <div className="hero-content mx-auto">
        <Reveal><div className="eyebrow"><span className="eyebrow-dot" /> Independent creative studio <span className="eyebrow-line" /> EST. 2018</div></Reveal>
        <Reveal delay={.08}><h1>We build digital experiences that <em className="hero-emphasis">move brands forward.</em></h1></Reveal>
        <Reveal delay={.16}><p className="hero-copy">Strategy, design and culture-shaping creativity for ambitious brands ready for their next chapter.</p></Reveal>
        <Reveal delay={.22}><div className="hero-actions"><Link className="button-primary" href="/contact">Let&apos;s work together <ArrowUpRight size={16} /></Link><Link className="button-quiet" href="/portfolio">Explore our work <ArrowRight size={16} /></Link></div></Reveal>
        <div className="hero-art" aria-label="Abstract luminous digital sculpture">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-ring ring-one" /><div className="hero-ring ring-two" /><div className="hero-star"><Sparkles size={42} strokeWidth={1.2} /></div>
          <div className="float-note float-note-top glass"><span className="note-icon"><Asterisk size={17} /></span><span><b>Made with intention</b><small>Design with a point of view</small></span></div>
          <div className="float-note float-note-bottom glass"><span className="note-stat">+38%</span><span><b>Average lift in engagement</b><small>Across our latest launches</small></span></div>
          <div className="art-caption">A little more feeling.<br />A lot more meaning.</div>
        </div>
        <div className="hero-scroll"><span>Scroll to explore</span><ArrowDown size={13} /></div>
      </div>
    </section>

    <section className="home-trust section-pad"><div className="trust-inner mx-auto"><p>GOOD COMPANY, GOOD WORK</p><div className="trust-logos"><span>morrow<span className="logo-dot">.</span></span><span className="logo-serif">FORMA</span><span>goodside<span className="logo-sun"><Sparkles size={13} /></span></span><span className="logo-spaced">NŌRTH / STUDIO</span><span className="logo-serif">SUNDAY<br />STANDARD</span></div></div></section>

    <section className="home-services section-pad"><div className="section-head mx-auto"><Reveal><div className="eyebrow">WHAT WE DO <span className="eyebrow-line" /> 01—04</div><h2>One studio.<br /><span className="text-muted">Every side of your next.</span></h2></Reveal><Reveal delay={.1}><p>Good work happens when all the pieces talk to each other. We bring yours into focus, then make them move.</p></Reveal></div>
      <div className="service-list mx-auto">{services.map((item, i) => { const Icon = item.icon; return <Reveal key={item.slug} delay={i * .07}><Link className="service-row" href="/services"><span className="service-number">{item.number}</span><span className={`service-icon accent-${item.accent}`}><Icon size={19} strokeWidth={1.6} /></span><span className="service-title">{item.title}</span><span className="service-descriptor">{item.deliverables[0]} <i>·</i> {item.deliverables[1]}</span><ArrowUpRight className="service-arrow" size={19} /></Link></Reveal>; })}
      </div><div className="section-link mx-auto"><Link href="/services">Explore all services <ArrowRight size={15} /></Link></div>
    </section>

    <section className="home-work section-pad"><div className="section-head work-head mx-auto"><Reveal><div className="eyebrow">A FEW GOOD THINGS <span className="eyebrow-line" /> SELECTED WORK</div><h2>Built to make<br /><span className="text-muted">you look twice.</span></h2></Reveal><Reveal><Link className="button-outline" href="/portfolio">View all projects <ArrowUpRight size={15} /></Link></Reveal></div>
      <div className="project-grid mx-auto">{projects.map((p, i) => <Reveal key={p.title} delay={i * .09}><Link className={`home-project ${p.className}`} href="/portfolio"><div className="home-project-visual"><span className="project-kicker">NORTHSTAR SELECTS / 0{i + 1}</span><span className="project-visual-title">{p.label}</span><span className="project-visual-mark"><Asterisk size={76} strokeWidth={.8} /></span><span className="project-open"><ArrowUpRight size={18} /></span></div><div className="home-project-info"><span>{p.title}</span><small>{p.type}</small></div></Link></Reveal>)}</div>
    </section>

    <section className="home-manifesto section-pad"><div className="manifesto-inner mx-auto"><Reveal><div className="eyebrow">WHY NORTHSTAR <span className="eyebrow-line" /> GOOD ENERGY, BETTER OUTCOMES</div><h2>We make the complicated<br />feel <span className="gradient-text">clear.</span> The ordinary feel<br /><span className="text-muted">impossible to ignore.</span></h2></Reveal><div className="manifesto-bottom"><Reveal><p>Small, senior teams. Big picture thinking. No handoffs to strangers. The people in your first meeting are the ones who bring it to life.</p></Reveal><div className="stats-row"><Reveal delay={.1}><div><b>38<span>+</span></b><small>Brands moved forward</small></div></Reveal><Reveal delay={.17}><div><b>92<span>%</span></b><small>Come back for more</small></div></Reveal><Reveal delay={.24}><div><b>8<span>yr</span></b><small>Making good things</small></div></Reveal></div></div></div></section>

    <section className="home-process section-pad"><div className="section-head mx-auto"><Reveal><div className="eyebrow">HOW WE GET THERE <span className="eyebrow-line" /> THE GOOD PART</div><h2>Clear heads.<br /><span className="text-muted">Curious hands.</span></h2></Reveal><Reveal><p>Our process gives the right ideas room to grow and the right details nowhere to hide.</p></Reveal></div><div className="process-grid mx-auto">{[["01", "Listen closely", "We ask better questions, find the real tension and agree on what success means."], ["02", "Find the signal", "We turn research into a clear point of view and a creative direction worth following."], ["03", "Make it matter", "We design, build and refine with your team, all the way to a confident launch."], ["04", "Keep moving", "We learn from real people, share what’s working and make the next thing even better."]].map(([n, t, d], i) => <Reveal key={n} delay={i * .06}><div className="process-step"><span>{n}<i><Asterisk size={14} /></i></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>

    <section className="home-quote section-pad"><Reveal className="quote-wrap mx-auto"><div className="quote-mark"><Quote size={34} fill="currentColor" /></div><blockquote>Northstar understood the feeling we wanted to create before we had the words for it. The work has changed how people see us.</blockquote><div className="quote-credit"><span className="avatar">AL</span><span><b>Amelia Lane</b><small>Founder, Objects of Calm</small></span></div><div className="quote-pagination">01 <i /> 03</div></Reveal></section>

    <section className="home-cta section-pad"><Reveal className="cta-panel mx-auto"><div className="cta-star"><Sparkles size={28} strokeWidth={1.2} /></div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>Have a good one<br />in mind?</h2><p>We&apos;re all ears. Tell us what you&apos;re building and we&apos;ll bring a fresh perspective.</p><Link className="button-primary" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link><span className="cta-orbit orbit-a" /><span className="cta-orbit orbit-b" /></Reveal></section>
  </div>;
}
