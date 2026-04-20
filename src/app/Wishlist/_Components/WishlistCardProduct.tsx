"use client";

import { ProductType } from "@/Types/Product.type";
import { deleteWishlistProduct } from "@/services/Wishlist";
import { shopContext } from "@/app/_Context/ShopContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";

type WishlistCardProductProps = {
  product: ProductType;
};

export default function WishlistCardProduct({ product }: WishlistCardProductProps) {
  const { conutWishlist, setCountWishlist, setDataWishlist } = useContext(
    shopContext,
  ) as {
    conutWishlist: number;
    setCountWishlist: (n: number) => void;
    setDataWishlist: (data: unknown[]) => void;
  };

  const [removing, setRemoving] = useState(false);

  const productIdForApi = product._id ?? product.id;

  async function handleRemove() {
    if (!productIdForApi || removing) return;
    setRemoving(true);
    try {
      const res = await deleteWishlistProduct(productIdForApi);
      if (res.status === "success") {
        if (typeof res.count === "number") {
          setCountWishlist(res.count);
        } else {
          setCountWishlist(Math.max(0, conutWishlist - 1));
        }
        if (Array.isArray(res.data)) {
          setDataWishlist(res.data);
        }
        toast.success(res.message ?? "Removed from wishlist", {
          richColors: true,
          position: "top-center",
        });
      } else {
        toast.error(res.message ?? "Could not remove item", {
          position: "top-center",
        });
      }
    } catch {
      toast.error("Something went wrong", { position: "top-center" });
    } finally {
      setRemoving(false);
    }
  }

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-3 shadow-sm shadow-slate-200/30 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-linear-to-b from-slate-50 to-blue-50/30 ring-1 ring-slate-100/80">
        <Link href={`/Product/${product.id}`} className="block h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.imageCover}
            alt={product.title}
            className="h-full w-full object-contain p-2 mix-blend-multiply transition duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute bottom-2 left-2 rounded-lg bg-white/95 px-2 py-1 text-[10px] font-bold text-blue-600 shadow-sm backdrop-blur-sm">
          {product.brand?.name}
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col px-0.5 pb-0.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-500">
          {product.category?.name}
        </span>

        <Link
          href={`/Product/${product.id}`}
          className="mt-1 line-clamp-2 min-h-10 text-sm font-bold leading-snug text-slate-800 transition hover:text-blue-600"
        >
          {product.title.split(" ").slice(0, 3).join(" ")}
        </Link>

        <div className="mt-3 flex flex-1 flex-col justify-end gap-2">
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

          <button
            type="button"
            onClick={handleRemove}
            disabled={removing}
            className="mt-1 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50/80 text-sm font-bold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {removing ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <Trash2 size={16} aria-hidden />
            )}
            Remove from wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
