import { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
// import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { JWT } from "next-auth/jwt"


export const authOptions: NextAuthOptions = {
    // huh any! I know.
    // This is a temporary fix for prisma client.
    // @see https://github.com/prisma/prisma/issues/16117
    // session: {
    //     strategy: "jwt",
    // },

    providers: [
        CredentialsProvider({
            id: "username_password",
            name: "Login with username and password",
            async authorize(credentials, req) {
                console.log("----------------------------------------------------------------");

                // const user = {
                //     id: ""
                //     /* add function to get user */
                // }

                // const res = await fetch(req.headers?.origin + "/api/login-guest", {

                //     method: "POST",
                //     body: JSON.stringify({
                //         userId: id,
                //     })
                // });
                // console.log(credentials);

                const res = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        // username: credentials?.username,
                        // password: credentials?.password,
                        username: "kminchelle",
                        password: "0lelplR",
                        // expiresInMins: 60, // optional
                    })
                })
                // .then(res => res.json())
                // .then(console.log);
                const user = await res.json();
                // console.log("--------------------user");

                // console.log(user);

                return user
            },
            credentials: {
                username: { label: "Username", type: "text " },
                password: { label: "Password", type: "password" },
            },
        }),

    ],
    callbacks: {

        async session({ token, session, user }) {
            console.log("----session token");
            console.log(token);

            console.log("----session session");
            console.log(session);

            console.log("----session user");
            console.log(user);
            if (token) {
                session = { ...session, user: { ...token } }
            }

            return session;
        },
        async jwt({ token, user }) {
            console.log("----user");

            console.log(user);
            console.log("----token");

            console.log(token);
            if (user) {
                token = { ...token, ...user } as JWT;
            }

            return token
        },
        // async session({ token, session, user }) {
        //     if (token) {
        //         console.log("----token");
        //         // console.log(token);
        //         console.log(token);


        //         session.user.id = token.id as string
        //         session.user.username = token.username
        //         session.user.email = token.email
        //         // session.user.firstName = token.
        //     }

        //     return session
        // },
        // async jwt({ token, user }) {
        //     //   const dbUser = await db.user.findFirst({
        //     //     where: {
        //     //       email: token.email,
        //     //     },
        //     //   })

        //     //   if (!dbUser) {
        //     //     if (user) {
        //     //       token.id = user?.id
        //     //     }
        //     //     return token
        //     //   }
        //     console.log(user);
        //     console.log("111111111111111111");

        //     console.log(token);


        //     return {
        //         ...token,
        //     }
        //     // return {
        //     //     id: user.id,
        //     //     name: user.name,
        //     //     email: user.email,
        //     //     picture: user.image,
        //     // }
        // },
    },
}