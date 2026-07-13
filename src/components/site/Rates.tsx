import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const DESTINATIONS: { code: string; country: string; cities: string }[] = [
  { code: "TZ", country: "Tanzania", cities: "Zanzibar · Dar es Salaam" },
  { code: "KE", country: "Kenya", cities: "Nairobi · Mombasa" },
  { code: "UG", country: "Uganda", cities: "Kampala" },
  { code: "BI", country: "Burundi", cities: "Bujumbura" },
  { code: "RW", country: "Rwanda", cities: "Kigali" },
  { code: "ZM", country: "Zambia", cities: "Lusaka" },
  { code: "MW", country: "Malawi", cities: "Lilongwe" },
  { code: "SZ", country: "Eswatini", cities: "Mbabane" },
  { code: "ZA", country: "South Africa", cities: "Johannesburg · Cape Town" },
  { code: "ZW", country: "Zimbabwe", cities: "Harare" },
];

export function Rates() {
  return (
    <section id="rates" className="bg-secondary pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Rates & Destinations"
          title="Where we deliver across Africa"
          subtitle="Hover a destination to see the cities we serve. Competitive air & sea rates to every region."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {DESTINATIONS.map((d, i) => (
            <Reveal key={d.country} delay={i * 45}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-navy text-sm font-bold tracking-wide text-gold shadow-card transition-transform duration-300 group-hover:scale-110">
                    {d.code}
                  </span>
                  <h3 className="text-base font-bold text-navy">{d.country}</h3>
                </div>
                <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-gold" />
                      {d.cities}
                    </p>
                  </div>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-gold transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            And beyond through our regional delivery network.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
