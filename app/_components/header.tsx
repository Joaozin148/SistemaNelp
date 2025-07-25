"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { GiVolleyballBall } from "react-icons/gi";

// Define the type for search results
interface SearchResult {
  title: string;
  url: string;
  description: string;
}

// Simulated content for search (replace with actual content or API call)
const pageContent: SearchResult[] = [
  {
    title: "Início",
    url: "/",
    description: "Página inicial do NELP Univôlei, com informações gerais e destaques.",
  },
  {
    title: "Sobre nós",
    url: "/sobre-nos",
    description: "Informações sobre a história e missão do NELP Univôlei.",
  },
  {
    title: "Projetos",
    url: "/projetos",
    description: "Detalhes dos projetos e iniciativas do NELP Univôlei.",
  },
  {
    title: "Transparência",
    url: "/transparencia",
    description: "Relatórios e informações sobre a transparência da organização.",
  },
  {
    title: "Contato",
    url: "/#contato",
    description: "Formulário e informações para entrar em contato conosco.",
  },
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const isLoggedIn = false; // Replace with actual logic

  // Handle search when Enter is pressed
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      // Normalize search query by removing accents
      const normalizedQuery = searchQuery
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const results = pageContent.filter((page) => {
        // Normalize title and description by removing accents
        const normalizedTitle = page.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        const normalizedDescription = page.description
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        return (
          normalizedTitle.includes(normalizedQuery) ||
          normalizedDescription.includes(normalizedQuery)
        );
      });
      setSearchResults(results);
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      <header className="fixed h-24 top-0 left-0 w-full z-20 bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-700 shadow-lg border-b-4 border-yellow-400">
        <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-6 mx-auto max-w-8xl h-full">
          {/* Logo with volleyball icon */}
          <div className="flex items-center gap-3">
            <GiVolleyballBall className="text-white text-3xl sm:text-4xl md:text-5xl drop-shadow-lg animate-bounce" />
            <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-widest font-sans drop-shadow-lg">
              NELP UNIVÔLEI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 font-bold text-lg md:text-xl">
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

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative flex items-center">
              <span className="absolute left-3 sm:left-4 text-yellow-500">
                <GiVolleyballBall className="w-6 sm:w-7 h-6 sm:h-7" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Pesquisar..."
                className="bg-white text-black rounded-full py-2 sm:py-3 px-12 sm:px-14 focus:outline-none h-12 mr-7 w-56 sm:w-64 border-2 border-yellow-400 text-base sm:text-lg"
              />
            </div>
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

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-20 left-0 w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-700 shadow-lg">
                <nav className="flex flex-col items-center gap-4 py-4">
                  <Link
                    href="/"
                    className="text-black hover:text-yellow-300 transition-all font-semibold duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </Link>
                  <Link
                    href="/sobre-nos"
                    className="text-black hover:text-yellow-300 transition-all font-semibold duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre nós
                  </Link>
                  <Link
                    href="/projetos"
                    className="text-black hover:text-yellow-300 transition-all font-semibold duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projetos
                  </Link>
                  <Link
                    href="/transparencia"
                    className="text-black hover:text-yellow-300 transition-all font-semibold duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Transparência
                  </Link>
                  <Link
                    href="/#contato"
                    className="text-black hover:text-yellow-300 transition-all font-semibold duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </Link>
                  <div className="text-black flex items-center gap-2">
                    <Link href="https://www.instagram.com/nelp_univolei/" className="hover:text-yellow-300">
                      <FaInstagram size={22} />
                    </Link>
                    <Link href="https://www.facebook.com/nelpvoleibol" className="hover:text-yellow-300">
                      <FaFacebook size={22} />
                    </Link>
                  </div>
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
            <div className="hidden md:flex items-center gap-3 sm:gap-4 pr-2">
              <Link href="https://www.instagram.com/nelp_univolei/" className="text-white hover:text-black">
                <FaInstagram size={36} />
              </Link>
              <Link href="https://www.facebook.com/nelpvoleibol" className="text-white hover:text-black">
                <FaFacebook size={36} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Search Results Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Resultados da Pesquisa</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {searchResults.length > 0 ? (
              <ul className="space-y-4">
                {searchResults.map((result, index) => (
                  <li key={index} className="border-b pb-2">
                    <Link
                      href={result.url}
                      className="text-blue-600 hover:underline font-semibold"
                      onClick={closeModal}
                    >
                      {result.title}
                    </Link>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Nenhum resultado encontrado para {searchQuery} .</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}