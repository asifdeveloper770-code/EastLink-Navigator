import { Smartphone, Shirt, Sparkles, Refrigerator, HeartPulse, Baby, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./constants";

const CATEGORIES: { icon: LucideIcon; title: string; items: string }[] = [
  { icon: Smartphone, title: "Electronics", items: "Smartphones, Laptops, Tablets, Accessories" },
  { icon: Shirt, title: "Fashion", items: "Clothing, Shoes, Bags, Designer brands" },
  { icon: Sparkles, title: "Beauty Products", items: "Skincare, Cosmetics, Hair products" },
  { icon: Refrigerator, title: "Home Appliances", items: "Kitchen appliances, Smart home, Household items" },
  { icon: HeartPulse, title: "Supplements & Wellness", items: "Vitamins, Fitness supplements, Health products" },
  { icon: Baby, title: "Baby Products", items: "Baby clothing, Toys, Essentials" },
];

export function ShopCategories() {
  return (
    <section id="shop" className="relative overflow-hidden bg-gradient-navy pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Shop From USA"
          title="Popular categories our customers love"
          subtitle="Tell us what you want — we buy it, ship it, and deliver it to you in Africa."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <article className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/10">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-navy shadow-gold transition-transform duration-300 group-hover:scale-110">
                  <c.icon className="h-6 w-6" strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{c.items}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:scale-[1.04] hover:shadow-lift"
          >
            Request a shopping order
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
