"use client";

const footerLinks = [
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
  { label: "SHIPPING INFO", href: "/shipping-info" },
  { label: "PRIVACY", href: "/privacy" },
  { label: "TERMS & CONDITIONS", href: "/terms-conditions" },
  { label: "ACCOUNT", href: "/account" },
];


export default function Footer() {
  return (
    <footer className="bg-[#b10f1b] text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-12">
        {/* Signup */}
        <div className="text-center">
          <div className="text-[10px] font-semibold tracking-[0.26em] text-white/90">
            SIGN UP TO OUR MAILING LIST
          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 md:flex-row">
            <input
              placeholder="First Name"
              className="h-10 w-full max-w-[260px] rounded-full bg-white/10 px-5 text-[12px] tracking-[0.12em] text-white placeholder:text-white/60 outline-none ring-1 ring-white/30 focus:ring-white/60"
            />
            <input
              placeholder="Email Address*"
              className="h-10 w-full max-w-[320px] rounded-full bg-white/10 px-5 text-[12px] tracking-[0.12em] text-white placeholder:text-white/60 outline-none ring-1 ring-white/30 focus:ring-white/60"
            />
            <button className="h-10 rounded-full bg-white px-8 text-[10px] font-semibold tracking-[0.26em] text-[#b10f1b] hover:bg-white/90">
              SUBMIT
            </button>
          </div>

          {/* Social placeholders */}
          <div className="mt-6 flex items-center justify-center gap-4 text-white/90">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
              ⌁
            </span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
              f
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] tracking-[0.22em] text-white/90">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        {/* Legal small text */}
        <div className="mt-10 grid gap-6 text-center text-[9px] leading-relaxed tracking-[0.10em] text-white/70 md:grid-cols-3">
          <div>
            WE ACKNOWLEDGE THE TRADITIONAL OWNERS OF THE LAND ON WHICH WINONA
            STANDS, THE CANNAGAL AND KAYIMAI PEOPLE, AND PAY OUR RESPECTS TO
            ELDERS PAST, PRESENT AND EMERGING.
          </div>
          <div>
            WINONA SUPPORTS THE RESPONSIBLE SERVICE OF ALCOHOL. NO ALCOHOL CAN BE
            SOLD OR SUPPLIED TO ANYONE UNDER 18. IT IS AGAINST THE LAW.
          </div>
          <div>LIQUOR LICENSE # (ADD YOUR LICENSE NUMBER HERE)</div>
        </div>
      </div>
    </footer>
  );
}
