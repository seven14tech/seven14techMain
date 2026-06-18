import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Seven14 Tech Studio — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      {/* Mark: "7" over "14" */}
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-bright to-brand-deep shadow-brand-glow">
        <span className="flex flex-col items-center justify-center leading-none">
          <span className="font-display text-[15px] font-bold text-white">7</span>
          <span className="-mt-0.5 font-display text-[9px] font-semibold tracking-tight text-white/85">
            14
          </span>
        </span>
        <span className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/15" />
      </span>
      {/* Wordmark: Seven14 Tech */}
      <span className="font-display text-[17px] font-semibold tracking-tight text-fg">
        Seven<span className="text-gradient-brand">14</span>
        <span className="font-medium text-fg-subtle"> Tech</span>
      </span>
    </Link>
  );
}
