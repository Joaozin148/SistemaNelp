"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "5541995109690"; 
  const message = "Teste Usando o site da NELP!"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-4 right-5 z-50 flex h-18 w-18 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-300 sm:h-18 sm:w-18"
    >
      <FaWhatsapp size={44} />
    </a>
  );
}