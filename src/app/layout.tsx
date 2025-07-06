// ClerkProvider removed for migration to new auth provider
// TODO: Wrap your app with your new auth provider here
import type { Metadata } from "next";
import { ThemeProvider } from "@/provider/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
// import your new auth provider here

const dyslexic = localFont({
  src: "./fonts/OpenDyslexic-Regular.woff2",
});

export const metadata: Metadata = {
  title: "Chortexia",
  description: "AI powered Learning Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <YourNewAuthProvider> // TODO: Wrap with your new auth provider
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={dyslexic.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
    // </YourNewAuthProvider>
  );
}
