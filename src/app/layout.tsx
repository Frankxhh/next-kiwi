import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { zhCN } from "@clerk/localizations";

export const metadata: Metadata = {
  title: "kiwi",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider localization={zhCN}>
      <html lang="zh-CN" className={`${GeistSans.variable}`}>
        <body>
          <SignedOut>
            <SignInButton mode={"modal"} />
          </SignedOut>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
