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
import VideoBanner from "@/components/VideoBanner";



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
    featured: true,
  },
  {
    id: "g2",
    title: "KAH",
    subtitle: "HALO DECANTER SMOKE",
    price: "$385.00",
    image: "/mock/gift-1.png",
    featured: true,
  },
  {
    id: "g3",
    title: "MARRAKECH MADE",
    subtitle: "BLUE MOROCCAN GLASS, SHORT",
    price: "$14.00",
    image: "/mock/gift-1.png",
    featured: true,
  },
  {
    id: "g4",
    title: "SUMITANI SABURO SHOTEN",
    subtitle: "MONKEY BOTTLE OPENER",
    price: "$58.00",
    image: "/mock/gift-1.png",
    featured: true,
  },
  {
    id: "g4",
    title: "SUMITANI SABURO SHOTEN",
    subtitle: "MONKEY BOTTLE OPENER",
    price: "$58.00",
    image: "/mock/gift-1.png",
    featured: true,
  },
];

const banners = [
  { id: "b1", src: "/banner/hero1.jpg", alt: "Banner 1" },
  { id: "b2", src: "/banner/hero2.jpg", alt: "Banner 2" },
  { id: "b3", src: "/banner/hero3.jpg", alt: "Banner 3" },
];


export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="the drinks dept" cartCount={0} />
      <BannerSlider banners={banners} autoPlayMs={4500} />
      <SectionSlider title="NEW JUICE" products={newJuice} />
      <div className="py-2">
          <div className="h-px w-full bg-white" />
        </div>
      <SectionSlider title="OBJECTS + GIFTS" products={objectsAndGifts} />
      <VideoBanner
        src="/mock/download.mp4"
        heading=""
      />

      <SectionSlider title="OBJECTS + GIFTS" products={objectsAndGifts} />
      <div className="py-2">
          <div className="h-px w-full bg-white" />
        </div>
      <SectionSlider title="NEW JUICE" products={newJuice} />

      <InStoreTastings 
        iconSrc="/mock/tasting-icon.svg"
        events={[
          {
            id: "e1",
            title: "CASA DI",
            locationLine: "@ THE DRINKS DEPT MANLY",
            timeLine: "FRIDAY 23 JANUARY • 5–7PM • FREE!",
          },
          {
            id: "e2",
            title: "BRASH HIGGINS",
            locationLine: "@ THE DRINKS DEPT AVALON",
            timeLine: "FRIDAY 23 JANUARY • 3–5PM • FREE!",
          },
          {
            id: "e3",
            title: "GENIE",
            locationLine: "@ THE DRINKS DEPT ROZELLE",
            timeLine: "FRIDAY 23 JANUARY • 5–7PM • FREE!",
          },
        ]}
      />

      <PromoBanner
        src="/mock/sydney-delivery.jpg"
        alt="Sydney delivery"
        heading="SYDNEY SAME DAY DELIVERY"
      />

      <CollectionsGrid
        items={[
          { id: "c2", label: "CHAMPAGNE", iconSrc: "/mock/CHAMPAGNE.png" },
          { id: "c3", label: "COCKTAIL", iconSrc: "/mock/cocktail.png" },
          { id: "c1", label: "BEER", iconSrc: "/mock/beer.png" },
        ]}
      />

      <FeatureBanner
        src="/mock/feature-natural-wine.jpg"
        alt="Natural wine"
        title="WHAT MAKES A WINE NATURAL?"
        buttonText="READ ME"
      />

      <OvalCtaBanner
        src="/mock/winona-forever1.jpg"
        alt="THE DRINKS DEPT forever"
        title="THE DRINKS DEPT FOREVER"
        subtitle="Want us to take care of you every month? A monthly subscription for wine, delivered to you—hassle free."
        buttonText="JOIN TODAY"
      />

      <StoreLocations
        stores={[
          {
            id: "manly",
            title: "The Drinks Dept",
            lines: [
              "366",
              "Darling, St Balmain",
              "NSW 2041",
              "02 8358 7240",
            ],
            badgeText: "OPEN 7 DAYS",
            hours: [
              "MONDAY: 12PM TO 8PM",
              "TUESDAY + WEDNESDAY + SUNDAY: 10AM TO 9PM",
              "THURSDAY - SATURDAY: 10AM TO 9PM",
            ],
            imageSrc: "/mock/store-manly.jpg",
            imageAlt: "The Drinks Dept",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
