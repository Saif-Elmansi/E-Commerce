"use client";

import { ProductType } from "@/Types/Product.type";
import {
  CheckCircle2,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";

type TabId = "details" | "reviews" | "shipping";

const keyFeatures = [
  "Premium Quality Product",
  "100% Authentic Guarantee",
  "Fast & Secure Packaging",
  "Quality Tested",
] as const;

type Props = {
  productdet: ProductType;
};

export default function ProductDetTabs({ productdet }: Props) {
  const [tab, setTab] = useState<TabId>("details");
  const reviewCount = productdet.reviews?.length ?? 0;
  const subcategoryLabel =
    productdet.subcategory?.length > 0
      ? productdet.subcategory.map((s) => s.name).join(" · ")
      : "—";

  const summaryLine = [
    `Category ${productdet.category.name}`,
    subcategoryLabel !== "—" ? `Subcategory ${subcategoryLabel}` : null,
    `Brand ${productdet.brand?.name ?? "—"}`,
    `${productdet.sold}+ sold`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm shadow-slate-200/40">
      <div
        className="flex flex-wrap gap-0 border-b border-slate-200 bg-slate-50/90 px-2 sm:px-4"
        aria-label="Product information tabs"
      >
        {(
          [
            {
              id: "details" as const,
              label: "Product Details",
              icon: ShoppingBag,
            },
            {
              id: "reviews" as const,
              label: `Reviews (${reviewCount})`,
              icon: Star,
            },
            {
              id: "shipping" as const,
              label: "Shipping & Returns",
              icon: Truck,
            },
          ] as const
        ).map(({ id, label, icon: Icon }) => {
          const active = tab === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`relative flex min-h-13 flex-1 items-center justify-center gap-2 px-3 py-3 text-sm font-semibold transition sm:min-h-14 sm:flex-none sm:px-6 ${
                active
                  ? "text-emerald-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Icon
                size={18}
                className={active ? "text-emerald-600" : "text-slate-400"}
                strokeWidth={2}
                aria-hidden
              />
              <span className="whitespace-nowrap">{label}</span>
              {active ? (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-emerald-600 sm:left-4 sm:right-4" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="p-5 sm:p-8">
        {tab === "details" ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                About this Product
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {summaryLine}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/90 p-5 sm:p-6">
                <h3 className="text-base font-bold text-slate-900">
                  Product Information
                </h3>
                <dl className="mt-4 space-y-0 divide-y divide-slate-200/80">
                  {[
                    ["Category", productdet.category.name],
                    ["Subcategory", subcategoryLabel],
                    ["Brand", productdet.brand?.name ?? "—"],
                    ["Items Sold", `${productdet.sold}+ sold`],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between gap-4 py-3 text-sm first:pt-0"
                    >
                      <dt className="font-medium text-slate-500">{k}</dt>
                      <dd className="text-right font-semibold text-slate-900">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/90 p-5 sm:p-6">
                <h3 className="text-base font-bold text-slate-900">
                  Key Features
                </h3>
                <ul className="mt-4 space-y-3">
                  {keyFeatures.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="font-medium leading-snug text-slate-700">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600">
              {productdet.description}
            </p>
          </div>
        ) : null}

        {tab === "reviews" ? (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Customer Reviews
            </h2>
            {reviewCount === 0 ? (
              <p className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 py-10 text-center text-sm font-medium text-slate-500">
                No reviews yet. Be the first to share your experience.
              </p>
            ) : (
              <ul className="space-y-4">
                {productdet.reviews.map((r) => (
                  <li
                    key={r._id}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-bold text-slate-900">
                        {r.user?.name ?? "Customer"}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < Math.round(r.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "fill-slate-100 text-slate-200"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {r.review}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}

        {tab === "shipping" ? (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Shipping & Returns
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/90 p-5">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Truck size={20} aria-hidden />
                  <h3 className="font-bold text-slate-900">Delivery</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Standard delivery timelines apply. You will receive tracking
                  details once your order ships. Free shipping may apply on
                  eligible orders over 500 EGP.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/90 p-5">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 size={20} aria-hidden />
                  <h3 className="font-bold text-slate-900">Returns</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Easy returns within 14 days for unused items in original
                  packaging. Contact support to start a return — we are here to
                  help.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
