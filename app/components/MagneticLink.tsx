"use client";

import React, { useEffect, useRef, ReactElement } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactElement; // Expecting a single React element as children
}

export default function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const mouseEnter = (e: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { top, left, width, height } = ref.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    ref.current.addEventListener("mousemove", mouseEnter);
    ref.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", mouseEnter);
      ref.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}