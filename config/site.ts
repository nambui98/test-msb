import { SiteConfig, AppConfig, ProductCategory } from "@/types";

export const siteConfig: SiteConfig = {
    name: "Test MSB",
    description:
        "A project interview MSB",
    url: "",
    ogImage: "",
    links: {
        twitter: "",
        github: "",
    },
}

export const appConfig: AppConfig = {
    mainNav: [
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
}

export const productCategories: ProductCategory[] = [
    {
        id: 1,
        title: "Thẻ tín dụng",
        value: 1
    },
    {
        id: 2,
        title: "Mua trước trả sau",
        value: 2
    }, {
        id: 3,
        title: "Vay linh hoạt",
        value: 3
    },
    {
        id: 4,
        title: "Tài khoản M-Pro",
        value: 4
    },
    {
        id: 5,
        title: "Tiền nhanh",
        value: 5
    },
]
