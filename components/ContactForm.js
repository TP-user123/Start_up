"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "../data/services";
import "./ContactForm.css";

export default function ContactForm({ initialService = "" }) {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  function submit(event) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) { setError("Please fill in your name, email and a short note so we can get back to you."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("That email address doesn’t look quite right. Please check it and try again."); return; }
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${data.get("phone") || "Not provided"}\nService: ${data.get("service") || "Not selected"}\nBudget: ${data.get("budget") || "Not selected"}\n\n${message}`);
    setStatus("Your email app is ready with your project note. If it didn’t open, email us directly at hello@northstar.studio.");
    window.location.href = `mailto:hello@northstar.studio?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-heading"><span>THE SHORT VERSION</span><p>We&apos;ll take it from here.</p></div>
    <div className="form-grid"><label>Your name <input name="name" autoComplete="name" placeholder="How should we call you?" required /></label><label>Email address <input name="email" type="email" autoComplete="email" placeholder="you@yourbrand.com" required /></label><label>Phone number <input name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></label><label>What can we help with? <select name="service" defaultValue={initialService}><option value="">Choose a service</option>{services.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}<option value="Something else">Something else</option></select></label><label className="form-wide">Project budget <select name="budget" defaultValue=""><option value="">Choose a range</option><option>Under $5k</option><option>$5k – $15k</option><option>$15k – $40k</option><option>$40k+</option><option>Let&apos;s talk</option></select></label><label className="form-wide">A little about the project <textarea name="message" rows="4" placeholder="The big idea, a tricky challenge, or just where you are right now..." required /></label></div>
    {error && <p className="form-feedback form-error" role="alert">{error}</p>}{status && <p className="form-feedback form-success" role="status"><CheckCircle2 size={17} />{status}</p>}
    <div className="form-submit-row"><button className="button-primary" type="submit">Send the first note <ArrowUpRight size={15} /></button><span>Usually back within 2 working days.</span></div>
  </form>;
}
