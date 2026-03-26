import { ICategory } from "@/Types/Product.type";

export async function getCategory(): Promise<ICategory[]> {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`, {
    cache: "force-cache",
    next: {
      tags: ["category"],
    },
  });
  const finRes = await res.json();
  return finRes.data;
}
