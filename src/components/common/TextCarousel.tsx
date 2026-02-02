"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  items: string[];
  interval?: number; // ms between changes
};

export default function TextCarousel({ items, interval = 3000 }: Props) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!items?.length) return;

    // clear any existing timers (important in dev/strict mode)
    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      // fade out
      setShow(false);

      // after fade out completes, switch text & fade in
      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setShow(true);
      }, 250);
    }, interval);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [items, interval]);

  if (!items?.length) return null;

  return (
    <div className="border-t border-black/15 bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="flex h-9 items-center justify-center overflow-hidden">
          <div
            className={[
              "text-center text-[10px] font-bold tracking-[0.22em] text-black/70",
              "transition-opacity duration-300",
              show ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            {items[index]}
          </div>
        </div>
      </div>
    </div>
  );
}
