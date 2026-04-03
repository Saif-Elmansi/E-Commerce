"use server";
import { cookies } from "next/headers";
import { schematypesign } from "./Signup.schema";

export async function signupServerAction(values: schematypesign) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/auth/signup`,
    {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const finalRes = await res.json();
  const myCookis = await cookies();

  myCookis.set("token", finalRes.token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
  });
  return finalRes.message;
}
