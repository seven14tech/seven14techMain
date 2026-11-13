import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Head } from "@/components/ui/Head";

export function Faq() {
  return (
    <section className="section ruled" id="faq">
      <div className="container split">
        <div className="sticky">
          <Head
            eyebrow="Questions"
            title={
              <>
                Asked, and <em>answered</em>.
              </>
            }
            lead="Can't find what you need? Write to us and a person, not a bot, will reply within a business day."
          />
        </div>
        <div className="faq reveal">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span className="plus" aria-hidden>
                  <Plus />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
