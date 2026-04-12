"use server";
import { CartResType } from "@/Types/Cart.type";
import { getToken } from "@/utils/getMytoken";

export async function delItemCart({
  productId,
}: {
  productId: string;
}): Promise<CartResType> {
  const token = await getToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      headers: {
        token: token as string,
      },
      method: "DELETE",
    },
  );

  const finalRes = await res.json();
  console.log("delllll item mee", finalRes);

  return finalRes;
}
