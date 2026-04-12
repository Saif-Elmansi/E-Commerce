import Link from "next/link";
import { ChevronRight, ShoppingBag, Sparkles } from "lucide-react";
import MyTitle from "@/app/_Components/MyTitle";

type CartHeroProps = {
  itemCount: number;
};

export default function CartHero({ itemCount }: CartHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-100/90 bg-linear-to-br from-slate-50 via-white to-blue-50/60 px-5 py-8 shadow-sm shadow-slate-200/40 sm:px-8 sm:py-10 md:px-10 md:py-11">
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
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>
          <ChevronRight size={14} className="text-slate-300" aria-hidden />
          <span className="font-bold text-slate-800">Cart</span>
        </nav>

        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
              <Sparkles size={14} className="shrink-0" aria-hidden />
              Your bag
            </div>
            <div className="mt-4">
              <MyTitle tag="Shopping" name="Cart" />
            </div>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
              Review your items and totals before checkout — same look as the rest
              of MEGA STORE.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white/90 px-4 py-2.5 text-sm font-bold text-slate-800 shadow-sm">
              <ShoppingBag size={18} className="text-blue-600" aria-hidden />
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
