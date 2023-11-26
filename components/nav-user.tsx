"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
type Props = {
  user: Session["user"];
};

export default function NavUser({ user }: Props) {
  const router = useRouter();
  const handleSignOut = (e: MouseEvent) => {
    e.preventDefault();
    signOut({
      callbackUrl: `${window.location.origin}/`,
    }).then(() => router.refresh());
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full flex items-center gap-2 focus-visible:outline-none">
        <Avatar className="border-1 w-8 h-8 border-secondary-600 bg-primary-500">
          <AvatarImage src={user.image} alt={user.username} />
          <AvatarFallback>{user.username}</AvatarFallback>
        </Avatar>
        <h5 className="text-sm font-medium">{user.username}</h5>
        <ChevronDown className="h-5 w-5 text-secondary-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[179px] p-0 mt-4">
        <DropdownMenuItem className="p-4" asChild>
          <Link href={"/dashboard"}>Quản lý tài khoản</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4" onClick={handleSignOut}>
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
