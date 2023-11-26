import { Slider } from "@/components/slider";
import Image from "next/image";
import HighLight from "./components/highlight";
import Products from "./components/products";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Slider />
      <HighLight />
      <Products />
    </main>
  );
}
