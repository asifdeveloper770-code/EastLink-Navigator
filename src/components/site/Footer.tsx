import { MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BrandMark } from "./BrandMark";
import { NAV_LINKS, WHATSAPP_URL } from "./constants";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandMark tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Your trusted one-stop shipping solution connecting the USA to Eastern &amp; Southern
              Africa — cargo, shopping &amp; delivery made easy.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-whatsapp-dark hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/65 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Get in touch</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/65">
                <Phone className="h-4 w-4 text-gold" /> +1 (503) 555-1234
              </li>
              <li className="flex items-center gap-2 text-sm text-white/65">
                <Mail className="h-4 w-4 text-gold" /> info@eastlinklogistics.com
              </li>
              <li className="text-sm text-white/65">Oregon · Washington · Tanzania</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} EastLink US Logistics LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/50">USA to Eastern &amp; Southern Africa</p>
        </div>
      </div>
    </footer>
  );
}
