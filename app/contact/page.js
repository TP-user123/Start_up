import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";
import "./contact.css";

export const metadata = { title: "Start a Conversation", description: "Tell the Northstar creative studio what you're working on." };
export default function ContactPage({ searchParams }) {
  const service = typeof searchParams?.service === "string" ? searchParams.service : "";
  return <div className="contact-page page-shell"><section className="contact-hero page-gutter"><div className="contact-hero-inner mx-auto"><Reveal><div className="eyebrow">THE FIRST HELLO <span className="eyebrow-line" /> START A PROJECT</div><h1>Good things start<br />with <span className="gradient-text">a conversation.</span></h1><p>Tell us a little about what you have in mind. Big picture, half-formed thought, napkin sketch — we&apos;re listening.</p></Reveal><div className="contact-orbit"><span>✳</span></div></div></section>
    <section className="contact-main page-gutter"><div className="contact-layout mx-auto"><Reveal><div className="contact-info"><span className="eyebrow">COME AS YOU ARE <span className="eyebrow-line" /> WE&apos;RE FRIENDLY</span><h2>We&apos;ll take it<br /><span className="text-muted">from here.</span></h2><p>Share whatever you know so far. We&apos;ll get back to you within two working days with a few useful questions and a time to talk.</p><a className="contact-email" href="mailto:hello@northstar.studio">hello@northstar.studio <span>↗</span></a><a className="whatsapp-link" href="https://wa.me/?text=Hello%20Northstar%2C%20I%27d%20love%20to%20talk%20about%20a%20project." target="_blank" rel="noreferrer">Or say hello on WhatsApp <span>↗</span></a><div className="contact-hours"><span>WHERE WE WORK</span><b>Everywhere, together.</b><small>Independent studio · Available worldwide</small></div><div className="contact-social"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></Reveal><Reveal delay={.1}><ContactForm initialService={service} /></Reveal></div></section>
  </div>;
}
