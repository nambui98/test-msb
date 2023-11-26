import { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GitHubProvider from "next-auth/providers/github"

// import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"


export const authOptions: NextAuthOptions = {
    // huh any! I know.
    // This is a temporary fix for prisma client.
    // @see https://github.com/prisma/prisma/issues/16117
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [


    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }

            return session
        },
        async jwt({ token, user }) {
            //   const dbUser = await db.user.findFirst({
            //     where: {
            //       email: token.email,
            //     },
            //   })

            //   if (!dbUser) {
            //     if (user) {
            //       token.id = user?.id
            //     }
            //     return token
            //   }
            return {
                id: ""
            }
            //   return {
            //     id: dbUser.id,
            //     name: dbUser.name,
            //     email: dbUser.email,
            //     picture: dbUser.image,
            //   }
        },
    },
}