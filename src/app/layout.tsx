import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { UserType } from "@/lib/types";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techademy - Learn. Code. Excel.",
  description:
    "Techademy is a free platform that curates the best programming tutorials using embedded YouTube videos, complete with ratings, metadata, and an intuitive learning experience.",
};

const user: UserType = {
  firstName: "John",
  lastName: "Doe",
  profilePicture: "/profile-picture.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} flex min-h-dvh flex-col text-sm`}
      >
        <Header user={user} className={spaceGrotesk.className} />
        {children}
      </body>
    </html>
  );
}
