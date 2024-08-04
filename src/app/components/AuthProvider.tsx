"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

interface ISessionProvider extends PropsWithChildren {
  session: any;
}

export default function AuthProvider({ session, children }: ISessionProvider) {
  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
}
