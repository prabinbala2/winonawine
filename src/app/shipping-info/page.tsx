import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="WINONA" cartCount={0} />

      {/* SHIPPING INFO SECTION */}
      <section className="bg-[#f6f5f2]">
        <div className="mx-auto max-w-[1100px] px-4 md:px-5">
          {/* top bar */}
          <div className="pt-6">
            <div className="h-px w-full bg-black/40" />
            <div className="mt-3 flex items-center">
              <div className="h-[22px] w-[160px] border border-black/60 bg-[#f5c84b] text-center text-[10px] tracking-[0.22em] text-black/80">
                SHIPPING INFO
              </div>
              <div className="h-px flex-1 bg-black/25" />
            </div>
          </div>

          {/* content */}
          <div className="py-16">
            <h1 className="text-center text-[26px] md:text-[32px] font-extrabold tracking-[0.12em] text-black">
              SHIPPING & DELIVERY
            </h1>

            <div className="mx-auto mt-10 max-w-[760px] space-y-10 text-[13px] leading-relaxed text-black/70">
              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  STANDARD DELIVERY
                </h2>
                <p>
                  We ship Australia-wide using trusted courier partners. Orders
                  are typically dispatched within 1–2 business days.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  SAME DAY DELIVERY (SYDNEY & NORTHERN BEACHES)
                </h2>
                <p>
                  Same day delivery is available for orders over $100 placed
                  before 1pm. Available Monday to Friday only.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  EXPRESS DELIVERY
                </h2>
                <p>
                  Express delivery options are shown at checkout where
                  available. Delivery timeframes vary depending on location.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  FREE SHIPPING
                </h2>
                <p>
                  We offer free standard shipping on all orders over $199.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  AGE VERIFICATION
                </h2>
                <p>
                  Alcohol purchases require age verification on delivery. You
                  must be 18+ to order alcohol.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  QUESTIONS?
                </h2>
                <p>
                  If you have any questions about shipping, please contact us at{" "}
                  <span className="font-semibold text-black">
                    info@winona.com.au
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
