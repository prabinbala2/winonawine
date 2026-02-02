import Image from "next/image";

export type CollectionItem = {
  id: string;
  label: string;
  iconSrc: string; // illustrated icon
};

type Props = {
  items: CollectionItem[];
};

export default function CollectionsGrid({ items }: Props) {
  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-5">
        <div className="pb-6 text-[12px] font-semibold tracking-[0.18em] text-black/80">
          COLLECTIONS
        </div>

        <div className="grid grid-cols-1 gap-8 pb-12 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <button
              key={it.id}
              className="group relative flex flex-col items-center justify-center rounded-[18px] bg-transparent py-6"
            >
              <div className="relative h-[200px] w-[200px]">
                <Image
                  src={it.iconSrc}
                  alt={it.label}
                  fill
                  className="object-contain"
                />
              </div>

              {/* pill label */}
              <div className="mt-3 rounded-full border border-black/30 bg-[#f6f5f2] px-8 py-2 text-[11px] font-semibold tracking-[0.18em] text-black/80 group-hover:border-black/50">
                {it.label}
              </div>
            </button>
          ))}
        </div>

        <div className="pb-10">
          <div className="h-px w-full bg-black/30" />
        </div>
      </div>
    </section>
  );
}
