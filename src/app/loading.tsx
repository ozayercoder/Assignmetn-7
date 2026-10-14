const ProductCardSkeleton = () => (
  <div className="animate-pulse rounded-xl border border-green-100 bg-white p-4">
    <div className="flex items-center gap-3">
      <div className="h-14 w-14 shrink-0 rounded-xl bg-gray-200" />

      <div className="flex-1 space-y-2">
        <div className="h-4 w-2/3 rounded bg-gray-200" />
        <div className="h-3 w-1/3 rounded bg-gray-100" />
      </div>

      <div className="h-6 w-14 rounded-full bg-gray-200" />
    </div>

    <div className="mt-4 border-t border-gray-100 pt-3">
      <div className="h-3 w-16 rounded bg-gray-100" />
      <div className="mt-2 h-7 w-28 rounded bg-gray-200" />
    </div>
  </div>
);

const ProductSectionSkeleton = ({ titleWidth }: { titleWidth: string }) => (
  <section className="container mx-auto my-8 px-4 md:my-10">
    <div className="mb-6 border-b border-green-100 pb-4">
      <div className={`h-8 ${titleWidth} animate-pulse rounded bg-gray-200`} />
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  </section>
);

export default function Loading() {
  return (
    <main className="animate-pulse">
      {/* Hero Skeleton */}
      <section className="container mx-auto my-5 overflow-hidden rounded-4xl border border-green-100 bg-white px-5 py-6 md:px-8 md:py-8 lg:px-10">
        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <div className="h-7 w-36 rounded-full bg-gray-200" />

            <div className="space-y-2">
              <div className="h-8 w-full max-w-sm rounded bg-gray-200" />
              <div className="h-8 w-2/3 rounded bg-green-100" />
            </div>

            <div className="space-y-2">
              <div className="h-4 w-full max-w-lg rounded bg-gray-100" />
              <div className="h-4 w-5/6 rounded bg-gray-100" />
              <div className="h-4 w-2/3 rounded bg-gray-100" />
            </div>

            <div className="h-11 w-36 rounded-lg bg-green-100" />
          </div>

          <div className="mx-auto h-52 w-full max-w-xs rounded-2xl bg-gray-100 md:h-64 md:max-w-sm" />
        </div>
      </section>

      {/* Price Risers */}
      <ProductSectionSkeleton titleWidth="w-48" />

      {/* Price Fallers */}
      <ProductSectionSkeleton titleWidth="w-48" />

      {/* All Products */}
      <ProductSectionSkeleton titleWidth="w-32" />
    </main>
  );
}
