import Link from "next/link";
import { ChevronRight, Package, ShieldCheck, Truck } from "lucide-react";
import MyTitle from "@/app/_Components/MyTitle";

type ShopHeroProps = {
  productCount: number;
};

export default function ShopHero({ productCount }: ShopHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-100/90 bg-linear-to-br from-slate-50 via-white to-blue-50/60 px-5 py-8 shadow-sm shadow-slate-200/40 sm:px-8 sm:py-10 md:px-10 md:py-12">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.35)_1px,transparent_0)] bg-size-[24px_24px] opacity-[0.4]"
        aria-hidden
      />

      <div className="relative">
        <nav
          className="flex flex-wrap items-center gap-1 text-sm font-medium text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-slate-300" aria-hidden />
          <span className="font-bold text-slate-800">Shop</span>
        </nav>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <MyTitle tag="Browse" name="All Products" />
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
              Discover everything in one place — curated quality, fair prices, and
              the same trusted checkout you know from MEGA STORE.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white/90 px-4 py-2 text-sm font-bold text-slate-800 shadow-sm">
              <Package size={18} className="text-blue-600" />
              {productCount} items
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              icon: Truck,
              title: "Fast delivery",
              desc: "Reliable shipping partners",
              wrap: "bg-blue-50 text-blue-600 ring-blue-100",
            },
            {
              icon: ShieldCheck,
              title: "Secure checkout",
              desc: "Encrypted payments",
              wrap: "bg-sky-50 text-sky-600 ring-sky-100",
            },
            {
              icon: Package,
              title: "Quality picks",
              desc: "Top-rated catalog",
              wrap: "bg-indigo-50 text-indigo-600 ring-indigo-100",
            },
          ].map(({ icon: Icon, title, desc, wrap }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-sm shadow-slate-200/30 backdrop-blur-sm"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${wrap}`}
              >
                <Icon size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{title}</p>
                <p className="text-xs font-medium text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
