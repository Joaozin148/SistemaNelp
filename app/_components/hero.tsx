'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden pt-[76px] ">
        <section className="relative h-[300px] flex items-center justify-center">
          <Image
            src="/banner.png"
            alt="Background"
            fill
            className="object-cover w-full h-[420px]"
            priority
          />
          <div className="absolute inset-0 bg-white z-0" />
          <div className="relative z-10 text-center">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-black  text-4xl font-semibold lg:text-5xl">Nelp Univôlei</h2>
                    <p className="mt-4 text-black ">Faça Parte Você Também!</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/projetos">
                                <span>Ver Projetos</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="#contato">
                                <span>Quero fazer Parte</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
