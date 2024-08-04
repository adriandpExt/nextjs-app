"use client";

import { signIn } from "next-auth/react";
import React from "react";

interface IButton {
  label: string;
  type: string;
  className?: string;
}

export default function AuthButton({ label, type, className }: IButton) {
  return (
    <button className={className} onClick={() => signIn(type)}>
      {label}
    </button>
  );
}
