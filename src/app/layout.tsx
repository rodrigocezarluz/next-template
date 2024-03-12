import type { Metadata } from "next";

import "./globals.css";

import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Next App Template",
  description: "Custom Next 14 ShadCN Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
        //  className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
