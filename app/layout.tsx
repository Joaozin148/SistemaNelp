import type { Metadata } from "next";
import "./globals.css";
import VLibrasWidget from "./_components/vlibras";
import WhatsAppButton from "./_components/whatsapp";
import AcessibilidadeBar from "./_components/acessibilidade-bar";


export const metadata: Metadata = {
  title: "Nelp Univôlei",
  description: "Generated by create next app", // Colocar Descrição depois
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <AcessibilidadeBar />
        <VLibrasWidget />
        <WhatsAppButton />
        {children}
        
      </body>
    </html>
  );
}
