import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  containerClassName,
  full = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  /** skip the inner container (for full-bleed sections) */
  full?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 md:py-28 lg:py-32", className)}
    >
      {full ? children : <div className={cn("container-page", containerClassName)}>{children}</div>}
    </section>
  );
}
