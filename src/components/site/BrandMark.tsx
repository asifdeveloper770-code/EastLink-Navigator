import { cn } from "@/lib/utils";

export function BrandMark({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const east = tone === "light" ? "text-white" : "text-navy";
  const sub = tone === "light" ? "text-white/70" : "text-navy/70";
  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <div className="flex items-baseline font-display font-extrabold tracking-tight">
        <span className={cn("text-xl sm:text-2xl", east)}>EAST</span>
        <span className="text-xl sm:text-2xl text-gradient-gold">LINK</span>
      </div>
      <span className={cn("mt-0.5 text-[0.55rem] sm:text-[0.6rem] font-semibold tracking-[0.28em] text-center", sub)}>
        US LOGISTICS LLC
      </span>
    </div>
  );
}
