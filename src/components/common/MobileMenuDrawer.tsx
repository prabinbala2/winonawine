"use client";
import Link from "next/link";
import { useState } from "react";

type SubMenuItem = { label: string };
type MenuItem = { label: string; submenu?: SubMenuItem[] };

type Props = {
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
};

export default function MobileMenuDrawer({ open, onClose, items }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return ( 
    <>
      {/* overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[340px] bg-[#f6f5f2]
        shadow-xl transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b-2 border-black px-6 py-4">
          <div className="text-[12px] font-bold tracking-[0.22em] text-black">
            MENU
          </div>
          <button
            onClick={onClose}
            className="text-[20px] font-bold text-black"
          >
            ✕
          </button>
        </div>

        {/* menu items */}
        <div className="px-6 py-4 pr-8">
          {items.map((item) => {
            const hasSub = !!item.submenu?.length;
            const isOpen = !!expanded[item.label];

            return (
              <div
                key={item.label}
                className="border-b border-black py-4"
              >
                <Link
                  href={item.href}
                  className="flex w-full items-center justify-between text-left
                  text-[13px] font-bold tracking-[0.22em] text-black"
                  onClick={() => {
                    if (!hasSub) {
                      onClose();
                      return;
                    }
                    setExpanded((prev) => ({
                      ...prev,
                      [item.label]: !prev[item.label],
                    }));
                  }}
                >
                  <span>{item.label}</span>
                  {hasSub && (
                    <span className="text-[16px] font-bold">
                      {isOpen ? "−" : "+"}
                    </span>
                  )}
                </Link>

                {/* submenu */}
                {hasSub && isOpen && (
                  <div className="mt-3 rounded-md bg-[#fff2b3] px-4 py-3">
                    {item.submenu!.map((sub) => (
                      <Link
                        href={item.href}
                        key={sub.label}
                        className="block py-2 text-[12px] font-semibold
                        tracking-[0.18em] text-black/80 hover:text-black"
                        onClick={onClose}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
