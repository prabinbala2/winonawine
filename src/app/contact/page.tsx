import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";

import Image from "next/image";
import StoreLocations from "@/components/StoreLocations";


export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="WINONA" cartCount={0} />
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
            imageSrc: "/mock/store-manly.webp",
            imageAlt: "The Drinks Dept",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
