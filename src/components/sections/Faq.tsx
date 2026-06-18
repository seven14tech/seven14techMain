"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient-brand">answered</span></>}
          description="Everything you need to know about billing, multi-outlet operations, security and getting started."
        />

        <Reveal stagger className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                data-reveal-item
                className={cn(
                  "overflow-hidden rounded-xl border transition-colors",
                  isOpen ? "border-border-strong bg-surface/70" : "border-border bg-surface/40",
                )}
              >
                <button
                  data-cursor
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-fg sm:text-base">{f.q}</span>
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-fg-muted transition-transform duration-300",
                      isOpen && "rotate-45 text-brand",
                    )}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-fg-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
