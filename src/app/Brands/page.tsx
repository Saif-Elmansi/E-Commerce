import { getAllBrands } from "@/services/Brands";
import React from "react";

export default async function page() {
  const data = await getAllBrands();
  console.log("in brands", data);

  return <div>brands page</div>;
}
