import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";
import {
  NAV_LINKS,
  WHATSAPP_URL,
  PHONE_NUMBER,
  PHONE_HREF,
  EMAIL_ADDRESS,
  EMAIL_HREF,
} from "./constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transform-gpu transition-[background-color,box-shadow,border-color] duration-300 will-change-[background-color]",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-background/40 backdrop-blur-md border-b border-transparent",
      )}
    >
      {/* Utility bar — collapses on scroll */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-border/60 bg-navy text-white/85 transition-[max-height,opacity] duration-300 will-change-[max-height] lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs lg:px-8">
          <div className="flex items-center gap-6">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 transition-colors hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" />
              {PHONE_NUMBER}
            </a>
            <a href={EMAIL_HREF} className="flex items-center gap-1.5 transition-colors hover:text-gold">
              <Mail className="h-3.5 w-3.5 text-gold" />
              {EMAIL_ADDRESS}
            </a>
          </div>
          <div className="flex items-center gap-1.5 font-medium tracking-wide text-white/70">
            <Clock className="h-3.5 w-3.5 text-gold" />
            Mon–Fri 8:00–18:00 · USA · Tanzania
          </div>
        </div>
      </div>

      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0 transition-transform hover:scale-[1.03]">
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="relative rounded-md px-3 py-2 text-sm font-semibold text-navy/80 transition-colors hover:text-navy after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-gold after:transition-transform hover:after:scale-x-100 data-[status=active]:text-navy data-[status=active]:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-bold text-white shadow-card transition-transform duration-200 hover:scale-[1.03] xl:inline-flex"
          >
            Get a Quote
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-white shadow-card transition-[background-color,transform] duration-200 hover:bg-whatsapp-dark hover:scale-[1.03] animate-wa-pulse sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-transparent",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-semibold text-navy/80 transition-colors hover:bg-muted hover:text-navy data-[status=active]:bg-muted data-[status=active]:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <div className="mt-2 flex flex-col gap-1 border-t border-border pt-3 text-sm">
            <a href={PHONE_HREF} className="flex items-center gap-2 px-3 py-2 font-medium text-navy/80 transition-colors hover:text-navy">
              <Phone className="h-4 w-4 text-gold" />
              {PHONE_NUMBER}
            </a>
            <a href={EMAIL_HREF} className="flex items-center gap-2 px-3 py-2 font-medium text-navy/80 transition-colors hover:text-navy">
              <Mail className="h-4 w-4 text-gold" />
              {EMAIL_ADDRESS}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
