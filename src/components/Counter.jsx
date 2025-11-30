"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Counter({
  end,
  duration = 2000,
  compact = false,
  plus = false,
  separator = false,
  className = "",
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  const easeOutQuad = (t) => t * (2 - t);

  function formatNumber(n) {
    if (compact && Math.abs(n) >= 1000) {
      const k = n / 1000;
      const formatted = k >= 10 ? Math.round(k) : Math.round(k * 10) / 10;
      return `${formatted}${plus ? "K+" : "K"}`;
    }
    if (separator) return Math.round(n).toLocaleString();
    return Math.round(n);
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // WHEN VISIBLE → start animation
          if (entry.isIntersecting) {
            const startTime = performance.now();
            const startVal = 0;
            const target = Number(end);

            function animate(now) {
              const elapsed = now - startTime;
              const t = Math.min(1, elapsed / duration);
              const eased = easeOutQuad(t);
              setValue(startVal + (target - startVal) * eased);

              if (t < 1) requestAnimationFrame(animate);
            }

            requestAnimationFrame(animate);
          }
          // WHEN NOT VISIBLE → reset back to 0
          else {
            setValue(0);
          }
        });
      },
      { threshold: 0.4 } // 40% visible needed
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {formatNumber(value)}
    </span>
  );
}
