import React, { lazy, Suspense } from "react";
import MyTitle from "./_Components/MyTitle";
import CardProduct from "./_Components/Product/CardProduct";
import { ProductType } from "@/Types/Product.type";
import { getAllProducts } from "@/services/Product";
import MySlider from "./_Components/MySlider";

import img1 from "@images/32ab6199086767.5eeac72551f8a.jpg";
import img2 from "@images/Trumps-one-iPhone-related-bucket-list-entry-that-even-he-cannot-make-happen.webp";
import img3 from "@images/saint-petersburg-russia-circa-may-goods-display-sony-store-galeria-shopping-center-electronics-store-134641471.webp";
import img4 from "@images/shutterstock_2434354809.webp";
import { FaHeadset, FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import CardStyle from "./_Components/CardStyle";
import BlueNewsletterSection from "./_Components/BlueNewsletterSection";
import LoadingView from "./_Components/States/LoadingView";

const ShopByCategoryLazy = lazy(
  () => import("./_Components/ShopByCategory/ShopByCategory"),
);

export default async function Home() {
  let products = await getAllProducts();

  const images = [img2.src, img1.src, img3.src, img4.src];

  const trustItems = [
    {
      icon: FaTruck,
      title: "Free Shipping",
      desc: "On orders over 500 EGP",
      iconWrap: "bg-blue-50 text-blue-600 ring-blue-100",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Payment",
      desc: "100% secure transactions",
      iconWrap: "bg-sky-50 text-sky-600 ring-sky-100",
    },
    {
      icon: FaUndo,
      title: "Easy Returns",
      desc: "14-day return policy",
      iconWrap: "bg-indigo-50 text-indigo-600 ring-indigo-100",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      desc: "Dedicated support team",
      iconWrap: "bg-cyan-50 text-cyan-600 ring-cyan-100",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pb-4">
      <section className="pt-2 md:pt-4">
        <MySlider Listofimg={images} slidesPerView={1} />
      </section>

      <section className="mt-6 md:mt-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, desc, iconWrap }) => (
            <div
              key={title}
              className="group flex items-center gap-4 rounded-2xl border border-slate-100/90 bg-white p-4 shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md hover:shadow-blue-500/10"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition group-hover:scale-105 ${iconWrap}`}
              >
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold leading-tight text-slate-800">
                  {title}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-slate-500 md:text-[12px]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <Suspense
          fallback={
            <div className="rounded-3xl border border-dashed border-blue-100 bg-blue-50/20 py-8">
              <LoadingView />
            </div>
          }
        >
          <ShopByCategoryLazy />
        </Suspense>
      </section>

      <section className="mt-10 md:mt-14">
        <CardStyle />
      </section>

      <section className="mt-12 md:mt-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <MyTitle tag="Featured" name="Products" />
          <p className="text-sm font-medium text-slate-500 max-w-md">
            Hand-picked electronics and accessories — quality-checked for you.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products?.map((myproduct: ProductType) => (
            <div className="col-span-1" key={myproduct.id}>
              <CardProduct product={myproduct} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <BlueNewsletterSection />
      </section>
    </div>
  );
}
