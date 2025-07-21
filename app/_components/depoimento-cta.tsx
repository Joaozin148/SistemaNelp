import Link from "next/link";

export default function DepoimentoCtaSection() {
  return (
    <section className="bg-blue-700 py-12 px-4 text-center text-white">
      <blockquote className="italic text-lg max-w-2xl mx-auto mb-6">
        “A NELP me deu oportunidades que mudaram minha vida. Aqui aprendi a sonhar alto e acreditar em mim!”<br />
        <span className="text-yellow-300 text-sm">— Participante NELP</span>
      </blockquote>
      <Link href="#contato" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-full shadow transition">
        Seja voluntário
      </Link>
    </section>
  );
} 