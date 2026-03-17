"use client";
import { ProductType } from "@/Types/Product.type";
import React, { useState } from "react";
import FeaturesBar from "./FeaturesBar";
import {
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

interface detType {
  productdet: ProductType;
}
export default function ProductDet({ productdet }: detType) {
  const [activeImage, setActiveImage] = useState(productdet.imageCover);
  const [quantity, setQuantity] = useState(1);
  console.log(productdet);

  return (
    <div>
      {/* nav det */}
      <div className="px-20"></div>
      {/* main card */}
      <div className="grid grid-cols-1 w-15/16 m-auto md:grid-cols-12 gap-8 px-4 md:px-4 py-4 bg-white rounded-3xl shadow-sm border border-gray-50 mb-4">
        <div className="col-span-1 md:col-span-5 lg:col-span-4 space-y-4">
          <div className="group relative aspect-square bg-slate-50 border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
            <img
              src={activeImage}
              alt={productdet.title}
              className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Badge الخصم لو موجود ممكن يتحط هنا على الصورة */}
          </div>

          {/* معرض الصور المصغرة */}
          <div className="flex gap-3 justify-center items-center py-2 overflow-x-auto no-scrollbar">
            {productdet.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-20 shrink-0 rounded-2xl border-2 transition-all duration-300 overflow-hidden bg-white shadow-sm ${
                  activeImage === img
                    ? "border-blue-600 scale-105 shadow-blue-100"
                    : "border-transparent opacity-60 hover:opacity-100 hover:border-blue-200"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-contain p-1.5"
                  alt={`product thumb ${idx}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 lg:col-span-8 space-y-8 pl-0 md:pl-6">
          {/* 1. Badges & Brand */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-blue-100">
                {productdet.category.name}
              </span>
              <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-slate-100">
                {productdet.brand?.name || "Generic"}
              </span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50/50 px-3 py-1.5 rounded-full border border-emerald-100">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
              <span className="text-[11px] font-black uppercase tracking-tighter">
                In Stock
              </span>
            </div>
          </div>

          {/* 2. Title & Rating */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {productdet.title}
            </h1>
            <div className="flex items-center gap-4">
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
                <span className="text-sm font-black text-slate-900 ml-2">
                  {productdet.ratingsAverage}
                </span>
              </div>
              <div className="h-4 w-px bg-slate-200"></div>
              <button className="text-slate-400 text-sm font-bold hover:text-blue-600 transition-colors">
                8 Customer Reviews
              </button>
            </div>
          </div>

          {/* 3. Price Area */}
          <div className="flex items-end gap-4 p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100/50 w-fit">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Price
              </span>
              <span className="text-5xl font-black text-slate-900 leading-none">
                {productdet.priceAfterDiscount}
                <span className="text-lg ml-1 font-bold">EGP</span>
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 pb-1">
              <span className="text-lg text-slate-300 line-through font-bold">
                {productdet.price} EGP
              </span>
              <span className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-md shadow-sm shadow-red-200">
                SAVE{" "}
                {Math.round(
                  ((productdet.price - productdet.priceAfterDiscount) /
                    productdet.price) *
                    100,
                )}
                %
              </span>
            </div>
          </div>

          {/* 4. Description */}
          <div className="space-y-2">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
              Product Overview
            </span>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl font-medium">
              {productdet.description}
            </p>
          </div>

          {/* 5. Actions Area */}
          <div className="space-y-6 pt-4 ">
            <div className="flex flex-wrap items-center  gap-6">
              {/* Quantity Selector */}
              <div className="flex items-center bg-white border-2 border-slate-100 rounded-2xl p-1 shadow-sm">
                <button
                  title="Decrease Quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"
                >
                  <Minus size={20} strokeWidth={3} />
                </button>
                <span className="w-12 text-center font-black text-lg text-slate-800">
                  {quantity}
                </span>
                <button
                  title="Increase Quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all"
                >
                  <Plus size={20} strokeWidth={3} />
                </button>
              </div>

              {/* Stock Warning */}
              <span className="text-slate-400 text-sm font-bold italic ml-auto md:ml-0">
                Only{" "}
                <span className="text-blue-600">
                  {productdet.quantity || 229}
                </span>{" "}
                units left!
              </span>

              {/* Dynamic Total Price Label */}
              <div className="flex flex-col ml-auto mr-10 ">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                  Total Amount
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-blue-600">
                    {productdet.priceAfterDiscount
                      ? (
                          quantity * productdet.priceAfterDiscount
                        ).toLocaleString()
                      : (quantity * productdet.price).toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-blue-400 uppercase">
                    Egp
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-3 bg-blue-600 hover:bg-blue-700 text-white h-16 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all active:scale-95 group">
                <ShoppingCart
                  size={22}
                  className="group-hover:rotate-12 transition-transform"
                />
                Add to Cart
              </button>
              <button className="flex-2 bg-slate-900 hover:bg-slate-800 text-white h-16 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all active:scale-95 group">
                <Zap
                  size={22}
                  className="fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform"
                />
                Buy Now
              </button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex gap-4">
              <button className="flex-1 border-2 border-slate-100 h-14 rounded-2xl font-black text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95 group">
                <Heart
                  size={20}
                  className="group-hover:fill-red-500 group-hover:text-red-500 transition-colors"
                />
                Add to Wishlist
              </button>
              <button
                title="btn"
                className="w-14 h-14 border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* 6. Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
            {[
              { icon: Truck, t: "Free Delivery", d: "Orders over $50" },
              { icon: RotateCcw, t: "Easy Returns", d: "30-day policy" },
              { icon: ShieldCheck, t: "Secure Payment", d: "100% Protected" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-black text-slate-800 uppercase tracking-tight">
                    {item.t}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* some details */}
      <div>
        
      </div>
      {/* the same product */}
      <div></div>
      {/* footer det */}
      <div className="">
        <FeaturesBar />
      </div>
    </div>
  );
}
