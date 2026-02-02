import Menu from "@/components/common/Menu";
import BannerSlider from "@/components/BannerSlider";
import SectionSlider from "@/components/SectionSlider";
import InStoreTastings from "@/components/InStoreTastings";
import PromoBanner from "@/components/PromoBanner";
import CollectionsGrid from "@/components/CollectionsGrid";
import FeatureBanner from "@/components/FeatureBanner";
import OvalCtaBanner from "@/components/OvalCtaBanner";
import StoreLocations from "@/components/StoreLocations";
import Footer from "@/components/common/Footer";


import Image from "next/image";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  featured?: boolean;
};


const newJuice: Product[] = [
  {
    id: "p1",
    title: "LA VIOLETTA",
    subtitle: "2025 PATIO NAT",
    price: "$42.00",
    image: "/mock/bottle-1.png",
    featured: true,
  },
  {
    id: "p2",
    title: "MUSICAL FOLK",
    subtitle: "2025 CHARDONNAY",
    price: "$33.00",
    image: "/mock/bottle-1.png",
    featured: true,
  },
  {
    id: "p3",
    title: "BRUNO LAFFON",
    subtitle: "2024 LES FLEURS BLANC",
    price: "$31.00",
    image: "/mock/bottle-1.png",
    featured: true,
  },
  {
    id: "p4",
    title: "BASKET RANGE WINE",
    subtitle: "2023 BANTAM",
    price: "$38.00",
    image: "/mock/bottle-1.png",
    featured: true,
  },
  {
    id: "p4",
    title: "BASKET RANGE WINE",
    subtitle: "2023 BANTAM",
    price: "$38.00",
    image: "/mock/bottle-1.png",
    featured: true,
  },
];

const objectsAndGifts: Product[] = [
  {
    id: "g1",
    title: "KAH",
    subtitle: "HALO DECANTER CLEAR",
    price: "$385.00",
    image: "/mock/gift-1.png",
  },
  {
    id: "g2",
    title: "KAH",
    subtitle: "HALO DECANTER SMOKE",
    price: "$385.00",
    image: "/mock/gift-1.png",
  },
  {
    id: "g3",
    title: "MARRAKECH MADE",
    subtitle: "BLUE MOROCCAN GLASS, SHORT",
    price: "$14.00",
    image: "/mock/gift-1.png",
  },
  {
    id: "g4",
    title: "SUMITANI SABURO SHOTEN",
    subtitle: "MONKEY BOTTLE OPENER",
    price: "$58.00",
    image: "/mock/gift-1.png",
  },
  {
    id: "g4",
    title: "SUMITANI SABURO SHOTEN",
    subtitle: "MONKEY BOTTLE OPENER",
    price: "$58.00",
    image: "/mock/gift-1.png",
  },
];

const banners = [
  { id: "b1", src: "/banner/hero.jpg", alt: "Banner 1" },
  { id: "b2", src: "/banner/hero-2.jpg", alt: "Banner 2" },
  { id: "b3", src: "/banner/hero-3.jpg", alt: "Banner 3" },
];


export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="WINONA" cartCount={0} />
      <BannerSlider banners={banners} autoPlayMs={4500} />
      <SectionSlider title="NEW JUICE" products={newJuice} />
      <SectionSlider title="OBJECTS + GIFTS" products={objectsAndGifts} />
      <PromoBanner
        src="/mock/chilled.webp"
        alt="Sydney delivery"
        heading="CHILLED REDS"
      />

      <SectionSlider title="OBJECTS + GIFTS" products={objectsAndGifts} />
      <SectionSlider title="NEW JUICE" products={newJuice} />

      <InStoreTastings
        iconSrc="/mock/tasting-icon.svg"
        events={[
          {
            id: "e1",
            title: "CASA DI",
            locationLine: "@ WINONA MANLY",
            timeLine: "FRIDAY 23 JANUARY • 5–7PM • FREE!",
          },
          {
            id: "e2",
            title: "BRASH HIGGINS",
            locationLine: "@ WINONA AVALON",
            timeLine: "FRIDAY 23 JANUARY • 3–5PM • FREE!",
          },
          {
            id: "e3",
            title: "GENIE",
            locationLine: "@ WINONA ROZELLE",
            timeLine: "FRIDAY 23 JANUARY • 5–7PM • FREE!",
          },
        ]}
      />

      <PromoBanner
        src="/mock/sydney-delivery.webp"
        alt="Sydney delivery"
        heading="SYDNEY SAME DAY DELIVERY"
      />

      <CollectionsGrid
        items={[
          { id: "c1", label: "WINE", iconSrc: "/mock/col-wine.webp" },
          { id: "c2", label: "BEER & PALS", iconSrc: "/mock/col-beer.webp" },
          { id: "c3", label: "SPIRITS & SAKE", iconSrc: "/mock/col-spirits.webp" },
          { id: "c4", label: "OBJECTS ETC.", iconSrc: "/mock/col-objects.webp" },
          { id: "c5", label: "NON-ALCOHOLIC", iconSrc: "/mock/col-nonalc.webp" },
          { id: "c6", label: "FOOD & SNACKS", iconSrc: "/mock/col-food.webp" },
        ]}
      />

      <FeatureBanner
        src="/mock/feature-natural-wine.webp"
        alt="Natural wine"
        title="WHAT MAKES A WINE NATURAL?"
        buttonText="READ ME"
      />

      <OvalCtaBanner
        src="/mock/winona-forever.jpg"
        alt="Winona forever"
        title="WINONA FOREVER"
        subtitle="Want us to take care of you every month? A monthly subscription for wine, delivered to you—hassle free."
        buttonText="JOIN TODAY"
      />

      <StoreLocations
        stores={[
          {
            id: "manly",
            title: "WINONA WINE MANLY",
            lines: [
              "SHOP 9",
              "2–14 PITTWATER ROAD",
              "MANLY NSW 2095",
              "(02) 9977 3460",
            ],
            badgeText: "OPEN 7 DAYS",
            hours: [
              "MONDAY: 12PM TO 8PM",
              "TUESDAY + WEDNESDAY + SUNDAY: 10AM TO 9PM",
              "THURSDAY - SATURDAY: 10AM TO 9PM",
            ],
            imageSrc: "/mock/store-manly.webp",
            imageAlt: "Winona Manly store",
          },
          {
            id: "rozelle",
            title: "WINONA WINE ROZELLE",
            lines: ["721 DARLING STREET ROZELLE", "(02) 9977 3460"],
            badgeText: "OPEN 7 DAYS",
            hours: [
              "MONDAY: 12PM TO 8PM",
              "TUESDAY + WEDNESDAY + SUNDAY: 10AM TO 8PM",
              "THURSDAY - SATURDAY: 10AM TO 9PM",
            ],
            imageSrc: "/mock/store-rozelle.webp",
            imageAlt: "Winona Rozelle store",
          },
          {
            id: "avalon",
            title: "WINONA WINE AVALON",
            lines: [
              "SHOP 1",
              "25 OLD BARRENJOEY ROAD",
              "AVALON BEACH NSW 2107",
              "(02) 9669 9391",
            ],
            badgeText: "OPEN 7 DAYS",
            hours: [
              "MONDAY - WEDNESDAY: 10AM TO 8PM",
              "THURSDAY - SATURDAY: 10AM TO 9PM",
              "SUNDAY: 10AM TO 8PM",
            ],
            imageSrc: "/mock/store-avalon.webp",
            imageAlt: "Winona Avalon store",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
