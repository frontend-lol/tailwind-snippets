import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/styling";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Snippets",
  description: "Handy snippets for Tailwind CSS by Frontend.lol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full dark:bg-neutral-800 dark:text-white">
      <body className={cn(inter.className, "h-full")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
