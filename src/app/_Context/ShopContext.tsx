"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getUserCart } from "../Cart/addProduct.action";

export const shopContext = createContext({});

export default function ShopContext({ children }: { children: ReactNode }) {
  const [numberofShopItem, setNumberofShopItem] = useState(0);

  useEffect(() => {
    void getUserCart().then((dataCart) => {
      console.log("finall car end point>>>>", dataCart);
      setNumberofShopItem(dataCart?.numOfCartItems ?? 0);
    });
  }, []);

  return (
    <shopContext.Provider value={{ numberofShopItem, setNumberofShopItem }}>
      {children}
    </shopContext.Provider>
  );
}
