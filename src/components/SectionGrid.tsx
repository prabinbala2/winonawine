"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

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
  pageSize?: number; // default 12
};

type SortKey = "featured" | "title-asc" | "title-desc" | "price-asc" | "price-desc";

function parsePrice(price: string) {
  // supports "$42.00", "₹25,000", "42"
  const n = Number(String(price).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function SectionGrid({ title, products, pageSize = 12 }: Props) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = products.filter((p) => {
      if (featuredOnly && !p.featured) return false;
      if (!q) return true;

      const hay = `${p.title} ${p.subtitle}`.toLowerCase();
      return hay.includes(q);
    });

    // sort
    list = [...list].sort((a, b) => {
      if (sort === "featured") {
        const fa = a.featured ? 1 : 0;
        const fb = b.featured ? 1 : 0;
        if (fb !== fa) return fb - fa; // featured first
        return a.title.localeCompare(b.title);
      }
      if (sort === "title-asc") return a.title.localeCompare(b.title);
      if (sort === "title-desc") return b.title.localeCompare(a.title);
      if (sort === "price-asc") return parsePrice(a.price) - parsePrice(b.price);
      if (sort === "price-desc") return parsePrice(b.price) - parsePrice(a.price);
      return 0;
    });

    return list;
  }, [products, query, featuredOnly, sort]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filtered.length / pageSize));
  }, [filtered.length, pageSize]);

  const paged = useMemo(() => {
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize, totalPages]);

  // reset to page 1 when filters change
  useMemo(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, featuredOnly, sort]);

  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-4 md:px-5">
        {/* Title + Controls */}
        <div className="pt-10 md:pt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[14px] md:text-[16px] font-semibold tracking-[0.18em] text-black">
              {title}
            </h2>

            {/* controls */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* search */}
              <div className="flex items-center rounded-full border border-black/25 bg-white px-4 py-2">
                <span className="mr-2 text-black/50">⌕</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                  className="w-[220px] max-w-full bg-transparent text-[12px] tracking-[0.10em] outline-none placeholder:text-black/40"
                />
              </div>

              {/* featured toggle */}
              

              {/* sort */}
              <div className="rounded-full border border-black/25 bg-white px-4 py-2">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="bg-transparent text-[11px] tracking-[0.18em] outline-none"
                >
                  <option value="featured">SORT: FEATURED</option>
                  <option value="title-asc">TITLE: A → Z</option>
                  <option value="title-desc">TITLE: Z → A</option>
                  <option value="price-asc">PRICE: LOW → HIGH</option>
                  <option value="price-desc">PRICE: HIGH → LOW</option>
                </select>
              </div>
            </div>
          </div>

          {/* results count */}
          <div className="mt-4 text-[10px] tracking-[0.18em] text-black/60">
            {filtered.length} RESULTS
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-10">
          {paged.map((p) => (
            <div key={p.id} className="relative">
              {/* featured pill */}
              {p.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 bg-[#f5c84b] px-3 py-1 text-[9px] font-semibold tracking-[0.22em] text-black">
                  FEATURED
                </div>
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
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="h-9 w-9 rounded-full border border-black/25 text-black/70 hover:border-black/40 hover:text-black transition disabled:opacity-40"
              aria-label="Previous page"
            >
              ←
            </button>

            {/* page dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).slice(0, 12).map((_, i) => {
                const pnum = i + 1;
                return (
                  <button
                    key={pnum}
                    onClick={() => setPage(pnum)}
                    className={[
                      "h-2 w-2 rounded-full border border-black/40 transition",
                      pnum === page ? "bg-black/70" : "bg-transparent",
                    ].join(" ")}
                    aria-label={`Go to page ${pnum}`}
                  />
                );
              })}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="h-9 w-9 rounded-full border border-black/25 text-black/70 hover:border-black/40 hover:text-black transition disabled:opacity-40"
              aria-label="Next page"
            >
              →
            </button>
          </div>

          <div className="text-[10px] tracking-[0.18em] text-black/60">
            PAGE {page} OF {totalPages}
          </div>
        </div>
      </div>
    </section>
  );
}
