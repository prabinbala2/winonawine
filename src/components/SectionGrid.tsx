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
  pageSize?: number;
};

type SortKey =
  | "featured"
  | "title-asc"
  | "title-desc"
  | "price-asc"
  | "price-desc";

function parsePrice(price: string) {
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

    list = [...list].sort((a, b) => {
      if (sort === "featured") {
        const fa = a.featured ? 1 : 0;
        const fb = b.featured ? 1 : 0;
        if (fb !== fa) return fb - fa;
        return a.title.localeCompare(b.title);
      }
      if (sort === "title-asc") return a.title.localeCompare(b.title);
      if (sort === "title-desc") return b.title.localeCompare(a.title);
      if (sort === "price-asc")
        return parsePrice(a.price) - parsePrice(b.price);
      if (sort === "price-desc")
        return parsePrice(b.price) - parsePrice(a.price);
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

  useMemo(() => {
    setPage(1);
  }, [query, featuredOnly, sort]);

  return (
    <section className="bg-[#d84632]">
      <div className="mx-auto max-w-[1380px] px-4 md:px-5">
        {/* Title */}
        <div className="pt-10 md:pt-12">
          <h2 className="text-[14px] md:text-[16px] font-semibold tracking-[0.18em] text-black">
            {title}
          </h2>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-64 rounded-lg border border-black/20 bg-white px-3 py-2 text-sm"
          />

          <div className="flex items-center gap-4">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-white bg-white px-3 py-2 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="title-asc">Title A–Z</option>
              <option value="title-desc">Title Z–A</option>
              <option value="price-asc">Price Low–High</option>
              <option value="price-desc">Price High–Low</option>
            </select>

            
          </div>
        </div>


        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-10">
          {paged.map((p) => (
            <div key={p.id} className="relative">
              {p.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 bg-[#f5c84b] px-3 py-1 text-[9px] font-semibold tracking-[0.22em] text-black">
                  FEATURED
                </div>
              )}

              {/* WHITE PRODUCT CARD */}
              <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md">
                <div className="relative h-[210px] w-[120px] sm:h-[220px] sm:w-[130px] md:h-[240px] md:w-[140px]">
                  <Image
                    src={p.image}
                    alt={`${p.title} ${p.subtitle}`}
                    fill
                    className="object-contain"
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
      </div>
    </section>
  );
}
