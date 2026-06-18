import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 md:pt-44 md:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.16] mask-fade-b" />
        <div className="absolute -top-20 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-[100%] bg-brand/10 blur-[140px]" />
      </div>
      <div className="container-page">
        <Reveal stagger className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div data-reveal-item>
            <Badge>{eyebrow}</Badge>
          </div>
          <h1
            data-reveal-item
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p data-reveal-item className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted md:text-lg">
            {description}
          </p>
          {children && <div data-reveal-item className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
