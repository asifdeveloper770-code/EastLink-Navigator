import { createFileRoute } from "@tanstack/react-router";
import { ShopCategories } from "@/components/site/ShopCategories";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop From USA | EastLink US Logistics LLC" },
      {
        name: "description",
        content:
          "Buy 100% original products from Amazon, Walmart, Target, Costco, eBay, Nike and more. We shop, ship, and deliver to you across Africa.",
      },
      { property: "og:title", content: "Shop From USA | EastLink US Logistics LLC" },
      {
        property: "og:description",
        content:
          "Tell us what you want from the USA — we buy it, ship it, and deliver it to your door in Africa.",
      },
    ],
  }),
  component: ShopCategories,
});