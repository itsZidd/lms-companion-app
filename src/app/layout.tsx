import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./fonts/OpenDyslexic-Regular.woff2",
})

export const metadata: Metadata = {
  title: "LMS Companion",
  description: "Learning Management System Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={myFont.className}
      >
        {children}
      </body>
    </html>
  );
}
