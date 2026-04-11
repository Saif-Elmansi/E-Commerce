"use client";
import { shopContext } from "@/app/_Context/ShopContext";
import { addMyProduct } from "@/app/Shop/addProduct.action";
import { ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "sonner";

export default function AddProductBtn({ productId }: { productId: string }) {
  const { setNumberofShopItem } = useContext(shopContext) as any;

  async function handelToCart() {
    const res = await addMyProduct(productId);

    console.log(res);

    if (res.status == "success") {
      toast.success(res.message, {
        richColors: true,
        position: "top-center",
      });

      setNumberofShopItem(res.numOfCartItems);
    }
  }
  return (
    <button
      type="button"
      onClick={handelToCart}
      className="mt-2 hover:cursor-pointer flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-200/60 transition hover:bg-blue-700 active:scale-[0.98]"
    >
      <ShoppingCart size={16} />
      Add to Cart
    </button>
  );
}
