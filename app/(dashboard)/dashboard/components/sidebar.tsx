"use client";
import { Button } from "@/components/ui/button";
import { dashboardConfig } from "@/config/dashboard";
import { cn } from "@/lib/utils";
import { MouseEvent, MouseEventHandler } from "react";
import { FileText, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Session } from "next-auth";

type Props = {
  user: Session["user"];
};

export default function Sidebar({ user }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = (e: MouseEvent) => {
    e.preventDefault();
    signOut({
      redirect: false,
    }).then(() => {
      router.push("/");
      router.refresh();
    });
  };
  return (
    <div className="sticky h-fit top-20 border border-secondary-200 rounded-[8px] bg-white text-base font-medium">
      <div className="p-4 border-b border-secondary-200  text-lg text-secondary-800">
        {user.username}
      </div>
      {dashboardConfig.mainNav.map((nav) => (
        <Button
          asChild
          key={nav.href + nav.title}
          variant={"ghost"}
          className={cn(
            "group duration-200 hover:bg-primary-25 hover:text-primary-500 justify-start w-full h-auto p-4 flex items-center gap-3 !text-base",
            {
              "text-primary-500 bg-primary-25": nav.href === pathname,
            }
          )}
        >
          <Link href={nav.href!}>
            <nav.icon
              className={cn(
                "w-6 h-6 duration-200 group-hover:text-primary-500 text-secondary-500",
                {
                  "text-primary-500": nav.href === pathname,
                }
              )}
            />
            {nav.title}
          </Link>
        </Button>
      ))}
      <Button
        variant={"ghost"}
        type="button"
        onClick={handleSignOut}
        className="group hover:bg-primary-25 hover:text-primary-500 justify-start w-full h-auto p-4 flex items-center gap-3 !text-base"
      >
        <LogOut className="w-6 h-6 group-hover:text-primary-500 text-secondary-500" />
        Đăng xuất
      </Button>
    </div>
  );
}
