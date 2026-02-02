"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="flex h-full items-start justify-center pt-24">
        <div className="w-full max-w-xl bg-white p-6 shadow-lg">
          <div className="flex justify-between">
            <h3 className="text-sm tracking-widest">SEARCH</h3>
            <button onClick={onClose}>✕</button>
          </div>

          <input
            autoFocus
            placeholder="Search wines, gifts, brands..."
            className="mt-6 w-full border-b border-black py-3 text-sm outline-none"
          />
        </div>
      </div>
    </div>
  );
}
