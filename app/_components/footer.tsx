'use client';

import { FaFacebook, FaInstagram, FaWhatsapp, FaRegEnvelope, FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function FooterSection() {
    const phoneNumber = "5541995109690"; 
  const message = "Teste Usando o site da NELP!"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <footer className="bg-[#141312] text-[#fff] pt-16 pb-6 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Presidente e Coordenadora */}
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Presidente</h3>
            <div className="flex items-start gap-2 text-yellow-400">
              <span className="mt-1">✺</span>
              <span className="text-white">Georgia da Cunha Ben</span>
            </div>
          </div>
          
        </div>
        {/* Páginas */}
        <div>
          <h3 className="font-bold text-lg mb-4">Páginas</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-yellow-400"><span>✺</span><Link href="/" className="text-white hover:underline">Início</Link></li>
            <li className="flex items-center gap-2 text-yellow-400"><span>✺</span><Link href="/aboutUs" className="text-white hover:underline">Sobre nós</Link></li>
            <li className="flex items-center gap-2 text-yellow-400"><span>✺</span><Link href="/projetos" className="text-white hover:underline">Projetos</Link></li>
            <li className="flex items-center gap-2 text-yellow-400"><span>✺</span><Link href="/transparencia" className="text-white hover:underline">Transparência</Link></li>
          </ul>
        </div>
        {/* Informações */}
        <div>
          <h3 className="font-bold text-lg mb-4">Informações</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3"><FaPhoneAlt className="text-yellow-400" /><span className="text-white">(41) 99510-9690</span></li>
            <li className="flex items-center gap-3"><FaRegEnvelope className="text-yellow-400" /><span className="text-white">nelpunivolei@gmail.com</span></li>
            <li className="flex items-start gap-3"><FaRegClock className="text-yellow-400 mt-1" /><span className="text-white">Segunda à Sexta<br/>Das 09:00 às 17:00</span></li>
            <li className="flex items-start gap-3"><FaMapMarkerAlt className="text-yellow-400 mt-1" /><span className="text-white"> R. Cel. Antônio Bittencourt – Ponta do Caju <br/>CEP 83203-130  Paranaguá  PR</span></li>
          </ul>
        </div>
        {/* Redes Sociais */}
        <div>
          <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
          <div className="flex flex-col gap-4">
            <a href="https://www.facebook.com/nelpvoleibol" className="flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-yellow-400 text-[#222] font-semibold py-3 rounded transition"><FaFacebook /> Facebook</a>
            <a href="https://www.instagram.com/nelp_univolei/" className="flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-yellow-400 text-[#222] font-semibold py-3 rounded transition"><FaInstagram /> Instagram</a>
            <a href={whatsappUrl} className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-semibold py-3 rounded transition"><FaWhatsapp /> Whatsapp</a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-[#222] pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}  NELP UNIVOLEI - Todos os direitos reservados
      </div>
    </footer>
  );
}
