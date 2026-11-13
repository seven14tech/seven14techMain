import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center" | "row";
  as?: "h1" | "h2";
  size?: "display" | "h1" | "h2";
  className?: string;
};

/** Eyebrow + serif headline (+ lead). Put one key word of the title in <em>. */
export function Head({ eyebrow, title, lead, align = "left", as: Tag = "h2", size = "h2", className }: Props) {
  if (align === "row") {
    return (
      <div className={cn("head-row reveal", className)}>
        <div className="head">
          <span className="eyebrow">{eyebrow}</span>
          <Tag className={size}>{title}</Tag>
        </div>
        {lead && <p className="lead">{lead}</p>}
      </div>
    );
  }
  return (
    <div className={cn("head reveal", align === "center" && "center", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <Tag className={size}>{title}</Tag>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
