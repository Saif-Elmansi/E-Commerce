import { ProductType } from "@/Types/Product.type";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: ProductType;
}
export default function CardProduct({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-3 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
      {/* Product Image & Badge */}
      <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.imageCover}
          alt={product.title}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        />

        {/* Wishlist Button */}
        <button
          title="heart"
          className="absolute top-2 hover:cursor-pointer right-2 p-2 bg-white/80 backdrop-blur-sm text-slate-400 hover:text-red-500 rounded-full shadow-sm transition-colors"
        >
          <Heart size={18} />
        </button>
        <Link
          title="heart"
          href={`/Product/${product.id}`}
          className="absolute hover:cursor-pointer top-14 right-2 p-2 bg-white/80 backdrop-blur-sm text-slate-400 hover:text-yellow-500 rounded-full shadow-sm transition-colors"
        >
          <Eye size={18} />
        </Link>

        {/* Brand Badge */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-blue-600 shadow-sm">
          {product.brand?.name}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4 px-1 hover:cursor-pointer">
        <span className="text-[11px] font-bold text-blue-500 uppercase tracking-wider">
          {product.category.name}
        </span>

        <h3 className="mt-1 text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          {product.priceAfterDiscount ? (
            <div className="flex flex-col items-center">
              <span className="text-lg font-black text-green-500">
                {product.priceAfterDiscount}{" "}
                <span className="text-[10px] font-medium">EGP</span>
                <span className="line-through ml-3 mr-1 text-red-500">
                  {product.price}
                </span>
                <span className="text-[10px] font-medium text-slate-900">
                  EGP
                </span>
              </span>
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-900">
                {product.price}{" "}
                <span className="text-[10px] font-medium">EGP</span>
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-end gap-1  px-2 py-1 rounded-lg">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={
                index < Math.round(product.ratingsAverage)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-gray-200 text-gray-200"
              }
            />
          ))}

          <span className="ml-1 text-[12px] font-bold text-amber-700">
            {product.ratingsAverage}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full h-10 hover:cursor-pointer bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 hover:bg-blue-700 shadow-md shadow-blue-200">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
