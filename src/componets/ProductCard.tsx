import { IProduct } from "@/types/type";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-xl border border-green-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg hover:shadow-green-100/60"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 transition-colors group-hover:bg-green-100">
          <span>{product.image}</span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold text-gray-800 transition-colors group-hover:text-green-700">
            {product.nameBn}
          </h3>
          <p className="mt-1 text-xs text-gray-500">প্রতি {product.unit}</p>
        </div>

        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            product.change.dir === "up"
              ? "bg-red-50 text-red-600"
              : "bg-green-50 text-green-700"
          }`}
        >
          {product.change.dir === "up" ? "▲" : "▼"}
          {Math.abs(product.change.pct)}%
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-3">
        <div>
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="mt-1 text-2xl font-extrabold text-gray-900">
            ৳{product.today}
            <span className="ml-1 text-xs font-medium text-gray-500">
              / {product.unit}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
