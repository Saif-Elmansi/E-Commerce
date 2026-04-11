import type { Metadata } from "next";
import React from "react";
import { getAllBrands } from "@/services/Brands";
import { BrandObjectType } from "@/Types/Brands.type";
import BrandsHero from "./_Components/BrandsHero";
import BrandsShowcase from "./_Components/BrandsShowcase";
import BrandsFooterCta from "./_Components/BrandsFooterCta";

export const metadata: Metadata = {
  title: "Brands | MEGA STORE",
  description: "Browse official partner brands.",
};

export default async function BrandsPage() {
  const data = await getAllBrands();
  const brands: BrandObjectType[] = Array.isArray(data) ? data : [];

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pb-12 md:pb-16">
      <div className="pt-2 md:pt-4">
        <BrandsHero brandCount={brands.length} />
      </div>
      <BrandsShowcase brands={brands} />
      <BrandsFooterCta />
    </div>
  );
}
