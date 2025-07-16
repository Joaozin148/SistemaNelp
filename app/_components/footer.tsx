import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#e5ef61] via-[#bec838] to-[#000000] text-white pt-10 pb-4 mt-10 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-6">
          {/* Links rápidos */}
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Links rápidos</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:underline">Início</Link></li>
              <li><Link href="/transparencia/relatorios-atividade" className="hover:underline">Transparência</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/contato" className="hover:underline">Contato</Link></li>
            </ul>
          </div>
          {/* Contato */}
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contato</h3>
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2"><FaEnvelope /> contato@associacaovolei.com.br</span>
              <span className="flex items-center gap-2"><FaPhone /> (11) 99999-0000</span>
              <span className="flex items-center gap-2"><FaWhatsapp /> (11) 98888-0000</span>
            </div>
            <div className="flex gap-4 mt-3">
              <Link href="https://www.instagram.com/nelp_univolei/" target="_blank" rel="noopener" className="hover:text-[#e5ef61] transition-colors"><FaInstagram size={28} /></Link>
              <Link href="https://www.facebook.com/nelpvoleibol" target="_blank" rel="noopener" className="hover:text-[#e5ef61] transition-colors"><FaFacebook size={28} /></Link>
            </div>
          </div>
          {/* Endereço e horário */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Endereço</h3>
            <p>Rua Exemplo, 123 - Centro<br />Cidade/UF - CEP 00000-000</p>
            <div className="mt-3">
              <h4 className="font-semibold">Horário de Funcionamento:</h4>
              <p>Seg a Sex: 08h às 22h<br />Sáb: 08h às 18h</p>
            </div>
          </div>
        </div>
        <hr className="border-[#e5ef61] mb-2" />
        <p className="text-center text-gray-200 text-xs">
          © 2024 Associação de Vôlei - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
