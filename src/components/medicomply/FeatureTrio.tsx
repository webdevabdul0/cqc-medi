import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";

const SECTOR_CARDS = [
  {
    title: "Domiciliary Care",
    body: "Our software is designed to streamline and enhance the operations of your domiciliary care business, providing you with the tools to deliver exceptional care while optimizing efficiency. With features like customizable care plans, you can tailor support to meet each client's unique needs, ensuring person-centered care. Real-time scheduling and staff management tools simplify workforce coordination, reducing administrative burdens and minimizing errors.",
  },
  {
    title: "Supported Living",
    body: "Our software is specifically designed to meet the needs of supported living businesses, offering robust tools and features to streamline your operations and enhance the quality of care. We provide comprehensive assistance with your CQC application and registration, ensuring your business meets all regulatory requirements right from the start. With tools for creating personalised support plans, managing staff schedules, and maintaining secure, compliant records, our software helps you deliver consistent, high-quality care.",
  },
  {
    title: "Hair Transplant Clinic",
    body: "Our software is built to support the unique needs of hair transplant clinics, offering a range of features that streamline operations and ensure compliance with industry standards. We assist with digital audits and risk assessments, helping you identify and address potential areas of improvement efficiently. With mock inspection tools, your clinic can prepare thoroughly for regulatory evaluations, ensuring you meet all required standards. Additionally, our platform includes customisable policies, allowing you to tailor protocols to your clinic's specific needs.",
  },
  {
    title: "Private Clinics",
    body: "Our software is specifically designed for private clinics registered with the CQC, offering a range of features to streamline operations and ensure full compliance with regulatory standards. We assist with digital audits and risk assessments, enabling you to identify and address potential issues efficiently. Our mock inspection tools prepare your clinic for regulatory evaluations, while our customisable policies allow you to tailor procedures to your specific needs. Additionally, we provide comprehensive preparation for the CQC registered manager interview, equipping you with the knowledge and confidence to succeed.",
  },
];

export function FeatureTrio() {
  return (
    <section className="bg-brand-lilac py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[620px] text-center">
          <h2 className="text-4xl font-bold leading-[1.2] text-brand-purple sm:text-5xl lg:text-[50px]">
            The regulated activities
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-base leading-[1.3] text-black">
            Open the ones that sound like your service. Most providers
            register for more than one, and the combinations are where
            applications usually go wrong.
          </p>
        </ScrollReveal>
        <ScrollRevealStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {SECTOR_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-[20px] border border-[#cecece] bg-white p-8"
            >
              <h3 className="text-2xl font-bold leading-[1.2] text-brand-purple lg:text-[28px]">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.5] text-black">
                {card.body}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
