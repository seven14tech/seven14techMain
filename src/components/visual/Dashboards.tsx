import {
  Receipt,
  ScanLine,
  Boxes,
  Users,
  BarChart3,
  Search,
  Plus,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { AreaChart, BarChart, DonutChart, Sparkline } from "./Charts";

/* Small shared atoms ------------------------------------------------------ */

function Sidebar({ active }: { active: number }) {
  const icons = [Receipt, ScanLine, Boxes, Users, BarChart3];
  return (
    <div className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r border-border bg-bg/40 py-4 sm:flex">
      <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-bright to-brand-deep text-xs font-bold text-white">
        7
      </div>
      {icons.map((Icon, i) => (
        <div
          key={i}
          className={`grid h-9 w-9 place-items-center rounded-lg ${
            i === active ? "bg-brand/15 text-brand" : "text-fg-subtle"
          }`}
        >
          <Icon className="h-[18px] w-[18px]" />
        </div>
      ))}
    </div>
  );
}

function Pill({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "good" | "warn" | "brand" }) {
  const tones = {
    muted: "bg-white/5 text-fg-muted",
    good: "bg-emerald/10 text-emerald",
    warn: "bg-amber/10 text-amber",
    brand: "bg-brand/15 text-brand",
  };
  return (
    <span className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

function Stat({
  label,
  value,
  delta,
  up = true,
}: {
  label: string;
  value: string;
  delta: string;
  up?: boolean;
}) {
  return (
    <div className="rounded-lg border border-border bg-bg/40 p-3">
      <div className="text-[11px] text-fg-subtle">{label}</div>
      <div className="mt-1 font-display text-lg font-semibold text-fg">{value}</div>
      <div className={`mt-1 flex items-center gap-1 text-[11px] ${up ? "text-emerald" : "text-brand"}`}>
        {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        {delta}
      </div>
    </div>
  );
}

function Header({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
      <div>
        <div className="font-display text-sm font-semibold text-fg">{title}</div>
        <div className="text-[11px] text-fg-subtle">{sub}</div>
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        <div className="flex items-center gap-1.5 rounded-md border border-border bg-bg/40 px-2.5 py-1.5 text-[11px] text-fg-subtle">
          <Search className="h-3 w-3" /> Search
        </div>
        <div className="flex items-center gap-1 rounded-md bg-brand px-2.5 py-1.5 text-[11px] font-medium text-white">
          <Plus className="h-3 w-3" /> New
        </div>
      </div>
    </div>
  );
}

/* Dashboards -------------------------------------------------------------- */

export function BillingDashboard() {
  const items = [
    { n: "Margherita Pizza", q: "× 2", p: "₹598" },
    { n: "Garlic Bread", q: "× 1", p: "₹149" },
    { n: "Cold Coffee", q: "× 3", p: "₹447" },
    { n: "Tiramisu", q: "× 1", p: "₹229" },
  ];
  return (
    <div className="flex h-full bg-surface">
      <Sidebar active={0} />
      <div className="flex-1">
        <Header title="Billing" sub="Order #SR-10482 · Table 7" />
        <div className="grid gap-4 p-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-2.5">
            {items.map((it) => (
              <div
                key={it.n}
                className="flex items-center justify-between rounded-lg border border-border bg-bg/30 px-3.5 py-2.5"
              >
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-md bg-white/5" />
                  <span className="text-xs font-medium text-fg">{it.n}</span>
                  <Pill>{it.q}</Pill>
                </div>
                <span className="font-mono text-xs text-fg">{it.p}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-border bg-bg/30 p-4">
            <div className="space-y-2 text-xs">
              <Row k="Subtotal" v="₹1,423" />
              <Row k="GST (5%)" v="₹71" />
              <Row k="Discount" v="−₹100" />
              <div className="my-2 border-t border-border" />
              <Row k="Total" v="₹1,394" strong />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-md bg-white/5 py-2 text-center text-[11px] text-fg-muted">UPI</div>
              <div className="rounded-md bg-brand py-2 text-center text-[11px] font-semibold text-white">
                Charge ₹1,394
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={strong ? "font-medium text-fg" : "text-fg-subtle"}>{k}</span>
      <span className={`font-mono ${strong ? "font-semibold text-fg" : "text-fg-muted"}`}>{v}</span>
    </div>
  );
}

export function POSDashboard() {
  const tiles = ["Pizza", "Burgers", "Beverages", "Desserts", "Sides", "Combos"];
  return (
    <div className="flex h-full bg-surface">
      <Sidebar active={1} />
      <div className="flex-1">
        <Header title="Point of Sale" sub="Terminal 2 · Indiranagar outlet" />
        <div className="grid gap-4 p-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid grid-cols-3 gap-2.5">
            {tiles.map((t, i) => (
              <div
                key={t}
                className={`flex aspect-[4/3] flex-col justify-between rounded-lg border p-3 ${
                  i === 0 ? "border-brand/40 bg-brand/10" : "border-border bg-bg/30"
                }`}
              >
                <span className="h-6 w-6 rounded-md bg-white/10" />
                <span className="text-[11px] font-medium text-fg">{t}</span>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border bg-bg/30 p-4">
            <div className="text-[11px] text-fg-subtle">Current ticket</div>
            <div className="mt-3 space-y-2.5">
              {["Pepperoni × 1", "Coke × 2", "Fries × 1"].map((x) => (
                <div key={x} className="flex justify-between text-xs">
                  <span className="text-fg-muted">{x}</span>
                  <span className="font-mono text-fg">₹{x.length * 37}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-brand py-2.5 text-center text-xs font-semibold text-white">
              Send to Kitchen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InventoryDashboard() {
  const rows = [
    { n: "Mozzarella Cheese", s: 82, tone: "good" as const, t: "In stock" },
    { n: "Tomato Purée", s: 24, tone: "warn" as const, t: "Low stock" },
    { n: "Olive Oil (5L)", s: 60, tone: "good" as const, t: "In stock" },
    { n: "Coffee Beans", s: 12, tone: "warn" as const, t: "Reorder" },
  ];
  return (
    <div className="flex h-full bg-surface">
      <Sidebar active={2} />
      <div className="flex-1">
        <Header title="Inventory" sub="Central kitchen · 412 SKUs" />
        <div className="space-y-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            <Stat label="Stock value" value="₹8.4L" delta="+4.2%" />
            <Stat label="Low stock" value="14" delta="−3 today" up={false} />
            <Stat label="Wastage" value="1.8%" delta="−0.6%" />
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-bg/30">
            {rows.map((r, i) => (
              <div
                key={r.n}
                className={`flex items-center gap-4 px-4 py-3 ${i ? "border-t border-border" : ""}`}
              >
                <span className="flex-1 text-xs font-medium text-fg">{r.n}</span>
                <div className="hidden h-1.5 w-28 overflow-hidden rounded-full bg-white/8 sm:block">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${r.s}%`,
                      background: r.tone === "warn" ? "var(--color-amber)" : "var(--color-emerald)",
                    }}
                  />
                </div>
                <Pill tone={r.tone}>{r.t}</Pill>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CRMDashboard() {
  const customers = [
    { n: "Ananya R.", v: "₹42,180", o: 38, badge: "Gold" },
    { n: "Karthik S.", v: "₹28,640", o: 24, badge: "Silver" },
    { n: "Meera P.", v: "₹61,920", o: 52, badge: "Platinum" },
  ];
  return (
    <div className="flex h-full bg-surface">
      <Sidebar active={3} />
      <div className="flex-1">
        <Header title="CRM & Loyalty" sub="12,480 customers · 3 active campaigns" />
        <div className="grid gap-4 p-5 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-3">
            {customers.map((c) => (
              <div
                key={c.n}
                className="flex items-center gap-3 rounded-lg border border-border bg-bg/30 px-3.5 py-3"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand/15 text-xs font-semibold text-brand">
                  {c.n[0]}
                </span>
                <div className="flex-1">
                  <div className="text-xs font-medium text-fg">{c.n}</div>
                  <div className="text-[11px] text-fg-subtle">{c.o} orders</div>
                </div>
                <span className="font-mono text-xs text-fg">{c.v}</span>
                <Pill tone="brand">{c.badge}</Pill>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 rounded-lg border border-border bg-bg/30 p-4">
            <div className="text-[11px] text-fg-subtle">Repeat purchase rate</div>
            <div className="flex items-center gap-4">
              <DonutChart
                size={92}
                thickness={14}
                segments={[
                  { value: 64, color: "var(--color-brand)" },
                  { value: 36, color: "rgba(255,255,255,0.08)" },
                ]}
                className="h-20 w-20"
              />
              <div>
                <div className="font-display text-2xl font-semibold text-fg">64%</div>
                <div className="text-[11px] text-emerald">+9% vs last quarter</div>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-2 rounded-md bg-emerald/10 px-3 py-2 text-[11px] text-emerald">
              <CheckCircle2 className="h-3.5 w-3.5" /> Loyalty campaign live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsDashboard() {
  return (
    <div className="flex h-full bg-surface">
      <Sidebar active={4} />
      <div className="flex-1">
        <Header title="Analytics" sub="All outlets · Last 30 days" />
        <div className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Revenue" value="₹62.4L" delta="+12.8%" />
            <Stat label="Orders" value="18,204" delta="+6.1%" />
            <Stat label="Avg ticket" value="₹343" delta="+3.4%" />
            <Stat label="Refunds" value="0.9%" delta="−0.2%" up={false} />
          </div>
          <div className="grid gap-3 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-lg border border-border bg-bg/30 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] text-fg-subtle">Revenue trend</span>
                <Pill tone="good">+12.8%</Pill>
              </div>
              <AreaChart
                data={[18, 22, 19, 28, 25, 33, 30, 38, 36, 44, 41, 52]}
                className="h-28 w-full"
              />
            </div>
            <div className="rounded-lg border border-border bg-bg/30 p-4">
              <div className="mb-3 text-[11px] text-fg-subtle">Sales by outlet</div>
              <BarChart
                data={[40, 64, 52, 78, 58, 90]}
                color="var(--color-amber)"
                className="h-28 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AreaChart, BarChart, DonutChart, Sparkline, AlertTriangle };
