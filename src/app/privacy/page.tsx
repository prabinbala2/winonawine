import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f5f2]">
      <Menu brand="WINONA" cartCount={0} />

      {/* PRIVACY SECTION */}
      <section className="bg-[#f6f5f2]">
        <div className="mx-auto max-w-[1100px] px-4 md:px-5">
          {/* top bar */}
          <div className="pt-6">
            <div className="h-px w-full bg-black/40" />
            <div className="mt-3 flex items-center">
              <div className="h-[22px] w-[140px] border border-black/60 bg-[#f5c84b] text-center text-[10px] tracking-[0.22em] text-black/80">
                PRIVACY
              </div>
              <div className="h-px flex-1 bg-black/25" />
            </div>
          </div>

          {/* content */}
          <div className="py-16">
            <h1 className="text-center text-[26px] md:text-[32px] font-extrabold tracking-[0.12em] text-black">
              PRIVACY POLICY
            </h1>

            <div className="mx-auto mt-10 max-w-[820px] space-y-10 text-[13px] leading-relaxed text-black/70">
              <p>
                This Privacy Policy explains how we collect, use, store and
                disclose your personal information when you visit our website,
                place an order, or contact us.
              </p>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  INFORMATION WE COLLECT
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Contact details such as your name, email address, phone
                    number and delivery address.
                  </li>
                  <li>
                    Order and payment information (note: payment details are
                    processed securely by our payment providers).
                  </li>
                  <li>
                    Website usage data such as pages viewed, device/browser
                    information, and IP address.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  HOW WE USE YOUR INFORMATION
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>To process and deliver your orders.</li>
                  <li>To provide customer support and respond to enquiries.</li>
                  <li>
                    To send marketing emails if you have subscribed (you can
                    unsubscribe anytime).
                  </li>
                  <li>
                    To improve our website, services and customer experience.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  COOKIES
                </h2>
                <p>
                  We may use cookies and similar technologies to help our website
                  function properly and to understand how visitors use our site.
                  You can control cookies through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  DISCLOSURE OF INFORMATION
                </h2>
                <p>
                  We may share your information with trusted third parties only
                  where necessary, such as delivery partners, payment processors
                  and service providers that help us operate our website. We do
                  not sell your personal information.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  DATA SECURITY
                </h2>
                <p>
                  We take reasonable steps to protect your personal information
                  from misuse, loss or unauthorised access. However, no online
                  transmission is completely secure.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  YOUR RIGHTS
                </h2>
                <p>
                  You may request access to, correction of, or deletion of your
                  personal information (subject to legal requirements). Contact
                  us using the details below.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-bold tracking-[0.12em] text-black">
                  CONTACT
                </h2>
                <p>
                  For privacy questions or requests, contact us at{" "}
                  <span className="font-semibold text-black">
                    info@winona.com.au
                  </span>
                  .
                </p>
              </div>

              <p className="text-[11px] tracking-[0.12em] text-black/50">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
