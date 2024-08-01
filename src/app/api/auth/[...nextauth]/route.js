import NextAuth from "next-auth/next";
import GeoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_CLIENT,
    }),
    GeoogleProvider({
      clientId: process.env.GEOOGLE_CLIENT_ID,
      clientSecret: process.env.GEOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
