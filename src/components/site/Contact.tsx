import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./constants";

const OFFICES = [
  { region: "USA Offices", items: ["Oregon Office", "Washington State Office"] },
  { region: "Africa Office", items: ["Tanzania Office"] },
];

const DESTINATIONS = [
  "Tanzania", "Kenya", "Uganda", "Burundi", "Rwanda",
  "Zambia", "Malawi", "Eswatini", "South Africa", "Zimbabwe", "Other",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Inquiry sent!", {
        description: "Our team will reach out shortly with your shipping quote.",
      });
    }, 800);
  };

  return (
    <section id="contact" className="bg-secondary pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's get your shipment moving"
          subtitle="Reach out for quotes, tracking, or shopping assistance — we respond fast."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: offices + contact options */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {OFFICES.map((o, i) => (
                <Reveal key={o.region} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                    <h3 className="flex items-center gap-2 text-base font-bold text-navy">
                      <MapPin className="h-4 w-4 text-gold" />
                      {o.region}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {o.items.map((it) => (
                        <li key={it} className="text-sm text-muted-foreground">{it}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:border-whatsapp hover:shadow-lift"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp transition-transform group-hover:scale-110">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-navy">WhatsApp</span>
                </a>
                <a
                  href="tel:+15035551234"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-navy transition-transform group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-navy">Call Us</span>
                </a>
                <a
                  href="mailto:info@eastlinklogistics.com"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-navy transition-transform group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-navy">Email</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: inquiry form */}
          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8"
            >
              <h3 className="text-xl font-bold text-navy">Shipping Inquiry Form</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Jane Doe" required />
                <Field label="Email" name="email" type="email" placeholder="jane@email.com" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+1 (503) 555-1234" required />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-navy" htmlFor="destination">Destination</label>
                  <select
                    id="destination"
                    name="destination"
                    required
                    defaultValue=""
                    className="h-11 rounded-xl border border-input bg-background px-3 text-sm text-navy outline-none ring-gold/50 transition focus:ring-2"
                  >
                    <option value="" disabled>Select destination</option>
                    {DESTINATIONS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-navy" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us what you'd like to ship or buy..."
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-navy outline-none ring-gold/50 transition focus:ring-2"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:scale-[1.02] disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Send Inquiry"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-navy" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-input bg-background px-3 text-sm text-navy outline-none ring-gold/50 transition focus:ring-2"
      />
    </div>
  );
}
