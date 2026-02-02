import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  buttonText: string;
};

export default function OvalCtaBanner({
  src,
  alt,
  title,
  subtitle,
  buttonText,
}: Props) {
  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-5 pb-12">
        <div className="relative overflow-hidden border border-black/20 bg-white">
          {/* oval crop */}
          <div className="relative mx-auto my-10 h-[220px] w-[92%] overflow-hidden rounded-[999px] md:h-[260px]">
            <Image src={src} alt={alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="text-[44px] font-extrabold tracking-[0.08em] text-[#f0c300] drop-shadow md:text-[64px]">
                {title}
              </div>

              <div className="mt-2 max-w-[680px] text-[11px] tracking-[0.12em] text-white/90 md:text-[12px]">
                {subtitle}
              </div>

              <button className="mt-4 rounded-full border border-white/60 bg-white/10 px-7 py-2 text-[10px] tracking-[0.22em] text-white hover:bg-white/15">
                {buttonText}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="h-px w-full bg-black/30" />
        </div>
      </div>
    </section>
  );
}
