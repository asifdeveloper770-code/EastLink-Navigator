import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

export function FloatingChat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-wa-pulse group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-bold text-white shadow-lift transition-all hover:scale-105 hover:bg-whatsapp-dark"
    >
      <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
      <span className="hidden sm:inline">Chat With EastLink Now</span>
    </a>
  );
}
