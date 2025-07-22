'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { GiVolleyballBall } from 'react-icons/gi'; // Ícone de voleibol

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const isLoggedIn = false; // Troque pela sua lógica real

  return (
    <header className="fixed h-20 top-0 left-0 w-full z-20 bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-700 shadow-lg border-b-4 border-yellow-400">
      <div className="flex items-center justify-between w-full px-6 mx-auto max-w-8xl h-full">
        {/* Logo com bola de voleibol */}
        <div className="flex items-center gap-2">
          <GiVolleyballBall className="text-white text-3xl drop-shadow-lg animate-bounce" />
          <span className="font-extrabold text-2xl text-white tracking-widest font-sans drop-shadow-lg">NELP UNIVÔLEI</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 font-semibold">
          <Link href="/" className="hover:text-yellow-300 transition-all duration-200 relative group">
            Início
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/aboutUs" className="hover:text-yellow-300 transition-all duration-200 relative group">
            Sobre nós
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/galery" className="hover:text-yellow-300 transition-all duration-200 relative group">
            Projetos
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/transparencia" className="hover:text-yellow-300 transition-all duration-200 relative group">
            Transparência
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/#contato" className="hover:text-yellow-300 transition-all duration-200 relative group">
            Contato
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          {isLoggedIn && (
            <Link href="/admin" className="hover:text-yellow-300 transition-all duration-200 relative group">
              Área de Admin
              <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          )}
        </nav>

        {/* Pesquisa e redes sociais */}
        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-yellow-500">
              <GiVolleyballBall className="w-5 h-5" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar..."
              className="bg-white text-black rounded-full py-2 px-10 focus:outline-none w-40 border-2 border-yellow-400"
            />
          </div>
          <div className="text-white pr-2 flex items-center gap-2">
            <Link href="https://www.instagram.com/nelp_univolei/" className="hover:text-yellow-300">
              <FaInstagram size={28} />
            </Link>
            <Link href="https://www.facebook.com/nelpvoleibol" className="hover:text-yellow-300">
              <FaFacebook size={28} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}