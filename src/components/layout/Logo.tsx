import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="Seven14 Tech Studio, home" className="logo">
      <span className="logo-mark" aria-hidden>
        7<sub>14</sub>
      </span>
      <span className="logo-word">
        Seven14<span>Tech Studio</span>
      </span>
    </Link>
  );
}
