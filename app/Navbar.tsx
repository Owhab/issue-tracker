"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

export const Navbar = () => {
  const links = [
    {
      label: "Dashboard",
      url: "/",
    },
    {
      label: "Issues",
      url: "/issues",
    },
  ];

  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 mb-6 border-b h-14 items-center px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.url}>
            <Link
              className={classNames({
                "text-zinc-900": link.url === currentPath,
                "text-zinc-500": link.url !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={link.url}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
