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
  leftTitle = "WELCOME TO THE DRINKS DEPT.",
  leftText = `The Drinks Dept is a bottleshop built by bartenders, created to share industry knowledge with the home entertainer. Through an ever-growing collection of recipes, recommendations, and hands-on guidance, we help everyone—from curious beginners to confident hosts—elevate what they serve.`,
  photoSrc = "/mock/about-photo.webp",
  grapeArtSrc = "/mock/about-grapes.webp",
  rightTitle = "BEHIND THE BOTTLES",
  rightSubtitle = "At The Drinks Dept, great drinks start with great advice.",
  rightText = `Our team brings real service-industry experience to every interaction, offering tailored product suggestions, takeaway cocktail recipes, and wine tasting cards for any occasion. We also run weekly drink activations designed to inspire what to make at home and how to make it, highlighting the bottles already on our shelves.

For those wanting something truly personal, we offer a bespoke menu service—where a dedicated bartender designs a custom drinks menu and sources everything you need.`,
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
