"use client";

import { useEffect, useRef } from "react";

/**
 * useFadeIn — attaches an Intersection Observer to a ref.
 * When the element enters the viewport, the `fade-in-up is-visible` classes
 * trigger the CSS transition defined in globals.css.
 *
 * Usage:
 *   const ref = useFadeIn();
 *   <section ref={ref} className="fade-in-up">...</section>
 */
export function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
