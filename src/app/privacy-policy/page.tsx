import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | CQC MediSolutions",
  description:
    "How CQC MediSolutions collects, uses, shares and protects your personal data, and your rights under UK data protection law.",
};

const SECTION_HEADING = "text-2xl font-bold leading-[1.2] text-brand-purple lg:text-[28px]";
const BODY = "mt-4 text-base leading-[1.6] text-black/80";
const LIST = "mt-4 list-disc space-y-2 pl-6 text-base leading-[1.6] text-black/80";
const TABLE = "mt-6 w-full border-collapse overflow-hidden rounded-[12px] border border-[#cecece] text-left text-base";
const TH = "border-b border-[#cecece] bg-brand-lilac px-5 py-3 font-semibold text-brand-purple";
const TD = "border-b border-[#cecece] px-5 py-3 align-top text-black/80";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white pb-20 pt-36 lg:pb-28 lg:pt-56">
        <div className="mx-auto max-w-[860px] px-6 lg:px-0">
          <h1 className="text-4xl font-bold leading-[1.2] text-brand-purple lg:text-[48px]">
            Privacy Policy
          </h1>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>1. Who we are</h2>
            <p className={BODY}>
              CQC MediSolutions is a trading name of CQC MediSolutions Limited, a company
              registered in England and Wales (company number 16312683), registered office
              138a Alwoodley Lane, Leeds, United Kingdom, LS17 7PP. We are the data controller
              for the personal data described in this policy.
            </p>
            <p className={BODY}>
              CQC MediSolutions is an independent consultancy. We are not part of, or endorsed
              by, the Care Quality Commission.
            </p>
            <p className={BODY}>
              Questions about this policy or your data: email cqcmedisolutions@gmail.com, call
              0800 689 1061, or write to us at the address above.
            </p>
          </section>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>2. What personal data we collect</h2>
            <ul className={LIST}>
              <li>
                <strong>Contact details:</strong> name, phone number, email address, job title
                and business name.
              </li>
              <li>
                <strong>Enquiry details:</strong> the type of service you plan to register, the
                support you need, your preferred call time, and anything you tell us on calls or
                in messages.
              </li>
              <li>
                <strong>Client records:</strong> information needed to deliver our registration
                support, such as business details, registered manager details, policies and
                application documents.
              </li>
              <li>
                <strong>Payment and billing details:</strong> invoices and payment records. Card
                payments are handled by our payment provider; we do not store full card numbers.
              </li>
              <li>
                <strong>Webinar and event data:</strong> registration details and attendance.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser and device type, and how you
                use our website, collected through cookies (see section 9).
              </li>
            </ul>
            <p className={BODY}>
              We do not ask for health information about you through our forms or ads. If client
              work involves special category data, we handle it only as needed to deliver the
              service and with appropriate safeguards.
            </p>
          </section>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>3. How we collect it</h2>
            <ul className={LIST}>
              <li>
                <strong>Facebook and Instagram lead forms:</strong> when you submit one of our
                forms, Meta passes us the details you entered. If you choose to start a Messenger
                conversation, Meta also shares your public profile and the ad you responded to.
              </li>
              <li>
                <strong>Our website and webinar pages:</strong> when you fill in a form, book a
                call or register for a webinar.
              </li>
              <li>
                <strong>Directly from you:</strong> by phone, email, Messenger, WhatsApp or in
                meetings.
              </li>
              <li>
                <strong>When you become a client:</strong> through our MediComply portal and the
                documents you share with us.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>4. How we use it and our lawful basis</h2>
            <div className="overflow-x-auto">
              <table className={TABLE}>
                <thead>
                  <tr>
                    <th className={TH}>What we do</th>
                    <th className={TH}>Lawful basis (UK GDPR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={TD}>Reply to your enquiry and call you at the time you chose</td>
                    <td className={TD}>Steps before entering a contract, at your request</td>
                  </tr>
                  <tr>
                    <td className={TD}>
                      Deliver our CQC registration support and MediComply software
                    </td>
                    <td className={TD}>Performance of a contract</td>
                  </tr>
                  <tr>
                    <td className={TD}>Invoice you and keep accounting records</td>
                    <td className={TD}>Legal obligation</td>
                  </tr>
                  <tr>
                    <td className={TD}>
                      Send follow-ups and information about related services to business contacts
                    </td>
                    <td className={TD}>
                      Legitimate interests (you can opt out at any time)
                    </td>
                  </tr>
                  <tr>
                    <td className={TD}>
                      Send marketing emails to sole traders or personal email addresses
                    </td>
                    <td className={TD}>Consent, where required by PECR</td>
                  </tr>
                  <tr>
                    <td className={TD}>Run webinars and send joining details and recordings</td>
                    <td className={TD}>Performance of a contract or legitimate interests</td>
                  </tr>
                  <tr>
                    <td className={TD}>Measure and improve our ads and website</td>
                    <td className={TD}>
                      Consent for non-essential cookies; legitimate interests otherwise
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={BODY}>
              We do not sell your personal data, and we do not make decisions about you using
              solely automated processing.
            </p>
          </section>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>5. Who we share it with</h2>
            <p className={BODY}>
              We share personal data only with service providers who help us run the business,
              under contracts that require them to protect it:
            </p>
            <div className="overflow-x-auto">
              <table className={TABLE}>
                <thead>
                  <tr>
                    <th className={TH}>Provider</th>
                    <th className={TH}>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={TD}>Meta Platforms (Facebook, Instagram, Messenger, WhatsApp)</td>
                    <td className={TD}>Lead forms, advertising and messaging</td>
                  </tr>
                  <tr>
                    <td className={TD}>Zapier</td>
                    <td className={TD}>Passing lead form details into our CRM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={BODY}>
              We may also share data with professional advisers, or where the law requires it.
              With your agreement, we share application information with the Care Quality
              Commission when we support your registration.
            </p>
          </section>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>6. International transfers</h2>
            <p className={BODY}>
              Some of our providers, such as Meta and Zapier, process data outside the UK,
              including in the United States. Where they do, we rely on UK adequacy regulations
              (including the UK–US Data Bridge) or the ICO&apos;s International Data Transfer
              Agreement or Addendum to keep your data protected.
            </p>
          </section>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>7. How long we keep it</h2>
            <div className="overflow-x-auto">
              <table className={TABLE}>
                <thead>
                  <tr>
                    <th className={TH}>Data</th>
                    <th className={TH}>How long</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={TD}>Enquiries that don&apos;t become clients</td>
                    <td className={TD}>24 months after our last contact</td>
                  </tr>
                  <tr>
                    <td className={TD}>Client records</td>
                    <td className={TD}>6 years after the service ends</td>
                  </tr>
                  <tr>
                    <td className={TD}>Invoices and accounting records</td>
                    <td className={TD}>6 years, as required by HMRC</td>
                  </tr>
                  <tr>
                    <td className={TD}>Webinar registrations</td>
                    <td className={TD}>12 months after the event</td>
                  </tr>
                  <tr>
                    <td className={TD}>Marketing preferences and opt-outs</td>
                    <td className={TD}>Kept so we can respect your choice</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={BODY}>After that we securely delete or anonymise the data.</p>
          </section>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>8. Your rights</h2>
            <p className={BODY}>Under UK data protection law you have the right to:</p>
            <ul className={LIST}>
              <li>access the personal data we hold about you</li>
              <li>have inaccurate data corrected</li>
              <li>have your data deleted in certain circumstances</li>
              <li>
                restrict or object to how we use it, including objecting to direct marketing at
                any time
              </li>
              <li>receive your data in a portable format</li>
              <li>withdraw consent where we rely on it</li>
            </ul>
            <p className={BODY}>
              To use any of these rights, contact us using the details in section 1. We will
              respond within one month and there is normally no charge.
            </p>
            <p className={BODY}>
              If you&apos;re unhappy with how we handle your data, please tell us first. You can
              also complain to the Information Commissioner&apos;s Office at{" "}
              <a
                href="https://ico.org.uk/make-a-complaint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple underline"
              >
                ico.org.uk/make-a-complaint
              </a>{" "}
              or on 0303 123 1113.
            </p>
          </section>

          <section className="mt-12">
            <h2 className={SECTION_HEADING}>9. Cookies, security and changes</h2>
            <p className={BODY}>
              <strong>Cookies:</strong> our website uses essential cookies to work. With your
              consent it also uses analytics and advertising cookies, including the Meta Pixel,
              to measure and improve our ads. You can change your choice at any time through our
              cookie banner or your browser settings.
            </p>
            <p className={BODY}>
              <strong>Security:</strong> we use access controls, encryption where available and
              trusted providers to protect your data. Only staff who need it can access it.
            </p>
            <p className={BODY}>
              <strong>Changes:</strong> we may update this policy. The latest version will always
              be on this page.
            </p>
            <p className={BODY}>Last updated: 10 November 2026</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
