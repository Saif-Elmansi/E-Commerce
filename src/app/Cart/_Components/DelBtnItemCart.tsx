"use client";
import { Trash2 } from "lucide-react";
import React, { useContext } from "react";
import { delItemCart } from "../delItemCart.action";
import { shopContext } from "@/app/_Context/ShopContext";
import { toast } from "sonner";

export default function DelBtnItemCart({ id }: { id: string }) {
  const { setDataCartContext, setNumberofShopItem } = useContext(
    shopContext,
  ) as { setDataCartContext: any; setNumberofShopItem: any };

  async function onDelete() {
    const res = await delItemCart({ productId: id });
    console.log("res dell cat item", res);
    if (res.status == "success") {
      toast.success(res.message, {
        richColors: true,
        position: "top-center",
      });
      setDataCartContext(res);
      setNumberofShopItem(res.numOfCartItems);
    }
  }

  return (
    <button
      onClick={onDelete}
      className="group flex items-center justify-center p-2 bg-red-50 hover:bg-red-500 transition-colors duration-300 rounded-lg border border-red-100 hover:border-red-500 shadow-sm"
      title="DEL"
    >
      <Trash2
        size={20}
        className="text-red-500 group-hover:text-white transition-colors duration-300"
      />
    </button>
  );
}
