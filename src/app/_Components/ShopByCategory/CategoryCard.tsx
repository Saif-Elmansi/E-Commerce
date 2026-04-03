import { ICategory } from "@/Types/Product.type";
import React from "react";
import { ChevronRight } from "lucide-react";

interface CategoryProps {
  category: ICategory;
}

export default function CategoryCard({ category }: CategoryProps) {
  return (
    <div
      className="group category-card-enter flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white/60 p-3 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-500/10"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/20">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-blue-600/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="w-full flex items-center justify-center gap-2">
        <h3 className="text-slate-800 font-black text-sm md:text-base tracking-tight text-center line-clamp-1">
          {category.name}
        </h3>
        <ChevronRight className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
      </div>

      <div className="w-full h-1 rounded-full bg-slate-100 overflow-hidden">
        <div className="h-full w-0 group-hover:w-full bg-blue-600 transition-all duration-500" />
      </div>

    </div>
  );
}
