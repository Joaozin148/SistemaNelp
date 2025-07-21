/* eslint-disable @next/next/no-img-element */
// component.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black py-10' ref={ref}>
        <div className='wrapper'>
          <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-4xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Sobre a NELP
            </h1>
            <p className='2xl:text-xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              A NELP – Novo Esporte do Litoral Paranaense é uma organização sem fins lucrativos fundada com o propósito de transformar vidas por meio do esporte. Com sede em Paranaguá (PR), a entidade nasceu da união de profissionais da educação física, voluntários e lideranças comunitárias que enxergaram no esporte uma poderosa ferramenta de inclusão social, educação e cidadania.              <br />
              <br />
              Desde sua criação, a NELP tem como missão democratizar o acesso ao esporte de qualidade, especialmente para crianças, adolescentes e jovens em situação de vulnerabilidade social no litoral do Paraná. Através de projetos esportivos gratuitos e ações comunitárias, a instituição promove o desenvolvimento físico, emocional e social dos participantes, contribuindo para a formação de cidadãos mais conscientes, saudáveis e preparados para o futuro.
              <br />
              <br />
              Ao longo dos anos, a NELP firmou parcerias com órgãos públicos, empresas e apoiadores locais, consolidando seu compromisso com a transparência, a responsabilidade social e o desenvolvimento humano. Hoje, além das atividades esportivas regulares, a organização se destaca por sua atuação em projetos incentivados por leis de fomento ao esporte, sempre priorizando a ética e a prestação de contas à sociedade.
            </p>

             <a href="/aboutUs" className="inline-block w-30 mx-auto bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded transition-colors duration-200">
            Ler mais
          </a>
          </section>
        </div>
        <section className='text-white w-full bg-slate-950  '>
          <div className='grid grid-cols-12 gap-2 '>
            <div className='grid gap-2 col-span-4 '>
              <figure className=' w-full '>
                <img
                  src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3'>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
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