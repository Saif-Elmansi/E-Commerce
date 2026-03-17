import ProductDet from "@/app/_Components/ProductDet";
import { getProductById } from "@/services/Product";
import React from "react";

export default async function page({ params }: any) {
  let myparams = await params;
  console.log(myparams.id);

  let productdet = await getProductById(myparams.id);
  console.log(productdet);

  if (!productdet) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-bold text-slate-600">
          Product not found or error loading data...
        </h2>
      </div>
    );
  }

  return (
    <div>
      <ProductDet productdet={productdet} />{" "}
    </div>
  );
}
