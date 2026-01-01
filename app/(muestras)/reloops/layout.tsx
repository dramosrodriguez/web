import type { Metadata } from "next";
import Bootstrapp from "@/components/Bootstrap";
// import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trabajos en Reloops",
  description: "Trabajos que he hecho en Reloops.es.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
