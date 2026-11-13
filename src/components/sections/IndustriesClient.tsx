"use client";

import { useState } from "react";
import type { Industry } from "@/lib/content";

export type AccordionItem = Omit<Industry, "icon"> & { icon: React.ReactNode };

const washes = [
  "radial-gradient(80% 70% at 100% 0%, rgba(46,91,255,.14), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(4,203,255,.1), transparent 70%)",
  "radial-gradient(80% 70% at 100% 0%, rgba(246,148,71,.18), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(234,108,30,.08), transparent 70%)",
  "radial-gradient(80% 70% at 100% 0%, rgba(34,197,94,.13), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(159,185,255,.14), transparent 70%)",
  "radial-gradient(80% 70% at 100% 0%, rgba(159,185,255,.24), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(167,139,250,.1), transparent 70%)",
  "radial-gradient(80% 70% at 100% 0%, rgba(234,108,30,.12), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(246,148,71,.1), transparent 70%)",
  "radial-gradient(80% 70% at 100% 0%, rgba(14,181,254,.15), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(46,91,255,.08), transparent 70%)",
];

/** Horizontal accordion: one item open at a time; stacks vertically on small screens. */
export function AccordionClient({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="haccordion reveal">
      {items.map((ind, i) => {
        const expanded = open === i;
        return (
          <button
            key={ind.id}
            id={ind.id}
            type="button"
            className="hpanel"
            aria-expanded={expanded}
            aria-controls={`panel-${ind.id}`}
            onClick={() => setOpen(i)}
            onMouseEnter={() => window.matchMedia("(min-width: 1021px)").matches && setOpen(i)}
            onFocus={() => setOpen(i)}
          >
            <span className="wash" style={{ background: washes[i % washes.length] }} aria-hidden />
            <span className="icon-top">
              <span className="hicon">
                {ind.icon}
              </span>
            </span>
            <span className="collapsed-label" aria-hidden={expanded}>
              <span>{ind.name}</span>
            </span>
            <span className="content" id={`panel-${ind.id}`} role="region" aria-hidden={!expanded}>
              <span className="eyebrow">{ind.name}</span>
              <span className="serif">{ind.headline}</span>
              <span className="muted" style={{ maxWidth: "30rem" }}>
                {ind.description}
              </span>
              <span className="tags">
                {ind.points.map((p) => (
                  <span key={p} className="tag">
                    {p}
                  </span>
                ))}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
