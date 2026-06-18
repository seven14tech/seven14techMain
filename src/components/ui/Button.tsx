import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white shadow-brand-glow hover:bg-brand-bright active:scale-[0.98]",
        secondary:
          "bg-surface-2 text-fg ring-hairline hover:bg-surface-3 active:scale-[0.98]",
        ghost: "text-fg-muted hover:text-fg hover:bg-white/5",
        outline:
          "border border-border-strong text-fg hover:border-brand/60 hover:text-white active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CommonProps = VariantProps<typeof button> & { className?: string };

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  const classes = cn(button({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={classes} {...rest} />
      );
    }
    return <Link href={href} className={classes} {...rest} />;
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return <button type={type} className={classes} {...rest} />;
}
