"use client"
import Link from "next/link";
import { Lock, Package, ShieldCheck } from "lucide-react";
import { useContext } from "react";
import { shopContext } from "@/app/_Context/ShopContext";
import { CartResType } from "@/Types/Cart.type";

/** Static demo numbers — design only. */
export default function PaymentOrderSummary() {
  const { dataCartContext } = useContext(shopContext) as {
    dataCartContext: CartResType;
  };
  return (
    <aside className="h-fit rounded-3xl border border-slate-100/90 bg-linear-to-b from-white to-slate-50/80 p-5 shadow-sm shadow-slate-200/40 sm:p-6 lg:sticky lg:top-32">
      <h2 className="text-lg font-black text-slate-900">Order summary</h2>
      <p className="mt-1 text-xs font-medium text-slate-500">
        Demo totals for layout preview
      </p>

      <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
        <li className="flex gap-3 rounded-xl border border-slate-100 bg-white/80 p-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            <Package size={22} aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-slate-800">
              Sample product line
            </p>
          </div>
          <span className="shrink-0 text-sm font-black text-slate-900">{dataCartContext?.numOfCartItems}</span>
        </li>
      </ul>

      <dl className="mt-5 space-y-3 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between text-sm">
          <dt className="font-semibold text-slate-600">Subtotal</dt>
          <dd className="font-black text-slate-900">
            {dataCartContext?.data?.totalCartPrice } EGP
          </dd>
        </div>
        <div className="flex items-center justify-between text-sm">
          <dt className="font-semibold text-slate-600">Shipping</dt>
          <dd className="text-xs font-bold text-emerald-600">0</dd>
        </div>
        <div className="flex items-start gap-2 rounded-xl bg-blue-50/80 px-3 py-2.5 text-[11px] font-semibold text-blue-800">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>SSL-encrypted form — connect your gateway when ready.</span>
        </div>
      </dl>

      <div className="mt-5 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-slate-600">Total</span>
          <span className="text-xl font-black text-blue-600">
            <span className="text-sm font-bold text-blue-400">{dataCartContext?.data?.totalCartPrice}EGP</span>
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-slate-100 bg-slate-50/90 py-3 text-xs font-semibold text-slate-500">
        <Lock size={14} className="text-blue-600" aria-hidden />
        Demo checkout — no charge
      </div>

      <Link
        href="/Cart"
        className="mt-4 block w-full rounded-2xl border-2 border-slate-100 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-100 hover:bg-blue-50/50 hover:text-blue-700"
      >
        Back to cart
      </Link>
    </aside>
  );
}
