"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site";
import { modules } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[80] flex justify-center px-3 pt-3 md:px-4 md:pt-4">
      <nav
        onMouseLeave={() => setMenu(null)}
        className={cn(
          "relative w-full max-w-6xl rounded-2xl border transition-all duration-300",
          scrolled || menu
            ? "border-border-strong bg-bg/80 shadow-elevate backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="flex h-15 items-center justify-between gap-4 px-4 py-2.5 md:px-5">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <button
              data-cursor
              onMouseEnter={() => setMenu("product")}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                menu === "product" ? "text-fg" : "text-fg-muted hover:text-fg",
              )}
            >
              Product
            </button>
            {primaryNav
              .filter((l) => l.label !== "Product")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setMenu(null)}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-fg"
                      : "text-fg-muted hover:text-fg",
                  )}
                >
                  {link.label}
                </Link>
              ))}
          </div>

          <div className="flex items-center gap-2">
            <Button href="/contact" variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              Book Demo
            </Button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl text-fg lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        <div
          onMouseEnter={() => setMenu("product")}
          className={cn(
            "absolute inset-x-0 top-full hidden origin-top pt-2 lg:block",
            menu === "product"
              ? "pointer-events-auto opacity-100 translate-y-0"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
          style={{ transition: "opacity 220ms var(--ease-out-expo), transform 220ms var(--ease-out-expo)" }}
        >
          <div className="glass overflow-hidden rounded-2xl border-border-strong shadow-elevate">
            <div className="grid grid-cols-2 gap-1 p-3 xl:grid-cols-3">
              {modules.slice(0, 9).map((m) => {
                const Icon = m.icon;
                return (
                  <Link
                    key={m.id}
                    href={`/product#${m.id}`}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.04]"
                  >
                    <span
                      className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg ring-hairline"
                      style={{ backgroundColor: `color-mix(in oklab, ${m.accent} 14%, transparent)` }}
                    >
                      <Icon className="h-[18px] w-[18px]" style={{ color: m.accent }} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-fg">{m.name}</span>
                      <span className="block truncate text-xs text-fg-subtle">{m.tagline}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/product"
              className="flex items-center justify-between border-t border-border bg-white/[0.02] px-5 py-3.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              Explore the full platform
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[70] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-bg/70 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-20 rounded-2xl border border-border-strong bg-surface p-4 shadow-elevate transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <nav className="flex flex-col">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-medium text-fg hover:bg-white/5"
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-fg-subtle" />
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
            <Button href="/contact" variant="secondary" className="w-full">
              Sign in
            </Button>
            <Button href="/contact" className="w-full">
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
