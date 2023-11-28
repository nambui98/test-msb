import Products from "@/app/components/products";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div className="border border-secondary-200 rounded-[8px] bg-white text-base font-medium">
        <div className="p-4 border-b border-secondary-200  text-lg text-secondary-800">
          Thông tin sản phẩm
        </div>
        <div className="p-4 h-28 space-y-4 text-sm font-normal text-secondary-500"></div>
      </div>
    </div>
  );
}
