import { SiteConfig, AppConfig, DashboardConfig } from "@/types"
import { FileText, LogOut, User } from "lucide-react";
export const siteConfig: SiteConfig = {
    name: "Test MSB dashboard",
    description:
        "A project interview MSB",
    url: "",
    ogImage: "",
    links: {
        twitter: "",
        github: "",
    },
}

export const dashboardConfig: DashboardConfig = {
    mainNav: [
        {
            title: "Thông tin tài khoản",
            icon: User,
            href: "/dashboard",
            breadcrumb: "Quản lý tài khoản"
        },
        {
            title: "Thông tin sản phẩm",
            icon: FileText,
            href: "/dashboard/products",
            breadcrumb: "Quản lý sản phẩm"
        },

    ]
}