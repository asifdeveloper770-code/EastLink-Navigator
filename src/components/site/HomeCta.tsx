import { ArrowRight, PackageSearch } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function HomeCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            Ready When You Are
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
            Ship smarter between the USA and Africa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            From a single parcel to full commercial cargo, our team handles every step — buying,
            forwarding, freight, and final-mile delivery.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:scale-[1.04] hover:shadow-lift"
            >
              Get a Shipping Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/tracking"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.04] hover:border-gold hover:bg-white/10"
            >
              <PackageSearch className="h-4 w-4" />
              Track a Shipment
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}