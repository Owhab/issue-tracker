import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="flex space-x-6 mb-6 border-b h-14 items-center px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href="/"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href="/issues"
          >
            Issues
          </Link>
        </li>
      </ul>
    </nav>
  );
};
