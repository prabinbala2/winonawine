import StoreLocationRow, { StoreLocation } from "./StoreLocationRow";

type Props = {
  stores: StoreLocation[];
};

export default function StoreLocations({ stores }: Props) {
  return (
    <section className="bg-[#f6f5f2]">
      <div className="mx-auto max-w-[1380px] px-5 py-14">
        <div className="flex flex-col gap-14">
          {stores.map((s, idx) => (
            <StoreLocationRow key={s.id} store={s} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
} 
