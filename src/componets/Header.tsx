import Image from "next/image";
import Link from "next/link";
import Navlinks from "./NavLinks";
import { ICategory } from "@/types/type";
import Marquee from "./Marquee";
import UserInfo from "./UserInfo";

const Header = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const navs: ICategory[] = await res.json();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b border-green-100 ">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-3 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="Bazar Dor logo"
              width={44}
              height={44}
              className="rounded-xl"
            />

            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-green-800 sm:text-2xl">
                বাজার <span className="text-green-500">দর</span>
              </h2>

              <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                {date}
              </p>
            </div>
          </Link>

          <UserInfo />
        </div>

        <div className="border-t border-green-100 py-3">
          <Navlinks navs={navs} />
        </div>
      </div>
      <Marquee />
    </header>
  );
};

export default Header;
