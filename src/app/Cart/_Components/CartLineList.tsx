import Link from "next/link";
import { CartItemType } from "@/Types/Cart.type";
import { ChevronRight } from "lucide-react";
import DelBtnItemCart from "./DelBtnItemCart";

type CartLineListProps = {
  products: CartItemType[];
};

export default function CartLineList({ products }: CartLineListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-black text-slate-900 sm:text-xl">
        Items in your cart
      </h2>
      <ul className="space-y-3">
        {products.map((line, idx) => {
          const p = line.product;
          const lineTotal = line.count * line.price;
          return (
            <li
              key={`${p.id}-${idx}`}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/30 transition hover:border-blue-100 hover:shadow-md hover:shadow-blue-500/10 sm:gap-5 sm:p-5"
            >
              <Link
                href={`/Product/${p.id}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-linear-to-b from-slate-50 to-blue-50/40 ring-1 ring-slate-100 sm:h-28 sm:w-28"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imageCover}
                  alt={p.title}
                  className="h-full w-full object-contain p-2"
                />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/Product/${p.id}`}
                    className="group inline-flex items-start gap-1 text-left"
                  >
                    <span className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 transition group-hover:text-blue-600 sm:text-base">
                      {p.title}
                    </span>
                    <ChevronRight
                      size={16}
                      className="mt-0.5 shrink-0 text-slate-300 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-blue-500"
                      aria-hidden
                    />
                  </Link>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {p.brand?.name ?? "Brand"} ·{" "}
                    {p.category?.name ?? "Category"}
                  </p>
                  <p className="mt-2 text-sm font-bold text-slate-700">
                    {line.price.toLocaleString()}{" "}
                    <span className="text-xs font-semibold text-slate-400">
                      EGP each
                    </span>
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center sm:text-right">
                  <span className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-600">
                    Qty {line.count}
                  </span>
                  <span className="text-base font-black text-blue-600 sm:text-lg">
                    {lineTotal.toLocaleString()}{" "}
                    <span className="text-xs font-bold text-blue-400">EGP</span>
                  </span>
                  <span>
                    <DelBtnItemCart id={p.id}/>
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
