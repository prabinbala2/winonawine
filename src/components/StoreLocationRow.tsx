import Image from "next/image";

export type StoreLocation = {
  id: string;
  title: string; // WINONA WINE MANLY
  lines: string[]; // address + phone
  badgeText: string; // OPEN 7 DAYS
  hours: string[]; // hours lines
  imageSrc: string;
  imageAlt: string;
};

type Props = {
  store: StoreLocation;
  reverse?: boolean;
};

export default function StoreLocationRow({ store, reverse }: Props) {
  return (
    <div
      className={[
        "grid items-center gap-10",
        "md:grid-cols-2",
        reverse ? "md:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      {/* Text Block */}
      <div className="text-center">
        <div className="text-[18px] font-extrabold tracking-[0.16em] text-black">
          {store.title}
        </div>

        <div className="mt-4 space-y-1 text-[11px] tracking-[0.16em] text-black/70">
          {store.lines.map((t, i) => (
            <div key={i}>{t}</div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <span className="rounded-full border border-black/40 bg-[#f6f5f2] px-5 py-2 text-[10px] font-semibold tracking-[0.22em] text-black/70">
            {store.badgeText}
          </span>
        </div>

        <div className="mt-6 space-y-2 text-[11px] tracking-[0.16em] text-black/70">
          {store.hours.map((t, i) => (
            <div key={i}>{t}</div>
          ))}
        </div>
      </div>

      {/* Image Block */}
      <div className="relative overflow-hidden border border-black/15 bg-white">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={store.imageSrc}
            alt={store.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 560px, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
