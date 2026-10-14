import ProductSorting from "@/componets/ProductSorting";
import { ICategory, IProduct } from "@/types/type";

interface ICategorywisePageProps {
  params: Promise<{ slug: string }>;
}

const CategorywisePage = async ({ params }: ICategorywisePageProps) => {
  const { slug } = await params;

  const [categoryRes, productsRes] = await Promise.all([
    fetch(
      `https://openapi.programming-hero.com/api/bazardor/categories/${slug}`,
    ),
    fetch(
      `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
    ),
  ]);

  const [category, products]: [ICategory, IProduct[]] = await Promise.all([
    categoryRes.json(),
    productsRes.json(),
  ]);

  return (
    <div className="container mx-auto px-4">
      <div className="my-5 flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 md:p-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl">
          {category.icon}
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
            {category.nameBn}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <ProductSorting products={products} />
    </div>
  );
};

export default CategorywisePage;