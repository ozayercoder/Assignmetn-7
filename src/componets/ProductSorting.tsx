"use client";

import { useState } from "react";
import { IProduct } from "@/types/type";
import ProductCard from "@/componets/ProductCard";
import { FiFilter } from "react-icons/fi";

const ProductSorting = ({ products }: { products: IProduct[] }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-asc") return a.today - b.today;
    if (sortBy === "price-desc") return b.today - a.today;
    return 0;
  });

  return (
    <section className="mb-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-gray-800">সব পণ্য</h3>

        <div className="flex items-center gap-2 rounded-xl border border-green-100 bg-white px-3 py-2">
          <FiFilter className="text-green-700" size={17} />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="cursor-pointer bg-transparent text-sm font-medium text-gray-700 outline-none"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSorting;
