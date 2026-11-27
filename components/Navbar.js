"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const links = [["Studio", "/about"], ["Services", "/services"], ["Work", "/portfolio"]];
export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  return <header className="nav-shell">
    <nav className="nav-bar mx-auto flex items-center justify-between" aria-label="Main navigation">
      <Link className="brand flex items-center" href="/" aria-label="Northstar home" onClick={() => setOpen(false)}><span className="brand-mark">N<span><Sparkles size={10} strokeWidth={2.2} /></span></span><span className="brand-lockup"><span className="brand-name">northstar<span>{"\u00AE"}</span></span><small>INDEPENDENT CREATIVE STUDIO</small></span></Link>
      <div className="nav-links items-center">
        {links.map(([label, href]) => <Link key={href} className={`nav-link ${pathname === href ? "is-active" : ""}`} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
      </div>
      <div className="nav-actions"><span className="nav-availability"><i />Open for good projects</span><ThemeToggle /><Link className="nav-contact items-center" href="/contact">Let&apos;s talk <ArrowUpRight size={15} /></Link></div>
      <button className="nav-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <AnimatePresence>{open && <motion.div id="mobile-navigation" className="mobile-menu" initial={reduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reduceMotion ? undefined : { opacity: 0, height: 0 }} transition={{ duration: reduceMotion ? 0 : .28, ease: "easeInOut" }}>
        {[...links, ["Contact", "/contact"]].map(([label, href], i) => <motion.div key={href} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : i * .045 }}><Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17} /></Link></motion.div>)}
      </motion.div>}</AnimatePresence>
    </nav>
  </header>;
}
