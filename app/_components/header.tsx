"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { GiVolleyballBall } from "react-icons/gi"; // Ícone de voleibol

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Troque pela sua lógica real

  return (
    <header className="fixed h-20 top-0 left-0 w-full z-20 bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-700 shadow-lg border-b-4 border-yellow-400">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-6 mx-auto max-w-8xl h-full">
        {/* Logo com bola de voleibol */}
        <div className="flex items-center gap-2">
          <GiVolleyballBall className="text-white text-xl sm:text-2xl md:text-3xl drop-shadow-lg animate-bounce" />
          <span className="font-extrabold text-lg sm:text-xl md:text-2xl text-white tracking-widest font-sans drop-shadow-lg">
            NELP UNIVÔLEI
          </span>
        </div>

        {/* Menu Hamburger para mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu Dropdown para mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-700 shadow-lg">
            <nav className="flex flex-col items-center gap-4 py-4">
              <Link
                href="/"
                className="text-white hover:text-yellow-300 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/sobre-nos"
                className="text-white hover:text-yellow-300 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nós
              </Link>
              <Link
                href="/projetos"
                className="text-white hover:text-yellow-300 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link
                href="/transparencia"
                className="text-white hover:text-yellow-300 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Transparência
              </Link>
              <Link
                href="/#contato"
                className="text-white hover:text-yellow-300 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              {isLoggedIn && (
                <Link
                  href="/admin"
                  className="text-white hover:text-yellow-300 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Área de Admin
                </Link>
              )}
            </nav>
          </div>
        )}

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 font-semibold">
          <Link
            href="/"
            className="hover:text-yellow-300 transition-all duration-200 relative group"
          >
            Início
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link
            href="/sobre-nos"
            className="hover:text-yellow-300 transition-all duration-200 relative group"
          >
            Sobre nós
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link
            href="/projetos"
            className="hover:text-yellow-300 transition-all duration-200 relative group"
          >
            Projetos
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link
            href="/transparencia"
            className="hover:text-yellow-300 transition-all duration-200 relative group"
          >
            Transparência
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link
            href="/#contato"
            className="hover:text-yellow-300 transition-all duration-200 relative group"
          >
            Contato
            <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          {isLoggedIn && (
            <Link
              href="/admin"
              className="hover:text-yellow-300 transition-all duration-200 relative group"
            >
              Área de Admin
              <span className="block h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          )}
        </nav>

        {/* Pesquisa e redes sociais */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative flex items-center">
            <span className="absolute left-2 sm:left-3 text-yellow-500">
              <GiVolleyballBall className="w-4 sm:w-5 h-4 sm:h-5" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar..."
              className="bg-white text-black rounded-full py-1 sm:py-2 px-8 sm:px-10 focus:outline-none w-28 sm:w-40 border-2 border-yellow-400 text-xs sm:text-base"
            />
          </div>
          <div className="text-white flex items-center gap-1 sm:gap-2 pr-2">
            <Link href="https://www.instagram.com/nelp_univolei/" className="hover:text-yellow-300">
              <FaInstagram size={20}  />
            </Link>
            <Link href="https://www.facebook.com/nelpvoleibol" className="hover:text-yellow-300">
              <FaFacebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}