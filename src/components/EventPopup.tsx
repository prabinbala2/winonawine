"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function EventPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000); // show after 1 sec

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      
      {/* Popup */}
      <div className="relative w-[100%] max-w-lg">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow hover:bg-gray-200"
        >
          ✕
        </button>

        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/mock/sydney-delivery.jpg" // change your image
            alt="popup"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}