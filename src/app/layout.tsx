import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./fonts/OpenDyslexic-Regular.woff2",
});

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={myFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* The ThemeProvider is used to manage the theme of the application */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
