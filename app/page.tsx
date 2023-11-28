import { Slider } from "@/components/slider";
import { Product } from "@/types";
import HighLight from "./components/highlight";
import Products from "./components/products";
async function getProducts(): Promise<Product[] | null> {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_APP_URL + "/api/products",
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
export default async function Home() {
  const products = await getProducts();

  return (
    <main className="w-full overflow-hidden pb-[89px] pt-18">
      <Slider />
      <HighLight />
      {products && <Products products={products} />}
    </main>
  );
}
