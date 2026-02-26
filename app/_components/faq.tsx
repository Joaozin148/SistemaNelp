'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/_components/ui/accordion'
import { FaQuestionCircle } from 'react-icons/fa'

export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Como posso participar do projeto?',
            answer: 'Basta entrar em contato pelo formulário acima ou pelas nossas redes sociais. Nossa equipe irá te orientar sobre os próximos passos!',
        },
        {
            id: 'item-1b',
            question: 'A partir de qual idade posso começar a treinar?',
            answer: 'Você pode começar a treinar a partir dos 9 anos até os 17 anos. Temos turmas organizadas por faixa etária para melhor aproveitamento de todos.',
        },
        {
            id: 'item-2',
            question: 'Quais são os horários dos treinos?',
            answer: `
Ginásio Albertina – Terça e Quinta:
- 8h30: nascidos em 2009 e 2010
- 9h30: nascidos em 2011, 2012 e 2013
- 10h30: nascidos em 2014, 2015, 2016 e 2017
- 13h30: masculino – nascidos de 2010 a 2017
- 14h30: nascidos em 2009 e 2010
- 15h30: nascidos em 2011, 2012 e 2013
- 16h30: nascidos em 2014, 2015, 2016 e 2017

Ginásio Hélio Alves – Terça:
- 9h30 às 11h: nascidos de 2009 a 2017
- 15h30 às 17h: nascidos de 2009 a 2017
            `.trim().replace(/\n/g, '<br />'),
        },
        {
            id: 'item-3',
            question: 'Preciso ter experiência para participar?',
            answer: 'Não! Aceitamos iniciantes e atletas experientes. Temos turmas para todos os níveis.',
        },
        {
            id: 'item-4',
            question: 'Onde acontecem os treinos?',
            answer: 'No Ginásio Albertina Salmon, em Paranaguá-PR.',
        },
        {
            id: 'item-5',
            question: 'Como posso apoiar o projeto?',
            answer: 'Você pode apoiar sendo voluntário, patrocinador ou divulgando nosso trabalho. Entre em contato para saber mais!',
        },
    ]

    return (
        <section id="faq" className="py-16 md:py-24 bg-gradient-to-r from-yellow-200 via-yellow-100 to-blue-100/60">
            <div className="mx-auto max-w-3xl px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <FaQuestionCircle className="text-yellow-400 text-3xl drop-shadow" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 drop-shadow">Perguntas Frequentes</h2>
                    </div>
                    <p className="text-gray-700 text-balance text-lg">Confira as dúvidas mais comuns sobre nosso projeto, treinos e como participar!</p>
                </div>
                <div className="mx-auto max-w-2xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full rounded-2xl p-1 bg-white/60 backdrop-blur-md shadow-xl border border-yellow-300">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="rounded-xl border border-yellow-200 mb-3 overflow-hidden transition-all data-[state=open]:bg-yellow-50/80 data-[state=open]:shadow-lg">
                                    <AccordionTrigger className="cursor-pointer text-lg font-semibold text-blue-900 hover:text-yellow-500 px-6 py-4 transition-all">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 text-base text-gray-800">
                                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
