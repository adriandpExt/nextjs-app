"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import clsx from "clsx";

const links = [
  { path: "/", label: "Home" },
  {
    path: "/dashboard/customers",
    label: "Customers",
  },
  { path: "/dashboard/invoices", label: "Invoices" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen flex flex-col justify-between rounded-lg">
      <div className="space-y-3">
        <div className="flex h-24 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
          <Image
            src="/vercel.svg"
            width={100}
            height={100}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        <div className="p-3 rounded-lg flex flex-col items-start space-y-3 bg-gray-300">
          {links.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx(
                "hover:bg-blue-200 bg-gray-100 w-full p-3 rounded-lg ",
                {
                  "bg-sky-100 text-blue-600": pathname === item.path,
                }
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-3 rounded-lg flex flex-col items-start space-y-3 bg-gray-300 overflow-hidden h-52" />

      <div className="p-3 rounded-lg bg-gray-300">
        <button
          className="btn btn-[gray-100] btn-sm w-full"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
