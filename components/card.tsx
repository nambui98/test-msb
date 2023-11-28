import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";
type Props = Product;

export default function Card({ id, title, content, imageUrl }: Props) {
  return (
    <div className="group rounded-2xl duration-200 overflow-hidden bg-white hover:shadow-primary-hover">
      <Image
        src={imageUrl}
        alt="product1"
        className="h-[210px]"
        width={333}
        height={210}
      />
      <div className="px-4 py-6">
        <h5 className="text-lg font-bold tracking-[-0.09px] text-secondary-800">
          {title}
        </h5>
        <p className="mt-2 font-normal text-base tracking-[-0.08px] color-[#344054]">
          {content}
        </p>
        <Button
          variant={"ghost"}
          className="group/view border-none hover:bg-transparent hover:text-primary-500/70 mt-4 px-0 py-2 text-primary-500"
        >
          Khám phá ngay{" "}
          <ArrowRight className="ml-2 duration-150 w-5 h-5 group-hover/view:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
