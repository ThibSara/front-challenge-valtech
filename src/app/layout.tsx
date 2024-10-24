import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valtech Front Challenge",
  description: "Valtech react front challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen ">
          <Navbar />
          <main className="px-20 sm:px-60 xl:px-120">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
