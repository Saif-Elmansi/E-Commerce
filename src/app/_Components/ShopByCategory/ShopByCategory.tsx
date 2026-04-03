import { getCategory } from "@/services/Category";
import React from "react";
import MyTitle from "../MyTitle";
import { FaLongArrowAltRight } from "react-icons/fa";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

export default async function ShopByCategory() {
  let categorys = await getCategory();

  return (
    <div className="rounded-3xl border border-blue-100/60 bg-linear-to-b from-white to-blue-50/30 px-4 py-8 shadow-sm shadow-blue-900/5 md:px-6 md:py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <MyTitle tag="Shop By" name="Category" />
        <Link
          href="/Shop"
          className="group inline-flex items-center gap-2 self-start rounded-2xl border border-blue-100 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:self-auto"
        >
          <span>View All Categories</span>
          <FaLongArrowAltRight className="transition group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="shop-category-grid mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-6 mb-2">
        {categorys.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}
