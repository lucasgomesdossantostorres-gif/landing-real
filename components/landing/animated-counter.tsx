"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
};

export default function AnimatedCounter({
  end,
  duration = 1800,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) {
      return;
    }

    started.current = true;

    const startTime = performance.now();
    let animationFrame: number;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(end * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, end]);

  return (
    <span>
      +{new Intl.NumberFormat("pt-BR").format(value)}
    </span>
  );
}