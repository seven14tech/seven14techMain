import type { Industry } from "@/lib/content";
import { AccordionClient } from "./IndustriesClient";

/** Server wrapper: renders the icons here so only plain elements reach the client. */
export function IndustriesAccordion({ items }: { items: Industry[] }) {
  return (
    <AccordionClient
      items={items.map(({ icon: Icon, ...rest }) => ({
        ...rest,
        icon: <Icon width={18} height={18} aria-hidden />,
      }))}
    />
  );
}
