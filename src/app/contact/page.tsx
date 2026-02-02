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
