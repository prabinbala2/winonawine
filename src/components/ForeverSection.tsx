"use client";

import { useMemo, useState } from "react";

type BottleOption = 3 | 6;
type ColourOption = "mixed" | "red";

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  perks?: string[];
  defaultBottles?: BottleOption;
  defaultColour?: ColourOption;
  onChange?: (value: { bottles: BottleOption; colour: ColourOption }) => void;
};

export default function ForeverSection({
  title = "WINONA FOREVER",
  subtitle = "LOVE WINE? JOIN THE CLUB. LITERALLY – JOIN OUR CLUB!",
  description = "WINONA FOREVER IS A MONTHLY PACK OF WINES CURATED BY OUR TEAM OF CERTIFIED CORK DORKS, DELIVERED TO YOUR DOOR.",
  perks = [
    "10% OFF ALL WINES IN STORE AND ONLINE",
    "EXCLUSIVE WINES, RARE ALLOCATIONS AND STAFF FAVES (NO LAME FILLERS!)",
    "WELCOME GIFT",
    "PAUSE ANY TIME, HASSLE FREE",
  ],
  defaultBottles = 3,
  defaultColour = "mixed",
  onChange,
}: Props) {
  const [bottles, setBottles] = useState<BottleOption>(defaultBottles);
  const [colour, setColour] = useState<ColourOption>(defaultColour);

  const value = useMemo(() => ({ bottles, colour }), [bottles, colour]);

  const setB = (v: BottleOption) => {
    setBottles(v);
    onChange?.({ bottles: v, colour });
  };

  const setC = (v: ColourOption) => {
    setColour(v);
    onChange?.({ bottles, colour: v });
  };

  return (
    <section className="bg-[#f6f5f2] py-10">
      <div className="mx-auto max-w-[1380px] px-4 md:px-5">
        {/* Yellow rounded panel */}
        <div className="rounded-[60px] bg-[#f5c84b] px-6 py-12 md:px-14 md:py-16">
          {/* Header */}
          <div className="text-center">
            <div className="text-[42px] font-extrabold tracking-[0.06em] text-[#a21c22] md:text-[74px]">
              {title}
            </div>

            <div className="mt-6 text-[13px] font-semibold tracking-[0.18em] text-black/80">
              {subtitle}
            </div>

            <div className="mx-auto mt-3 max-w-[820px] text-[12px] tracking-[0.14em] text-black/70">
              {description}
            </div>

            {/* Perk pills */}
            <div className="mt-10 flex flex-col items-center gap-3">
              {perks.slice(0, 2).map((t) => (
                <Pill key={t} text={t} />
              ))}
              <div className="flex flex-col items-center gap-3 md:flex-row">
                {perks.slice(2).map((t) => (
                  <Pill key={t} text={t} />
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-16 space-y-16">
            {/* Step 01 */}
            <div className="grid grid-cols-[64px_1fr] gap-6 md:grid-cols-[90px_1fr]">
              <div className="pt-1 text-[26px] font-extrabold tracking-[0.14em] text-black/80 md:text-[32px]">
                01
              </div>

              <div>
                <div className="text-center text-[18px] font-extrabold tracking-[0.12em] text-black/80 md:text-[22px]">
                  HOW MANY BOTTLES PER MONTH?
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ChoicePill
                    active={bottles === 3}
                    onClick={() => setB(3)}
                    bigText="3"
                  />
                  <ChoicePill
                    active={bottles === 6}
                    onClick={() => setB(6)}
                    bigText="6"
                  />
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="grid grid-cols-[64px_1fr] gap-6 md:grid-cols-[90px_1fr]">
              <div className="pt-1 text-[26px] font-extrabold tracking-[0.14em] text-black/80 md:text-[32px]">
                02
              </div>

              <div>
                <div className="text-center text-[18px] font-extrabold tracking-[0.12em] text-black/80 md:text-[22px]">
                  COLOUR?
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ChoicePill
                    active={colour === "mixed"}
                    onClick={() => setC("mixed")}
                    bigText="MIXED"
                    smallText="Fizzy | White | Orange | Pink | Red"
                  />
                  <ChoicePill
                    active={colour === "red"}
                    onClick={() => setC("red")}
                    bigText="RED ONLY"
                    smallText="Red | Rouge | Rosso"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Debug / optional output */}
          <div className="mt-14 text-center text-[10px] tracking-[0.18em] text-black/60">
            SELECTED: {value.bottles} BOTTLES •{" "}
            {value.colour === "mixed" ? "MIXED" : "RED ONLY"}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- sub components ---------- */

function Pill({ text }: { text: string }) {
  return (
    <div className="w-full max-w-[760px] rounded-full bg-white px-6 py-2 text-center text-[12px] font-bold tracking-[0.14em] text-[#1f3f63]">
      {text}
    </div>
  );
}

function ChoicePill({
  active,
  onClick,
  bigText,
  smallText,
}: {
  active: boolean;
  onClick: () => void;
  bigText: string;
  smallText?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full rounded-full bg-white px-8 py-7 text-center",
        "border-[3px] transition",
        active ? "border-black" : "border-black/20 hover:border-black/40",
      ].join(" ")}
    >
      <div className="text-[28px] font-extrabold tracking-[0.12em] text-[#1f3f63] md:text-[34px]">
        {bigText}
      </div>
      {smallText ? (
        <div className="mt-2 text-[11px] tracking-[0.12em] text-[#1f3f63]/80">
          {smallText}
        </div>
      ) : null}
    </button>
  );
}
