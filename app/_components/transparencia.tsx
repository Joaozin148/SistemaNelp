'use client';

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

  return (
    <div className="p-4 max-w-7xl mx-auto pt-24">
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

      <div className="w-full h-1 bg-red-600 mx-auto max-w-4xl mb-10"></div>

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

      <div className="w-full h-1 bg-red-600 mx-auto max-w-4xl mb-10"></div>

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

      <div className="w-full h-1 bg-red-600 mx-auto max-w-4xl mb-10"></div>

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
    </div>
  );
}