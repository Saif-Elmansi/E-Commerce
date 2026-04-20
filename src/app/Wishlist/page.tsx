"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { shopContext } from "../_Context/ShopContext";
import { ProductType } from "@/Types/Product.type";
import WishlistCardProduct from "./_Components/WishlistCardProduct";
import { ChevronRight, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function page() {
  const { dataWishlist, conutWishlist } = useContext(shopContext) as any;
  const list = Array.isArray(dataWishlist) ? dataWishlist : [];
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    // Needed when wishlist endpoint returns only product IDs.
    async function loadProducts() {
      try {
        setLoadingProducts(true);
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products?limit=200",
        );
        const json = await res.json();
        setAllProducts(Array.isArray(json?.data) ? json.data : []);
      } catch {
        setAllProducts([]);
      } finally {
        setLoadingProducts(false);
      }
    }

    if (list.length > 0) {
      loadProducts();
    }
  }, [list.length]);

  const wishlistProducts = useMemo(() => {
    // Case 1: wishlist already contains full product objects.
    const directProducts = list.filter(
      (item: any) =>
        item &&
        typeof item === "object" &&
        typeof item.title === "string" &&
        typeof item.imageCover === "string",
    ) as ProductType[];

    if (directProducts.length > 0) {
      return directProducts;
    }

    // Case 2: wishlist contains only IDs.
    const wishlistIds = list
      .map((item: any) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object") return item._id ?? item.id;
        return null;
      })
      .filter(Boolean) as string[];

    if (wishlistIds.length === 0 || allProducts.length === 0) {
      return [];
    }

    const idSet = new Set(wishlistIds);
    return allProducts.filter((p) => idSet.has(p._id) || idSet.has(p.id));
  }, [list, allProducts]);

  const count = conutWishlist || wishlistProducts.length || list.length || 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pb-12 md:pb-16">
      <section className="pt-2 md:pt-4">
        <div className="relative overflow-hidden rounded-3xl border border-slate-100/90 bg-linear-to-br from-slate-50 via-white to-blue-50/60 px-5 py-8 shadow-sm shadow-slate-200/40 sm:px-8 sm:py-10 md:px-10 md:py-11">
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
              <span className="font-bold text-slate-800">Wishlist</span>
            </nav>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                  <Sparkles size={14} className="shrink-0" aria-hidden />
                  Saved for later
                </div>
                <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  <span>My </span>
                  <span className="text-blue-600">Wishlist</span>
                </h1>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
                  Items you loved are saved here. Move any product to cart
                  whenever you are ready.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white/90 px-4 py-2.5 text-sm font-bold text-slate-800 shadow-sm">
                  <Heart size={18} className="text-blue-600" aria-hidden />
                  {count} {count === 1 ? "item" : "items"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {wishlistProducts.map((myproduct: ProductType) => (
          <div className="col-span-1" key={myproduct.id}>
            <WishlistCardProduct product={myproduct} />
          </div>
        ))}
      </div>
      {loadingProducts && list.length > 0 && wishlistProducts.length === 0 ? (
        <p className="mt-6 text-center text-sm font-semibold text-slate-500">
          Loading wishlist products...
        </p>
      ) : null}
    </div>
  );
}
