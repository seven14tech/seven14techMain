"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { modules } from "@/lib/content";
import { cn } from "@/lib/utils";

export function EcosystemMap() {
  const [active, setActive] = useState<number | null>(null);
  const nodes = modules;
  const n = nodes.length;
  const radius = 42; // % of container

  return (
    <Section id="ecosystem" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-dot opacity-[0.22] mask-fade-b" />
      <SectionHeading
        eyebrow="One connected platform"
        title={<>Ten modules. <span className="text-gradient-brand">One operating system.</span></>}
        description="Every part of your business runs on shared, real-time data — so a sale updates inventory, finance and CRM the instant it happens."
      />

      <Reveal className="relative mx-auto mt-16 aspect-square w-full max-w-2xl" stagger>
        {/* Connector lines */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          {nodes.map((_, i) => {
            const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            const isActive = active === i;
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke={isActive ? "var(--color-brand)" : "rgba(255,255,255,0.1)"}
                strokeWidth={isActive ? 0.6 : 0.3}
                strokeDasharray={isActive ? "0" : "1.4 1.4"}
                className="transition-all duration-300"
              />
            );
          })}
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.2" />
        </svg>

        {/* Central hub */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2" data-reveal-item>
          <div className="relative grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-brand-bright to-brand-deep text-center shadow-brand-glow sm:h-28 sm:w-28">
            <div className="absolute inset-0 animate-[pulse-glow_3.5s_ease-in-out_infinite] rounded-2xl bg-brand/40 blur-xl" />
            <div className="relative">
              <div className="font-display text-xl font-bold text-white sm:text-2xl">7/14</div>
              <div className="text-[9px] font-medium uppercase tracking-wider text-white/80">Platform</div>
            </div>
          </div>
        </div>

        {/* Orbiting nodes */}
        {nodes.map((m, i) => {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          const Icon = m.icon;
          const isActive = active === i;
          return (
            <button
              key={m.id}
              data-reveal-item
              data-cursor
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              aria-label={m.name}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-xl border transition-all duration-300 sm:h-14 sm:w-14",
                  isActive
                    ? "scale-110 border-brand/60 bg-surface-2"
                    : "border-border bg-surface/80 backdrop-blur",
                )}
                style={isActive ? { boxShadow: `0 0 30px -6px ${m.accent}` } : undefined}
              >
                <Icon
                  className="h-5 w-5 transition-colors sm:h-6 sm:w-6"
                  style={{ color: isActive ? m.accent : "var(--color-fg-muted)" }}
                />
              </span>
            </button>
          );
        })}

        {/* Center detail readout */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          <div
            className={cn(
              "max-w-xs rounded-xl border border-border-strong bg-surface/90 px-4 py-3 text-center backdrop-blur transition-all duration-300",
              active !== null ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
          >
            <div className="text-sm font-semibold text-fg">
              {active !== null ? nodes[active].name : ""}
            </div>
            <div className="mt-0.5 text-xs text-fg-muted">
              {active !== null ? nodes[active].description : ""}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
