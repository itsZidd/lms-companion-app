import type { Metadata } from "next";
import { ThemeProvider } from "@/provider/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

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
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism],
        elements: {
          // Make all text in Clerk forms use a visible color
          card: "!text-slate-100 dark:!text-slate-100", // fallback for all text
          formFieldInput: "!text-slate-100 dark:!text-slate-100",
          formFieldLabel: "!text-slate-100 dark:!text-slate-100",
          headerTitle: "!text-slate-100 dark:!text-slate-100",
          headerSubtitle: "!text-slate-300 dark:!text-slate-300",
          footerAction: "!text-slate-100 dark:!text-slate-100",
          socialButtonsBlockButton: "!text-slate-900 dark:!text-slate-900 !bg-slate-100 dark:!bg-slate-100 !border-slate-300 dark:!border-slate-300",
          socialButtonsBlockButtonText: "!text-slate-900 dark:!text-slate-900",
          // Add more Clerk element keys as needed for your UI
        },
      }}>
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
    </ClerkProvider>
  );
}
