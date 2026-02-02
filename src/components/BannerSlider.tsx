"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Banner = {
  id: string;
  src: string;
  alt: string;
};

type Props = {
  banners: Banner[];
  autoPlayMs?: number; // e.g. 4500
};

export default function BannerSlider({ banners, autoPlayMs }: Props) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  const count = useMemo(() => banners.length, [banners.length]);

  const go = (idx: number) => {
    if (count === 0) return;
    const next = (idx + count) % count;
    setActive(next);
  };

  const next = () => go(active + 1);
  const prev = () => go(active - 1);

  useEffect(() => {
    if (!autoPlayMs || count <= 1) return;

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, autoPlayMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [autoPlayMs, count]);

  if (count === 0) return null;

  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-5 pt-4">
        <div className="relative overflow-hidden border border-black/15 bg-white">
          {/* Banner frame */}
          <div className="relative aspect-[16/7] w-full">
            {banners.map((b, i) => (
              <div
                key={b.id}
                className={[
                  "absolute inset-0 transition-opacity duration-500",
                  i === active ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  priority={i === active}
                  className="object-cover"
                  sizes="(min-width: 1180px) 1180px, 100vw"
                />
              </div>
            ))}

            {/* arrows */}
            <button
              onClick={prev}
              aria-label="Previous banner"
              className="absolute left-3 top-1/2 -translate-y-1/2 hidden h-10 w-10 items-center justify-center rounded-full border border-black/25 bg-[#f6f5f2]/90 text-black/70 hover:border-black/40 hover:text-black md:flex"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next banner"
              className="absolute right-3 top-1/2 -translate-y-1/2 hidden h-10 w-10 items-center justify-center rounded-full border border-black/25 bg-[#f6f5f2]/90 text-black/70 hover:border-black/40 hover:text-black md:flex"
            >
              →
            </button>

            {/* dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to banner ${i + 1}`}
                  className={[
                    "h-2 w-2 rounded-full border border-black/40 transition",
                    i === active ? "bg-black/70" : "bg-white/60",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
