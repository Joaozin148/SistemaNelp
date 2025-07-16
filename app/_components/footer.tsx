'use client';

import { Logo } from '@/app/_components/logo'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { GiVolleyballBall } from 'react-icons/gi'

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
        <footer className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-700 text-gray-900 pt-8 pb-4 text-sm relative overflow-hidden">
            {/* Bola de voleibol animada */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                <GiVolleyballBall className="text-yellow-400 text-6xl animate-bounce-slow drop-shadow-lg opacity-70" />
            </div>
            {/* Rede de voleibol como linha divisória */}
            <div className="absolute left-0 right-0 top-0 h-2 bg-repeat-x bg-[url('/rede-volei.svg')]" />
            <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
                <div className="grid gap-10 md:grid-cols-5">
                    <div className="md:col-span-2 space-y-6 text-center md:text-left">
                        <Link href="/" aria-label="home" className="block size-fit mx-auto md:mx-0">
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

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3 text-center md:text-left">
                        {links.map((link, index) => (
                            <div key={index} className="space-y-4">
                                <span className="block font-medium text-white">{link.group}</span>
                                {link.items.map((item, idx) => (
                                    <Link key={idx} href={item.href} className="text-gray-900 hover:text-yellow-900 block transition-colors">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 border-t border-yellow-200 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-gray-900 text-xs text-center md:text-left">© {new Date().getFullYear()} Associação de Vôlei - Todos os direitos reservados</span>
                    <div className="flex gap-4 text-lg text-gray-900">
                        <Link href="#" aria-label="Facebook" className="hover:text-yellow-900 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                            <FaFacebook />
                        </Link>
                        <Link href="#" aria-label="Instagram" className="hover:text-yellow-900 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                            <FaInstagram />
                        </Link>
                        <Link href="#" aria-label="TikTok" className="hover:text-yellow-900 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                            <FaTiktok />
                        </Link>
                        <Link href="#" aria-label="X/Twitter" className="hover:text-yellow-900 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                            <FaSquareXTwitter />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Animação personalizada para bounce lento */}
            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0);}
                    50% { transform: translateY(-30px);}
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2.5s infinite;
                }
            `}</style>
        </footer>
    )
}
