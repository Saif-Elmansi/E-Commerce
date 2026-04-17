"use server";
import { getToken } from "@/utils/getMytoken";

export async function getWishlist() {
  const token = await getToken();
  const data = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });
  const res = await data.json();

  console.log("res in final wish list", res);

  return res;
}
export async function postWishlist(idProduct: string) {
  const token = await getToken();
  const data = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method: "POST",

    body: JSON.stringify({
      productId: idProduct,
    }),
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });
  const res = await data.json();

  console.log("res in final wish list", res);

  return res;
}
