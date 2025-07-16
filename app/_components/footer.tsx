<<<<<<< HEAD
import { Logo } from '@/app/_components/logo'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const links = [
    {
        group: 'Produto',
        items: [
            { title: 'Features', href: '#' },
            { title: 'Solução', href: '#' },
            { title: 'Clientes', href: '#' },
            { title: 'Preços', href: '#' },
            { title: 'Ajuda', href: '#' },
            { title: 'Sobre', href: '#' },
        ],
    },
    {
        group: 'Solução',
        items: [
            { title: 'Startup', href: '#' },
            { title: 'Freelancers', href: '#' },
            { title: 'Organizações', href: '#' },
            { title: 'Estudantes', href: '#' },
            { title: 'Colaboração', href: '#' },
            { title: 'Design', href: '#' },
            { title: 'Gestão', href: '#' },
        ],
    },
    {
        group: 'Empresa',
        items: [
            { title: 'Sobre', href: '#' },
            { title: 'Carreiras', href: '#' },
            { title: 'Blog', href: '#' },
            { title: 'Imprensa', href: '#' },
            { title: 'Contato', href: '#' },
            { title: 'Ajuda', href: '#' },
        ],
    },
    {
        group: 'Legal',
        items: [
            { title: 'Licença', href: '#' },
            { title: 'Privacidade', href: '#' },
            { title: 'Cookies', href: '#' },
            { title: 'Segurança', href: '#' },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-20 text-sm">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" aria-label="home" className="block size-fit">
                            <Logo />
                        </Link>

                        <div className="space-y-1">
                            <p><strong className="text-white">Horário de Funcionamento:</strong><br />
                                Seg a Sex: 08h às 22h<br />
                                Sáb: 08h às 18h
                            </p>
                            <p><strong className="text-white">Contato:</strong><br />
                                E-mail: contato@associacaovolei.com.br<br />
                                Telefone: (11) 99999-0000<br />
                                WhatsApp: (11) 98888-0000
                            </p>
                            <p><strong className="text-white">Endereço:</strong><br />
                                Rua Exemplo, 123 - Centro<br />
                                Cidade/UF - CEP 00000-000
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
                        {links.map((link, index) => (
                            <div key={index} className="space-y-4">
                                <span className="block font-medium text-white">{link.group}</span>
                                {link.items.map((item, idx) => (
                                    <Link key={idx} href={item.href} className="text-gray-400 hover:text-yellow-400 block">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 py-6 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-gray-400 text-xs">© {new Date().getFullYear()} Associação de Vôlei - Todos os direitos reservados</span>
                    <div className="flex gap-4 text-lg text-gray-400">
                        <Link href="#" aria-label="Facebook" className="hover:text-yellow-400">
                            <FaFacebook />
                        </Link>
                        <Link href="#" aria-label="Instagram" className="hover:text-yellow-400">
                            <FaInstagram />
                        </Link>
                        <Link href="#" aria-label="TikTok" className="hover:text-yellow-400">
                            <FaTiktok />
                        </Link>
                        <Link href="#" aria-label="X/Twitter" className="hover:text-yellow-400">
                            <FaSquareXTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
=======
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
>>>>>>> b32d4c444eb7a2bc5ed2b1dac00160870dc509b7
}
