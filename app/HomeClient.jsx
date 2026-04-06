"use client";

import { useEffect } from "react";

/**
 * HomeClient — mounts Intersection Observer for all .fade-in-up elements
 * on the home page. Runs client-side only.
 */
export default function HomeClient() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null; // renders nothing — side-effect only
}
