import { Plane, Ship, ShoppingBag, Package, Truck, Home, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const SERVICES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Plane,
    title: "Air Freight",
    desc: "USA to Eastern & Southern Africa. Fast, secure air cargo for personal belongings, electronics, fashion, business, and commercial cargo.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "Affordable solutions for large shipments, household goods, business inventory, and relocation cargo.",
  },
  {
    icon: ShoppingBag,
    title: "Shop Anything From USA",
    desc: "We help you buy from Amazon, Walmart, Target, Costco, eBay, Nike, and more — 100% original products.",
  },
  {
    icon: Package,
    title: "Package Forwarding",
    desc: "Receive packages at our USA warehouse and ship them internationally to your doorstep.",
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery",
    desc: "Pickup in the USA and delivery to your destination anywhere across Africa.",
  },
  {
    icon: Home,
    title: "Relocation Services",
    desc: "Moving assistance for individuals, families, and businesses — handled end to end.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete logistics, from USA to Africa"
          subtitle="Everything you need to buy, ship, and receive goods — handled by one trusted partner."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-navy text-gold shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="relative mt-5 flex items-center gap-1 text-lg font-bold text-navy">
                  {s.title}
                  <ArrowUpRight className="h-4 w-4 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
