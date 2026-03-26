import React from "react";
import MyTitle from "./_Components/MyTitle";
import CardProduct from "./_Components/Product/CardProduct";
import { ProductType } from "@/Types/Product.type";
import { getAllProducts } from "@/services/Product";
import MySlider from "./_Components/MySlider";

import img1 from "@images/32ab6199086767.5eeac72551f8a.jpg";
import img2 from "@images/Trumps-one-iPhone-related-bucket-list-entry-that-even-he-cannot-make-happen.webp";
import img3 from "@images/saint-petersburg-russia-circa-may-goods-display-sony-store-galeria-shopping-center-electronics-store-134641471.webp";
import img4 from "@images/shutterstock_2434354809.webp";

export default async function Home() {
  let products = await getAllProducts();

  const images = [img1.src, img2.src, img3.src, img4.src];
  return (
    <div className="px-10 ">
      <MySlider Listofimg={images} slidesPerView={1}/>
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
