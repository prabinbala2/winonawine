import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="WINONA" cartCount={0} />

      {/* TERMS SECTION */}
      <section className="bg-[#f6f5f2]">
        <div className="mx-auto max-w-[1100px] px-4 md:px-5">
          {/* top bar */}
          <div className="pt-6">
            <div className="h-px w-full bg-black/40" />
            <div className="mt-3 flex items-center">
              <div className="h-[22px] w-[210px] border border-black/60 bg-[#f5c84b] text-center text-[10px] tracking-[0.22em] text-black/80">
                TERMS & CONDITIONS
              </div>
              <div className="h-px flex-1 bg-black/25" />
            </div>
          </div>

          {/* content */}
          <div className="py-16">
            <h1 className="text-center text-[26px] md:text-[32px] font-extrabold tracking-[0.12em] text-black">
              TERMS & CONDITIONS
            </h1>

            <div className="mx-auto mt-10 max-w-[860px] space-y-10 text-[13px] leading-relaxed text-black/70">
              <p>
                These Terms & Conditions apply to your use of our website and
                any purchase you make from us. By accessing our website or
                placing an order, you agree to these terms.
              </p>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  ELIGIBILITY & AGE RESTRICTION
                </h2>
                <p>
                  You must be 18 years or older to purchase alcohol. We may
                  require age verification at checkout and on delivery. We
                  reserve the right to refuse service where required by law.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  ORDERS
                </h2>
                <p>
                  All orders are subject to acceptance and availability. We may
                  cancel or refuse an order at any time, including where there
                  is an error in pricing, product information, or suspected
                  fraud.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  PRICING & PAYMENTS
                </h2>
                <p>
                  Prices are shown in your selected currency and include
                  applicable taxes unless stated otherwise. Payment must be
                  received in full before an order is dispatched.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  SHIPPING & DELIVERY
                </h2>
                <p>
                  Delivery timeframes are estimates and may vary due to courier
                  delays or events outside our control. Shipping costs (if
                  applicable) are shown at checkout. Risk in the goods passes to
                  you on delivery.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  RETURNS & REFUNDS
                </h2>
                <p>
                  If your order arrives damaged or incorrect, contact us as soon
                  as possible with your order details and photos (if relevant).
                  Where required, we will provide a replacement, store credit or
                  refund in accordance with consumer law.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  SUBSCRIPTIONS (IF APPLICABLE)
                </h2>
                <p>
                  Subscription orders renew automatically based on your selected
                  schedule until paused or cancelled. You may pause or cancel as
                  described in your subscription account settings or by
                  contacting us before the renewal cut-off.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  INTELLECTUAL PROPERTY
                </h2>
                <p>
                  All content on this website (including text, images, graphics,
                  branding and design) is owned by or licensed to us. You may
                  not reproduce, distribute or exploit any content without
                  written permission.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  LIMITATION OF LIABILITY
                </h2>
                <p>
                  To the fullest extent permitted by law, we are not liable for
                  any indirect or consequential loss arising from your use of
                  the website or purchase of products. Nothing in these terms
                  limits your rights under applicable consumer law.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  CHANGES TO THESE TERMS
                </h2>
                <p>
                  We may update these Terms & Conditions from time to time. The
                  latest version will be published on this page.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  CONTACT
                </h2>
                <p>
                  For questions about these Terms & Conditions, contact us at{" "}
                  <span className="font-semibold text-black">
                    info@winona.com.au
                  </span>
                  .
                </p>
              </div>

              <p className="text-[11px] tracking-[0.12em] text-black/50">
                Last updated: 1 Feb 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
