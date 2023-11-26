import Products from "@/app/components/products";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Products />
      <Products />
    </div>
  );
}
