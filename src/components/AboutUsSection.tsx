import Image from "next/image";

type Props = {
  topLabel?: string;
  logoSrc?: string;
  leftTitle?: string;
  leftText?: string;
  photoSrc?: string;
  grapeArtSrc?: string;
  rightTitle?: string;
  rightSubtitle?: string;
  rightText?: string;
};

export default function AboutUsSection({
  topLabel = "ABOUT US",
  logoSrc = "/mock/about-logo.svg",
  leftTitle = "WELCOME TO WINONA",
  leftText = `Winona is a bottle shop in Manly and Avalon Beach focused on quality wines, craft beers, artisan spirits, special food and handmade objects from all over the world. As proud purveyors of well-made wine, we support independent producers working with organic, biodynamic or sustainable practices in the vineyard and minimal intervention in the winery. The beverages we stock are textured expressions of terroir, with place, personality and history embalmed in each bottle. We hope you enjoy them as much as we do.`,
  photoSrc = "/mock/about-photo.webp",
  grapeArtSrc = "/mock/about-grapes.webp",
  rightTitle = "BEHIND THE BOTTLES",
  rightSubtitle = "Winona is Elli, Cam and Luke.",
  rightText = `Our store was born from the union of art, music and food, centred on a sizzling romance with good wine. With backgrounds in the art and music industries, Elli and Cam Walsh siphoned their obsession with natural wine into a fruity side project called The Funky Bunch before embarking on this wild ride with good mate and fellow cork dork Luke Miller, owner of Busta, Sunset Sabi and Chica Bonita.

The three of us are many things, but above all we’re lovers of good grog devoted to bringing you the purest juice we can get our hands on.

Bottles up!`,
}: Props) {
  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-4 md:px-5">
        {/* Top line + yellow bar */}
        <div className="pt-6">
          <div className="h-px w-full bg-black/40" />
          <div className="mt-3 flex items-center">
            <div className="h-[32px] w-[140px] border border-black/60 bg-[#f5c84b] text-center text-[16px] tracking-[0.22em] text-black/80">
              {topLabel}
            </div>
            <div className="h-px flex-1 bg-black/25" />
          </div>
        </div>

        {/* Center logo */}
        <div className="flex justify-center pt-10">
          <div className="relative h-[110px] w-[110px]">
            <Image
              src={logoSrc}
              alt="Winona logo"
              fill
              className="object-contain"
              sizes="110px"
              priority
            />
          </div>
        </div>

        {/* Main two-column */}
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start">
            {/* title pill */}
            <div className="inline-flex rounded-full bg-[#193a63] px-10 py-4">
              <div className="text-[22px] font-extrabold tracking-[0.10em] text-[#f5c84b] md:text-[26px]">
                {leftTitle}
              </div>
            </div>

            {/* text */}
            <p className="mt-6 max-w-[520px] text-center text-[12px] leading-relaxed tracking-[0.02em] text-black/70 md:text-left">
              {leftText}
            </p>

            {/* framed photo */}
            <div className="mt-14 w-full max-w-[520px]">
              <div className="border border-black/70 bg-white p-3">
                <div className="border border-black/20 bg-white p-2">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#eee]">
                    <Image
                      src={photoSrc}
                      alt="About photo"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 520px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex flex-col items-center md:items-start">
            {/* decorative grapes */}
            <div className="pointer-events-none absolute -top-2 left-0 hidden md:block">
              <div className="relative h-[220px] w-[220px]">
                <Image
                  src={grapeArtSrc}
                  alt="Grape illustration"
                  fill
                  className="object-contain"
                  sizes="220px"
                />
              </div>
            </div>

            {/* right title pill */}
            <div className="mt-20 md:mt-56 inline-flex rounded-full bg-[#0d4aa8] px-10 py-4">
              <div className="text-[22px] font-extrabold tracking-[0.10em] text-[#f5c84b] md:text-[26px]">
                {rightTitle}
              </div>
            </div>

            <div className="mt-4 text-center text-[12px] font-semibold tracking-[0.04em] text-black/70 md:text-left">
              {rightSubtitle}
            </div>

            <p className="mt-6 max-w-[520px] whitespace-pre-line text-center text-[12px] leading-relaxed tracking-[0.02em] text-black/70 md:text-left">
              {rightText}
            </p>
          </div>
        </div>

        {/* bottom spacing */}
        <div className="py-14" />
      </div>
    </section>
  );
}
