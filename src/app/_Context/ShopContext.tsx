"use client";
import React, { createContext, ReactNode, useState } from "react";

export const shopContext = createContext({});

export default function ShopContext({ children }: { children: ReactNode }) {
  const [numberofShopItem, setNumberofShopItem] = useState(0);
  return (
    <shopContext.Provider value={{ numberofShopItem, setNumberofShopItem }}>
      {children}
    </shopContext.Provider>
  );
}
