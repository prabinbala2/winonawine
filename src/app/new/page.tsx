import Menu from "@/components/common/Menu";
import SectionGrid from "@/components/SectionGrid";
import Footer from "@/components/common/Footer";

import Image from "next/image";

const newJuice: Product[] = [
  {
    id: "p1",
    title: "LA VIOLETTA",
    subtitle: "2025 PATIO NAT",
    price: "$42.00",
    image: "/mock/bottle-1.png",
  },
  {
    id: "p2",
    title: "MUSICAL FOLK",
    subtitle: "2025 CHARDONNAY",
    price: "$33.00",
    image: "/mock/bottle-1.png",
  },
  {
    id: "p3",
    title: "BRUNO LAFFON",
    subtitle: "2024 LES FLEURS BLANC",
    price: "$31.00",
    image: "/mock/bottle-1.png",
  },
  {
    id: "p4",
    title: "BASKET RANGE WINE",
    subtitle: "2023 BANTAM",
    price: "$38.00",
    image: "/mock/bottle-1.png",
  },
  {
    id: "p5",
    title: "BASKET RANGE WINE",
    subtitle: "2023 BANTAM",
    price: "$38.00",
    image: "/mock/bottle-1.png",
  },
];




export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="WINONA" cartCount={0} />
      <SectionGrid title="NEW JUICE" products={newJuice} />


      <Footer />
    </main>
  );
}
