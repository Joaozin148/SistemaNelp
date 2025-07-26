/* eslint-disable @next/next/no-img-element */
const presidente = [
    {
        name: 'Geórgia da Cunha Ben',
        role: 'Presidente',
        avatar: '/avatar_fem.png',
    },
     {
        name: 'Selma de Oliveira de Souza Gonçalves',
        role: 'Vice Presidente',
        avatar: '/avatar_fem.png',
    },
]

const tesoureira = [
    {
        name: 'Juliana de Paula Barbosa',
        role: 'Tesoureira',
        avatar: '/avatar_fem.png',
    },
    {
        name: 'Simone do Pilar Cardozo',
        role: 'Vice Tesoureira',
        avatar: '/avatar_fem.png',
    },
]

const secretaria = [
    {
        name: 'Scheila Nunes dos Santos',
        role: '1º Secretaria',
        avatar: '/avatar_fem.png',
    },
    {
        name: 'Adrielle Cristina Geraldo Coelho',
        role: '2º Secretaria',
        avatar: '/avatar_fem.png',
    },
]

const cons_fiscal = [
    {
        name: 'Adriano Correa Pires',
        role: 'Conselho Fiscal',
        avatar: '/avatar_masc.png',
    },
    {
        name: 'Josemara Bernardo Capeti',
        role: 'Conselho Fiscal',
        avatar: '/avatar_fem.png',
    },
]

export default function StatsSection() {
    return (
        <section className="py-12 md:pt-32">
            <div className="mx-auto max-w-6xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Nossa Equipe</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Presidentes(a)</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-6">
                        {presidente.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Tesoureira</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-6">
                        {tesoureira.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Secretaria</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-6">
                        {secretaria.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Conselho Fiscal</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-6">
                        {cons_fiscal.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}
