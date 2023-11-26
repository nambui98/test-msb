import { SiteConfig, AppConfig } from "@/types";

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