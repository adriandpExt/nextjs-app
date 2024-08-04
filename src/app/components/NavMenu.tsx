"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const ulrLink = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/dashboard",
    label: "Dashboard",
  },
];

export default function NavMenu() {
  const { data: session } = useSession();

  return (
    <>
      <header className="bg-base-200 shadow-lg">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              MyApp
            </Link>
            <nav>
              <ul className="flex space-x-4">
                {ulrLink.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="btn btn-ghost">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {session?.user?.name}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
