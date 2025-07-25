import { Star } from "lucide-react";
import Link from "next/link";

export default function MissaoDestaqueSection() {
  return (
    <section className="max-w-3xl mx-auto py-8 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#202e44] flex items-center justify-center gap-2">
        <Star className="w-7 h-7 text-yellow-400" /> Nossa Missão
      </h2>
      <p className="text-lg text-gray-700 mb-6">
      Transformar realidades por meio do esporte, formando cidadãos íntegros, conscientes e comprometidos com a construção de uma sociedade mais justa, saudável e solidária.
      </p>
      <Link href="/sobre-nos" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded transition-colors duration-200">
        Saiba mais
      </Link>
    </section>
  );
} 