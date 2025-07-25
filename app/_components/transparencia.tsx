'use client';

import { useEffect } from "react";

export default function TransparenciaAdmin() {
  // Define separate arrays for each topic
  const prestacaoContasBlocks = [
    {
      id: 1,
      title: 'Balanço Patrimonial 2022',
      url: '#',
    },
    {
      id: 2,
      title: 'Balanço Patrimonial 2021',
      url: '#',
    },
    {
      id: 3,
      title: 'Relatório Financeiro 2022',
      url: '#',
    },
    {
      id: 4,
      title: 'Demonstração de Resultados 2022',
      url: '#',
    },
  ];

  const certificacoesBlocks = [
    {
      id: 1,
      title: 'Certificado ISO 9001',
      url: '#',
    },
    {
      id: 2,
      title: 'Certificado de Sustentabilidade',
      url: '#',
    },
    {
      id: 3,
      title: 'Certificado de Qualidade 2022',
      url: '#',
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

  const projetosIncentivadosBlocks = [
    {
      id: 1,
      title: 'Projeto Cultural 2022',
      url: '#',
    },
    {
      id: 2,
      title: 'Projeto Esportivo Infantil',
      url: '#',
    },
    {
      id: 3,
      title: 'Iniciativa de Educação 2022',
      url: '#',
    },
  ];

  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const section = document.querySelector(target.hash);
        if (section) {
          e.preventDefault();
          setTimeout(() => {
            const rect = section.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let offset = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
            if (offset < 0) offset = 0;
            window.scrollTo({
              top: offset,
              behavior: 'smooth',
            });
          }, 10);
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

    <div className="p-4 max-w-7xl mx-auto pt-24">
        <header id="transparencia-header" className="flex flex-wrap justify-center gap-6 mb-12">
        <a href="#prestacao-de-contas" className="text-blue-800 font-semibold hover:underline transition">Prestação de Contas</a>
        <a href="#certificacoes" className="text-blue-800 font-semibold hover:underline transition">Certificações</a>
        <a href="#institucional" className="text-blue-800 font-semibold hover:underline transition">Institucional</a>
        <a href="#projetos-incentivados" className="text-blue-800 font-semibold hover:underline transition">Projetos Incentivados</a>
      </header>
      <section id="prestacao-de-contas">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">PRESTAÇÃO DE CONTAS</h2>
      <div className="flex flex-wrap justify-center gap-32 mb-6 pb-10">
        {prestacaoContasBlocks.map((block, index) => (
          <div key={block.id} className="flex flex-col items-center w-48">
            <div className="bg-yellow-400 rounded-full p-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            <p className="font-bold text-blue-800 mb-1 text-center">{block.title}</p>
            <a
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline text-center"
            >
              Clique aqui e baixe o arquivo
            </a>
            {index < prestacaoContasBlocks.length - 1 && (
              <div className="w-10 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
            )}
          </div>
        ))}
      </div>
      </section>

      <div className="w-full h-1 bg-red-600 mx-auto max-w-4xl mb-10"></div>

      <section id="certificacoes">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Certificações</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-6 pb-10">
        {certificacoesBlocks.map((block, index) => (
          <div key={block.id} className="flex flex-col items-center w-48">
            <div className="bg-yellow-400 rounded-full p-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            <p className="font-bold text-blue-800 mb-1 text-center">{block.title}</p>
            <a
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline text-center"
            >
              Clique aqui e baixe o arquivo
            </a>
            {index < certificacoesBlocks.length - 1 && (
              <div className="w-10 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
            )}
          </div>
        ))}
      </div>
      </section>

      <div className="w-full h-1 bg-red-600 mx-auto max-w-4xl mb-10"></div>
      <section id="institucional">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Institucional</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-6 pb-10">
        {institucionalBlocks.map((block, index) => (
          <div key={block.id} className="flex flex-col items-center w-48">
            <div className="bg-yellow-400 rounded-full p-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            <p className="font-bold text-blue-800 mb-1 text-center">{block.title}</p>
            <a
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline text-center"
            >
              Clique aqui e baixe o arquivo
            </a>
            {index < institucionalBlocks.length - 1 && (
              <div className="w-10 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
            )}
          </div>
        ))}
      </div>
      </section>

      <div className="w-full h-1 bg-red-600 mx-auto max-w-4xl mb-10"></div>
      <section id="projetos-incentivados">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Projetos Incentivados</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-6 pb-10">
        {projetosIncentivadosBlocks.map((block, index) => (
          <div key={block.id} className="flex flex-col items-center w-48">
            <div className="bg-yellow-400 rounded-full p-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            <p className="font-bold text-blue-800 mb-1 text-center">{block.title}</p>
            <a
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline text-center"
            >
              Clique aqui e baixe o arquivo
            </a>
            {index < projetosIncentivadosBlocks.length - 1 && (
              <div className="w-10 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
            )}
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}