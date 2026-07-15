import { cn } from "@/lib/utils";
import logo from "@/assets/image (7).png";

export function BrandMark({
  className,
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src={logo}
        alt="East Link US Logistics LLC"
        className="h-12 sm:h-14 w-auto object-contain"
      />
    </div>
  );
}