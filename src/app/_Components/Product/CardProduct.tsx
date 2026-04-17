"use client";
import { ProductType } from "@/Types/Product.type";
import { Eye, Heart, HeartPlus, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import AddProductBtn from "./AddProductBtn";
import { postWishlist } from "@/services/Wishlist";
import { shopContext } from "@/app/_Context/ShopContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: ProductType;
}

export default function CardProduct({ product }: ProductCardProps) {
  const { conutWishlist, setCountWishlist, setDataWishlist } =
    useContext(shopContext) as any;

  async function handelWishlist() {
    const res = await postWishlist(product._id);
    console.log(res);
    if ((res.status = "success")) {
      setCountWishlist(conutWishlist + 1);

      setDataWishlist(res.data);
      toast.success(res.message, {
        richColors: true,
        position: "top-center",
      });
    }
  }
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-3 shadow-sm shadow-slate-200/30 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-linear-to-b from-slate-50 to-blue-50/30 ring-1 ring-slate-100/80">
        <img
          src={product.imageCover}
          alt={product.title}
          className="h-full w-full object-contain p-2 mix-blend-multiply transition duration-500 group-hover:scale-105"
        />

        <button
          title="heart"
          type="button"
          onClick={handelWishlist}
          className="absolute right-2 top-2 rounded-full bg-white/90 p-2 text-slate-400 shadow-sm backdrop-blur-sm transition hover:scale-105 hover:text-red-500"
        >
          <HeartPlus size={18} />
        </button>

        <Link
          title="View product"
          href={`/Product/${product.id}`}
          className="absolute right-2 top-14 rounded-full bg-white/90 p-2 text-slate-400 shadow-sm backdrop-blur-sm transition hover:scale-105 hover:text-amber-500"
        >
          <Eye size={18} />
        </Link>

        <div className="absolute bottom-2 left-2 rounded-lg bg-white/95 px-2 py-1 text-[10px] font-bold text-blue-600 shadow-sm backdrop-blur-sm">
          {product.brand?.name}
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col px-0.5 pb-0.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-500">
          {product.category.name}
        </span>

        <h3 className="mt-1 min-h-10 line-clamp-2 text-sm font-bold leading-snug text-slate-800 transition group-hover:text-blue-600">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h3>

        <div className="mt-2 flex flex-1 flex-col justify-end gap-2">
          {product.priceAfterDiscount ? (
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
              <span className="text-lg font-black text-emerald-600">
                {product.priceAfterDiscount}{" "}
                <span className="text-[10px] font-semibold">EGP</span>
              </span>
              <span className="text-sm font-bold text-slate-400 line-through">
                {product.price} EGP
              </span>
            </div>
          ) : (
            <span className="text-lg font-black text-slate-900">
              {product.price}{" "}
              <span className="text-[10px] font-semibold">EGP</span>
            </span>
          )}

          <div className="flex items-center justify-end gap-1 rounded-lg bg-slate-50/80 px-2 py-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={14}
                className={
                  index < Math.round(product.ratingsAverage)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-slate-200 text-slate-200"
                }
              />
            ))}
            <span className="ml-1 text-[11px] font-bold text-amber-700">
              {product.ratingsAverage}
            </span>
          </div>

          <AddProductBtn productId={product.id} />
        </div>
      </div>
    </div>
  );
}
