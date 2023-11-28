import Card from "@/components/card";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { HTMLAttributes } from "react";

type Props = {
  classNameList?: HTMLAttributes<HTMLDivElement>["className"];
  products: Product[];
};

const Products = ({ classNameList, products }: Props) => {
  return (
    <div className="lg:max-w-5xl md:max-w-3xl mx-6 md:mx-auto -mt-[21px]">
      <h4 className="text-2xl text-center mb-10 font-bold tracking-[-0.12px] text-secondary-800">
        Danh sách sản phẩm
      </h4>
      <div
        className={cn(
          "grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10",
          classNameList
        )}
      >
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
