'use client';

import Image from 'next/image';
import { Header } from './header';

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <section className="relative h-[400px] flex items-center justify-center">
          <Image
            src="/fundo.jpg"
            alt="Background"
            fill
            className="object-cover w-full h-[400px]"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl xl:text-7xl text-white font-bold">
              Nelp Univôlei
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}