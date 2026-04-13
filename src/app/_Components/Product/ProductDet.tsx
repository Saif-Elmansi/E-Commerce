"use client";
import { ProductType } from "@/Types/Product.type";
import React, { useContext, useState } from "react";
import Link from "next/link";
import FeaturesBar from "./CompProductDet/FeaturesBar";
import ProductDetTabs from "./CompProductDet/ProductDetTabs";
import {
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { addMyProduct } from "@/app/Cart/addProduct.action";
import { shopContext } from "@/app/_Context/ShopContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface detType {
  productdet: ProductType;
}
export default function ProductDet({ productdet }: detType) {
  const [activeImage, setActiveImage] = useState(productdet.imageCover);
  const [quantity, setQuantity] = useState(1);

  const { setNumberofShopItem, setDataCartContext } = useContext(
    shopContext,
  ) as any;

  const rout = useRouter();

  async function handelToCart() {
    const res = await addMyProduct(productdet.id);

    console.log(res);

    if (res.status == "success") {
      toast.success(res.message, {
        richColors: true,
        position: "top-center",
      });

      setNumberofShopItem(res.numOfCartItems);
      setDataCartContext(res);
    } else {
      toast.error("Please Go to Login", {
        position: "top-center",
        richColors: true,
      });
      rout.push("/Login");
    }
  }

  async function handelToBuy() {
    const res = await addMyProduct(productdet.id);

    console.log(res);

    if (res.status == "success") {
      toast.success(res.message, {
        richColors: true,
        position: "top-center",
      });

      setNumberofShopItem(res.numOfCartItems);
      setDataCartContext(res);
      rout.push("/Payment");
    } else {
      toast.error("Please Go to Login", {
        position: "top-center",
        richColors: true,
      });
      rout.push("/Login");
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pb-10 pt-2 md:pt-4">
      <nav
        className="mb-5 flex flex-wrap items-center gap-1.5 text-sm font-medium text-slate-500"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="transition hover:text-blue-600">
          Home
        </Link>
        <ChevronRight size={14} className="text-slate-300" aria-hidden />
        <Link href="/Shop" className="transition hover:text-blue-600">
          Shop
        </Link>
        <ChevronRight size={14} className="text-slate-300" aria-hidden />
        <span className="line-clamp-1 max-w-[min(100%,14rem)] font-bold text-slate-800">
          {productdet.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-100/90 bg-linear-to-br from-white via-white to-blue-50/20 p-4 shadow-sm shadow-slate-200/40 md:grid-cols-12 md:gap-10 md:p-6 lg:p-8">
        <div className="col-span-1 space-y-4 md:col-span-5 lg:col-span-4">
          <div className="group relative aspect-square overflow-hidden rounded-3xl bg-linear-to-b from-slate-50 to-blue-50/30 ring-1 ring-slate-100/90 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage}
              alt={productdet.title}
              className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.03] sm:p-8"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5"
              aria-hidden
            />
          </div>

          <div className="flex items-center justify-center gap-2.5 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {productdet.images.map((img, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition-all duration-300 sm:h-20 sm:w-20 ${
                  activeImage === img
                    ? "scale-105 border-blue-600 shadow-md shadow-blue-500/15 ring-2 ring-blue-500/20"
                    : "border-transparent opacity-70 hover:scale-[1.02] hover:border-blue-200 hover:opacity-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  className="h-full w-full object-contain p-1.5"
                  alt={`product thumb ${idx}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-1 space-y-6 md:col-span-7 md:space-y-8 lg:col-span-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-blue-700">
                {productdet.category.name}
              </span>
              <span className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                {productdet.brand?.name || "Generic"}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1.5 text-emerald-700">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-tight">
                In Stock
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-slate-900 md:text-4xl">
              {productdet.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(productdet.ratingsAverage)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-100 text-slate-200"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-black text-slate-900">
                  {productdet.ratingsAverage}
                </span>
              </div>
              <div className="hidden h-4 w-px bg-slate-200 sm:block" />
              <button
                type="button"
                className="text-sm font-bold text-slate-500 transition-colors hover:text-blue-600"
              >
                {productdet.reviews.length} Customer Reviews
              </button>
            </div>
          </div>

          <div className="inline-flex max-w-full flex-wrap items-end gap-4 rounded-[1.75rem] border border-slate-100 bg-slate-50/80 p-5 shadow-inner shadow-slate-100/50">
            <div className="flex flex-col">
              <span className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                Price
              </span>
              <span className="text-4xl font-black leading-none text-slate-900 sm:text-5xl">
                {productdet.priceAfterDiscount
                  ? productdet.priceAfterDiscount
                  : productdet.price}
                <span className="ml-1 text-lg font-bold">EGP</span>
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 pb-0.5">
              <span className="text-lg font-bold text-slate-300 line-through">
                {productdet.price} EGP
              </span>
              <span className="rounded-md bg-red-500 px-2 py-1 text-[10px] font-black text-white shadow-sm shadow-red-200">
                SAVE{" "}
                {Math.round(
                  ((productdet.price -
                    (productdet.priceAfterDiscount
                      ? productdet.priceAfterDiscount
                      : productdet.price)) /
                    productdet.price) *
                    100,
                )}
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">
              Product Overview
            </span>
            <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-600">
              {productdet.description}
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="flex items-center rounded-2xl border-2 border-slate-100 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  title="Decrease Quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-slate-50 hover:text-blue-600"
                >
                  <Minus size={20} strokeWidth={3} />
                </button>
                <span className="w-12 text-center text-lg font-black text-slate-800">
                  {quantity}
                </span>
                <button
                  type="button"
                  title="Increase Quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-slate-50 hover:text-blue-600"
                >
                  <Plus size={20} strokeWidth={3} />
                </button>
              </div>

              <span className="text-sm font-bold italic text-slate-500 sm:ml-auto">
                Only{" "}
                <span className="font-black not-italic text-blue-600">
                  {productdet.quantity || 229}
                </span>{" "}
                units left!
              </span>

              <div className="flex flex-col sm:ml-auto sm:mr-0 sm:text-right">
                <span className="mb-0.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Total Amount
                </span>
                <div className="flex items-baseline gap-1.5 sm:justify-end">
                  <span className="text-2xl font-black text-blue-600">
                    {productdet.priceAfterDiscount
                      ? (
                          quantity * productdet.priceAfterDiscount
                        ).toLocaleString()
                      : (quantity * productdet.price).toLocaleString()}
                  </span>
                  <span className="text-xs font-bold uppercase text-blue-400">
                    Egp
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={handelToCart}
                className="group flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-[0.98] sm:h-16"
              >
                <ShoppingCart
                  size={22}
                  className="transition-transform group-hover:rotate-12"
                />
                Add to Cart
              </button>
              <button
                type="button"
                onClick={handelToBuy}
                className="group flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-slate-900 text-lg font-black text-white transition-all hover:bg-slate-800 active:scale-[0.98] sm:h-16"
              >
                <Zap
                  size={22}
                  className="fill-amber-400 text-amber-400 transition-transform group-hover:scale-110"
                />
                Buy Now
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="group flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-slate-100 font-black text-slate-600 transition-all hover:border-slate-200 hover:bg-slate-50 active:scale-[0.98]"
              >
                <Heart
                  size={20}
                  className="transition-colors group-hover:fill-red-500 group-hover:text-red-500"
                />
                Add to Wishlist
              </button>
              <button
                type="button"
                title="Share"
                className="flex h-14 w-full items-center justify-center rounded-2xl border-2 border-slate-100 text-slate-600 transition-all hover:border-slate-200 hover:bg-slate-50 active:scale-[0.98] sm:h-14 sm:w-14 sm:shrink-0"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-[1.75rem] border border-slate-100 bg-slate-50/90 p-5 sm:grid-cols-3 sm:gap-5 sm:p-6">
            {[
              { icon: Truck, t: "Free Delivery", d: "Orders over $50" },
              { icon: RotateCcw, t: "Easy Returns", d: "30-day policy" },
              { icon: ShieldCheck, t: "Secure Payment", d: "100% Protected" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-3 py-2 shadow-sm shadow-slate-200/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-tight text-slate-800">
                    {item.t}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductDetTabs productdet={productdet} />

      <div className="mt-10">
        <FeaturesBar />
      </div>
    </div>
  );
}
