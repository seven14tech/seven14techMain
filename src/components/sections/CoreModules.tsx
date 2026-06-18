"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { modules, type Module } from "@/lib/content";

function ModuleCard({ m }: { m: Module }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = m.icon;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      data-reveal-item
      data-cursor
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 ring-hairline transition-colors duration-300 hover:border-border-strong"
    >
      {/* Mouse-follow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at var(--mx,50%) var(--my,0%), color-mix(in oklab, ${m.accent} 16%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl ring-hairline"
          style={{ backgroundColor: `color-mix(in oklab, ${m.accent} 14%, transparent)` }}
        >
          <Icon className="h-6 w-6" style={{ color: m.accent }} />
        </span>
        <h3 className="mt-5 font-display text-lg font-semibold text-fg">{m.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{m.description}</p>
        <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {m.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-fg-muted">
              <Check className="h-3.5 w-3.5 shrink-0" style={{ color: m.accent }} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CoreModules() {
  return (
    <Section id="modules">
      <SectionHeading
        eyebrow="Core modules"
        title={<>Everything your business runs on, <span className="text-gradient-brand">in one place</span></>}
        description="Each module is powerful on its own and unstoppable together — sharing one source of truth across every outlet."
      />
      <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <ModuleCard key={m.id} m={m} />
        ))}
      </Reveal>
    </Section>
  );
}
