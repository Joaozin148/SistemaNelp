'use client';

import { Forum } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const forum = Forum({
    subsets: ['latin'],
    weight: '400',
});

export function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header
            className="fixed h-20 top-0 left-0 w-full z-10 bg-gradient-to-r from-[#e5ef61] via-[#bec838] to-[#000000] text-white items-center"
        >
            <div className="flex items-center justify-between w-full px-6 mx-auto max-w-8xl h-full">
                <div className="hidden md:flex w-[140px]" />

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-lg font-medium hover:text-gray-300">
                        Início
                    </Link>
                    <Link href="/" className="text-lg font-medium hover:text-gray-300">
                        Transparência
                    </Link>
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

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Pesquisar..."
                            className="bg-white text-black rounded-full py-2 px-4 focus:outline-none"
                        />
                    </div>
                    <div className="text-white pr-10 flex items-center gap-4">
                        <Link href="https://www.instagram.com/nelp_univolei/" className="text-lg font-medium">
                            <FaInstagram size={35} />
                        </Link>
                        <Link href="https://www.facebook.com/nelpvoleibol" className="text-lg font-medium">
                            <FaFacebook size={35} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}