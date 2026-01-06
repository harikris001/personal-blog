import type { NextAuthOptions } from "next-auth";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "johndoe@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Strong Password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("No user found with the given email");
        }

        if (!user.password) {
          throw new Error("No password found");
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password!
        );

        if (!isValidPassword) {
          throw new Error("Incorrect password");
        }
        return user;
      },
    }),
  ],
};

export default NextAuth(authOptions);
