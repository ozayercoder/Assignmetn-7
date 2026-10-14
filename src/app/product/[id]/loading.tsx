const ProductDetailLoading = () => {
  return (
    <main className="container mx-auto animate-pulse px-4">
      {/* Breadcrumb Skeleton */}
      <div className="my-5 flex items-center gap-2">
        <div className="h-4 w-12 rounded bg-gray-200" />
        <div className="h-4 w-2 rounded bg-gray-100" />
        <div className="h-4 w-20 rounded bg-gray-200" />
        <div className="h-4 w-2 rounded bg-gray-100" />
        <div className="h-4 w-28 rounded bg-gray-200" />
      </div>

      {/* Product Details Skeleton */}
      <section className="my-5 grid gap-6 rounded-2xl border border-green-100 bg-white p-5 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 shrink-0 rounded-2xl bg-green-50" />

          <div className="min-w-0 flex-1 space-y-3">
            <div className="h-7 w-48 max-w-full rounded bg-gray-200" />
            <div className="h-4 w-40 max-w-full rounded bg-gray-100" />
            <div className="mt-3 h-4 w-64 max-w-full rounded bg-gray-100" />
          </div>
        </div>

        <div className="rounded-xl bg-green-50/70 p-5 md:min-w-48">
          <div className="mx-auto h-4 w-20 rounded bg-gray-200 md:mx-auto" />
          <div className="mt-3 h-9 w-28 rounded bg-gray-200" />
          <div className="mt-2 h-3 w-20 rounded bg-gray-100" />
          <div className="mt-3 h-6 w-16 rounded-full bg-green-100" />
        </div>
      </section>

      {/* Market Summary Skeleton */}
      <section className="my-5 rounded-2xl border border-green-100 bg-white p-5 shadow-sm md:p-8">
        <div className="h-7 w-44 rounded bg-gray-200" />

        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 p-5"
            >
              <div className="h-4 w-24 rounded bg-gray-100" />
              <div className="mt-4 h-9 w-28 rounded bg-gray-200" />
              <div className="mt-3 h-4 w-40 max-w-full rounded bg-gray-100" />
            </div>
          ))}
        </div>

        {/* Market Table Skeleton */}
        <div className="my-8">
          <div className="mb-5 h-7 w-56 max-w-full rounded bg-gray-200" />

          <div className="overflow-hidden rounded-2xl border border-green-100">
            <div className="overflow-x-auto">
              <table className="w-full min-w-162 text-left">
                <thead className="border-b border-green-100 bg-green-50/70">
                  <tr>
                    {["w-20", "w-16", "w-20", "w-20", "w-16"].map(
                      (width, index) => (
                        <th key={index} className="px-6 py-4">
                          <div
                            className={`h-4 ${width} rounded bg-gray-200`}
                          />
                        </th>
                      ),
                    )}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index}>
                      {Array.from({ length: 5 }).map((_, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-5">
                          <div
                            className={`h-4 ${
                              cellIndex === 0 ? "w-28" : "w-16"
                            } rounded bg-gray-100`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailLoading;