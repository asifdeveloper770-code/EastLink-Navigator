import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | EastLink US Logistics LLC" },
      {
        name: "description",
        content:
          "Contact EastLink US Logistics LLC for shipping quotes, tracking, and shopping assistance. Offices in Oregon, Washington State, and Tanzania.",
      },
      { property: "og:title", content: "Contact Us | EastLink US Logistics LLC" },
      {
        property: "og:description",
        content: "Reach out by WhatsApp, phone, or email — or send a shipping inquiry.",
      },
    ],
  }),
  component: Contact,
});