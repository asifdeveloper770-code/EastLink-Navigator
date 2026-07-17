export const WHATSAPP_NUMBER = "+12792595148"; // placeholder — update with real number
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello EastLink US Logistics! I'd like a shipping quote.",
)}`;

export const PHONE_NUMBER = "+1 (279)259-5148"; // placeholder — update with real number
export const PHONE_HREF = "tel:+12792595148";
export const EMAIL_ADDRESS = "info@eastlinklogistics.com";
export const EMAIL_HREF = "mailto:info@eastlinklogistics.com";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Shop From USA", to: "/shop" },
  { label: "Tracking", to: "/tracking" },
  { label: "Rates", to: "/rates" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;
