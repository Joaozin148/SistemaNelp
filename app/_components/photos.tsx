/* eslint-disable @next/next/no-img-element */
// component.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black pb-10' ref={ref}>
        <div className='wrapper'>
          <section className='text-white h-full py-4 w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div
              className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none'
            ></div>

            <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-3xl xl:text-4xl px-4 sm:px-6 md:px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Sobre a NELP
            </h1>
            <p className='text-lg sm:text-xl md:text-lg lg:text-xl max-w-6xl mx-auto px-4 sm:px-6 md:px-8 font-semibold text-center tracking-tight leading-[140%] mt-4'>
              A NELP – Novo Esporte do Litoral Paranaense é uma organização da sociedade civil, sediada em Paranaguá (PR), que atua com responsabilidade e compromisso social na formação de crianças e adolescentes por meio do esporte.
              <br />
              <br />
              Criada a partir da mobilização de educadores físicos, voluntários e lideranças comunitárias da região, a NELP surgiu com um objetivo claro: ampliar o acesso ao esporte de forma estruturada, gratuita e contínua, especialmente para jovens em contextos de vulnerabilidade.
              <br />
              <br />
              Ao longo dos anos, a organização tem se consolidado como referência no litoral paranaense pela seriedade do seu trabalho e pelo impacto direto que gera na vida dos participantes. Por meio de projetos esportivos regulares, acompanhados por profissionais capacitados, a NELP contribui não apenas para o desenvolvimento físico, mas também para a autonomia, autoestima e senso de coletividade de seus atletas.
              <br />
              <br />
              Mais do que formar talentos esportivos, o foco está na formação de pessoas.
              <br />
              <br />
              Hoje, com o apoio de parcerias públicas e privadas, a NELP desenvolve iniciativas viabilizadas por leis de incentivo ao esporte, mantendo um modelo de gestão transparente, ético e com foco em resultados concretos. Cada passo dado pela instituição reforça o compromisso com uma atuação responsável, baseada no diálogo com a comunidade e na construção de oportunidades reais para a juventude do litoral.
            </p>

            <a
              href='/sobre-nos'
              className='inline-block mx-auto mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2.5 rounded transition-colors duration-200'
            >
              Ler mais
            </a>
          </section>
        </div>
        <section className='text-white w-full bg-slate-950  '>
          <div className='grid grid-cols-12 gap-2 '>
            <div className='grid gap-2 col-span-4 '>
              <figure className=' w-full '>
                <img
                  src='/timefeminino.jpg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover object-[center_10%] rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                 src= '/fundo2.jpg'
                 
                 alt=''
                 className='transition-al l duration-300 w-full h-96  align-bottom object-cover object-[center_10%] rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='/timetodo.jpeg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='/berro2.jpg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='/perninha.jpg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover object-[center_20%] rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3'>
              <figure className='w-full h-full '>
                <img
                  src='/time.jpeg'
                  alt=''
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='/diretoria.jpg'
                  alt=''
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='/masculino.jpeg'
                  alt=''
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='/time2.jpeg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='/toma.jpg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='comemoracao.jpeg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='/jogooo.jpg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover object-[center_10%] rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='/defesa.jpg'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover object-[center_20%] rounded-md '
                />
              </figure>
            </div>
          </div>
        </section>

      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component; 