import { ProductType } from "@/Types/Product.type";
import React from "react";
import { getAllProducts } from "@/services/Product";
import ShopHero from "./_Components/ShopHero";
import ShopCatalog from "./_Components/ShopCatalog";
import ShopBottomCta from "./_Components/ShopBottomCta";

export default async function ShopPage() {
  const products = await getAllProducts();
  const list: ProductType[] = products ?? [];


  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pb-12 md:pb-16">
      <div className="pt-2 md:pt-4">
        <ShopHero productCount={list.length} />
      </div>

      <ShopCatalog products={list} />

      <ShopBottomCta />
    </div>
  );
}
