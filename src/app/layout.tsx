import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XL Studio",
  description: "Elevate your brand with Xl Studio",
  icons: {
    icon: [
      "/android-chrome-192x192.png",
      "/android-chrome-512x512.png",
      "/apple-touch-icon.png",
      "/favicon-16x16.png",
      "/favicon-32x32.png",
      "/favicon.ico",
    ],
  },
  manifest: "/manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-auto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="GTM-TN64G34T" />
    </html>
  );
}
