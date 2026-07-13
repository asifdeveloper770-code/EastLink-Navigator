import { createFileRoute } from "@tanstack/react-router";
import { Tracking } from "@/components/site/Tracking";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Track Your Shipment | EastLink US Logistics LLC" },
      {
        name: "description",
        content:
          "Track your EastLink cargo in real time. Enter your AWB or shipment tracking number to see the latest status from the USA to Africa.",
      },
      { property: "og:title", content: "Track Your Shipment | EastLink US Logistics LLC" },
      {
        property: "og:description",
        content: "Real-time shipment tracking for cargo moving from the USA to Africa.",
      },
    ],
  }),
  component: Tracking,
});