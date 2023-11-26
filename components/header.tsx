import Image from "next/image";
import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar";
import { ChevronDown, ChevronRight, Phone, PhoneCall } from "lucide-react";
import { appConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "./ui/button";
import { DialogLogin } from "./dialog-login";
import { getCurrentUser } from "@/lib/session";
import { signOut } from "next-auth/react";
import NavUser from "./nav-user";

type Props = {};

async function Header({}: Props) {
  const user = await getCurrentUser();
  console.log(user);

  return (
    <div className="px-10 py-4 bg-white flex items-center">
      <Link href={"/"}>
        <Image
          src="/images/logo.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Link>
      <nav className="ml-auto">
        <Menubar className="space-x-0 ">
          {appConfig.mainNav.map((nav) => (
            <MenubarMenu key={nav.href + nav.title}>
              <MenubarTrigger asChild={true}>
                <Link href={nav.href ?? ""}>
                  {nav.title}
                  {!nav.href && nav.children && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
              </MenubarTrigger>
              {nav.children && (
                <MenubarContent className="mt-2 p-0">
                  {nav.children.length > 0 ? (
                    nav.children.map((navChild) =>
                      navChild.children ? (
                        <MenubarSub key={navChild.href + navChild.title}>
                          <MenubarSubTrigger className="p-4">
                            {navChild.title}
                          </MenubarSubTrigger>
                          {navChild.children && (
                            <MenubarSubContent className="mx-2 p-0">
                              {navChild.children.length > 0 ? (
                                navChild.children.map((navChildChild) => (
                                  <MenubarItem
                                    className="p-4 text-secondary-800"
                                    key={
                                      navChildChild.href + navChildChild.title
                                    }
                                  >
                                    {navChildChild.title}
                                  </MenubarItem>
                                ))
                              ) : (
                                <p className="text-center p-4">Trống</p>
                              )}
                            </MenubarSubContent>
                          )}
                        </MenubarSub>
                      ) : (
                        <MenubarItem
                          className="p-4"
                          key={navChild.href + nav.title}
                        >
                          {nav.title}
                        </MenubarItem>
                      )
                    )
                  ) : (
                    <p className="text-center p-4">Trống</p>
                  )}
                </MenubarContent>
              )}
            </MenubarMenu>
          ))}
          {!user && (
            <MenubarMenu>
              <MenubarTrigger asChild>
                <DialogLogin />
              </MenubarTrigger>
            </MenubarMenu>
          )}
          <MenubarMenu>
            <MenubarTrigger>
              <Phone className="w-4 h-4 mr-1" /> 1900 6083
            </MenubarTrigger>
          </MenubarMenu>
          <Button variant={"outline"} className="!ml-6">
            Yêu cầu tư vấn
          </Button>
          {user && (
            <div className="flex items-center !ml-6">
              <div className="w-[1.5px] rounded-sm h-4 bg-secondary-400 mr-6" />

              <NavUser user={user!} />
            </div>
          )}
        </Menubar>
      </nav>
    </div>
  );
}

export default Header;
