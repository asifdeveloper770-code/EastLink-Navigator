import { createFileRoute } from "@tanstack/react-router";
import { Rates } from "@/components/site/Rates";

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title: "Rates & Destinations | EastLink US Logistics LLC" },
      {
        name: "description",
        content:
          "Competitive air & sea rates to Tanzania, Kenya, Uganda, Rwanda, Zambia, South Africa and across Eastern & Southern Africa.",
      },
      { property: "og:title", content: "Rates & Destinations | EastLink US Logistics LLC" },
      {
        property: "og:description",
        content: "See where we deliver across Africa and the cities we serve.",
      },
    ],
  }),
  component: Rates,
});