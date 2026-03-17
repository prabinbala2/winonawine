type Props = {
  src: string;
  heading: string;
};

export default function VideoBanner({ src, heading }: Props) {
  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-5">

        {/* top divider */}
        <div className="py-2">
          <div className="h-px w-full bg-black/30" />
        </div>

        <div className="relative overflow-hidden border border-black/20 bg-white">
          <div className="relative aspect-[16/6] w-full">

            {/* VIDEO */}
            <video
              className="w-full h-full object-cover"
              src={src}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 text-center text-[32px] font-extrabold tracking-[0.12em] text-white drop-shadow md:text-[44px]">
                {heading}
              </div>
            </div>


          </div>
        </div>

        {/* bottom divider */}
        <div className="py-2">
          <div className="h-px w-full bg-black/30" />
        </div>
      </div>
    </section>
  );
}