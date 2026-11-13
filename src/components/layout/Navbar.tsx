"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  // Remember which page the menu was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((v: boolean) => boolean)) =>
    setOpenOn((typeof next === "function" ? next(open) : next) ? pathname : null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Logo />
          <nav className="nav" aria-label="Primary">
            {primaryNav.map((l) => (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Button href="/contact" variant="secondary" size="sm">
              Contact
            </Button>
            <Button href="/contact" size="sm">
              Book a demo
            </Button>
            <button
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <div id="mobile-nav" className={`mobile-nav${open ? " open" : ""}`} aria-hidden={!open}>
        {[...primaryNav, { label: "Contact", href: "/contact" }].map((l) => (
          <Link key={l.href + l.label} href={l.href} className="row" tabIndex={open ? 0 : -1}>
            {l.label}
            <ArrowUpRight width={18} height={18} aria-hidden />
          </Link>
        ))}
        <Button href="/contact" block arrow tabIndex={open ? 0 : -1}>
          Book a demo
        </Button>
      </div>
    </>
  );
}
