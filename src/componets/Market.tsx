import { IProduct } from "@/types/type";

const Market = ({ product }: { product: IProduct }) => {
  const marketMinPriceData = product.markets.map((market) => market.min);
  const marketMaxPriceData = product.markets.map((market) => market.max);

  const minPrice = Math.min(...marketMinPriceData);
  const maxPrice = Math.max(...marketMaxPriceData);
  const avgPrice = (minPrice + maxPrice) / 2;

  return (
    <div className="my-5 rounded-2xl border border-green-100 bg-white p-5 shadow-sm md:p-8">
      <h2 className="text-lg font-bold text-gray-800 md:text-xl">
        দামের সারসংক্ষেপ
      </h2>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-green-100 bg-green-50/60 p-5 transition-colors hover:bg-green-50">
          <p className="text-sm font-medium text-gray-600">সর্বনিম্ন দাম</p>

          <div className="mt-3 text-3xl font-bold text-green-600">
            {minPrice} <span className="text-xl">৳</span>
          </div>

          <p className="mt-2 text-sm text-gray-500">সবচেয়ে কম দামের বাজার</p>
        </div>

        <div className="rounded-xl border border-red-100 bg-red-50/60 p-5 transition-colors hover:bg-red-50">
          <p className="text-sm font-medium text-gray-600">সর্বাধিক দাম</p>

          <div className="mt-3 text-3xl font-bold text-red-600">
            {maxPrice} <span className="text-xl">৳</span>
          </div>

          <p className="mt-2 text-sm text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 transition-colors hover:bg-blue-50 sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-medium text-gray-600">গড় দাম</p>

          <div className="mt-3 text-3xl font-bold text-blue-600">
            {avgPrice.toFixed(2)} <span className="text-xl">৳</span>
          </div>

          <p className="mt-2 text-sm text-gray-500">প্রতি কেজি-এর হিসাবে</p>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-lg font-bold text-gray-800 md:text-xl">
          বাজারভিত্তিক আজকের দাম
        </h2>
        <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full  text-left">
              <thead className="border-b border-green-100 bg-green-50/70">
                <tr className="text-sm font-semibold text-gray-600">
                  <th className="px-6 py-4">বাজার</th>
                  <th className="px-6 py-4">বিভাগ</th>
                  <th className="px-6 py-4">সর্বনিম্ন</th>
                  <th className="px-6 py-4">সর্বাধিক</th>
                  <th className="px-6 py-4">গড়</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {product.markets.map((market, ind) => (
                  <tr
                    key={ind}
                    className="transition-colors hover:bg-green-50/50"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-gray-800">
                      {market.market}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      <span className=" px-3 py-1 text-sm text-gray-600">
                        {market.division}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-green-600">
                      {market.min} ৳
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-red-500">
                      {market.max} ৳
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-700">
                      {((market.min + market.max) / 2).toFixed(2)} ৳
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
