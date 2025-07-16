import React from 'react';

export default function CompeticoesEmDestaque() {
  return (
    <section className="bg-cover bg-center text-white" style={{ backgroundImage: "url('/fundo.jpg')", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className="bg-black bg-opacity-70 py-28 px-24">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-lg uppercase tracking-widest font-light text-yellow-400">Competições em destaque</h2>
            <h1 className="text-3xl font-bold text-white">Vôlei Paraná</h1>
            <p className="text-sm text-gray-300">consulte as tabelas e resultados no menu principal</p>
            <div className="w-24 h-1 bg-yellow-400 mt-2"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h2 className="text-2xl text-yellow-400 font-bold mb-4">Julho</h2>
              <ul className="space-y-2 text-sm text-gray-200">
                <li><span className="text-yellow-400 font-semibold">17 a 20/07</span> - Circuito Paranaense de Vôlei de Praia - JANS - 3ª Etapa - Matinhos</li>
                <li><span className="text-yellow-400 font-semibold">21 a 23/07</span> - Paranaense Sub 14/16 - Fem - Série A - 2ª Etapa - São José dos Pinhais</li>
                <li><span className="text-yellow-400 font-semibold">25 a 27/07</span>
                  <ul className="pl-4 list-disc">
                    <li>Paranaense Sub 19 - Fem - Série A - 2ª Etapa - Palmas</li>
                    <li>Paranaense Sub 19 - Fem - Série B - 2ª Etapa - São José dos Pinhais</li>
                    <li>Paranaense Sub 19 - Masc - Série A - 2ª Etapa - São Miguel do Iguaçu</li>
                    <li>Paranaense Sub 19 - Masc - Série B - 2ª Etapa - Toledo</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl text-yellow-400 font-bold mb-4">Agosto</h2>
              <ul className="space-y-2 text-sm text-gray-200">
                <li><span className="text-yellow-400 font-semibold">08 a 10/08</span> - Paranaense Sub 19 - Masc - Série C - 2ª Etapa - Jacarezinho</li>
                <li><span className="text-yellow-400 font-semibold">16 a 17/08</span>
                  <ul className="pl-4 list-disc">
                    <li>Paranaense Sub 13 - Masc - 3ª Etapa - São José dos Pinhais</li>
                    <li>Paranaense Sub 13 - Fem - 3ª Etapa - São José dos Pinhais</li>
                  </ul>
                </li>
                <li><span className="text-yellow-400 font-semibold">22 a 24/08</span> - Circuito Paranaense de Vôlei de Praia - JANS - 4ª Etapa</li>
                <li><span className="text-yellow-400 font-semibold">29 a 31/08</span> - Paranaense Sub 14 - Fem - Série B - 2ª Etapa - Marechal C. Rondon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}