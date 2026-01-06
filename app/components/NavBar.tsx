"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const { data: session, status } = useSession();
  return (
    <nav className="flex w-full items-center justify-between px-6 py-2 bg-white/30 backdrop-blur-sm">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/android-chrome-512x512.png"
                alt="Blogverse logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              BlogVerse
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Categories
          </Link>
          <Link
            href="/product"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Write Blog
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Authors
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Hot Topics
          </Link>
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        {status === "unauthenticated" && (
          <Link
            href="/signin"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Sign In
          </Link>
        )}
        {status === "authenticated" && (
          <Link
            href="/profile"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Profile
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
