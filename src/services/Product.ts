import { ProductType } from "@/Types/Product.type";

export async function getAllProducts(): Promise<ProductType[]| undefined > {
  try {
    let res = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
      cache: "force-cache",
      next: {
        tags: ["allproducts"],
        
      },
    });
    let { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function getProductById(id:string): Promise<ProductType| undefined > {
  try {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, {
      cache: "force-cache",
      next: {
        tags: ["productdet",id],
        
      },
    });
    let { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
