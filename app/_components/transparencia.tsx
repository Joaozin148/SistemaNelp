'use client';

import { useEffect } from "react";

export default function TransparenciaAdmin() {
  // Define separate arrays for each topic


  const institucionalBlocks = [
    {
      id: 1,
      title: 'Modelo Parecer Fiscal (2022)',
      url: 'https://drive.google.com/file/d/1HsRo00oqQ-eJj-i5NR8ZqJuouVGgf13-/view',
    },
    {
      id: 2,
      title: 'Modelo Parecer Fiscal (2023)',
      url: 'https://drive.google.com/file/d/1YRo9gDvW7qgg0guJ8NFw4swwAlfhu6pb/view',
    },
    {
      id: 3,
      title: 'Ata Homologação Diretoria (2024-2026)',
      url: 'https://drive.google.com/file/d/1be5AbvFbQh-cgof2-m23rNRdSuJu6LZh/view',
    },
    {
      id: 4,
      title: 'Estatuto',
      url: 'https://drive.google.com/file/d/1ezlGXPpgeCZZ_NmwAHpv7H8V5jAynTNa/view',
    },
    {
      id: 5,
      title: 'Analise Frequencia (2 Semestre de 2023 ao 1 Semestre 2025)',
      url: 'https://drive.google.com/file/d/1yfvfsxEx9YfWRtFWDEDiBi2x06Z6-oAK/view',
    },
    {
      id: 6,
      title: 'Edital Para Eleição',
      url: 'https://drive.google.com/file/d/1BLgYbRKIc7gIc27i1rIUqvYwIy25mlvm/views',
    },
    
  ];


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
          <a href="#uniformes" className="text-blue-800 font-semibold hover:underline transition">Uniformes</a>
          <a href="#institucional" className="text-blue-800 font-semibold hover:underline transition">Institucional</a>
          <a href="#projetos-incentivados" className="text-blue-800 font-semibold hover:underline transition">Projetos Incentivados</a>
        </header>
     


      <section id="uniformes">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Uniformes</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-6 pb-10">
        {uniformesBlocks.map((block, index) => (
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
            {index < uniformesBlocks.length - 1 && (
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

      
    </div>
  );
}