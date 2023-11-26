import { User } from "@prisma/client"
import type { Icon, LucideIcon } from "lucide-react"

import { Icons } from "@/components/icons"

export type NavItem = {
    title: string
    href?: string
    disabled?: boolean
    children?: Array<NavItem> | []
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
    title: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
} & (
        | {
            href: string
            items?: never
        }
        | {
            href?: string
            items: NavLink[]
        }
    )

export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
        twitter: string
        github: string
    }
}

export type AppConfig = {
    mainNav: MainNavItem[]
}
export type DashboardConfig = {
    mainNav: (MainNavItem & { icon: LucideIcon, breadcrumb: string })[]
}
export type DashboardConfig = {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
    name: string
    description: string
    stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
    Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
        stripeCurrentPeriodEnd: number
        isPro: boolean
    }