import * as z from "zod"

export const userAuthSchema = z.object({
    username: z.string({ required_error: "Vui lòng nhập" }).trim().min(1, { message: "Ít nhất có một ký tự" }),
    password: z.string({ required_error: "Vui lòng nhập" }).trim().min(1, { message: "Ít nhất có một ký tự" })
})