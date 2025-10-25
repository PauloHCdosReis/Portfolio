import type { Metadata } from "next";
import { Geist_Mono, Inter, Poppins } from "next/font/google";
import "@styles/globals.css";
import MainProvider from "@providers/index";
import { getCurrentTheme } from "@actions/index";

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
  const theme = await getCurrentTheme();

  return (
    <html lang="pt" data-theme={theme} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${geistMono.variable} scroll-smooth overflow-y-auto antialiased`}
      >
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
