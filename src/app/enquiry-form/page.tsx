import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Enquiry Form | CQC MediSolutions",
  description: "Get in touch with CQC MediSolutions.",
};

export default function EnquiryFormPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gradient-to-r from-brand-purple to-brand-purple-2 py-20 lg:py-28">
        <div className="mx-auto max-w-[860px] px-6 lg:px-[100px]">
          <h1 className="mb-10 text-center text-4xl font-bold text-white">
            Enquiry Form
          </h1>
          <div className="overflow-hidden rounded-[20px] bg-white p-6">
            <iframe
              src="https://app.flossly.ai/lead-form/e686a9fc4cd5f1cc39d6dfe7929d555eccdb51bf4535b85c8398a5500365c5d3"
              width="100%"
              height="650"
              frameBorder="0"
              style={{ border: "none", borderRadius: "12px" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
