import { Plane, Calendar } from "lucide-react";

export function UpdateBanner() {
  return (
    <div className="relative z-10 -mt-8 px-2 sm:px-6 lg:px-8">
      <div className="animate-gold-pulse mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 rounded-2xl border border-gold/40 bg-gradient-navy px-6 py-3 text-center shadow-lift sm:flex-row sm:gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Plane className="h-5 w-5 animate-float" />
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white sm:text-base">
          <span className="text-gold">
            Next Air Cargo Departure: 
          </span>

          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4 text-gold" />
            10th August
          </span>

          {/* <span className="hidden sm:inline text-white/50">•</span>

          <span>USA &rarr; Eastern &amp; Southern Africa</span> */}
        </div>
      </div>
    </div>
  );
}