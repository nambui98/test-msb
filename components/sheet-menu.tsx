"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";
import { requestAdviceSchema } from "@/lib/validations/request-advice";
import { MainNavItem } from "@/types";
import { AlignJustify, ChevronDown } from "lucide-react";
import Link from "next/link";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
type FormData = z.infer<typeof requestAdviceSchema>;

type Props = {
  mainNav: MainNavItem[] | null;
};

export default function SheetMenu({ mainNav }: Props) {
  return (
    <Sheet>
      <SheetOverlay />
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="!ml-4 md:hidden flex"
        >
          <AlignJustify className="" />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[500px] px-1">
        <Accordion type="single" collapsible className="w-full mt-6">
          {mainNav?.map((nav) => (
            <AccordionItem key={nav.href + nav.title} value={nav.title}>
              {nav.href ? (
                <Link href={nav.href ?? "/"}>
                  <AccordionTrigger>
                    {nav.title}
                    {nav.children && nav.children.length > 0 && (
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    )}
                  </AccordionTrigger>
                </Link>
              ) : (
                <AccordionTrigger>
                  {nav.title}
                  {nav.children && nav.children.length > 0 && (
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  )}
                </AccordionTrigger>
              )}
              {nav.children && nav.children.length > 0 && (
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full px-4">
                    {nav.children.map((navChild) => (
                      <AccordionItem
                        key={navChild.title + nav.href}
                        value={navChild.title}
                      >
                        <AccordionTrigger>
                          {navChild.title}
                          {navChild.children &&
                            navChild.children.length > 0 && (
                              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                            )}
                        </AccordionTrigger>
                        <AccordionContent>
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full px-4"
                          >
                            {navChild.children?.map((navChildChild) => (
                              <AccordionItem
                                key={navChildChild.title + navChild.href}
                                value={navChildChild.title}
                              >
                                <AccordionTrigger>
                                  {navChildChild.title}
                                </AccordionTrigger>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
