"use server"
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

  return finalRes.message;
}
