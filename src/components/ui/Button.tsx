import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "cobalt" | "secondary";

type Props = {
  href?: string;
  variant?: Variant;
  size?: "md" | "sm";
  arrow?: boolean;
  block?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({ href, variant = "primary", size = "md", arrow, block, className, children, ...rest }: Props) {
  const cls = cn("btn", `btn-${variant}`, size === "sm" && "btn-sm", block && "btn-block", className);
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="arrow" aria-hidden />}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls} data-magnetic>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} data-magnetic {...rest}>
      {inner}
    </button>
  );
}
