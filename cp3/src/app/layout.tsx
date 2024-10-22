import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CP03",
  description: "Portifolio de projetos da FIAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
