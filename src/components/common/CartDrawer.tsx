"use client";

import Image from "next/image";

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  image: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
};

const mockItems: CartItem[] = [
  {
    id: "1",
    title: "LINEN BOTTLE GIFT BAG",
    price: 6,
    qty: 1,
    image: "/mock/cart-bag.webp",
  },
  {
    id: "2",
    title: "ALBA - CHILLI SPARKLING MARGARITA 4PACK",
    price: 26,
    qty: 1,
    image: "/mock/cart-alba.webp",
  },
];

export default function CartDrawer({ open, onClose }: Props) {
  const subtotal = mockItems.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[480px] max-w-full bg-white shadow-xl transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black px-5 py-4">
          <h3 className="text-[12px] font-bold tracking-[0.22em]">
            YOUR CART
          </h3>
          <button onClick={onClose} className="text-[18px] font-bold">
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="h-[calc(100%-260px)] overflow-y-auto">
          {mockItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[90px_1fr_30px] border-b border-black"
            >
              {/* image */}
              <div className="flex items-center justify-center p-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* details */}
              <div className="px-4 py-4">
                <div className="text-[12px] font-semibold tracking-[0.18em]">
                  {item.title}
                </div>
                <div className="mt-2 text-[12px] tracking-[0.14em]">
                  ${item.price.toFixed(2)}
                </div>

                {/* qty */}
                <div className="mt-3 flex items-center gap-2">
                  <button className="h-9 w-9 rounded-full border border-black text-[18px]">
                    −
                  </button>
                  <div className="h-9 w-9 rounded-full border border-black flex items-center justify-center text-[12px] font-semibold">
                    {item.qty}
                  </div>
                  <button className="h-9 w-9 rounded-full border border-black text-[18px]">
                    +
                  </button>
                </div>
              </div>

              {/* remove */}
              <button className="flex items-start justify-center pt-4 text-[16px] font-bold">
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="absolute bottom-0 w-full border-t border-black bg-white">
          <div className="border-b border-black py-3 text-center text-[11px] tracking-[0.18em]">
            SHIPPING CALCULATED AT CHECKOUT
          </div>

          <div className="grid grid-cols-2 border-b border-black">
            <div className="py-3 text-center text-[12px] font-semibold tracking-[0.18em]">
              TOTAL
            </div>
            <div className="bg-[#f5c84b] py-3 text-center text-[14px] font-bold tracking-[0.18em]">
              ${subtotal.toFixed(2)}
            </div>
          </div>

          <button className="w-full bg-[#b10f1b] py-4 text-[14px] font-bold tracking-[0.26em] text-white">
            CHECKOUT
          </button>

          <div className="border-t border-black py-3 text-center text-[11px] tracking-[0.18em]">
            FREE SHIPPING ON ALL ORDERS OVER $199
          </div>
        </div>
      </aside>
    </>
  );
}
