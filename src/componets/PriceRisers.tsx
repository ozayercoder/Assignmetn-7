import { IProduct } from "@/types/type";
import ProductCard from "./ProductCard";

const PriceRisers = ({ products }: { products: IProduct[] }) => {
  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct) // বেশি থেকে কম
    .slice(0, 6);
  return (
    <div>
      <section className="container mx-auto my-8 px-4 md:my-10">
        <div className="mb-6 border-b border-green-100 pb-4">
          <h2 className="text-xl font-bold text-gray-900 md:text-3xl">
            <span className="text-red-600 text-xl">▲</span> আজ দাম বেড়েছে
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {risers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PriceRisers;
