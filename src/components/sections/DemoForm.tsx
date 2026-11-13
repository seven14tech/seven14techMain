"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { billingIndustries, erpAudiences, services } from "@/lib/content";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "done";

export function DemoForm({ interest = "billing" }: { interest?: string }) {
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
      <div className="card form-card stack center-text" style={{ justifyItems: "center" }}>
        <span className="gem sage" style={{ width: 52, height: 52 }}>
          <Check width={22} height={22} aria-hidden />
        </span>
        <h2 className="h2" style={{ fontSize: "2rem" }}>
          Thank you, you&apos;re <em>booked</em> in.
        </h2>
        <p className="muted" style={{ maxWidth: "26rem" }}>
          Our team will reach out within one business day to schedule your 30-minute demo. You can
          also write to us at {site.email}.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Book another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card form-card">
      <div className="fields">
        <Field label="Full name" id="name">
          <input id="name" name="name" required autoComplete="name" placeholder="Aarav Mehta" className="input" />
        </Field>
        <Field label="Work email" id="email">
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className="input" />
        </Field>
        <Field label="Company" id="company">
          <input id="company" name="company" required autoComplete="organization" placeholder="Your business or institute" className="input" />
        </Field>
        <Field label="Phone" id="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" className="input" />
        </Field>
        <Field label="Interested in" id="service" full>
          <select id="service" name="service" required className="input" defaultValue={interest}>
            <option value="billing">Seven14 Billing System</option>
            <option value="erp">Seven14 Education ERP</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Type of organisation" id="type">
          <select id="type" name="type" required className="input" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <optgroup label="Business">
              {billingIndustries.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Education">
              {erpAudiences.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name}
                </option>
              ))}
            </optgroup>
            <option value="other">Something else</option>
          </select>
        </Field>
        <Field label="Branches or centres" id="branches">
          <select id="branches" name="branches" className="input" defaultValue="1">
            <option value="1">1</option>
            <option value="2-5">2–5</option>
            <option value="6-20">6–20</option>
            <option value="20+">20+</option>
          </select>
        </Field>
        <Field label="What would you like to see?" id="message" full>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your current setup and what you'd like to improve…"
            className="input"
          />
        </Field>
      </div>
      <Button type="submit" block className="mt-3" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="spin" aria-hidden /> Sending…
          </>
        ) : (
          "Book my demo"
        )}
      </Button>
      <p className="faint small center-text mt-2">
        By submitting, you agree to be contacted about Seven14 Tech Studio. We never share your data.
      </p>
    </form>
  );
}

function Field({ label, id, full, children }: { label: string; id: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={`field${full ? " full" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
