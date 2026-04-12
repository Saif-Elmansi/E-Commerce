"use client";
import { Trash2 } from "lucide-react";
import React from "react";
import { delItemCart } from "../delItemCart.action";

export default function DelBtnItemCart({ id }: { id: string }) {
  async function onDelete() {
    const res = await delItemCart({ productId: id });
    console.log("res dell cat item",res);
    
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
