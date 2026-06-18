"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { AppFrame } from "@/components/visual/AppFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BillingDashboard,
  POSDashboard,
  InventoryDashboard,
  CRMDashboard,
  AnalyticsDashboard,
} from "@/components/visual/Dashboards";
import { cn } from "@/lib/utils";

type Screen = {
  id: string;
  step: string;
  title: string;
  desc: string;
  frame: string;
  render: () => React.ReactNode;
};

const screens: Screen[] = [
  {
    id: "billing",
    step: "01",
    title: "It starts with the bill",
    desc: "Ring up an order in seconds with GST handled, receipts sent digitally, and every payment method accepted at the counter.",
    frame: "billing · app.seven14.tech",
    render: () => <BillingDashboard />,
  },
  {
    id: "pos",
    step: "02",
    title: "Built for the rush",
    desc: "A multi-terminal POS that keeps service moving, fires orders straight to the kitchen, and works even when the internet doesn't.",
    frame: "pos · app.seven14.tech",
    render: () => <POSDashboard />,
  },
  {
    id: "inventory",
    step: "03",
    title: "Stock that updates itself",
    desc: "Every sale depletes inventory in real time, with low-stock alerts and batch tracking across all your outlets.",
    frame: "inventory · app.seven14.tech",
    render: () => <InventoryDashboard />,
  },
  {
    id: "crm",
    step: "04",
    title: "Customers who come back",
    desc: "Unified profiles, purchase history and loyalty programs turn one-time buyers into regulars — automatically.",
    frame: "crm · app.seven14.tech",
    render: () => <CRMDashboard />,
  },
  {
    id: "analytics",
    step: "05",
    title: "The full picture, live",
    desc: "Revenue, orders and outlet comparisons update the moment a bill closes — so you decide with facts, not hunches.",
    frame: "analytics · app.seven14.tech",
    render: () => <AnalyticsDashboard />,
  },
];

export function ProductStory() {
  const [enhance, setEnhance] = useState(false);

  useEffect(() => {
    const ok = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Sticky scroll experience is desktop-friendly; enable for >=768px & motion ok.
    setEnhance(ok && window.innerWidth >= 768);
  }, []);

  return (
    <section id="story" className="relative">
      <div className="container-page py-20 md:pt-28 md:pb-10">
        <SectionHeading
          eyebrow="The product, end to end"
          title={<>Follow one order through <span className="text-gradient-brand">the whole platform</span></>}
          description="Scroll to watch a single sale flow from the bill to the boardroom — billing, POS, inventory, CRM and analytics, all in sync."
        />
      </div>
      {enhance ? <StoryAnimated /> : <StoryStatic />}
    </section>
  );
}

/* Enhanced: CSS-sticky stage + GSAP scrubbed cross-fade ------------------- */

function StoryAnimated() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const visuals = gsap.utils.toArray<HTMLElement>("[data-screen-visual]");
      const texts = gsap.utils.toArray<HTMLElement>("[data-screen-text]");
      const N = visuals.length;

      gsap.set(visuals, { autoAlpha: 0, scale: 0.96, yPercent: 5 });
      gsap.set(visuals[0], { autoAlpha: 1, scale: 1, yPercent: 0 });
      gsap.set(texts, { autoAlpha: 0, y: 24 });
      gsap.set(texts[0], { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          onUpdate: (self) => {
            const idx = Math.min(N - 1, Math.round(self.progress * (N - 1)));
            setActive(idx);
          },
        },
      });

      for (let i = 1; i < N; i++) {
        tl.to(visuals[i - 1], { autoAlpha: 0, scale: 0.96, yPercent: -5, duration: 0.5 }, i - 1)
          .fromTo(
            visuals[i],
            { autoAlpha: 0, scale: 0.96, yPercent: 5 },
            { autoAlpha: 1, scale: 1, yPercent: 0, duration: 0.5 },
            i - 1 + 0.25,
          )
          .to(texts[i - 1], { autoAlpha: 0, y: -24, duration: 0.4 }, i - 1)
          .fromTo(
            texts[i],
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.4 },
            i - 1 + 0.3,
          );
      }

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.vars.trigger === root.current && t.kill());
      };
    },
    { scope: root },
  );

  return (
    <div ref={root} style={{ height: `${screens.length * 90}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-page grid w-full items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Text column */}
          <div className="relative">
            {/* step rail */}
            <div className="mb-6 flex gap-2">
              {screens.map((s, i) => (
                <span
                  key={s.id}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors duration-300",
                    i <= active ? "bg-brand" : "bg-white/10",
                  )}
                />
              ))}
            </div>
            <div className="relative h-56 sm:h-52">
              {screens.map((s) => (
                <div
                  key={s.id}
                  data-screen-text
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="font-mono text-sm text-brand">{s.step} / 05</div>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-fg-muted">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div className="relative h-[340px] sm:h-[440px]" style={{ perspective: "1600px" }}>
            {screens.map((s) => (
              <div key={s.id} data-screen-visual className="absolute inset-0">
                <AppFrame title={s.frame} className="h-full shadow-brand-glow">
                  <div className="h-[300px] sm:h-[396px]">{s.render()}</div>
                </AppFrame>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Fallback: accessible stacked layout (mobile / reduced-motion) ----------- */

function StoryStatic() {
  return (
    <div className="container-page space-y-16 pb-10">
      {screens.map((s) => (
        <div key={s.id} className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="font-mono text-sm text-brand">{s.step} / 05</div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">{s.title}</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-fg-muted">{s.desc}</p>
          </div>
          <AppFrame title={s.frame} className="ring-hairline">
            <div className="h-[300px] sm:h-[360px]">{s.render()}</div>
          </AppFrame>
        </div>
      ))}
    </div>
  );
}
