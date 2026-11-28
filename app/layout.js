import "./globals.css";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CircuitBackground from "../components/CircuitBackground";

export const metadata = {
  title: { default: "Northstar® — Independent Creative Studio", template: "%s — Northstar®" },
  description: "Northstar is an independent creative studio building digital experiences, content and brands for what comes next.",
  metadataBase: new URL("https://northstar.studio"),
  openGraph: { title: "Northstar® — Independent Creative Studio", description: "Digital experiences for what comes next.", type: "website" }
};

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning><head><Script id="northstar-theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `try{var savedTheme=localStorage.getItem("northstar-theme");var prefersLight=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.dataset.theme=savedTheme==="light"||savedTheme==="dark"?savedTheme:(prefersLight?"light":"dark")}catch(e){document.documentElement.dataset.theme="dark"}` }} /></head><body><CircuitBackground /><Navbar /><main>{children}</main><Footer /></body></html>;
}
