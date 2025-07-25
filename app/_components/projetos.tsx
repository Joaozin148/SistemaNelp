/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    nome: 'Projeto Vôlei para todos',
    status: 'Em andamento',
    descricao: 'Aulas gratuitas de vôlei para crianças.',
    imagens: [
      '/projeto1.jpg',
      '/projeto1.1.jpg'
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

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const handlePrevImg = (projeto: Projeto) => {
    setImgIndex((prev) => (prev === 0 ? projeto.imagens.length - 1 : prev - 1));
  };
  const handleNextImg = (projeto: Projeto) => {
    setImgIndex((prev) => (prev === projeto.imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative pt-24 min-h-screen bg-gradient-to-b from-yellow-50 to-blue-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-10 drop-shadow">Projetos em Destaque</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="bg-white rounded-2xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition p-0 flex flex-col h-full border-t-4 border-yellow-400"
            onClick={() => { setProjetoSelecionado(projeto); setImgIndex(0); }}
          >
            <img src={projeto.imagens[0]} alt={projeto.nome} className="w-full h-56 object-cover rounded-t-2xl" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-xl text-yellow-600 mb-2">{projeto.nome}</h3>
              <p className="text-gray-700 flex-1">{projeto.descricao}</p>
              <span className="inline-block mt-4 px-3 py-1 text-xs bg-yellow-200 text-yellow-800 rounded-full font-semibold">{projeto.status}</span>
              <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition self-end" onClick={e => { e.stopPropagation(); setProjetoSelecionado(projeto); setImgIndex(0); }}>Saiba mais</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal moderno */}
      {projetoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setProjetoSelecionado(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl animate-fadeIn" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-yellow-600" onClick={() => setProjetoSelecionado(null)}>&times;</button>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-600">{projetoSelecionado.nome}</h2>
            {/* Carrossel de imagens */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {projetoSelecionado.imagens.length > 1 && (
                <button onClick={() => handlePrevImg(projetoSelecionado)} className="p-2 text-yellow-600 hover:text-yellow-800"><FaChevronLeft size={24} /></button>
              )}
              <img src={projetoSelecionado.imagens[imgIndex]} alt="" className="rounded-xl max-h-64 object-contain" />
              {projetoSelecionado.imagens.length > 1 && (
                <button onClick={() => handleNextImg(projetoSelecionado)} className="p-2 text-yellow-600 hover:text-yellow-800"><FaChevronRight size={24} /></button>
              )}
            </div>
            <p className="mb-4 text-gray-800 text-lg">{projetoSelecionado.descricaoLonga}</p>
            <span className="inline-block mt-2 px-3 py-1 text-xs bg-yellow-200 text-yellow-800 rounded-full font-semibold">{projetoSelecionado.status}</span>
          </div>
        </div>
      )}
    </div>
  );
}