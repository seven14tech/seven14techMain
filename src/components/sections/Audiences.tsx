import { audiences } from "@/lib/content";
import { Lotus } from "@/components/ornament/Ornaments";

/** Monochrome chips naming who the products are built for. */
export function Audiences() {
  return (
    <section className="trust" aria-label="Who we build for">
      <div className="container">
        <p className="reveal">Built for businesses and institutes across India</p>
        <div className="chips reveal">
          {audiences.map((name) => (
            <span key={name} className="chip">
              <Lotus size={15} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
