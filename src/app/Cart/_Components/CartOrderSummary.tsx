import Link from "next/link";
import { Lock, Truck } from "lucide-react";

type CartOrderSummaryProps = {
  subtotal: number;
  itemCount: number;
};

export default function CartOrderSummary({
  subtotal,
  itemCount,
}: CartOrderSummaryProps) {
  return (
    <aside className="h-fit rounded-3xl border border-slate-100/90 bg-linear-to-b from-white to-slate-50/80 p-5 shadow-sm shadow-slate-200/40 sm:p-6 lg:sticky lg:top-32">
      <h2 className="text-lg font-black text-slate-900">Order summary</h2>
      <p className="mt-1 text-xs font-medium text-slate-500">
        {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
      </p>

      <dl className="mt-6 space-y-3 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between text-sm">
          <dt className="font-semibold text-slate-600">Subtotal</dt>
          <dd className="font-black text-slate-900">
            {subtotal.toLocaleString()} EGP
          </dd>
        </div>
        <div className="flex items-center justify-between text-sm">
          <dt className="font-semibold text-slate-600">Shipping</dt>
          <dd className="text-right text-xs font-bold text-emerald-600">
            Calculated at checkout
          </dd>
        </div>
        <div className="flex items-start gap-2 rounded-xl bg-blue-50/80 px-3 py-2.5 text-[11px] font-semibold text-blue-800">
          <Truck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>Free shipping on eligible orders over 500 EGP.</span>
        </div>
      </dl>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-slate-600">Estimated total</span>
          <span className="text-xl font-black text-blue-600">
            {subtotal.toLocaleString()}{" "}
            <span className="text-sm font-bold text-blue-400">EGP</span>
          </span>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
      >
        <Lock size={18} aria-hidden />
        Proceed to checkout
      </button>

      <Link
        href="/Shop"
        className="mt-3 block w-full rounded-2xl border-2 border-slate-100 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-100 hover:bg-blue-50/50 hover:text-blue-700"
      >
        Continue shopping
      </Link>

      <p className="mt-4 text-center text-[10px] font-medium leading-relaxed text-slate-400">
        Secure checkout — demo UI only until payment is connected.
      </p>
    </aside>
  );
}
