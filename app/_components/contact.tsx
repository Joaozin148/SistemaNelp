/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Textarea } from "@/app/_components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Fale Conosco",
  description = "Estamos disponíveis para dúvidas, sugestões ou oportunidades de parceria. Conte com a gente!",
  phone = "(41) 99510-9690",
  email = "nelpunivolei@gmail.com",
}: Contact2Props) => {
  return (
    <section
      id="contato"
      className="relative py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/maps.png.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-36 flex flex-col sm:flex-row justify-between gap-10 items-center">
          {/* Texto + Imagem */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
            {/* Coluna da esquerda: texto de apresentação e contatos */}
            <div className="flex flex-col gap-4 max-w-sm w-full text-left">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h7.79a2 2 0 011.42.59l2.2 2.2a1 1 0 001.7-.7v-2.09a2 2 0 00.59-1.41z"
                  />
                </svg>
                <h1 className="text-2xl sm:text-4xl font-bold text-white drop-shadow">{title}</h1>
              </div>
              <p className="text-gray-200 text-sm sm:text-lg font-light max-w-xs">{description}</p>
              <div>
                <h3 className="mb-2 text-lg sm:text-xl font-semibold text-yellow-400">Contatos</h3>
                <ul className="ml-4 list-disc text-sm sm:text-base text-white">
                  <li>
                    <span className="font-bold">Telefone: </span>
                    <a
                      href={`tel:${phone}`}
                      className="underline font-bold text-yellow-300 hover:text-yellow-400 transition"
                    >
                      {phone}
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>
                    <a
                      href={`mailto:${email}`}
                      className="underline font-bold text-yellow-300 hover:text-yellow-400 transition"
                    >
                      {email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Coluna da direita: formulário com menina */}
            <div className="flex-1 flex items-center justify-end w-full relative">
              <div className="relative w-full max-w-md sm:max-w-md">
                <form className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-yellow-400 p-4 sm:p-6 flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="grid w-full items-center gap-1.5">
                      <Label className="text-yellow-400 text-sm sm:text-base" htmlFor="firstname">
                        Nome
                      </Label>
                      <Input
                        type="text"
                        id="firstname"
                        placeholder="Digite seu nome"
                        className="bg-white/80 text-sm sm:text-base"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label className="text-yellow-400 text-sm sm:text-base" htmlFor="lastname">
                        Sobrenome
                      </Label>
                      <Input
                        type="text"
                        id="lastname"
                        placeholder="Digite seu sobrenome"
                        className="bg-white/80 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label className="text-yellow-400 text-sm sm:text-base" htmlFor="email">
                      E-mail
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Digite seu e-mail"
                      className="bg-white/80 text-sm sm:text-base"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label className="text-yellow-400 text-sm sm:text-base" htmlFor="phone">
                      Telefone
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Informe seu Telefone"
                      className="bg-white/80 text-sm sm:text-base"
                    />
                  </div>
                  <div className="grid w-full gap-1.5">
                    <Label className="text-yellow-400 text-sm sm:text-base" htmlFor="message">
                      Mensagem
                    </Label>
                    <Textarea
                      placeholder="Digite sua mensagem aqui."
                      id="message"
                      className="bg-white/80 text-sm sm:text-base h-24"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-700 text-black font-bold text-sm sm:text-lg py-2 sm:py-3 rounded-xl shadow hover:from-yellow-500 hover:to-blue-800 transition">
                    Enviar Mensagem
                  </Button>
                </form>
                <img
                  src="/mulher2.png"
                  alt="Volleyball Girl"
                  className="absolute -right-4 sm:-right-16 bottom-0 h-46 sm:h-full w-40 sm:w-40 drop-shadow-xl pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};