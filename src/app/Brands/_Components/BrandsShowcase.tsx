import Link from "next/link";
import { BrandObjectType } from "@/Types/Brands.type";
import { LayoutGrid, Sparkles } from "lucide-react";

type BrandsShowcaseProps = {
  brands: BrandObjectType[];
};

export default function BrandsShowcase({ brands }: BrandsShowcaseProps) {
  if (brands.length === 0) {
    return (
      <section className="mt-8 md:mt-10">
        <div className="rounded-3xl border border-dashed border-blue-200/80 bg-blue-50/30 px-6 py-16 text-center">
          <p className="text-lg font-black text-slate-800">No brands to show</p>
          <p className="mt-2 text-sm font-medium text-slate-600">
            Check back soon — this space will list partner brands.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8 md:mt-10">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-100/90 bg-white p-4 shadow-sm shadow-slate-200/35 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex items-start gap-3 sm:items-center">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
            <LayoutGrid size={22} strokeWidth={2} aria-hidden />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600">
              <Sparkles size={12} aria-hidden />
              Partner directory
            </div>
            <h2 className="mt-0.5 text-lg font-black text-slate-900 sm:text-xl">
              All brands
            </h2>
            <p className="text-sm font-medium text-slate-500">
              Logos and names from the catalog — hover cards for a subtle lift.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/90 px-4 py-2.5 text-sm font-bold text-slate-700">
          <span className="text-blue-600">{brands.length}</span>
          <span className="ml-1.5 font-semibold text-slate-500">total</span>
        </div>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {brands.map((brand) => (
          <li key={brand._id} className="col-span-1">
            <Link
              href="/Shop"
              className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-3 shadow-sm shadow-slate-200/30 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-b from-slate-50 to-blue-50/40 p-4 ring-1 ring-slate-100/90">
                {/* eslint-disable-next-line @next/next/no-img-element -- remote brand assets */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex flex-1 flex-col px-0.5 pb-0.5">
                <span className="line-clamp-2 text-center text-sm font-bold leading-snug text-slate-800 transition group-hover:text-blue-600">
                  {brand.name}
                </span>
                <span className="mt-1 line-clamp-1 text-center text-[11px] font-medium text-slate-400">
                  {brand.slug}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
