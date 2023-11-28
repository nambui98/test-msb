import { MainNavItem, Product } from "@/types"

export async function GET() {
    try {

        const menus: MainNavItem[] = [
            {
                title: "Sản phẩm",
                children: [
                    {
                        title: "Thẻ tín dụng",
                        children: []
                    },
                    {
                        title: "Vay",
                        children: [
                            {
                                title: "MSB Mastercard mDigi",
                                href: "/"
                            },
                            {
                                title: "MSB Mastercard Super Free",
                                href: "/"
                            },
                            {
                                title: "MSB Visa Online",
                                href: "/"
                            },
                            {
                                title: "MSB Visa Travel",
                                href: "/"
                            },
                            {
                                title: "MSB Visa Signature",
                                href: "/"
                            },
                        ]
                    },
                    {
                        title: "Bảo hiểm",
                        href: "/"
                    }
                ]
            },
            {
                title: "So sánh",
                children: [
                ]
            },
            {
                title: "Câu hỏi thường gặp",
                href: "/"
            }
        ]

        return new Response(JSON.stringify(menus))
    } catch (error) {
        return new Response(null, { status: 500 })
    }
}

