import { Users, Award, Star } from "lucide-react";

export default function ImpactoSection() {
  return (
    <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 border-t-4 border-yellow-400">
        <Users className="w-10 h-10 text-yellow-400 mb-2" />
        <span className="text-3xl font-bold text-[#202e44]">+1200</span>
        <span className="text-gray-600 mt-2">Jovens Atendidos</span>
      </div>
      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 border-t-4 border-blue-500">
        <Award className="w-10 h-10 text-blue-500 mb-2" />
        <span className="text-3xl font-bold text-[#202e44]">150</span>
        <span className="text-gray-600 mt-2">Projetos Realizados</span>
      </div>
      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 border-t-4 border-yellow-500">
        <Star className="w-10 h-10 text-yellow-500 mb-2" />
        <span className="text-3xl font-bold text-[#202e44]">11</span>
        <span className="text-gray-600 mt-2">Anos de Atuação</span>
      </div>
    </section>
  );
} 