import { deliverySteps } from "@/lib/content";
import { Head } from "@/components/ui/Head";

export function Process() {
  return (
    <section className="section ruled">
      <div className="container stack-lg">
        <Head
          eyebrow="How we work"
          title={
            <>
              From idea to launch, without <em>surprises</em>.
            </>
          }
        />
        <div className="arch four reveal">
          {deliverySteps.map((s, i) => (
            <div key={s.title}>
              <span className="num">{String(i + 1).padStart(2, "0")} / 04</span>
              <h3 className="h3">{s.title}</h3>
              <p className="muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
