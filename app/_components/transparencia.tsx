'use client';


export default function TransparenciaAdmin() {
    const exampleBlocks = [
        {
            id: 1,
            title: 'BALANCO PATRIMONIAL 2022',
            url: '#'
        },
        {
            id: 2,
            title: 'BALANCO PATRIMONIAL 2022',
            url: '#'
        },
        {
            id: 3,
            title: 'BALANCO PATRIMONIAL 2022',
            url: '#'
        },
        {
            id: 4,
            title: 'BALANCO PATRIMONIAL 2022',
            url: '#'
        },
    ];

    return (
        <div className="p-4 max-w-3xl mx-auto pt-24">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">PRESTAÇÃO DE CONTAS</h2>
            <div className="flex justify-center items-center space-x-4 mb-6 gap-40">
                {exampleBlocks.map((block, index) => (
                    <div key={block.id} className="flex flex-col items-center">
                        <div className="bg-yellow-400 rounded-full p-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
                            </svg>
                        </div>
                        <p className="font-bold text-blue-800 mb-1 text-center">{block.title}</p>
                        <a href={block.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline text-center">
                            Clique aqui e baixe o arquivo
                        </a>
                        {index < exampleBlocks.length - 0 && <div className="w-10 h-0.5 bg-yellow-400 mx-auto"></div>}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">PRESTAÇÃO DE CONTAS</h2>
            <div className="flex justify-center items-center space-x-4 mb-6 gap-40">
                {exampleBlocks.map((block, index) => (
                    <div key={block.id} className="flex flex-col items-center">
                        <div className="bg-yellow-400 rounded-full p-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
                            </svg>
                        </div>
                        <p className="font-bold text-blue-800 mb-1 text-center">{block.title}</p>
                        <a href={block.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline text-center">
                            Clique aqui e baixe o arquivo
                        </a>
                        {index < exampleBlocks.length - 0 && <div className="w-10 h-0.5 bg-yellow-400 mx-auto"></div>}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">PRESTAÇÃO DE CONTAS</h2>
            <div className="flex justify-center items-center space-x-4 mb-6 gap-40">
                {exampleBlocks.map((block, index) => (
                    <div key={block.id} className="flex flex-col items-center">
                        <div className="bg-yellow-400 rounded-full p-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
                            </svg>
                        </div>
                        <p className="font-bold text-blue-800 mb-1 text-center">{block.title}</p>
                        <a href={block.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline text-center">
                            Clique aqui e baixe o arquivo
                        </a>
                        {index < exampleBlocks.length - 0 && <div className="w-10 h-0.5 bg-yellow-400 mx-auto"></div>}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">PRESTAÇÃO DE CONTAS</h2>
            <div className="flex justify-center items-center space-x-4 mb-6 gap-40">
                {exampleBlocks.map((block, index) => (
                    <div key={block.id} className="flex flex-col items-center">
                        <div className="bg-yellow-400 rounded-full p-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
                            </svg>
                        </div>
                        <p className="font-bold text-blue-800 mb-1 text-center">{block.title}</p>
                        <a href={block.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline text-center">
                            Clique aqui e baixe o arquivo
                        </a>
                        {index < exampleBlocks.length - 0 && <div className="w-10 h-0.5 bg-yellow-400 mx-auto"></div>}
                    </div>
                ))}
            </div>
        </div>
        
    );
}