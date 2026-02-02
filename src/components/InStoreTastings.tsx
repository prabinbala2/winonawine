import Image from "next/image";

export type TastingEvent = {
  id: string;
  title: string;
  locationLine: string; // e.g. "@ WINONA MANLY"
  timeLine: string; // e.g. "FRIDAY 23 JANUARY • 5–7PM • FREE!"
};

type Props = {
  iconSrc?: string; // top icon
  events: TastingEvent[];
};

export default function InStoreTastings({
  iconSrc = "/mock/tasting-icon.svg",
  events,
}: Props) {
  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-5">
        {/* top divider */}
        <div className="pt-10">
          <div className="h-px w-full bg-black/30" />
        </div>

        {/* header */}
        <div className="flex items-start justify-between py-6">
          <div className="text-[12px] font-semibold tracking-[0.18em] text-black/80">
            IN-STORE TASTINGS
          </div>
          <div className="hidden h-10 w-px bg-black/30 md:block" />
        </div>

        {/* icon + events row */}
        <div className="grid grid-cols-1 items-center gap-10 pb-10 md:grid-cols-[1fr_auto_1fr]">
          {/* left spacer to keep icon centered like screenshot */}
          <div className="hidden md:block" />

          {/* icon */}
          <div className="flex justify-center">
            <div className="relative h-[170px] w-[170px]">
              <Image
                src={iconSrc}
                alt="tasting icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* right spacer */}
          <div className="hidden md:block" />
        </div>

        {/* events */}
        <div className="grid grid-cols-1 gap-y-10 pb-10 md:grid-cols-3 md:gap-x-10">
          {events.map((e, idx) => (
            <div key={e.id} className="relative text-center">
              {/* vertical dividers */}
              {idx !== 0 && (
                <div className="absolute -left-5 top-0 hidden h-full w-px bg-black/30 md:block" />
              )}

              <div className="text-[12px] font-semibold tracking-[0.18em] text-black">
                {e.title}
              </div>
              <div className="mt-2 text-[10px] tracking-[0.18em] text-black/60">
                {e.locationLine}
              </div>
              <div className="mt-1 text-[10px] tracking-[0.18em] text-black/60">
                {e.timeLine}
              </div>
            </div>
          ))}
        </div>

        {/* bottom divider */}
        <div className="pb-10">
          <div className="h-px w-full bg-black/30" />
        </div>
      </div>
    </section>
  );
}
