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
  phone = "(11) 98765-4321",
  email = "contato@nelp.com.br",
}: Contact2Props) => {
  return (
    <section id="contato" className="py-12">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row">
          {/* Texto + Contatos + Imagem */}
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="flex flex-col gap-6 max-w-sm text-center lg:text-left">
              <h1 className="text-5xl font-semibold">{title}</h1>
              <p className="text-muted-foreground">{description}</p>

              <div>
                <h3 className="mb-4 text-2xl pt-32 font-semibold">Contatos</h3>
                <ul className="ml-4 list-disc">
                  <li>
                    <span className="font-bold">Telefone: </span>
                    <a href={`tel:${phone}`} className="underline font-bold text-yellow-400">
                      {phone}
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>
                    <a href={`mailto:${email}`} className="underline font-bold text-yellow-400">
                      {email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Imagem */}
            <div className="flex items-center justify-center">
              <img src="/pngwing.png" alt="Volleyball Girl" className="w-40 lg:w-48" />
            </div>
          </div>

          {/* Formulário */}
          <div className="flex max-w-md bg-black/85 flex-col gap-6 rounded-lg border p-10 mx-auto">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label className="text-yellow-400" htmlFor="firstname">Nome</Label>
                <Input type="text" id="firstname" placeholder="Digite seu nome" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label className="text-yellow-400" htmlFor="lastname">Sobrenome</Label>
                <Input type="text" id="lastname" placeholder="Digite seu sobrenome" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-yellow-400" htmlFor="email">E-mail</Label>
              <Input type="email" id="email" placeholder="Digite seu e-mail" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-yellow-400" htmlFor="phone">Telefone</Label>
              <Input type="tel" id="phone" placeholder="Informe seu Telefone" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label className="text-yellow-400" htmlFor="message">Mensagem</Label>
              <Textarea placeholder="Digite sua mensagem aqui." id="message" />
            </div>
            <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
