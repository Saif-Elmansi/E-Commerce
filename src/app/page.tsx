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
import ShopByCategory from "./_Components/ShopByCategory/ShopByCategory";
import { FaHeadset, FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import CardStyle from "./_Components/CardStyle";
import BlueNewsletterSection from "./_Components/BlueNewsletterSection";

export default async function Home() {
  let products = await getAllProducts();

  const images = [img2.src, img1.src, img3.src, img4.src];
  return (
    <div className="w-11/12 m-auto ">
      <MySlider Listofimg={images} slidesPerView={1} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 mt-5 ">
        {/* 1. Free Shipping */}
        <div className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-center min-w-12 h-12 bg-blue-50 rounded-full mr-3 text-blue-600">
            <FaTruck size={20} />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-slate-800 leading-tight">
              Free Shipping
            </h3>
            <p className="text-[12px] text-slate-500 font-medium">
              On orders over 500 EGP
            </p>
          </div>
        </div>

        {/* 2. Secure Payment */}
        <div className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-center min-w-12 h-12 bg-emerald-50 rounded-full mr-3 text-emerald-600">
            <FaShieldAlt size={20} />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-slate-800 leading-tight">
              Secure Payment
            </h3>
            <p className="text-[12px] text-slate-500 font-medium">
              100% secure transactions
            </p>
          </div>
        </div>

        {/* 3. Easy Returns */}
        <div className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-center min-w-12 h-12 bg-orange-50 rounded-full mr-3 text-orange-600">
            <FaUndo size={18} />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-slate-800 leading-tight">
              Easy Returns
            </h3>
            <p className="text-[12px] text-slate-500 font-medium">
              14-day return policy
            </p>
          </div>
        </div>

        {/* 4. 24/7 Support */}
        <div className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-center min-w-12 h-12 bg-purple-50 rounded-full mr-3 text-purple-600">
            <FaHeadset size={20} />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-slate-800 leading-tight">
              24/7 Support
            </h3>
            <p className="text-[12px] text-slate-500 font-medium">
              Dedicated support team
            </p>
          </div>
        </div>
      </div>
      <ShopByCategory />
      <CardStyle />
      <MyTitle tag="Featured" name="Products" />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-6">
        {products?.map((myproduct: ProductType) => (
          <div className="col-span-1" key={myproduct.id}>
            <CardProduct product={myproduct} />
          </div>
        ))}
      </div>
      <BlueNewsletterSection />
    </div>
  );
}
