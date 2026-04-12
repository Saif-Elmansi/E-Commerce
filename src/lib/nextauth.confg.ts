import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "mega_store",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const res = await fetch(
          `https://ecommerce.routemisr.com/api/v1/auth/signin`,
          {
            body: JSON.stringify(credentials),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const finalRes = await res.json();

        if (finalRes.message == "success") {
          return {
            name: finalRes.user.name,
            email: finalRes.user.email,
            realTokenFromBackend: finalRes.token,
          } as any;
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/Login",
  },

  callbacks: {
    jwt(params) {
      if (params.user) {
        params.token.realTokenFromBackend = (params.user as any) .realTokenFromBackend;
      }
      console.log("params from jwt", params);
      return params.token;
    },

    session(params) {
      console.log("params from session ");

      return params.session;
    },
  },

  session: {
    maxAge: 60 * 60 * 24,
  },

  secret: process.env.BETTER_AUTH_SECRET,
};
