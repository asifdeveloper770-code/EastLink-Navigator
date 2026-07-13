import { ArrowRight, PackageSearch, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroCargo from "@/assets/hero-cargo.jpg";
import { WHATSAPP_URL } from "./constants";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={heroCargo}
        alt="Container cargo ship departing a busy port at golden hour"
        width={1920}
        height={1088}
        className="animate-ken-burns absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/70 to-navy-deep/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-32">
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-soft">
            <span className="h-1.5 w-1.5 animate-glow rounded-full bg-gold" />
            USA · Eastern & Southern Africa
          </span>

          <h1
            className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Connecting the USA to{" "}
            <span className="text-shimmer-gold">Eastern &amp; Southern Africa</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            EastLink US Logistics LLC — your trusted one-stop shipping solution for cargo,
            shopping &amp; delivery. From U.S. products to personal shipments, we make it easy
            to buy, ship, and receive goods across Africa.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:scale-[1.04] hover:shadow-lift"
            >
              Get Shipping Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/tracking"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.04] hover:border-gold hover:bg-white/10"
            >
              <PackageSearch className="h-4 w-4" />
              Track Shipment
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white ring-1 ring-white/15 transition-all hover:scale-[1.04] hover:bg-navy-soft"
            >
              <ShoppingBag className="h-4 w-4" />
              Shop From USA
            </Link>
          </div>

          <dl className="animate-fade-up mt-12 grid max-w-lg grid-cols-3 gap-6" style={{ animationDelay: "320ms" }}>
            {[
              { k: "10+", v: "Countries served" },
              { k: "100%", v: "Original US products" },
              { k: "Door", v: "to-door delivery" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-extrabold text-gold sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs font-medium text-white/60 sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
