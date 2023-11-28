import Breadcrumbs from "@/components/breadcrumbs";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";
import React from "react";
import Sidebar from "./components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }
  return (
    <div className="min-h-[calc(100vh_-_121px)] pt-6 mx-auto max-w-5xl ">
      <Breadcrumbs currentPage="Quản lý tài khoản" />
      <div className="mt-6 grid grid-cols-3 gap-x-6">
        <Sidebar user={user} />
        <div className="col-span-2">{children}</div>
      </div>
    </div>
  );
}
