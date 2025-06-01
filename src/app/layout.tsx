import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Header } from "@/components/widgets";
export const metadata: Metadata = {
  title: "IMBb: Ratings, Reviews, and Where to Watch the Best Movie",
  description: "Ratings, Reviews, and Where to Watch the Best Movie",
};

const roboto = Roboto({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
