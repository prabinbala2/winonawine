"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import SearchModal from "./SearchModal";
import CartDrawer from "./CartDrawer";
import TextCarousel from "./TextCarousel";
import MobileMenuDrawer from "./MobileMenuDrawer"; 

type SubMenuItem = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
};


const menuItems: MenuItem[] = [
  {
    label: "NEW",
    href: "/new",
  },
  {
    label: "WINE",
    href: "/new",
    submenu: [
      { label: "Red", href: "/new" },
      { label: "White", href: "/new" },
      { label: "Natural", href: "/new" },
    ],
  },
  {
    label: "BEER + FRIENDS",
    href: "/new",
    submenu: [
      { label: "Beer", href: "/new" },
      { label: "Cider", href: "/new" },
    ],
  },
  {
    label: "SPIRITS + SAKE",
    href: "/new",
    submenu: [
      { label: "Whisky", href: "/new" },
      { label: "Gin", href: "/new" },
      { label: "Sake", href: "/new" },
    ],
  },
  {
    label: "PACKS",
    href: "/new",
  },
  {
    label: "NOT ALCOHOL",
    href: "/new",
  },
  {
    label: "GIFT CARD",
    href: "/gift-card",
  },
  {
    label: "WINE CLUB",
    href: "/wine-club",
  },
];


const tickerItems = [
  "10% Off Any 6+ Wines",
  "Free Same Day Sydney & Northern Beaches Delivery Orders $100+",
  "EXPRESS DELIVERY AVAILABLE",
];

export default function Menu() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <header className="border-b border-black/20 bg-[#f6f5f2]">
        <div className="mx-auto max-w-[1380px] px-4 md:px-5">
          {/* Top row */}
          <div className="relative flex items-center justify-center py-4 md:py-5">
            {/* hamburger (mobile) */}
            <button
              className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-black/20 md:hidden"
              onClick={() => setOpenMobileMenu(true)}
              aria-label="Open menu"
            >
              ☰
            </button>

            <Logo />

            {/* right icons */}
            <div className="absolute right-0 flex items-center gap-3 md:gap-4 text-[11px] tracking-[0.18em]">
              <button
                onClick={() => setOpenSearch(true)}
                className="hidden lg:block flex h-10 w-10 items-center justify-center rounded-full border border-black/25"
                aria-label="Search"
              >
                ⌕
              </button>

              <button
                onClick={() => setOpenCart(true)}
                className="flex items-center gap-1"
                aria-label="Open cart"
              >
                <span className="">CART</span>
                <span className="opacity-60">(0)</span>
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden gap-8 font-bold border-t border-black/15 py-3 text-[12px] tracking-[0.28em] md:flex">
            {menuItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link href={item.href} className="hover:text-black">
                  {item.label}
                  {item.submenu && <span className="text-[10px]"> ▾</span>}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 top-full z-20 hidden min-w-[180px] bg-white shadow-md group-hover:block">
                    {item.submenu.map((sub) => (
                      <Link
                        href={sub.href}
                        key={sub.label}
                        className="block px-4 py-2 text-[12px] hover:bg-black/5"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ticker (both) */}
          <TextCarousel items={tickerItems} interval={3000} />
        </div>
      </header>

      {/* mobile drawer */}
      <MobileMenuDrawer
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        items={menuItems}
      />

      {/* modals/drawers */}
      <SearchModal open={openSearch} onClose={() => setOpenSearch(false)} />
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}
