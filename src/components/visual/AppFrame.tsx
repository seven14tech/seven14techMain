import { cn } from "@/lib/utils";

/** A browser/app chrome wrapper that makes mock UIs read as real product screenshots. */
export function AppFrame({
  title = "app.seven14.tech",
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-surface shadow-elevate",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1">
          <div className="mx-auto w-fit rounded-md bg-bg/60 px-3 py-1 font-mono text-[11px] text-fg-subtle">
            {title}
          </div>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
