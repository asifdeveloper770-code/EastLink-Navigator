import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { Showcase } from "@/components/site/Showcase";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | EastLink US Logistics LLC" },
      {
        name: "description",
        content:
          "Air freight, sea freight, shopping from the USA, package forwarding, door-to-door delivery, and relocation services between the USA and Africa.",
      },
      { property: "og:title", content: "Our Services | EastLink US Logistics LLC" },
      {
        property: "og:description",
        content:
          "Complete logistics from the USA to Africa — air & sea freight, shopping, forwarding, and door-to-door delivery.",
      },
    ],
  }),
  component: () => (
    <>
      <Services />
      <Showcase />
    </>
  ),
});