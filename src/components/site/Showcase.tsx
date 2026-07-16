import seaFreight from "@/assets/hero-cargo.jpg";
import airFreight from "@/assets/air-freight.jpg";
import delivery from "@/assets/delivery.jpg";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const SHOWCASE: { img: string; w: number; h: number; title: string; desc: string }[] = [

  {
    img: airFreight,
    w: 1200,
    h: 912,
    title: "Air Freight",
    desc: "Fast, secure express Air Freight departing regularly from the United States.",
  },
    {
    img: seaFreight,
    w: 1920,
    h: 1088,
    title: "Sea Freight",
    desc: "Cost-effective ocean cargo for large shipments, inventory, and relocation loads.",
  },
  {
    img: delivery,
    w: 1200,
    h: 912,
    title: "From the U.S to Your Door",
    desc: "Final-mile delivery handed directly to your door across Africa.",
  },
];

export function Showcase() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Move Your Cargo"
          title="From Shopping to Shipping—Delivered to Your Door"
          subtitle="Your Trusted Shipping Partner for Families • Businesses • Online Shoppers Across Eastern & Southern Africa"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SHOWCASE.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group relative h-80 overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <img
                  src={s.img}
                  alt={s.title}
                  width={s.w}
                  height={s.h}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block h-1 w-10 rounded-full bg-gradient-gold transition-all duration-300 group-hover:w-16" />
                  <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}