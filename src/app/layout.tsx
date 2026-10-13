import type { Metadata } from "next";
import { Chewy, Fredoka } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const chewy = Chewy({ weight: "400", subsets: ["latin"], variable: "--font-chewy" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });

export const metadata: Metadata = {
  title: "Donut | Warm, delicious, made to order",
  description: "Fill the taste that you've never eat.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${chewy.variable} ${fredoka.variable} font-hand font-semibold antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}