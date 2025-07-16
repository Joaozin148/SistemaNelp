export default function StatsSection() {
    return (
        <section className="py-6 md:py-10 bg-gray-50">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold text-gray-800 lg:text-5xl">Nossa Trajetória em Números</h2>
                    <p className="text-gray-600">
                        Ao longo dos anos, fortalecemos o esporte e inspiramos atletas em todo o país através de torneios, títulos e participações inesquecíveis.
                    </p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-primary-500 text-blue-600">+150</div>
                        <p className="text-gray-700">Campeonatos Disputados</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-primary-500 text-blue-600">+80</div>
                        <p className="text-gray-700">Títulos Conquistados</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-primary-500 text-blue-600">+2000</div>
                        <p className="text-gray-700">Atletas Participantes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
