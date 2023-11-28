import { appConfig } from "@/config/site";
import { getCurrentUser } from "@/lib/session";
import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DialogLogin } from "./dialog-login";
import NavUser from "./nav-user";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar";
import SheetRequestAdvice from "./sheet-request-advice";
import { MainNavItem } from "@/types";

type Props = {};
async function getMenus(): Promise<MainNavItem[] | null> {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_APP_URL + "/api/menu",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response?.ok) {
      return null;
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);

    return null;
  }
}
async function Header({}: Props) {
  const user = await getCurrentUser();
  const mainNav = await getMenus();

  return (
    <div className="px-10 py-4 sticky z-20 top-0 inset-x-0 bg-white flex items-center">
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
          {mainNav?.map((nav) => (
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
          <SheetRequestAdvice />

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
