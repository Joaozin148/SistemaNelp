/* eslint-disable @next/next/no-img-element */
"use client"

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

      {/* Card centralizado com texto principal */}
      <div className="flex justify-center -mt-20 mb-12 px-4">
        <div className="bg-white/90 text-[#202e44] rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl w-full border-t-8 border-yellow-400 backdrop-blur-md">
          <p className="text-lg md:text-xl font-medium text-center whitespace-pre-line">
A NELP – Novo Esporte do Litoral Paranaense é uma organização da sociedade civil, sediada em Paranaguá (PR), que atua com responsabilidade e compromisso social na formação de crianças e adolescentes por meio do esporte.

Criada a partir da mobilização de educadores físicos, voluntários e lideranças comunitárias da região, a NELP surgiu com um objetivo claro: ampliar o acesso ao esporte de forma estruturada, gratuita e contínua, especialmente para jovens em contextos de vulnerabilidade.

Ao longo dos anos, a organização tem se consolidado como referência no litoral paranaense pela seriedade do seu trabalho e pelo impacto direto que gera na vida dos participantes. Por meio de projetos esportivos regulares, acompanhados por profissionais capacitados, a NELP contribui não apenas para o desenvolvimento físico, mas também para a autonomia, autoestima e senso de coletividade de seus atletas.

Mais do que formar talentos esportivos, o foco está na formação de pessoas.

Hoje, com o apoio de parcerias públicas e privadas, a NELP desenvolve iniciativas viabilizadas por leis de incentivo ao esporte, mantendo um modelo de gestão transparente, ético e com foco em resultados concretos. Cada passo dado pela instituição reforça o compromisso com uma atuação responsável, baseada no diálogo com a comunidade e na construção de oportunidades reais para a juventude do litoral.
          </p>
        </div>
      </div>

      {/* Grid de fotos */}
      <div className="container mx-auto max-w-5xl mb-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-300">Nossa Atuação em Imagens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="/timefeminino.jpg" alt="Time Feminino" className="rounded-xl shadow-lg object-cover w-full h-56" />
          <img src="/timetodo.jpeg" alt="Time Todo" className="rounded-xl shadow-lg object-cover w-full h-56" />
          <img src="/masculino.jpeg" alt="Time Masculino" className="rounded-xl shadow-lg object-cover w-full h-56" />
          <img src="/diretoria.jpg" alt="Diretoria" className="rounded-xl shadow-lg object-cover w-full h-56" />
          <img src="/berro2.jpg" alt="Projeto Berro" className="rounded-xl shadow-lg object-cover w-full h-56" />
          <img src="/perninha.jpg" alt="Projeto Perninha" className="rounded-xl shadow-lg object-cover w-full h-56" />
        </div>
      </div>

      {/* Depoimento em destaque */}
      <div className="max-w-2xl mx-auto mb-12 px-4">
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