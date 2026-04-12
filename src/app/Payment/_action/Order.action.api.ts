"use server";

import { getToken } from "@/utils/getMytoken";

export interface ShippingAddressType {
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
    postalCode: string;
  };
}

export async function sendOrderDet(
  cartId: string,
  shippingAddress: ShippingAddressType,
) {
  const token = await getToken();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
    {
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      method: "POST",
      body: JSON.stringify(shippingAddress),
    },
  );

  const finalRes = await res.json();
  console.log(finalRes);

  return finalRes;
}
