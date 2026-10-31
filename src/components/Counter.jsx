import { useEffect, useRef, useState } from "react";

export default function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const element = useRef(null);

  useEffect(() => {
    let animationFrame;
    let observer;

    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const duration = 1600;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(value * eased);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        }
      }

      animationFrame = requestAnimationFrame(update);
      observer.disconnect();
    });

    if (element.current) observer.observe(element.current);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <strong ref={element}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      <span>{suffix}</span>
    </strong>
  );
}