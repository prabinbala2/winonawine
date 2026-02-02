import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";

import Image from "next/image";
import ForeverSection from "@/components/ForeverSection";


export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="WINONA" cartCount={0} />
      <ForeverSection  />

      <Footer />
    </main>
  );
}
