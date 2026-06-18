import { Badge } from "./Badge";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      stagger
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <div data-reveal-item>
          <Badge>{eyebrow}</Badge>
        </div>
      )}
      <h2
        data-reveal-item
        className="max-w-3xl text-balance text-3xl font-semibold leading-[1.05] text-fg sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal-item
          className={cn(
            "max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
