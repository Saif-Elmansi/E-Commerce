import { BrandObjectType } from "@/Types/Brands.type";

export async function getAllBrands(): Promise<BrandObjectType[] | undefined> {
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands", {
      method: "GET",
      cache: "force-cache",
    });
    const finalRes = await res.json();

    return finalRes.data;
  } catch (error) {
    console.log(error);
  }
}
