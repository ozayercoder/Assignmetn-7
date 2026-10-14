import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="container mx-auto my-5 overflow-hidden rounded-4xl border border-green-100 bg-white px-5 py-6 md:px-8 md:py-8 lg:px-10">
      <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <span className="inline-flex rounded-full border border-green-200 bg-white px-3 py-1.5 text-xs font-medium text-green-700 shadow-sm">
            {date}
          </span>

          <h1 className="mt-4 text-2xl font-extrabold leading-snug text-gray-900 md:text-3xl lg:text-4xl">
            আজকের বাজারের দাম
            <span className="text-green-600"> এক নজরে</span>
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600 md:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — সবকিছুর
            বিস্তারিত এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#allproducts"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-95"
          >
            সব পণ্য দেখুন
            <FiArrowUpRight size={17} />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <Image
            src="/bazar-hero.png"
            alt="নিত্যপ্রয়োজনীয় বাজারের পণ্য"
            width={400}
            height={400}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;