import type { Metadata } from "next";
import { Geist_Mono, Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import MainProvider from "@/providers";
import { cookies } from "next/headers";
import { themes } from "@/data";
import { ThemeType } from "@/types";
import { isTheme } from "@/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio do Paulo Reis",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  const savedTheme = cookieStore.get("theme")?.value;
  const initialTheme: ThemeType =
    savedTheme && isTheme(savedTheme) ? savedTheme : "blue";

  return (
    <html lang="pt" data-theme={initialTheme} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${geistMono.variable} antialiased min-h-dvh scroll-smooth overflow-y-auto`}
      >
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
