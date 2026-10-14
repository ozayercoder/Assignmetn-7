import AllProducts from "@/componets/AllProducts";
import Hero from "@/componets/Hero";
import PriceFallers from "@/componets/PriceFallers";
import PriceRisers from "@/componets/PriceRisers";
import { IProduct } from "@/types/type";

async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 60 } }, // ৬০ সেকেন্ড cache
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
export default async function HomePage() {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <PriceRisers products={products} />
      <PriceFallers products={products} />
      <AllProducts  products={products} />
    </>
  );
}
