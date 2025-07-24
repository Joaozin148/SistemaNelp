import Link from "next/link";

export default function TransparenciaCTA() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-yellow-100">
      <h2 className="text-3xl font-bold text-yellow-900 mb-2">Transparência</h2>
      <p className="text-lg text-yellow-800 mb-4 text-center max-w-xl">
        Acesse nosso portal de transparência e veja como aplicamos os recursos e mantemos nosso compromisso com a ética e responsabilidade.
      </p>
      <Link
        href="/transparencia"
        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded shadow transition-colors"
      >
        Ver mais
      </Link>
    </section>
  );
} 