import * as z from "zod"

export const requestAdviceSchema = z.object({
    fullName: z
        .string({ required_error: "Vui lòng nhập họ tên" })
        .refine((value) => value.length <= 100, {
            message: "Vui lòng nhập họ tên có tối đa 100 ký tự.",
        })
        .refine((value) => !value.startsWith(" ") && !value.endsWith(" "), {
            message: "Không cho phép dấu cách ở đầu hoặc cuối chuỗi.",
        })
        .refine((value) => !value.includes("  "), {
            message: "Không cho phép nhập 2 dấu cách liền kề.",
        })
        .refine((value) => !!value.trim(), {
            message: "Vui lòng nhập họ tên.",
        })
        .refine((value) => !value.includes('"') && !value.includes("'"), {
            message: 'Cho phép nhập chữ và dấu nháy đơn.',
        })
        .refine((value) => {
            const words = value.trim().split(" ");
            return words.length > 1 && words.every((word) => !!word);
        }, {
            message: "Vui lòng nhập họ và tên đầy đủ, có dấu cách ở giữa và chỉ chứa dấu nháy đơn.",
        }),
    phoneNumber: z.string({ required_error: "Vui lòng nhập số điện thoại" }),
    province: z.string({ required_error: "Vui lòng chọn tỉnh" }),
    district: z.string({ required_error: "Vui lòng chọn huyện " }),
    gender: z.enum(["1", "0"], { required_error: "Vui lòng chọn giới tính" }),
    products: z.array(z.number()).refine(data => data.length > 0, {
        message: "Vui lòng chọn",
    }),
    more: z.string().optional(),

})