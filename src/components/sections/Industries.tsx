"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Industries() {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active)!;

  return (
    <Section id="industries">
      <SectionHeading
        align="left"
        eyebrow="Industry solutions"
        title={<>Tuned for how <span className="text-gradient-brand">your industry</span> actually works</>}
        description="One platform, configured for the realities of each business — from fine dining to multi-city franchises."
      />

      <Reveal stagger className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        {/* Selector list */}
        <div data-reveal-item className="flex flex-col gap-1.5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isActive = ind.id === active;
            return (
              <button
                key={ind.id}
                data-cursor
                onMouseEnter={() => setActive(ind.id)}
                onClick={() => setActive(ind.id)}
                className={cn(
                  "group flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200",
                  isActive
                    ? "border-brand/40 bg-surface-2"
                    : "border-transparent hover:bg-white/[0.03]",
                )}
              >
                <span
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-lg transition-colors",
                    isActive ? "bg-brand/15 text-brand" : "bg-white/5 text-fg-subtle",
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className={cn("flex-1 text-sm font-medium", isActive ? "text-fg" : "text-fg-muted")}>
                  {ind.name}
                </span>
                <ArrowUpRight
                  className={cn(
                    "h-4 w-4 transition-all",
                    isActive ? "text-brand opacity-100" : "opacity-0 group-hover:opacity-50",
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div
          data-reveal-item
          className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface/70 p-7 ring-hairline md:p-9"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/15 blur-[100px]"
          />
          <div key={current.id} className="relative animate-[fade-in_0.4s_ease]">
            <current.icon className="h-9 w-9 text-brand" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-fg md:text-3xl">
              {current.headline}
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-fg-muted">
              {current.description}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {current.points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-bg/40 px-3.5 py-3 text-sm text-fg"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
