import { useState } from "react";
import { Search, Warehouse, Plane, MapPin, PackageCheck, CheckCircle2, Circle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const STEPS: { icon: LucideIcon; title: string; desc: string; done: boolean; active?: boolean }[] = [
  { icon: Warehouse, title: "Received at USA Warehouse", desc: "Portland, Oregon · package logged & inspected", done: true },
  { icon: Plane, title: "In Transit", desc: "Departed on express Air Freight · en route to Africa", done: true, active: true },
  { icon: MapPin, title: "Arrived in Africa", desc: "Regional clearance & sorting hub", done: false },
  { icon: PackageCheck, title: "Out for Delivery", desc: "Door-to-door delivery to your address", done: false },
];

export function Tracking() {
  const [value, setValue] = useState("");
  const [tracked, setTracked] = useState(false);

  return (
    <section id="tracking" className="bg-background pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shipment Tracking"
          title="Track your cargo in real time"
          subtitle="Enter your AWB or shipment tracking number to see the latest status."
        />

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
          <div className="bg-gradient-navy px-6 py-6 sm:px-8">
            <h3 className="text-lg font-bold text-white">Track a Shipment</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (value.trim()) setTracked(true);
              }}
              className="mt-4 flex flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter AWB or Shipment Tracking Number..."
                  className="h-12 w-full rounded-full border border-white/10 bg-white pl-11 pr-4 text-sm font-medium text-navy outline-none ring-gold/50 transition focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 text-sm font-bold text-navy shadow-gold transition-all hover:scale-[1.03]"
              >
                Track Cargo
              </button>
            </form>
          </div>

          <div
            className={cn(
              "grid transition-all duration-500 ease-out",
              tracked ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div className="px-6 py-8 sm:px-10">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-muted px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tracking #</p>
                    <p className="font-bold text-navy">{value || "EL-000-000"}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-navy">
                    <span className="h-1.5 w-1.5 animate-glow rounded-full bg-gold" /> In Transit
                  </span>
                </div>

                <ol className="relative space-y-6 pl-2">
                  {STEPS.map((step, i) => (
                    <li key={step.title} className="relative flex gap-4">
                      {i < STEPS.length - 1 && (
                        <span
                          className={cn(
                            "absolute left-[1.35rem] top-11 h-[calc(100%-0.5rem)] w-0.5",
                            step.done ? "bg-gold" : "bg-border",
                          )}
                        />
                      )}
                      <span
                        className={cn(
                          "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition",
                          step.done
                            ? "border-gold bg-gold text-navy"
                            : "border-border bg-card text-muted-foreground",
                          step.active && "animate-gold-pulse",
                        )}
                      >
                        <step.icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div className="pt-1">
                        <div className="flex items-center gap-2">
                          <h4 className={cn("text-sm font-bold", step.done ? "text-navy" : "text-muted-foreground")}>
                            {step.title}
                          </h4>
                          {step.done ? (
                            <CheckCircle2 className="h-4 w-4 text-whatsapp" />
                          ) : (
                            <Circle className="h-4 w-4 text-border" />
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
