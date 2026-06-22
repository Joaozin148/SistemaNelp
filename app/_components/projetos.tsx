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
    descricao: 'Parceria com a rede pública de ensino de Paranaguá para oferecer atividades esportivas dentro do ambiente escolar. ',
    imagens: [
      '/atividade1.jpg',
      '/atividade2.jpg',
      '/atividade3.jpg',
      '/atividade4.jpg',
      '/atividade5.jpg',
      '/atividade6.jpg',
      '/atividade7.jpg',
      '/atividade8.jpg',
      '/atividade9.jpg',
      '/atividade10.jpg',
     
    ],
    descricaoLonga: 'O projeto leva aulas de vôlei para escolas públicas, promovendo inclusão e saúde...'
  },
  {
    id: 2,
    nome: 'Festival de vôlei 2025',
    status: 'Concluído',
    descricao: 'Evento anual que celebra o voleibol por meio de competições, confraternização e desenvolvimento esportivo.',
    imagens: [
      '/festival.jpg', 
      '/festival2.jpg',
      '/festival3.jpg',
      '/festival4.jpg',
      '/festival5.jpg',
      '/festival6.jpg',
      '/festival7.jpg',
      '/festival8.jpg',
      '/festival9.jpg',
      '/festival10.jpg',
      '/festival11.jpg',
      '/festival12.jpg',
      '/festival13.jpg',
      '/festival14.jpg',
      '/festival15.jpg',
      '/festival16.jpg',
      '/festival17.jpg',
      '/festival18.jpg',
      '/festival19.jpg',
      '/festival20.jpg',
      '/festival21.jpg',
      '/festival22.jpg',
      '/festival23.jpg',
      
      
    ],
    descricaoLonga: 'O festival reúne crianças e jovens para um dia de esporte, integração e cidadania...'
  },
  {
    id: 3,
    nome: 'Jogos da Juventude Paraná 2026',
    status: 'Concluído',
    descricao: 'Competições do Jogos da Juventude no Paraná, com categorias masculino e feminino representando a NELP.',
    imagens: [
      '/juventude2026_1.jpg',
      '/juventude2026_2.jpg',
      '/juventude2026_3.jpg',
      '/juventude2026_4.jpg',
      '/juventude2026_5.jpg',
      '/juventude2026_7.jpg', 
      
      
    ],
    descricaoLonga: 'A participação nos Jogos da Juventude reúne as equipes masculino e feminino da NELP, fortalecendo o esporte escolar e promovendo desenvolvimento técnico e social para atletas jovens.'
  },
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
    <div className="relative pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-blue-100 to-blue-200 overflow-hidden">
      {/* SVG decorativo no fundo */}
      <svg className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-30 z-0" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="300" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(300 300) scale(300)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE68A" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-600 mb-14 drop-shadow flex items-center justify-center gap-4 z-10 relative">
        <span className="inline-block w-2 h-10 bg-yellow-400 rounded-full animate-pulse"></span>
        Projetos em Destaque
        <span className="inline-block w-2 h-10 bg-yellow-400 rounded-full animate-pulse"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-4 max-w-7xl mx-auto z-10 relative">
        {projetos.map((projeto, idx) => (
          <div
            key={projeto.id}
            className={
              `backdrop-blur-lg bg-white/70 border border-yellow-100 shadow-2xl rounded-3xl cursor-pointer transition-all duration-300 flex flex-col h-full border-t-4 border-yellow-400 hover:scale-105 hover:shadow-yellow-200/70 hover:bg-white/90 animate-fadeInUp` +
              ` ${idx % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200'}`
            }
            style={{ animationDelay: `${idx * 80}ms` }}
            onClick={() => { setProjetoSelecionado(projeto); setImgIndex(0); }}
          >
            <img src={projeto.imagens[0]} alt={projeto.nome} className="w-full h-80 object-cover rounded-t-3xl border-b-4 border-yellow-100" />
            <div className="p-10 flex flex-col flex-1">
              <h3 className="font-extrabold text-2xl text-yellow-600 mb-3 drop-shadow-sm">{projeto.nome}</h3>
              <p className="text-gray-700 flex-1 text-lg mb-2">{projeto.descricao}</p>
              <span className="inline-block mt-2 px-4 py-1 text-base bg-yellow-200 text-yellow-800 rounded-full font-semibold shadow">{projeto.status}</span>
              <button className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-extrabold py-3 px-10 rounded-full transition-all duration-300 self-end shadow-lg hover:shadow-yellow-300/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 animate-shine" onClick={e => { e.stopPropagation(); setProjetoSelecionado(projeto); setImgIndex(0); }}>
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal moderno */}
      {projetoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setProjetoSelecionado(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full p-12 relative shadow-2xl animate-fadeIn" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-yellow-600" onClick={() => setProjetoSelecionado(null)}>&times;</button>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-600">{projetoSelecionado.nome}</h2>
            {/* Carrossel de imagens */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {projetoSelecionado.imagens.length > 1 && (
                <button onClick={() => handlePrevImg(projetoSelecionado)} className="p-2 text-yellow-600 hover:text-yellow-800"><FaChevronLeft size={32} /></button>
              )}
              <img src={projetoSelecionado.imagens[imgIndex]} alt="" className="rounded-xl max-h-[32rem] object-contain" />
              {projetoSelecionado.imagens.length > 1 && (
                <button onClick={() => handleNextImg(projetoSelecionado)} className="p-2 text-yellow-600 hover:text-yellow-800"><FaChevronRight size={32} /></button>
              )}
            </div>
            <p className="mb-6 text-gray-800 text-xl">{projetoSelecionado.descricaoLonga}</p>
            <span className="inline-block mt-2 px-3 py-1 text-sm bg-yellow-200 text-yellow-800 rounded-full font-semibold">{projetoSelecionado.status}</span>
          </div>
        </div>
      )}
    </div>
  );
}