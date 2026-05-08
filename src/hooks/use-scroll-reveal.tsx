import { useEffect } from "react";

/**
 * Auto-reveals sections and elements with [data-reveal] as they enter the viewport.
 * Mount once at the page root.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const selector = "section, [data-reveal]";
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));

    targets.forEach((el) => {
      // Skip the hero (first section) so it shows immediately on load
      if (el.tagName === "SECTION" && el === document.querySelector("section")) return;
      el.classList.add("reveal-init");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => {
      if (el.classList.contains("reveal-init")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
