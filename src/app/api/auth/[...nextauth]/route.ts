import { nextAuthConfig } from "@/lib/nextauth.confg"
import NextAuth from "next-auth"

const handler = NextAuth(nextAuthConfig)

export { handler as GET, handler as POST }