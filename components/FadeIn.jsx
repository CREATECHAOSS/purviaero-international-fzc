"use client";

import { useEffect, useRef } from "react";

/**
 * FadeIn — wraps children in a div with the fade-in-up animation.
 * The Intersection Observer fires once when the element enters the viewport.
 *
 * Props:
 *   as        — HTML element to render (default: "div")
 *   delay     — CSS transition delay in ms (default: 0)
 *   className — extra classes to forward
 *   children  — content
 */
export default function FadeIn({ as: Tag = "div", delay = 0, className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`fade-in-up ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
