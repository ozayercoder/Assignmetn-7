import Market from "@/componets/Market";
import { IProduct } from "@/types/type";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IProductDetailPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailPage = async ({ params }: IProductDetailPageProps) => {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
  );

  const product: IProduct = await res.json();

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <div className="my-5 text-sm text-gray-500">
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition hover:text-green-700">
              হোম
            </Link>
          </li>
          <li className="text-gray-300">/</li>
          <li>
            <Link
              href={`/category/${product.category}`}
              className="transition hover:text-green-700"
            >
              {product.categoryNameBn}
            </Link>
          </li>
          <li className="text-gray-300">/</li>
          <li className="font-medium text-gray-800">{product.nameBn}</li>
        </ul>
      </div>

      <div className="my-5 grid gap-6 rounded-2xl border border-green-100 bg-white p-5 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-4xl">
            {product.image}
          </div>

          <div className="min-w-0">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              {product.nameBn}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              প্রতি {product.unit}
              <span className="mx-2 text-gray-300">•</span>
              {product.categoryNameBn}
            </p>

            <p className="mt-3 text-sm text-gray-600">
              গতকালের তুলনায় আজ দাম{" "}
              <span
                className={
                  product.change.dir === "up"
                    ? "font-semibold text-red-600"
                    : "font-semibold text-green-600"
                }
              >
                {product.change.dir === "up" ? "বেড়েছে" : "কমেছে"}{" "}
                {Math.abs(product.today - product.yesterday)} টাকা
              </span>
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-green-50/70 p-5 text-left md:min-w-48 md:text-center">
          <p className="text-sm font-medium text-gray-500">আজকের দাম</p>

          <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
            ৳{product.today}
          </h2>

          <p className="mt-1 text-xs text-gray-500">প্রতি {product.unit}</p>

          <span
            className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
              product.change.dir === "up"
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-700"
            }`}
          >
            {product.change.dir === "up" ? "▲" : "▼"}
            {Math.abs(product.change.pct)}%
          </span>
        </div>
      </div>
      <Market product={product} />
    </div>
  );
};

export default ProductDetailPage;
