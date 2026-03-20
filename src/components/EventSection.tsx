import Image from "next/image";

export type EventItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string; // "Oct 23"
};

type Props = {
  events: EventItem[];
};

export default function EventSection({ events }: Props) {
  return (
    <section className="bg-[#f6f5f2] py-16">
      <div className="mx-auto max-w-[1380px] px-5 ">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold text-gray-800">
            Upcoming Events
          </h2>
          <p className="text-sm mt-2">
            Explore our upcoming events and be part of our latest activities and gatherings.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-lg bg-white shadow hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={500}
                  height={250}
                  className="rounded-t-lg object-cover"
                />

                {/* Date Badge */}
                <div className="absolute right-2 top-2 bg-[#d84632] text-white text-xs px-2 py-1 rounded">
                  {event.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {event.title}
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  {event.description}
                </p>

                <button className="mt-3 text-xs font-semibold text-[#d84632] hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}