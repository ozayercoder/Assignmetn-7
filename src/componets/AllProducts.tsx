import { IProduct } from "@/types/type";
import ProductCard from "./ProductCard";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <section
      id="allproducts"
      className="container mx-auto my-8 px-4 md:my-10 scroll-mt-24"
    >
      <div className="mb-6 border-b border-green-100 pb-4">
        <h2 className="text-xl font-bold text-gray-900 md:text-3xl">সব পণ্য</h2>
        <span className="rounded-lg bg-green-50  py-2 text-sm font-semibold text-green-700">
          মোট {products.length}টি পণ্য দেখানো হচ্ছে
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
