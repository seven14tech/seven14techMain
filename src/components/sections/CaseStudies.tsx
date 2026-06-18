"use client";

import { useRef } from "react";
import { Quote } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export function CaseStudies() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      if (!track.current || !root.current) return;
      if (window.innerWidth < 768) return; // native scroll on mobile

      const getDistance = () => track.current!.scrollWidth - window.innerWidth + 48;

      const tween = gsap.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: root },
  );

  return (
    <section id="customers" ref={root} className="relative overflow-hidden py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="Customer success"
          title={<>Operators who <span className="text-gradient-brand">switched and scaled</span></>}
          description="Real results from restaurants, cafés and retail groups running on Seven14."
        />
      </div>

      <div className="mt-12 md:mt-16">
        <div
          ref={track}
          className="flex gap-5 px-5 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))] max-md:snap-x max-md:overflow-x-auto max-md:pb-4"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex w-[85vw] shrink-0 snap-center flex-col justify-between rounded-2xl border border-border bg-surface/70 p-7 ring-hairline sm:w-[440px] md:p-9"
            >
              <div>
                <Quote className="h-8 w-8 text-brand/40" />
                <p className="mt-5 text-lg leading-relaxed text-fg">{t.quote}</p>
              </div>
              <div className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-surface-3 to-surface-2 font-semibold text-fg">
                    {t.name[0]}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-fg">{t.name}</div>
                    <div className="text-xs text-fg-subtle">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-semibold text-gradient-brand">{t.metric}</div>
                  <div className="text-[11px] text-fg-subtle">{t.metricLabel}</div>
                </div>
              </div>
            </article>
          ))}
          <div className="hidden w-px shrink-0 md:block" />
        </div>
      </div>
    </section>
  );
}

export { ScrollTrigger };
