const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-xl border border-green-100 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 shrink-0 rounded-xl bg-green-50" />

        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-gray-200" />
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
};

const CategoryLoading = () => {
  return (
    <main className="container mx-auto animate-pulse px-4">
      {/* Category Header */}
      <section className="my-5 flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 md:p-6">
        <div className="h-14 w-14 shrink-0 rounded-xl bg-green-100" />

        <div className="flex-1 space-y-3">
          <div className="h-7 w-40 max-w-full rounded bg-gray-200" />
          <div className="h-4 w-64 max-w-full rounded bg-gray-100" />
        </div>
      </section>

      {/* Sorting Header */}
      <section className="mb-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="h-6 w-24 rounded bg-gray-200" />
          <div className="h-10 w-48 max-w-[60%] rounded-xl border border-green-100 bg-white" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryLoading;
