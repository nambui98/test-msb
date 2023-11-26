import Card from "@/components/card";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="max-w-5xl mx-auto -mt-[21px]">
      <h4 className="text-2xl text-center mb-10 font-bold tracking-[-0.12px] text-secondary-800">
        Danh sách sản phẩm
      </h4>
      <div className="grid grid-cols-3 gap-x-6 gap-y-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;
