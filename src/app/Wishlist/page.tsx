"use client"
import React, { useContext } from "react";
import { shopContext } from "../_Context/ShopContext";

export default function page() {
  const { dataWishlist, conutWishlist, setCountWishlist, setDataWishlist } =
    useContext(shopContext) as any;
  console.log(dataWishlist);

  return <div>wishlist page</div>;
}
