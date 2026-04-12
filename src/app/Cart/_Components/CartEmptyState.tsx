import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function CartEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-blue-200/90 bg-blue-50/40 px-6 py-16 text-center sm:py-20">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-slate-100">
        <ShoppingBag className="h-8 w-8 text-blue-600" aria-hidden />
      </div>
      <h2 className="mt-5 text-xl font-black text-slate-900 sm:text-2xl">
        Your cart is empty
      </h2>
      <p className="mt-2 max-w-md text-sm font-medium text-slate-600">
        Discover deals across electronics, fashion, and more — add products from
        the shop to see them here.
      </p>
      <Link
        href="/Shop"
        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
      >
        Browse shop
        <ArrowRight size={18} aria-hidden />
      </Link>
    </div>
  );
}
