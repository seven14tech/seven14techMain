"use client";

import { useRef } from "react";
import { Play, ArrowRight } from "lucide-react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AppFrame } from "@/components/visual/AppFrame";
import { BillingDashboard, InventoryDashboard, AnalyticsDashboard } from "@/components/visual/Dashboards";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = prefersReducedMotion();
      const heading = root.current?.querySelector<HTMLElement>("[data-hero-title]");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (heading && !reduce) {
        const split = new SplitText(heading, { type: "chars, words", charsClass: "hero-char" });
        gsap.set(split.chars, { yPercent: 110, opacity: 0 });
        tl.to(split.chars, {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.018,
          ease: "power4.out",
        });
      } else if (heading) {
        gsap.set(heading, { opacity: 1 });
      }

      tl.from(
        "[data-hero-fade]",
        { y: 24, opacity: 0, duration: 0.8, stagger: 0.12 },
        reduce ? 0 : "-=0.5",
      );

      tl.from(
        "[data-hero-panel]",
        { y: 60, opacity: 0, scale: 0.96, duration: 1.1, stagger: 0.12, ease: "power3.out" },
        reduce ? 0 : "-=0.7",
      );

      if (reduce) return;

      // Continuous float on the floating panels
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -16 : 14,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Mouse-reactive parallax
      const panels = gsap.utils.toArray<HTMLElement>("[data-parallax]");
      const onMove = (e: MouseEvent) => {
        const rx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ry = (e.clientY / window.innerHeight - 0.5) * 2;
        panels.forEach((el) => {
          const depth = Number(el.dataset.depth || 1);
          gsap.to(el, {
            x: rx * 18 * depth,
            y: ry * 18 * depth,
            rotateX: -ry * 3 * depth,
            rotateY: rx * 4 * depth,
            duration: 0.8,
            ease: "power2.out",
          });
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background — one soft brand glow, faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.18] mask-fade-b" />
        <div
          data-float
          className="absolute left-1/2 top-[-10%] h-[520px] w-[760px] -translate-x-1/2 rounded-[100%] bg-brand/12 blur-[150px]"
        />
      </div>

      <div className="container-page">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div data-hero-fade>
            <Badge>The business operating system</Badge>
          </div>

          <h1
            data-hero-title
            className="mt-7 text-balance text-[2.4rem] font-semibold leading-[1.03] tracking-tight text-fg sm:text-5xl md:text-[3.9rem]"
          >
            Run Billing, Inventory, CRM &amp;{" "}
            <span className="text-brand">Operations</span> from one platform
          </h1>

          <p
            data-hero-fade
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted md:text-lg"
          >
            Seven14 Tech Studio helps restaurants, retail stores and growing businesses
            manage everything — from billing to analytics — in one unified operating system.
          </p>

          <div data-hero-fade className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" data-cursor>
              Book Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button href="/product" size="lg" variant="secondary" data-cursor>
              <Play className="h-4 w-4 fill-current" />
              Watch Product Tour
            </Button>
          </div>

          <div data-hero-fade className="mt-6 flex items-center gap-2 text-xs text-fg-subtle">
            <span className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-bg bg-gradient-to-br from-surface-3 to-surface-2"
                />
              ))}
            </span>
            Trusted by 1,200+ outlets across India
          </div>
        </div>

        {/* Floating dashboard composition */}
        <div
          className="relative mx-auto mt-16 max-w-5xl md:mt-20"
          style={{ perspective: "1600px" }}
        >
          <div data-hero-panel data-parallax data-depth="0.6" className="relative z-20">
            <AppFrame className="ring-hairline">
              <div className="h-[300px] sm:h-[380px] md:h-[440px]">
                <BillingDashboard />
              </div>
            </AppFrame>
          </div>

          <div
            data-hero-panel
            data-parallax
            data-float
            data-depth="1.6"
            className="absolute -left-4 top-16 z-30 hidden w-64 lg:block xl:-left-16"
          >
            <AppFrame title="inventory" className="ring-hairline shadow-brand-glow">
              <div className="h-[230px]">
                <InventoryDashboard />
              </div>
            </AppFrame>
          </div>

          <div
            data-hero-panel
            data-parallax
            data-float
            data-depth="1.3"
            className="absolute -right-4 bottom-10 z-30 hidden w-72 lg:block xl:-right-16"
          >
            <AppFrame title="analytics" className="ring-hairline">
              <div className="h-[250px]">
                <AnalyticsDashboard />
              </div>
            </AppFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
