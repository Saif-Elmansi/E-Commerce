import React from "react";
import MyTitle from "./_Components/MyTitle";
import CardProduct from "./_Components/CardProduct";
import { ProductType } from "@/Types/Product.type";
import { getAllProducts } from "@/services/Product";

export default async function Home() {
  let products = await getAllProducts();
  return (
    <div className="px-10 ">
      <MyTitle tag="Featured" name="Products" />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-6">
        {products?.map((myproduct: ProductType) => (
          <div className="col-span-1" key={myproduct.id}>
            <CardProduct product={myproduct} />
          </div>
        ))}
      </div>
    </div>
  );
}
