import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string


declare module "next-auth/jwt" {
    interface JWT {
        id: UserId,
        username: string,
        email: string,
        firstName: string,
        lastName: string,
        gender: string,
        image: string,
        token: string
    }
    interface User {
        id: UserId,
        username: string,
        email: string,
        firstName: string,
        lastName: string,
        gender: string,
        image: string,
        token: string
    }
}
declare module "next-auth" {

    interface Session {
        user: User & {
            id: UserId,
            username: string,
            email: string,
            firstName: string,
            lastName: string,
            gender: string,
            image: string,
            token: string
        }
    }
}