import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getToken() {
  const myCookies = await cookies();

  const token_from_cookies = myCookies.get("next-auth.session-token")?.value;
  console.log("token_from_cookies", token_from_cookies);
  const myTokenAfterDecoddecode = await {
    token: token_from_cookies,
    secret: process.env.BETTER_AUTH_SECRET!,
  };
  console.log("enddd", myTokenAfterDecoddecode.token);

  return myTokenAfterDecoddecode.token;
}
