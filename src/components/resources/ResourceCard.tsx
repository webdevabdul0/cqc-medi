import Image from "next/image";
import Link from "next/link";

export type ResourceCardData = {
  slug: string;
  tag: string;
  accent: string;
  title: string;
  body: string;
};

export function ResourceCard({ card }: { card: ResourceCardData }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#d8d8d8] bg-brand-lilac">
      <div
        className="relative flex h-[280px] items-center justify-center p-6"
        style={{ backgroundColor: card.accent }}
      >
        <div className="relative h-full w-[205px] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/resource-card-cover.png"
            alt=""
            fill
            sizes="205px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-8">
        <span className="inline-flex items-center rounded-[30px] bg-[#740799] px-2 py-1 text-xs font-medium uppercase tracking-wide text-white">
          {card.tag}
        </span>
        <h3 className="mt-6 text-xl font-semibold leading-[1.2] text-black">
          {card.title}
        </h3>
        <p className="mt-4 text-sm leading-[1.3] text-black/70">{card.body}</p>
        <Link
          href={`/resources/${card.slug}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90"
        >
          Download free
          <Image src="/images/icon-download.svg" alt="" width={14} height={14} />
        </Link>
      </div>
    </div>
  );
}
