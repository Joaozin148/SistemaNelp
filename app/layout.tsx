import type { Metadata } from "next";
import "./globals.css";
import VLibrasWidget from "./_components/vlibras";
import WhatsAppButton from "./_components/whatsapp";
import AccessibilityPanel from "./_components/acessibilidade-bar";
import StructuredData from "./_components/structured-data";


export const metadata: Metadata = {
  title: {
    default: "Nelp Univôlei - Transformando vidas através do esporte",
    template: "%s | Nelp Univôlei"
  },
  description: "O Nelp Univôlei é uma organização que promove o desenvolvimento social através do esporte, oferecendo oportunidades de crescimento e transformação para jovens e comunidades.",
  keywords: [
    "NELP", "Nelp", "Nelp Univôlei", "site NELP", "NELP Paranaguá", 
    "Novo Esporte do Litoral Paranaense", "NELP vôlei", "NELP esporte",
    "vôlei", "esporte", "desenvolvimento social", "Univôlei", 
    "transformação", "jovens", "comunidade", "Paranaguá", "litoral paranaense",
    "projeto social esporte", "vôlei Paranaguá", "esporte social Paranaguá",
    "NELP projetos", "NELP transparência", "NELP sobre"
  ],
  authors: [{ name: "Nelp Univôlei" }],
  creator: "Nelp Univôlei",
  publisher: "Nelp Univôlei",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nelpunivolei.com.br'), // Substitua pelo seu domínio real
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nelpunivolei.com.br',
    siteName: 'Nelp Univôlei',
    title: 'Nelp Univôlei - Transformando vidas através do esporte',
    description: 'O Nelp Univôlei é uma organização que promove o desenvolvimento social através do esporte, oferecendo oportunidades de crescimento e transformação para jovens e comunidades.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Nelp Univôlei Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nelp Univôlei - Transformando vidas através do esporte',
    description: 'O Nelp Univôlei é uma organização que promove o desenvolvimento social através do esporte.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Kt62Z4uF_ZajYqyt-rlxE8cde9xZfT_AW0j8pWY', // Código de verificação do Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">
        <StructuredData />
        <AccessibilityPanel />
        <VLibrasWidget />
        <WhatsAppButton />
        <main className="content-container">{children}</main>
      </body>
    </html>
  );
}
