'use client';

import Image from 'next/image';
import { Header } from './header';
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <section className="relative h-[420px] flex items-center justify-center">
          <Image
            src="/"
            alt="Background"
            fill
            className="object-cover w-full h-[400px]"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10 text-center">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Nelp Univôlei</h2>
                    <p className="mt-4">Faça Parte Você Também!</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/">
                                <span>Ver Galeria</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/">
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
