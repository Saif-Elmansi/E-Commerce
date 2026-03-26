import { getCategory } from "@/services/Category";
import React from "react";
import MyTitle from "../MyTitle";
import { FaLongArrowAltRight } from "react-icons/fa";
import CategoryCard from "./CategoryCard";

export default async function ShopByCategory() {
  let categorys = await getCategory();

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <MyTitle tag="Shop By" name="Category" />
        <div className="flex items-center justify-center gap-2 hover:text-blue-600 font-bold">
          {" "}
          <p>View All Categories</p> <FaLongArrowAltRight />{" "}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 p-5 mt-8 mb-10">
        {categorys.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}
