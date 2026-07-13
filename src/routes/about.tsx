import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | EastLink US Logistics LLC" },
      {
        name: "description",
        content:
          "EastLink US Logistics LLC is a USA-based logistics company connecting customers, businesses, and families between the United States and Africa.",
      },
      { property: "og:title", content: "About Us | EastLink US Logistics LLC" },
      {
        property: "og:description",
        content:
          "Reliable cargo handling, transparent shipping, and a trusted regional delivery network across Africa.",
      },
    ],
  }),
  component: About,
});