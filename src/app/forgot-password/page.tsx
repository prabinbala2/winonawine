import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";

import Image from "next/image";
import ForgotPasswordForm from "@/components/account/ForgotPasswordForm";


export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="THE DRINKS DEPT" cartCount={0} />
      <ForgotPasswordForm />
      <Footer />
    </main>
  );
}
