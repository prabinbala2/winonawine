import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  buttonText?: string;
};

export default function FeatureBanner({
  src,
  alt,
  title,
  buttonText = "READ ME",
}: Props) {
  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-5">
        <div className="relative overflow-hidden border border-black/20 bg-white">
          <div className="relative aspect-[16/5] w-full">
            <Image src={src} alt={alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="text-[30px] font-extrabold tracking-[0.12em] text-white md:text-[44px]">
                {title}
              </div>
              <p className="text-white font-bold items-center justify-center px-6 text-center">Are you ready for your crash course in natural wine? Probably not. Oh well. You’re getting one.</p>

              <button className="mt-4 rounded-full border border-white/60 bg-white/10 px-6 py-2 text-[10px] tracking-[0.22em] text-white hover:bg-white/15">
                {buttonText}
              </button>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="h-px w-full bg-black/30" />
        </div>
      </div>
    </section>
  );
}
