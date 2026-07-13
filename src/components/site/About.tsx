import { Check, UserRound, Users, Handshake, Headset } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import warehouse from "@/assets/about-warehouse.jpg";

const TEAM: { icon: LucideIcon; role: string }[] = [
  { icon: UserRound, role: "Founder & CEO" },
  { icon: Users, role: "Operations Team" },
  { icon: Handshake, role: "Regional Partners" },
  { icon: Headset, role: "Customer Support Team" },
];

const REASONS = [
  "USA-based logistics company",
  "Reliable cargo handling",
  "Transparent shipping process",
  "Original U.S. products",
  "Door-to-door solutions",
  "Regional African delivery network",
];

export function About() {
  return (
    <section id="about" className="bg-background pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Bridging the USA and Africa, one shipment at a time"
              subtitle="EastLink US Logistics LLC connects customers, businesses, and families between the United States and Africa through reliable shipping, purchasing, and delivery solutions."
            />

            <Reveal delay={80}>
              <div className="group mt-8 overflow-hidden rounded-3xl border border-border shadow-lift">
                <img
                  src={warehouse}
                  alt="EastLink logistics team organizing shipping boxes in a warehouse"
                  width={1200}
                  height={1408}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {TEAM.map((t, i) => (
                <Reveal key={t.role} delay={i * 70}>
                  <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-navy text-gold transition-transform group-hover:scale-110">
                      <t.icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy">{t.role}</p>
                      <p className="text-xs text-muted-foreground">Leadership</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-gradient-navy p-8 shadow-lift sm:p-10">
              <h3 className="text-2xl font-extrabold text-white">Why choose EastLink</h3>
              <p className="mt-2 text-sm text-white/70">
                A premium, secure shipping experience trusted across ten countries and beyond.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {REASONS.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-navy shadow-gold">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-white/90">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
