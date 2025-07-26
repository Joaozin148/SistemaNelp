/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from "react";

export default function TransparenciaAdmin() {
  const uniformesBlocks = [
    {
      id: 1,
      title: 'Uniforme Branco',
      url: 'https://drive.google.com/file/d/1mN_DNS01QSI-oJGOmuFgljufhRO8EAdF/view',
    },
    {
      id: 2,
      title: 'Uniforme Preto',
      url: 'https://drive.google.com/file/d/1OcuYfMeCh_oeY9HVaguaWj7WFeQj8eOv/view',
    },
  ];

  const institucionalBlocks = [
    {
      id: 1,
      title: 'Estatuto Social',
      url: '#',
    },
    {
      id: 2,
      title: 'Regimento Interno',
      url: '#',
    },
    {
      id: 3,
      title: 'Relatório Anual Institucional 2022',
      url: '#',
    },
    {
      id: 4,
      title: 'Plano Estratégico 2023-2025',
      url: '#',
    },
    {
      id: 5,
      title: 'Plano Estratégico 2020-2022',
      url: '#',
    },
  ];

  useEffect(() => {
    const handleClick = (e: any) => {
      const target = e.target;
      if (target.tagName === 'A' && target.hash) {
        const section = document.querySelector(target.hash);
        if (section) {
          e.preventDefault();
          const rect = section.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const offset = rect.top + scrollTop - 100;
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }
      }
    };
    const header = document.getElementById('transparencia-header');
    if (header) {
      header.addEventListener('click', handleClick);
    }
    return () => {
      if (header) {
        header.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Navigation */}
        <header id="transparencia-header" className="bg-white shadow-sm rounded-lg p-6 mb-12">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {['prestacao-de-contas', 'institucional'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors duration-200 relative group"
              >
                {section === 'prestacao-de-contas' ? 'Uniformes' : 'Institucional'}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
          </nav>
        </header>

        {/* Uniformes Section */}
        <section id="prestacao-de-contas" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Uniformes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {uniformesBlocks.map((block) => (
              <div
                key={block.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-yellow-400 rounded-full p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2 text-center">{block.title}</h3>
                <a
                  href={block.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Baixar Arquivo
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-1 bg-red-600 mx-auto max-w-4xl mb-16 rounded"></div>

        {/* Institucional Section */}
        <section id="institucional">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Institucional</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {institucionalBlocks.map((block) => (
              <div
                key={block.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-yellow-400 rounded-full p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2 text-center">{block.title}</h3>
                <a
                  href={block.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Baixar Arquivo
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}