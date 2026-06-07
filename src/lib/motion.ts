import gsap from "gsap";

/** Split a node's text into per-char spans wrapped in mask spans for reveal animations. */
export function splitChars(el: HTMLElement, opts: { wordClass?: string; charClass?: string; maskClass?: string } = {}) {
  const original = el.dataset.s14Original ?? el.innerText;
  el.dataset.s14Original = original;
  el.innerHTML = "";

  const frag = document.createDocumentFragment();
  const chars: HTMLElement[] = [];

  original.split(/(\s+)/).forEach((token) => {
    if (/^\s+$/.test(token)) {
      const sp = document.createElement("span");
      sp.style.display = "inline-block";
      sp.style.whiteSpace = "pre";
      sp.textContent = token;
      frag.appendChild(sp);
      return;
    }
    const word = document.createElement("span");
    word.style.display = "inline-block";
    word.style.whiteSpace = "nowrap";
    if (opts.wordClass) word.className = opts.wordClass;

    Array.from(token).forEach((ch) => {
      const mask = document.createElement("span");
      mask.style.display = "inline-block";
      mask.style.overflow = "hidden";
      mask.style.verticalAlign = "top";
      if (opts.maskClass) mask.className = opts.maskClass;

      const c = document.createElement("span");
      c.style.display = "inline-block";
      c.style.willChange = "transform, opacity";
      c.textContent = ch;
      if (opts.charClass) c.className = opts.charClass;

      mask.appendChild(c);
      word.appendChild(mask);
      chars.push(c);
    });
    frag.appendChild(word);
  });

  el.appendChild(frag);
  return chars;
}

/** Magnetic mouse-follow on a button-like element. */
export function magnetic(el: HTMLElement, strength = 0.25, dampen = 0.4) {
  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    gsap.to(el, { x: x * strength, y: y * (strength + 0.04), duration: dampen, ease: "power3.out" });
  };
  const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  };
}

/** Cursor-tracked --mx/--my CSS variables for a radial glow inside a card. */
export function mouseSpotlight(el: HTMLElement) {
  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
  };
  el.addEventListener("mousemove", onMove);
  return () => el.removeEventListener("mousemove", onMove);
}

/** Animate a number from 0 to target with formatting. */
export function countUp(
  el: HTMLElement,
  to: number,
  opts: { duration?: number; ease?: string; suffix?: string; prefix?: string; format?: (n: number) => string } = {}
) {
  const obj = { v: 0 };
  const fmt = opts.format ?? ((n: number) => `${opts.prefix ?? ""}${Math.round(n)}${opts.suffix ?? ""}`);
  return gsap.to(obj, {
    v: to,
    duration: opts.duration ?? 1.6,
    ease: opts.ease ?? "power3.out",
    onUpdate: () => { el.textContent = fmt(obj.v); },
  });
}

/** Soft fade-up reveal for any element, ScrollTrigger-driven. */
export function revealOnScroll(el: HTMLElement, opts: { y?: number; delay?: number; duration?: number; trigger?: Element | null } = {}) {
  return gsap.from(el, {
    y: opts.y ?? 28,
    opacity: 0,
    duration: opts.duration ?? 0.9,
    delay: opts.delay ?? 0,
    ease: "power3.out",
    scrollTrigger: { trigger: opts.trigger ?? el, start: "top 85%" },
  });
}
