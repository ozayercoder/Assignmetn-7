"use client";

import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiUser, FiLogOut } from "react-icons/fi";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const [name, setName] = useState(user?.name || "");

  const handleUpdateName = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await updateUser({ name });

    if (error) {
      toast.error("নাম আপডেট করা যায়নি");
      return;
    }

    toast.success("নাম সফলভাবে আপডেট হয়েছে");
  };

  const handleSignout = async () => {
    await signOut();
  };

  if (isPending) {
    return (
      <div className="mx-auto max-w-4xl space-y-5 px-4 py-12">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-100" />
        <div className="h-48 animate-pulse rounded-3xl bg-gray-100" />
        <div className="h-64 animate-pulse rounded-3xl bg-gray-100" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
          <FiUser size={28} />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-gray-900">
          প্রোফাইলে প্রবেশ করুন
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য দেখতে{" "}
          <Link
            href={"/sign-in"}
            className="font-semibold text-green-700 transition hover:text-green-800"
          >
            সাইন ইন করুন।
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] bg-gray-50/70 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm font-semibold text-green-600">অ্যাকাউন্ট</p>

          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            আমার প্রোফাইল
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            আপনার ব্যক্তিগত তথ্য এবং অ্যাকাউন্টের বিবরণ দেখুন।
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="h-28 bg-linear-to-r from-green-100 via-green-50 to-white sm:h-36" />

          <div className="px-5 pb-6 sm:px-8 sm:pb-8">
            <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-green-50 text-green-600 shadow-sm sm:h-28 sm:w-28">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "প্রোফাইল ছবি"}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <FiUser size={42} />
                )}
              </div>

              <div className="min-w-0 flex-1 pb-1">
                <h2 className="truncate text-2xl font-bold text-gray-900">
                  {user.name || "নাম দেওয়া হয়নি"}
                </h2>

                <p className="mt-1 truncate text-sm text-gray-500">
                  {user.email}
                </p>
              </div>

              <button
                type="button"
                onClick={handleSignout}
                className="flex w-fit items-center gap-2 rounded-xl border border-red-100 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                <FiLogOut size={17} />
                সাইন আউট
              </button>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900">
                ব্যক্তিগত তথ্য
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                আপনার প্রোফাইলের নাম আপডেট করুন।
              </p>

              <form onSubmit={handleUpdateName} className="mt-5">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-semibold text-gray-700">
                    নাম
                  </legend>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="আপনার নাম লিখুন"
                      required
                      className="input input-bordered w-full rounded-xl border-gray-200 bg-white"
                    />

                    <button
                      type="submit"
                      className="btn rounded-xl border-0 bg-green-600 px-5 text-white transition hover:bg-green-700"
                    >
                      সংরক্ষণ করুন
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
