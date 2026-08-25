import Image from "next/image";
import Link from "next/link";

const MENU_LINKS = ["Service", "Sectors", "Prices", "Login"];
const RESOURCE_LINKS = ["Virtual Demo", "Webinar", "Affiliation & Partnership"];

export function Footer() {
  return (
    <footer className="bg-brand-purple pt-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-[100px]">
        <div>
          <Image
            src="/images/footer-logo.svg"
            alt="CQC MediSolutions"
            width={168}
            height={16}
            style={{ height: "auto" }}
          />
          <p className="mt-6 max-w-[290px] text-base leading-[1.3] text-white/80">
            CQC Medisolutions provides practical compliance, training, and
            management solutions to help healthcare organisations meet CQC
            requirements and maintain high standards of care.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Menu</h4>
          <ul className="mt-6 space-y-3">
            {MENU_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-base text-white/80 hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Resources</h4>
          <ul className="mt-6 space-y-3">
            {RESOURCE_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-base text-white/80 hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="max-w-[299px] text-lg font-semibold text-white">
            Join our newsletter to get regular updates
          </h4>
          <p className="mt-3 max-w-[329px] text-sm text-white/70">
            Subscribe our news letter to get more free resources
          </p>
          <form className="mt-6 flex max-w-[375px] gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/30 bg-transparent px-5 py-3.5 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex size-[46px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#f58729] to-[#ef5658]"
            >
              <Image src="/images/footer-arrow.svg" alt="" width={24} height={24} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 sm:flex-row lg:px-[100px]">
          <p>© {new Date().getFullYear()} CQC MediSolutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
