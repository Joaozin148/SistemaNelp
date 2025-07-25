import React from 'react';

export default function CompeticoesEmDestaque() {
  return (
    <section className="bg-cover bg-center text-white" style={{ backgroundImage: "url('/toma.jpg')", backgroundColor: 'rgba(0, 0, 0, 0.6)', backgroundPosition: 'center 40%', }}>
      <div className="bg-black bg-opacity-60 py-28 px-4 md:px-24">
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
                <h2 className="text-2xl text-yellow-400 font-bold mb-3 mt-0">Agosto</h2>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li><span className="text-yellow-400 font-semibold">CAMPEONATO ESTADUAL</span> Sub13 3º etapa <span className="text-yellow-400 font-semibold">16 a 17 de agosto</span> – São José dos Pinhais</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-400 font-bold mb-3 mt-0">Setembro</h2>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li><span className="text-yellow-400 font-semibold">CAMPEONATO ESTADUAL</span> Sub19 feminino B 3º etapa <span className="text-yellow-400 font-semibold">05 a 07 de setembro</span> – Ibiporã</li>
                  <li><span className="text-yellow-400 font-semibold">CAMPEONATO ESTADUAL</span> Sub19 masculino B 3º etapa <span className="text-yellow-400 font-semibold">05 a 07 de setembro</span> – Ribeirão do Pinhal</li>
                  <li><span className="text-yellow-400 font-semibold">CAMPEONATO ESTADUAL</span> Sub17 masculino B 2º etapa <span className="text-yellow-400 font-semibold">12 a 14 de setembro</span> – Cascavel</li>
                  <li><span className="text-yellow-400 font-semibold">CAMPEONATO ESTADUAL</span> Sub17 feminino C 2º etapa <span className="text-yellow-400 font-semibold">12 a 14 de setembro</span> – A DEFINIR</li>
                  <li><span className="text-yellow-400 font-semibold">CAMPEONATO ESTADUAL</span> Sub15 feminino B <span className="text-yellow-400 font-semibold">19 a 21 de setembro</span> - Maringá</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-400 font-bold mb-3 mt-0">Outubro</h2>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li><span className="text-yellow-400 font-semibold">FESTIVAL DAS ESCOLINHAS</span> Todas as crianças <span className="text-yellow-400 font-semibold">18 de outubro</span> – Arena Albrtina</li>
                </ul>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8 md:gap-12 pl-2 pr-2">
              <div>
                <h2 className="text-2xl text-yellow-400 font-bold mb-3 mt-0">Novembro</h2>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li><span className="text-yellow-400 font-semibold">CAMPEONATO ESTADUAL</span> Sub19 B masculino 4º etapa <span className="text-yellow-400 font-semibold">21 a 23 de novembro</span> – Capanema</li>
                  <li><span className="text-yellow-400 font-semibold">CAMPEONATO ESTADUAL</span> SUB19 feminino  B 4º etapa <span className="text-yellow-400 font-semibold">21 a 23 de novembro</span> – Irati</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-400 font-bold mb-3 mt-0">Dezembro</h2>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li><span className="text-yellow-400 font-semibold">FESTIVAL DAS ESCOLINHAS</span> Todas as crianças <span className="text-yellow-400 font-semibold">13 de dezembro</span> – Arena Albrtina</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}