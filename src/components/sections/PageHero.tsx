import { CornerMotif } from "@/components/ornament/Ornaments";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
};

/** Inner-page hero: same washes as the home hero, quieter framing. */
export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="hero page-hero">
      <CornerMotif position="tr" />
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow reveal">{eyebrow}</span>
          <h1 className="h1 reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
            {title}
          </h1>
          <p className="lead reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            {description}
          </p>
          {children && (
            <div className="hero-actions reveal" style={{ "--d": "180ms" } as React.CSSProperties}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
