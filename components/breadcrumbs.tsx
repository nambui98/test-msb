"use client";
import { dashboardConfig } from "@/config/dashboard";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  currentPage: string;
};

export default function Breadcrumbs({}: Props) {
  const pathname = usePathname();
  const currentPage = dashboardConfig.mainNav.find(
    (nav) => nav.href === pathname
  );
  return (
    <div className="flex items-center space-x-1 text-secondary-500 text-sm font-normal">
      <Link href="/" className="">
        Trang chủ
      </Link>
      <ChevronRightIcon className="w-4 h-4" />
      <Link href="#" className="text-primary-500 font-semibold">
        {currentPage?.breadcrumb}
      </Link>
    </div>
  );
}
