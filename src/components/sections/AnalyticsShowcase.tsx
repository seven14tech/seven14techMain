import { TrendingUp, Users, Package, IndianRupee } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AreaChart, BarChart, DonutChart, Sparkline } from "@/components/visual/Charts";

export function AnalyticsShowcase() {
  return (
    <Section id="analytics" className="relative overflow-hidden">
      <SectionHeading
        eyebrow="Analytics, built in"
        title={<>See your business <span className="text-gradient-brand">clearly</span></>}
        description="Sales, revenue, inventory and customer analytics — rendered the instant data lands, across every outlet."
      />

      <Reveal stagger className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-3">
        {/* Revenue — wide */}
        <div data-reveal-item className="rounded-2xl border border-border bg-surface/60 p-6 ring-hairline md:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-fg-muted">
                <IndianRupee className="h-4 w-4 text-brand" /> Revenue analytics
              </div>
              <div className="mt-2 font-display text-3xl font-semibold text-fg">₹62.4L</div>
            </div>
            <span className="flex items-center gap-1 rounded-md bg-emerald/10 px-2 py-1 text-xs font-medium text-emerald">
              <TrendingUp className="h-3.5 w-3.5" /> +12.8%
            </span>
          </div>
          <AreaChart
            data={[20, 26, 22, 30, 28, 36, 33, 42, 38, 48, 45, 58]}
            className="mt-6 h-40 w-full"
          />
        </div>

        {/* Customer split — donut */}
        <div data-reveal-item className="flex flex-col rounded-2xl border border-border bg-surface/60 p-6 ring-hairline">
          <div className="flex items-center gap-2 text-sm text-fg-muted">
            <Users className="h-4 w-4 text-violet" /> Customer mix
          </div>
          <div className="mt-4 flex flex-1 items-center justify-center">
            <div className="relative">
              <DonutChart
                size={150}
                thickness={20}
                segments={[
                  { value: 52, color: "var(--color-brand)" },
                  { value: 30, color: "var(--color-violet)" },
                  { value: 18, color: "var(--color-sky)" },
                ]}
                className="h-36 w-36"
              />
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="font-display text-2xl font-semibold text-fg">12.4k</div>
                  <div className="text-[11px] text-fg-subtle">customers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-4 text-[11px]">
            <Legend color="var(--color-brand)" label="Repeat" />
            <Legend color="var(--color-violet)" label="New" />
            <Legend color="var(--color-sky)" label="Lapsed" />
          </div>
        </div>

        {/* Sales by outlet — bars */}
        <div data-reveal-item className="rounded-2xl border border-border bg-surface/60 p-6 ring-hairline">
          <div className="flex items-center gap-2 text-sm text-fg-muted">
            <TrendingUp className="h-4 w-4 text-amber" /> Sales by outlet
          </div>
          <BarChart
            data={[42, 60, 50, 78, 64, 92, 70]}
            color="var(--color-amber)"
            className="mt-6 h-28 w-full"
          />
        </div>

        {/* Inventory trend — small kpis */}
        <div data-reveal-item className="rounded-2xl border border-border bg-surface/60 p-6 ring-hairline md:col-span-2">
          <div className="flex items-center gap-2 text-sm text-fg-muted">
            <Package className="h-4 w-4 text-sky" /> Inventory trends
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { l: "Turnover", v: "7.2×", d: [3, 4, 4, 5, 6, 7] },
              { l: "Wastage", v: "1.8%", d: [4, 3, 3, 2, 2, 1] },
              { l: "Fill rate", v: "98.4%", d: [5, 5, 6, 6, 7, 7] },
              { l: "Dead stock", v: "₹0.4L", d: [6, 5, 4, 4, 3, 2] },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border border-border bg-bg/40 p-3.5">
                <div className="text-[11px] text-fg-subtle">{k.l}</div>
                <div className="mt-1 font-display text-lg font-semibold text-fg">{k.v}</div>
                <Sparkline data={k.d} className="mt-2 h-6 w-full" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-fg-muted">
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}
