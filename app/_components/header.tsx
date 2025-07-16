'use client';

import { Forum } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const forum = Forum({
    subsets: ['latin'],
    weight: '400',
});

export function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTransparencyOpen, setIsTransparencyOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 1) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed h-20 top-0 left-0 w-full z-10 bg-gradient-to-r from-[#e5ef61] via-[#bec838] to-[#000000] text-white transition-opacity duration-700 items-center ${showHeader ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            <div className="flex items-center justify-between w-full px-6 mx-auto max-w-8xl h-full">
                <div className="hidden md:flex w-[140px]" />

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-lg font-medium hover:text-gray-300">
                        Início
                    </Link>
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsTransparencyOpen(true)}
                        onMouseLeave={() => setIsTransparencyOpen(false)}
                    >
                        <button className="text-lg font-medium hover:text-gray-300 ">
                            Transparência
                        </button>
                        {isTransparencyOpen && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-[#03061D] rounded-md shadow-lg">
                                <Link 
                                    href="/transparencia/relatorios-atividade" 
                                    className="block px-4 py-2 text-sm hover:bg-[#01020A]"
                                >
                                    Relatórios de Atividade
                                </Link>
                                <Link 
                                    href="/transparencia/relatorios-financeiros" 
                                    className="block px-4 py-2 text-sm hover:bg-[#01020A]"
                                >
                                    Relatórios Financeiros
                                </Link>
                                <Link 
                                    href="/transparencia/balanco-dre" 
                                    className="block px-4 py-2 text-sm hover:bg-[#01020A]"
                                >
                                    Balanço DRE
                                </Link>
                                <Link 
                                    href="/transparencia/organograma" 
                                    className="block px-4 py-2 text-sm hover:bg-[#01020A]"
                                >
                                    Organograma
                                </Link>
                                <Link 
                                    href="/transparencia/projeto" 
                                    className="block px-4 py-2 text-sm hover:bg-[#01020A]"
                                >
                                    Projeto
                                </Link>
                                <Link 
                                    href="/transparencia/verbas-publicas" 
                                    className="block px-4 py-2 text-sm hover:bg-[#01020A]"
                                >
                                    Verbas Públicas
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/faq" className="text-lg font-medium hover:text-gray-300">
                        FAQ
                    </Link>
                    <Link href="/contato" className="text-lg font-medium hover:text-gray-300">
                        Contato
                    </Link>
                    <Link href="/admin" className="text-lg font-medium hover:text-gray-300">
                        Área de Admin
                    </Link>
                </nav>

                <div className="text-white pr-10 hidden md:flex items-center gap-4">
                    <Link href="https://www.instagram.com/nelp_univolei/" className="text-lg font-medium">
                        <FaInstagram size={35} />
                    </Link>
                    <Link href="https://www.facebook.com/nelpvoleibol" className="text-lg font-medium">
                        <FaFacebook size={35} />
                    </Link>
                </div>
            </div>
        </header>
    );
}