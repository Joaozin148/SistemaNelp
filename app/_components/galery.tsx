/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';

interface Projeto {
  id: number;
  nome: string;
  status: string;
  descricao: string;
  imagens: string[];
  descricaoLonga: string;
}

const projetos: Projeto[] = [
  {
    id: 1,
    nome: 'Projeto Vôlei nas Escolas',
    status: 'Em andamento',
    descricao: 'Aulas gratuitas de vôlei para crianças.',
    imagens: [
      '/projetos/volei1.jpg',
      '/projetos/volei2.jpg'
    ],
    descricaoLonga: 'O projeto leva aulas de vôlei para escolas públicas, promovendo inclusão e saúde...'
  },
  {
    id: 2,
    nome: 'Festival Esportivo',
    status: 'Concluído',
    descricao: 'Evento anual com diversas modalidades esportivas.',
    imagens: [
      '/projetos/festival1.jpg',
      '/projetos/festival2.jpg'
    ],
    descricaoLonga: 'O festival reúne crianças e jovens para um dia de esporte, integração e cidadania...'
  },
  // Adicione mais projetos conforme necessário
];

export default function Galery() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

  return (
    <div className="relative pt-20">
      {/* Filtros podem ser adicionados aqui futuramente */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
            onClick={() => setProjetoSelecionado(projeto)}
          >
            <img src={projeto.imagens[0]} alt={projeto.nome} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{projeto.nome}</h3>
              <p className="text-sm text-gray-600">{projeto.descricao}</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-yellow-200 rounded">{projeto.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {projetoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setProjetoSelecionado(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-xl" onClick={() => setProjetoSelecionado(null)}>×</button>
            <h2 className="text-2xl font-bold mb-2">{projetoSelecionado.nome}</h2>
            <p className="mb-4">{projetoSelecionado.descricaoLonga}</p>
            <div className="grid grid-cols-2 gap-2">
              {projetoSelecionado.imagens.map((img, idx) => (
                <img key={idx} src={img} alt="" className="rounded" />
              ))}
            </div>
            <span className="inline-block mt-4 px-2 py-1 text-xs bg-yellow-200 rounded">{projetoSelecionado.status}</span>
          </div>
        </div>
      )}
    </div>
  );
}