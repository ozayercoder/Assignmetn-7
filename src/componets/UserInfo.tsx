"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronsDown, FiLogOut, FiUser } from "react-icons/fi";

const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;

  const handleSignout = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <div>
      {user ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Open user menu"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-2 shadow-sm transition hover:border-green-200 hover:bg-green-50/50 md:gap-3 md:rounded-2xl md:px-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-green-100 text-green-600 md:h-10 md:w-10">
              {user.image ? (
                <Image
                  src={user.image}
                  alt="Profile image"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <FiUser size={21} />
              )}
            </div>

            <div className="hidden text-left md:block">
              <p className="max-w-32 truncate text-sm font-bold text-gray-900">
                {user.name || "User"}
              </p>
            </div>

            <FiChevronsDown
              size={16}
              className={`shrink-0 text-gray-500 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <>
              <button
                aria-label="Close user menu"
                className="fixed inset-0 z-10 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />

              <div className="absolute right-0 top-full z-20 mt-3 w-[min(16rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-900/10">
                <div className="border-b border-gray-100 px-3 py-3">
                  <p className="truncate text-sm font-bold text-gray-900">
                    {user.name || "User"}
                  </p>
                  <p className="truncate text-xs text-gray-500">{user.email}</p>
                </div>

                <div className="py-2">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    <FiUser size={17} />
                    আমার প্রোফাইল
                  </Link>

                  <button
                    onClick={handleSignout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    <FiLogOut size={17} />
                    সাইন আউট
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/sign-in"
            className="rounded-lg px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-50 sm:px-4 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-95 sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
