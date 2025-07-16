import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 text-sm">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-around mb-4">
          <div className="mb-4 md:mb-0">
            <strong className="text-white">Horário de Funcionamento:</strong><br />
            Seg a Sex: 08h às 22h<br />
            Sáb: 08h às 18h
          </div>
          <div className="mb-4 md:mb-0">
            <strong className="text-white">Contato:</strong><br />
            E-mail: contato@associacaovolei.com.br<br />
            Telefone: (11) 99999-0000<br />
            WhatsApp: (11) 98888-0000
          </div>
          <div>
            <strong className="text-white">Endereço:</strong><br />
            Rua Exemplo, 123 - Centro<br />
            Cidade/UF - CEP 00000-000
          </div>
        </div>
        <hr className="border-gray-700 mb-2" />
        <p className="text-center text-gray-400 text-xs">
          © 2024 Associação de Vôlei - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
