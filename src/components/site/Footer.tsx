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
            <div className="mt-4 max-w-md">
              <p className="text-sm leading-relaxed text-white/65">
                EastLink US Logistics LLC is your trusted one-stop shipping solution
                connecting the United States to Eastern &amp; Southern Africa. From cargo
                shipping and U.S. products shopping to freight forwarding and door-to-door
                delivery, we make international logistics simple, reliable, and affordable.
              </p>

              <p className="mt-4 text-base font-semibold text-gold">
                Your Trusted Gateway Between the United States &amp; Eastern &amp; Southern
                Africa.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "✈️ Air Cargo",
                  "🚢 Sea Freight",
                  "📦 Door-to-Door Delivery",
                  "🛍️ Shop From the U.S.",
                  "📱 Electronics Shipping",
                  "🤝 Freight Forwarding",
                ].map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-gold/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
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
          <p className="text-xs text-white/50">United States to Eastern &larr; &rarr;  Southern Africa</p>
        </div>
      </div>
    </footer>
  );
}
