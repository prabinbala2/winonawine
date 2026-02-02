import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  heading: string; // big overlay text
};

export default function PromoBanner({ src, alt, heading }: Props) {
  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-5">
        <div className="relative overflow-hidden border border-black/20 bg-white">
          <div className="relative aspect-[16/6] w-full">
            <Image src={src} alt={alt} fill className="object-cover" />
            {/* overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 text-center text-[32px] font-extrabold tracking-[0.12em] text-white drop-shadow md:text-[44px]">
                {heading}
              </div>
            </div>
          </div>
        </div>

        {/* divider below banner like screenshot */}
        <div className="py-10">
          <div className="h-px w-full bg-black/30" />
        </div>
      </div>
    </section>
  );
}
