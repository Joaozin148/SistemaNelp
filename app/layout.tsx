import type { Metadata } from "next";
import "./globals.css";
import VLibrasWidget from "./_components/vlibras";
import WhatsAppButton from "./_components/whatsapp";
import AccessibilityPanel from "./_components/acessibilidade-bar";


export const metadata: Metadata = {
  title: {
    default: "Nelp Univôlei - Transformando vidas através do esporte",
    template: "%s | Nelp Univôlei"
  },
  description: "O Nelp Univôlei é uma organização que promove o desenvolvimento social através do esporte, oferecendo oportunidades de crescimento e transformação para jovens e comunidades.",
  keywords: ["vôlei", "esporte", "desenvolvimento social", "Nelp", "Univôlei", "transformação", "jovens", "comunidade"],
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
    google: 'SEU_GOOGLE_VERIFICATION_CODE', // Substitua pelo código do Google Search Console
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
        <AccessibilityPanel />
        <VLibrasWidget />
        <WhatsAppButton />
        <main className="content-container">{children}</main>
      </body>
    </html>
  );
}
