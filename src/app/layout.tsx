import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import LoadingPage from "@/components/global/modal/loadingPage";
import NotificationPage from "@/components/global/modal/notif";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Point Of Sales",
  description: "Generated by create next app",
  keywords: ["nextjs", "react", "formik", "typescript", "yup", "react query"],
};

interface Root {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Root>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <LoadingPage />
          <NotificationPage />
        </ThemeProvider>
      </body>
    </html>
  );
}
