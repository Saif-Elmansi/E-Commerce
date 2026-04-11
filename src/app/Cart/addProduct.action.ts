"use server";

import { CartResType } from "@/Types/Cart.type";
import { getToken } from "@/utils/getMytoken";

export async function addMyProduct(id: string) :Promise<CartResType> {
  const token = await getToken();
  console.log("test this token", token);

  console.log(id);

  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "POST",
    body: JSON.stringify({ productId: id }),
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });

  const finalRes = await res.json();
  console.log("final res shop", finalRes);

  return finalRes;
}
