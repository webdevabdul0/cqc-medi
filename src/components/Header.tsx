import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Prices", href: "#prices" },
  { label: "Resources", href: "#resources" },
];

export function Header() {
  return (
    <header className="relative z-20 bg-brand-purple">
      <div className="mx-auto hidden max-w-[1440px] items-center justify-between px-[100px] py-[18px] text-white lg:flex">
        <div className="flex items-center gap-10 text-sm font-medium">
          <a href="mailto:cqcmedisolutions@gmail.com" className="flex items-center gap-2">
            <Image src="/images/icon-mail.svg" alt="" width={20} height={16} />
            Email: cqcmedisolutions@gmail.com
          </a>
          <a href="tel:08006891061" className="flex items-center gap-2">
            <Image src="/images/icon-phone.svg" alt="" width={16} height={16} />
            Telephone: 0800 689 1061
          </a>
          <a href="https://wa.me/07956776114" className="flex items-center gap-2">
            <Image src="/images/icon-whatsapp.svg" alt="" width={18} height={18} />
            Whatsapp us: 07956776114
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook">
            <Image src="/images/social-facebook.svg" alt="" width={24} height={24} />
          </a>
          <a href="#" aria-label="Instagram">
            <Image src="/images/social-instagram.svg" alt="" width={24} height={24} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Image src="/images/social-linkedin.svg" alt="" width={24} height={24} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-[100px]">
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.svg" alt="CQC MediSolutions" width={84} height={42} />
          </Link>
          <nav className="hidden items-center gap-10 text-base font-medium text-white md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-green">
                {link.label}
              </a>
            ))}
          </nav>
          <Link
            href="#login"
            className="rounded-xl bg-gradient-to-r from-[#f58729] to-[#ef5658] px-8 py-3.5 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
