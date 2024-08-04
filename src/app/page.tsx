"use client";

import React from "react";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";
import AuthButton from "./components/AuthButton";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col space-y-3">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Image
          src="/vercel.svg"
          width={100}
          height={100}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>

      <div className="grid grid-cols-3 space-x-3">
        <div className="flex flex-col justify-center items-start bg-gray-300 rounded-lg h-96 p-24 space-y-5">
          <p>
            <span style={{ fontWeight: 600 }}>Welcome to ACME.</span> This is
            the example for the{" "}
            <span style={{ color: "blue" }}> Next.Js Learn Course</span>,
            brought to you by vercel.
          </p>

          {!session ? (
            <AuthButton
              label="Login"
              type="github"
              className="btn btn-primary btn-sm"
            />
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          )}
        </div>

        <div className="col-span-2 bg-slate-100 rounded-lg p-10">
          {session?.user?.name}

          <Image
            src="/next.svg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
