"use client";

import CardProduct from "@/app/_Components/Product/CardProduct";
import { ProductType } from "@/Types/Product.type";
import { LayoutGrid, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

type SortKey = "default" | "price-asc" | "price-desc" | "name" | "rating";

function effectivePrice(p: ProductType) {
  return p.priceAfterDiscount ?? p.price;
}

type ShopCatalogProps = {
  products: ProductType[];
};

export default function ShopCatalog({ products }: ShopCatalogProps) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("default");
  const [category, setCategory] = useState<string | "all">("all");

  const categories = useMemo(() => {
    const names = new Set<string>();
    products.forEach((p) => {
      if (p.category?.name) names.add(p.category.name);
    });
    return ["all", ...Array.from(names).sort((a, b) => a.localeCompare(b))];
  }, [products]);

  const filtered = useMemo(() => {
    let list = [...products];

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand?.name?.toLowerCase().includes(q) ||
          p.category?.name?.toLowerCase().includes(q),
      );
    }

    if (category !== "all") {
      list = list.filter((p) => p.category?.name === category);
    }

    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => effectivePrice(a) - effectivePrice(b));
        break;
      case "price-desc":
        sorted.sort((a, b) => effectivePrice(b) - effectivePrice(a));
        break;
      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "rating":
        sorted.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
        break;
      default:
        break;
    }
    return sorted;
  }, [products, query, sort, category]);

  return (
    <div className="mt-8 md:mt-10">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-100/90 bg-white p-4 shadow-sm shadow-slate-200/35 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, brand, or category..."
              className="h-11 w-full rounded-2xl border border-slate-100 bg-slate-50/80 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none ring-blue-500/0 transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <SlidersHorizontal
                size={18}
                className="shrink-0 text-slate-400"
                aria-hidden
              />
              <label className="sr-only" htmlFor="shop-sort">
                Sort products
              </label>
              <select
                id="shop-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="h-11 min-w-45 cursor-pointer rounded-2xl border border-slate-100 bg-slate-50/80 px-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
              >
                <option value="default">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
                <option value="rating">Top rated</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
              <LayoutGrid size={18} className="text-blue-600" aria-hidden />
              <span>
                {filtered.length}{" "}
                <span className="font-semibold text-slate-500">results</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
          <span className="mr-1 self-center text-xs font-bold uppercase tracking-wider text-slate-400">
            Category
          </span>
          {categories.map((cat) => {
            const active = category === cat;
            const label = cat === "all" ? "All" : cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                  active
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-dashed border-blue-200/80 bg-blue-50/30 px-6 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
            <Search className="h-7 w-7 text-blue-500" aria-hidden />
          </div>
          <h3 className="mt-4 text-lg font-black text-slate-800">
            No products match
          </h3>
          <p className="mt-2 max-w-md text-sm font-medium text-slate-600">
            Try a different search term or clear the category filter to see
            everything again.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-6 rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((product) => (
            <div className="col-span-1" key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
