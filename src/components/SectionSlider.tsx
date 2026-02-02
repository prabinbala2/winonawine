"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  featured?: boolean;
};

type Props = {
  title: string;
  products: Product[];
};

function getPerPage(width: number) {
  if (width < 640) return 1; // mobile
  if (width < 768) return 2; // sm
  return 4; // md+
}

export default function SectionSlider({ title, products }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(0);
  const [perPage, setPerPage] = useState(4);

  // set perPage on mount + resize
  useEffect(() => {
    const update = () => setPerPage(getPerPage(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageCount = useMemo(() => {
    return Math.max(1, Math.ceil(products.length / perPage));
  }, [products.length, perPage]);

  // keep active page valid when perPage changes
  useEffect(() => {
    setActive((prev) => Math.min(prev, pageCount - 1));
  }, [pageCount]);

  const scrollToPage = (pageIdx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollTo({ left: w * pageIdx, behavior: "smooth" });
    setActive(pageIdx);
  };

  const next = () => scrollToPage(Math.min(pageCount - 1, active + 1));
  const prev = () => scrollToPage(Math.max(0, active - 1));

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const page = Math.round(el.scrollLeft / el.clientWidth);
    if (page !== active) setActive(page);
  };

  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-4 md:px-5">
        {/* Title */}
        <div className="flex items-end justify-between pt-10 md:pt-12">
          <h2 className="text-[14px] md:text-[16px] font-semibold tracking-[0.18em] text-black">
            {title}
          </h2>

          {/* arrows desktop */}
          <div className="hidden gap-2 md:flex">
            <button
              onClick={prev}
              className="h-9 w-9 rounded-full border border-black/25 text-black/70 hover:border-black/40 hover:text-black transition disabled:opacity-40"
              disabled={active === 0}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="h-9 w-9 rounded-full border border-black/25 text-black/70 hover:border-black/40 hover:text-black transition disabled:opacity-40"
              disabled={active === pageCount - 1}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative pt-6 md:pt-8">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="
              flex w-full overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none]
            "
          >
            <style>{`div::-webkit-scrollbar{display:none;}`}</style>

            {/* Each page fills container width */}
            {Array.from({ length: pageCount }).map((_, pageIdx) => {
              const start = pageIdx * perPage;
              const slice = products.slice(start, start + perPage);

              return (
                <div
                  key={pageIdx}
                  className="w-full shrink-0 snap-start"
                  aria-label={`Page ${pageIdx + 1}`}
                >
                  <div
                    className={[
                      "grid gap-y-10",
                      perPage === 1 ? "grid-cols-1" : "",
                      perPage === 2 ? "grid-cols-2 gap-x-6" : "",
                      perPage === 4 ? "md:grid-cols-4 md:gap-x-10" : "",
                      // ensure desktop spacing also applies when perPage=2 on small screens
                      "items-start",
                    ].join(" ")}
                  >
                    {slice.map((p, idx) => (
                      <div key={p.id} className="relative">
                        {/* dividers only when 4-up desktop */}
                        {perPage === 4 && idx !== 0 && (
                          <div className="absolute -left-5 top-0 hidden h-full w-px bg-black/20 md:block" />
                        )}

                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-[210px] w-[120px] sm:h-[220px] sm:w-[130px] md:h-[240px] md:w-[140px]">
                            <Image
                              src={p.image}
                              alt={`${p.title} ${p.subtitle}`}
                              fill
                              className="object-contain"
                              sizes="(min-width: 768px) 140px, (min-width: 640px) 130px, 120px"
                            />
                          </div>

                          <div className="mt-4 text-[10px] font-semibold tracking-[0.18em] text-black/80">
                            {p.title}
                          </div>
                          <div className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-black">
                            {p.subtitle}
                          </div>
                          <div className="mt-2 text-[11px] tracking-[0.12em] text-black/70">
                            {p.price}
                          </div>

                          <button className="mt-4 rounded-full border border-black/25 px-6 py-2 text-[10px] tracking-[0.22em] text-black/80 hover:border-black/40 hover:text-black transition">
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* fillers only needed for desktop 4-up */}
                    {perPage === 4 &&
                      slice.length < perPage &&
                      Array.from({ length: perPage - slice.length }).map(
                        (_, fillerIdx) => (
                          <div
                            key={`filler-${fillerIdx}`}
                            className="hidden md:block"
                          />
                        )
                      )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* mobile arrows */}
          <div className="mt-6 flex justify-center gap-2 md:hidden">
            <button
              onClick={prev}
              className="h-9 w-9 rounded-full border border-black/25 text-black/70 hover:border-black/40 hover:text-black transition disabled:opacity-40"
              disabled={active === 0}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="h-9 w-9 rounded-full border border-black/25 text-black/70 hover:border-black/40 hover:text-black transition disabled:opacity-40"
              disabled={active === pageCount - 1}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* dots */}
        <div className="flex items-center justify-center gap-2 py-8 md:py-10">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={[
                "h-2 w-2 rounded-full border border-black/40 transition",
                i === active ? "bg-black/70" : "bg-transparent",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
