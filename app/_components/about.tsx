/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"


export default function AboutUsSection() {
  return (
    <section id="about-section" className="w-full min-h-screen py-0 px-0 bg-gradient-to-b from-[#202e44] to-[#0a192f] text-white overflow-hidden relative">
      {/* Banner com imagem de destaque */}
      <div className="relative w-full h-[32rem] md:h-[48rem] flex items-center justify-center bg-black/60">
        <img src="/time.jpeg" alt="Banner NELP" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Sobre a NELP</h1>
          <p className="mt-2 text-lg md:text-xl font-medium text-yellow-300 drop-shadow">Transformando vidas através do esporte</p>
        </div>
      </div>

      {/* Nova seção de cards temáticos */}
      <section className="w-full bg-[#16213a] py-16 px-4 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl justify-items-center">
          {/* Card 1 */}
          <div className="bg-white text-[#202e44] rounded-2xl shadow-xl p-8 border-t-4 border-yellow-400 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200">
            <div className="mb-2 text-yellow-500 text-3xl">🏆</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Quem Somos</h3>
            <p className="text-base">A NELP – Novo Esporte do Litoral Paranaense é uma organização da sociedade civil, sediada em Paranaguá (PR), que atua com responsabilidade e compromisso social na formação de crianças e adolescentes por meio do esporte.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white text-[#202e44] rounded-2xl shadow-xl p-8 border-t-4 border-yellow-400 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200">
            <div className="mb-2 text-yellow-500 text-3xl">🎯</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Nossa Missão</h3>
            <p className="text-base">Criada a partir da mobilização de educadores físicos, voluntários e lideranças comunitárias, a NELP surgiu com o objetivo de ampliar o acesso ao esporte de forma estruturada, gratuita e contínua, especialmente para jovens em contextos de vulnerabilidade.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white text-[#202e44] rounded-2xl shadow-xl p-8 border-t-4 border-yellow-400 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200">
            <div className="mb-2 text-yellow-500 text-3xl">🌟</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Reconhecimento e Impacto</h3>
            <p className="text-base">Ao longo dos anos, a NELP se consolidou como referência no litoral paranaense pela seriedade do seu trabalho e pelo impacto direto que gera na vida dos participantes.</p>
          </div>
          {/* Card 4 - centralizado na segunda linha */}
          <div className="bg-white text-[#202e44] rounded-2xl shadow-xl p-8 border-t-4 border-yellow-400 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200 md:col-start-2">
            <div className="mb-2 text-yellow-500 text-3xl">💪</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Formação e Desenvolvimento</h3>
            <p className="text-base">Por meio de projetos esportivos regulares, acompanhados por profissionais capacitados, a NELP contribui para o desenvolvimento físico, autonomia, autoestima e senso de coletividade dos atletas. Mais do que formar talentos esportivos, o foco está na formação de pessoas.</p>
          </div>  
          {/* Card 5 - centralizado na segunda linha */}
          <div className="bg-white text-[#202e44] rounded-2xl shadow-xl p-8 border-t-4 border-yellow-400 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200 md:col-start-3">
            <div className="mb-2 text-yellow-500 text-3xl">🤝</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Gestão e Compromisso</h3>
            <p className="text-base">Com apoio de parcerias públicas e privadas, a NELP desenvolve iniciativas viabilizadas por leis de incentivo ao esporte, mantendo um modelo de gestão transparente, ético e com foco em resultados concretos. O compromisso é sempre com uma atuação responsável e diálogo com a comunidade.</p>
          </div>
        </div>

      </section>

    <section className="w-full flex flex-col items-center justify-center py-12 bg-[#202e44]">
      <p className="text-lg text-white mb-4 text-center max-w-xl">
        Acesse o nosso portifolio bacana
      </p>
      <Link
        href="/transparencia"
        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded shadow transition-colors"
      >
        Acesse aqui
      </Link>
    </section>
      {/* Depoimento em destaque */}
      <div className="max-w-2xl mx-auto mb-12 px-4 pt-10">
        <blockquote className="italic text-xl md:text-2xl text-yellow-200 border-l-8 border-yellow-400 pl-6 py-4 bg-[#202e44]/80 rounded-xl shadow">
          “O esporte mudou minha vida e me ensinou a nunca desistir dos meus sonhos.”
          <br />
          <span className="text-base text-yellow-300 font-bold">— Participante NELP</span>
        </blockquote>
      </div>

      {/* Botão de chamada para ação */}
      <div className="flex justify-center mb-16">
        <a href="/#contato" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-10 py-4 rounded-full shadow-lg text-lg transition-colors duration-200">Quero apoiar a NELP</a>
      </div>
    </section>
  )
}