import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiHome,
  FiShoppingBag,
  FiSearch,
} from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-white px-4 py-12 md:px-8 lg:py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div className="text-center md:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <FiSearch size={16} />
            Page not found
          </div>

          <h1 className="text-7xl font-black tracking-tighter text-green-700 md:text-8xl lg:text-9xl">
            404<span className="text-lime-400">.</span>
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Oops! Lost your way?
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 md:mx-0 md:text-base">
            Looks like this page is not on our shelves. It may have been moved,
            or the link might be incorrect. Let&apos;s get you back to fresh
            finds and great prices!
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center md:justify-start">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-1 hover:bg-green-700 active:scale-95"
            >
              <FiHome size={18} />
              Back to Home
              <FiArrowUpRight size={17} />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-6 py-3.5 text-sm font-bold text-green-700 transition duration-300 hover:bg-green-50 active:scale-95"
            >
              <FiArrowLeft size={17} />
              Explore Bazar Dor
            </Link>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Fresh finds are just one click away. 🌿
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-none">
          <div className="absolute h-64 w-64 rounded-full bg-green-100/70 blur-3xl md:h-80 md:w-80 lg:h-96 lg:w-96" />

          <div className="relative w-full rounded-4xl border border-green-100 bg-linear-to-br from-green-50 via-white to-lime-50 p-8 shadow-xl shadow-green-900/5 md:p-10 lg:p-12">
            <div className="absolute right-6 top-6 flex h-12 w-12 rotate-12 items-center justify-center rounded-2xl bg-white text-green-600 shadow-md">
              <FiShoppingBag size={25} />
            </div>

            <div className="flex min-h-64 flex-col items-center justify-center md:min-h-72 lg:min-h-80">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-green-100 md:h-44 md:w-44 lg:h-52 lg:w-52">
                <div className="flex h-24 w-24 items-center justify-center rounded-4xl bg-green-600 text-white shadow-xl shadow-green-700/20 md:h-28 md:w-28 lg:h-32 lg:w-32">
                  <FiShoppingBag size={54} strokeWidth={1.5} />
                </div>

                <span className="absolute -right-2 top-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-lime-400 text-lg">
                  🍋
                </span>

                <span className="absolute -bottom-1 -left-3 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-white text-xl shadow-md">
                  🥬
                </span>

                <span className="absolute -right-4 bottom-5 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-white text-xl shadow-md">
                  🥕
                </span>
              </div>

              <div className="mt-10 text-center">
                <p className="text-xl font-extrabold text-green-800 md:text-2xl">
                  Empty shelf!
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  This spot has no page to show.
                  <br />
                  Let&apos;s find something useful instead.
                </p>
              </div>
            </div>

            <div className="absolute -left-3 top-1/3 h-6 w-6 rounded-lg bg-lime-300 md:-left-4" />
            <div className="absolute -bottom-3 right-12 h-8 w-8 rounded-full border-4 border-white bg-green-300" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
