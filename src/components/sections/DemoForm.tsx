"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/content";

type Status = "idle" | "submitting" | "done";

const field =
  "w-full rounded-lg border border-border bg-bg/50 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors focus:border-brand/60";

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    // No backend wired yet — simulate a successful submit.
    window.setTimeout(() => setStatus("done"), 900);
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border-strong bg-surface/70 p-10 text-center ring-hairline">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald/15 text-emerald">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-fg">Thanks — you&apos;re booked in</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
          Our team will reach out within one business day to schedule your personalised
          30-minute demo. Keep an eye on your inbox.
        </p>
        <Button className="mt-7" onClick={() => setStatus("idle")} variant="secondary">
          Book another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border-strong bg-surface/70 p-6 ring-hairline md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Labeled label="Full name" htmlFor="name">
          <input id="name" name="name" required placeholder="Aarav Mehta" className={field} />
        </Labeled>
        <Labeled label="Work email" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={field} />
        </Labeled>
        <Labeled label="Company" htmlFor="company">
          <input id="company" name="company" required placeholder="Spice Route Hospitality" className={field} />
        </Labeled>
        <Labeled label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className={field} />
        </Labeled>
        <Labeled label="Business type" htmlFor="type">
          <select id="type" name="type" required className={field} defaultValue="">
            <option value="" disabled>
              Select an industry
            </option>
            {industries.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </Labeled>
        <Labeled label="Number of outlets" htmlFor="outlets">
          <select id="outlets" name="outlets" className={field} defaultValue="1">
            <option value="1">1 outlet</option>
            <option value="2-5">2–5 outlets</option>
            <option value="6-20">6–20 outlets</option>
            <option value="20+">20+ outlets</option>
          </select>
        </Labeled>
      </div>
      <Labeled label="What would you like to see?" htmlFor="message" className="mt-4">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your current setup and what you'd like to improve…"
          className={field}
        />
      </Labeled>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Book my demo"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-fg-subtle">
        By submitting, you agree to be contacted about Seven14 Tech Studio. We never share your data.
      </p>
    </form>
  );
}

function Labeled({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-fg-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
