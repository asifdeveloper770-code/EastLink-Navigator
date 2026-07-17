import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { UpdateBanner } from "@/components/site/UpdateBanner";
import { Showcase } from "@/components/site/Showcase";
import { HomeCta } from "@/components/site/HomeCta";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EastLink US Logistics LLC | Shipping USA to Africa" },
      {
        name: "description",
        content:
          "EastLink US Logistics LLC — your trusted one-stop shipping solution connecting the USA to Eastern & Southern Africa. Air & sea freight, shopping from USA, and door-to-door delivery.",
      },
      { property: "og:title", content: "EastLink US Logistics LLC | Shipping USA to Africa" },
      {
        property: "og:description",
        content:
          "Cargo, shopping & delivery between the USA and Africa. Buy, ship, and receive goods with a trusted USA-based logistics partner.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <UpdateBanner />
      <Showcase />
      <Testimonials/>
      <HomeCta />
    </>
  );
}
