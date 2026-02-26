'use client';

import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NELP - Novo Esporte do Litoral Paranaense",
      "alternateName": "Nelp Univôlei",
      "url": "https://nelpunivolei.com.br",
      "logo": "https://nelpunivolei.com.br/logo.jpg",
      "description": "A NELP – Novo Esporte do Litoral Paranaense é uma organização da sociedade civil, sediada em Paranaguá (PR), que atua com responsabilidade e compromisso social na formação de crianças e adolescentes por meio do esporte.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paranaguá",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-41-9573-8636",
        "contactType": "customer service",
        "email": "nelpunivolei@gmail.com"
      },
      "sameAs": [],
      "foundingDate": "2013",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "50+"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

