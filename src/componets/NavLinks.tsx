"use client";

import { ICategory } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navlinks = ({ navs }: { navs: ICategory[] }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between md:hidden">
        <span className="text-sm font-semibold text-green-800">Categories</span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-green-700 transition hover:bg-green-50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <div
        className={`${isOpen ? "flex" : "hidden"} mt-2 flex-col gap-1 md:mt-0 md:flex md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-1.5`}
      >
        {navs.map((n) => {
          const isActive = pathname === `/category/${n.slug}`;

          return (
            <Link
              key={n.slug}
              href={`/category/${n.slug}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors md:py-1.5 md:text-sm ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              <span>{n.icon}</span>
              <span>{n.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navlinks;
