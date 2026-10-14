"use client";

import React from "react";
import { signIn, signUp } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    if (user.password !== user.confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মিলছে না");
      return;
    }

    const { data, error } = await signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "সাইন আপ করতে সমস্যা হয়েছে");
      return;
    }

    if (data) {
      toast.success("সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে");
      redirect("/");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-green-100 bg-white p-6 shadow-lg shadow-green-900/5 sm:p-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <fieldset className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                নাম
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                placeholder="আপনার নাম লিখুন"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                ইমেইল
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                placeholder="আপনার ইমেইল লিখুন"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                placeholder="একটি পাসওয়ার্ড দিন"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                placeholder="আবার পাসওয়ার্ড লিখুন"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-green-600 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-green-700 active:scale-[0.98]"
          >
            সাইন আপ করুন
          </button>
        </form>

        <div className="divider my-5 text-xs text-gray-400">অথবা</div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn flex-1 rounded-xl border border-gray-200 bg-white text-gray-700 shadow-none transition hover:border-green-300 hover:bg-green-50"
          >
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            onClick={handleGithubSignIn}
            className="btn flex-1 rounded-xl border border-gray-200 bg-white text-gray-700 shadow-none transition hover:border-green-300 hover:bg-green-50"
          >
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-green-700 transition hover:text-green-800"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
