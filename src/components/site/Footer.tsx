import { MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BrandMark } from "./BrandMark";
import { NAV_LINKS, WHATSAPP_URL } from "./constants";
import { useState } from "react";
import {  ChevronDown } from "lucide-react";



export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

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
                  "✈️ Express Air Cargo",
                  "🚢 Sea Freight",
                  "🛍️ Shop For Me",
                  "🤝 Freight Forwarding",
                  "📱 Fast & Reliable General Cargo & Electronics Shipping",
                  "📦 Door-to-Door Delivery",
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
            {/* Clickable Header Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold transition-colors hover:text-gold/80"
            >
              <span>Contact Us</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Expandable Content */}
            {isOpen && (
              <div className="mt-4 space-y-6">
                {/* Main Contact Info */}
                <ul className="space-y-3 text-sm text-white/65">
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold shrink-0" />
                    <span>+1 (279) 259-5148</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold shrink-0" />
                    <span>info@eastlinkuslogistics.com</span>
                  </li>
                </ul>

                {/* Offices List */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-gold/90">
                    Our Offices
                  </h5>

                  <ul className="mt-3 space-y-4 text-sm text-white/65">
                    <li>
                      <p className="font-semibold text-white">Oregon Office</p>
                      <p>Gresham, OR, USA</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gold shrink-0" />
                        <span>+1 (279) 259-5148</span>
                      </div>
                    </li>

                    <li>
                      <p className="font-semibold text-white">Washington State Office</p>
                      <p>Covington, WA, USA</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gold shrink-0" />
                        <span>+1 (253) 592-3757</span>
                      </div>
                    </li>

                    <li>
                      <p className="font-semibold text-white">Tanzania Office</p>
                      <p>Upanga, Dar es Salaam, Tanzania</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gold shrink-0" />
                        <span>+255 762 550 779</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>


        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} EastLink US Logistics LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/50">United States &larr; &rarr; Eastern & Southern Africa</p>
        </div>
      </div>
    </footer>
  );
}
