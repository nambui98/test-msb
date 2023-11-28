import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { JWT } from "next-auth/jwt"


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "username_password",
            name: "Login with username and password",
            async authorize(credentials) {
                try {
                    const res = await fetch('https://dummyjson.com/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password,
                        })
                    })
                    const user = await res.json();
                    if (user.message) {
                        throw new Error("Tài khoản không tồn tại");
                    } else {

                        return user
                    }

                } catch (error) {
                    throw new Error(error as any)
                }
            },
            credentials: {
                username: { label: "Username", type: "text " },
                password: { label: "Password", type: "password" },
            },
        }),

    ],
    callbacks: {

        async session({ token, session }) {
            if (token) {
                session = { ...session, user: { ...token } }
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token = { ...token, ...user } as JWT;
            }
            return token
        },
    },
}