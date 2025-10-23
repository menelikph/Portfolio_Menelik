// Estructura base del sitio
import Header from "@/components/Header";
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Portafolio | Personal Portfolio",
  description: "Portafolio personal en Next.js con TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Header for all the pages */}
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
