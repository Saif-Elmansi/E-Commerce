"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getUserCart } from "../Cart/addProduct.action";

export const shopContext = createContext({});

export default function ShopContext({ children }: { children: ReactNode }) {
  const [numberofShopItem, setNumberofShopItem] = useState(0);
  const [dataCartContext, setDataCartContext] = useState({});

  const [conutWishlist, setCountWishlist] = useState(0);
  const [dataWishlist, setDataWishlist] = useState([]);

  useEffect(() => {
    void getUserCart().then((dataCart) => {
      console.log("finall car end point>>>>", dataCart);

      setNumberofShopItem(dataCart?.numOfCartItems ?? 0);
      setDataCartContext(dataCart ?? {});
    });
  }, []);

  return (
    <shopContext.Provider
      value={{
        numberofShopItem,
        setNumberofShopItem,
        dataCartContext,
        setDataCartContext,
        conutWishlist,
        setCountWishlist,
        dataWishlist,
        setDataWishlist,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
