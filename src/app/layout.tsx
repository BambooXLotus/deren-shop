import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ModalProvider } from "@/providers/ModalProvider";
import "@/styles/globals.css";

import { Urbanist } from "next/font/google";

const font = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop",
  description: "Shop",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
