import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";
export default function Footer() {
  return <footer className="footer-wrap"><div className="footer-main mx-auto grid md:grid-cols-[1.3fr_.7fr_.8fr]">
    <div className="footer-brand"><Link href="/" className="brand flex items-center"><span className="brand-mark">N<span>✳</span></span><span className="brand-name">northstar<span>®</span></span></Link><p>Independent by nature.<br />Forward by design.</p></div>
    <div className="footer-col"><span className="footer-label">Explore</span><Link href="/about">Studio</Link><Link href="/services">Services</Link><Link href="/portfolio">Selected work</Link></div>
    <div className="footer-col"><span className="footer-label">Say hello</span><a href="mailto:hello@northstar.studio">hello@northstar.studio <ArrowUpRight size={14} /></a><div className="footer-social"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a></div></div>
  </div><div className="footer-bottom mx-auto"><span>© {new Date().getFullYear()} Northstar Studio</span><span>Made for what&apos;s next <i>✳</i></span></div></footer>;
}
