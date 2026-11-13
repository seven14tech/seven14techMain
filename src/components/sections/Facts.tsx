import { facts } from "@/lib/content";
import { Head } from "@/components/ui/Head";

export function Facts() {
  return (
    <section className="section section-alt">
      <div className="container stack-lg">
        <Head
          align="row"
          eyebrow="By the numbers"
          title={
            <>
              Two products, built <em>in-house</em>.
            </>
          }
          lead="We design, build and support every line of the billing system and the ERP ourselves, so changes ship fast and questions reach the people who wrote the code."
        />
        <div className="stats reveal">
          {facts.map((s) => (
            <div key={s.label} className="stat">
              <div className="value">{s.value}</div>
              <p className="label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
