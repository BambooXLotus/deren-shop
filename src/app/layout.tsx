import "@/styles/globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ModalProvider } from "@/providers/ModalProvider";
import { ToastProvideer } from "@/providers/ToastProvider";
import { Urbanist } from "next/font/google";

const font = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Deren Shop",
  description: "Deren Shop",
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
        <ToastProvideer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
