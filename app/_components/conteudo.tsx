import React from 'react';

export default function CompeticoesEmDestaque() {
  return (
    <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/toma.jpg')", backgroundPosition: 'center 40%', }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 bg-black bg-opacity-40 py-28 px-4 md:px-24">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-lg uppercase tracking-widest font-light text-yellow-400">Competições em destaque</h2>
            <h1 className="text-3xl font-bold text-white">NELP UNIVOLEI</h1>
            <p className="text-sm text-gray-300">consulte as tabelas e resultados no menu principal</p>
            <div className="w-24 h-1 bg-yellow-400 mt-2"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
            <div className="flex-1 flex flex-col gap-8 md:gap-12 pl-2 pr-2">
              <div>
                <h2 className="text-2xl text-yellow-400 font-bold mb-3 mt-0">Outubro</h2>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>
                    <span className="text-yellow-400 font-semibold">TERCEIRA ETAPA — FASE REGIONAL</span>
                    <span className="text-yellow-400 font-semibold">24 e 25 de outubro</span>
                    <br />Feminino: Sub 15 e Sub 18
                    <br />Masculino: Sub 19
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8 md:gap-12 pl-2 pr-2">
              <div>
                <h2 className="text-2xl text-yellow-400 font-bold mb-3 mt-0">Novembro</h2>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>
                    <span className="text-yellow-400 font-semibold">TAÇA PARANÁ</span>
                    <span className="text-yellow-400 font-semibold">31 de outubro a 6 de novembro</span>
                    <br />Feminino: Sub 15 e Sub 19
                    <br />Masculino: Sub 19
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-400 font-bold mb-3 mt-0">Dezembro</h2>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>
                    <span className="text-yellow-400 font-semibold">FESTIVAL DAS ESCOLINHAS</span>
                    <span className="text-yellow-400 font-semibold">17 de dezembro</span>
                    – Albertina
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}