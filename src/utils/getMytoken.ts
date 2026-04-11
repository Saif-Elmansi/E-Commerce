import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

const NEXTAUTH_SESSION_COOKIES = [
  "next-auth.session-token",
  "__Secure-next-auth.session-token",
] as const;

/** Routemisr API token: from `token` cookie (login/signup actions) or inside NextAuth JWT. */
export async function getToken(): Promise<string | undefined> {
  const store = await cookies();

  const fromHttpOnly = store.get("token")?.value;
  if (fromHttpOnly) {
    return fromHttpOnly;
  }

  const secret =
    process.env.BETTER_AUTH_SECRET ?? process.env.NEXTAUTH_SECRET;
  if (!secret) {
    return undefined;
  }

  let sessionJwt: string | undefined;
  for (const name of NEXTAUTH_SESSION_COOKIES) {
    sessionJwt = store.get(name)?.value;
    if (sessionJwt) break;
  }

  if (!sessionJwt) {
    return undefined;
  }

  const decoded = await decode({ token: sessionJwt, secret });
  const backend = (decoded as { realTokenFromBackend?: string } | null)
    ?.realTokenFromBackend;

  return backend ?? undefined;
}
