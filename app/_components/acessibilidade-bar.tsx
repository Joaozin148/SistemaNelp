'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FiEye, FiPlus, FiMinus, FiRefreshCw, FiMoon, FiSun, FiX } from 'react-icons/fi';

const STORAGE_KEY = 'acessibilidade';

const getInitialState = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  }
  return { fonte: 1, contraste: false };
};

const AcessibilidadeBar = () => {
  const [fonte, setFonte] = useState(1);
  const [contraste, setContraste] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Carregar preferências salvas
  useEffect(() => {
    const initial = getInitialState();
    setFonte(initial.fonte);
    setContraste(initial.contraste);
  }, []);

  // Aplicar estilos e salvar preferências
  useEffect(() => {
    // Alterar fonte no elemento html
    document.documentElement.style.fontSize = `${fonte}em`;
    if (contraste) {
      document.body.classList.add('contraste-alto');
    } else {
      document.body.classList.remove('contraste-alto');
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ fonte, contraste }));
  }, [fonte, contraste]);

  // Fechar painel ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {/* Botão flutuante */}
      <button
        aria-label="Abrir opções de acessibilidade"
        className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
        onClick={() => setOpen(o => !o)}
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
      >
        <FiEye size={40} />
      </button>

      {/* Painel de opções */}
      {open && (
        <div
          ref={panelRef}
          className="mt-2 bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 animate-fade-in w-56 relative border border-gray-200"
          onMouseDown={e => e.stopPropagation()} // Impede que clique dentro do painel feche ele
        >
          <button
            aria-label="Fechar painel de acessibilidade"
            className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            onClick={() => setOpen(false)}
          >
            <FiX size={18} />
          </button>
          <span className="font-bold mb-2 text-sm text-gray-700">Acessibilidade</span>
          <div className="flex gap-2 w-full justify-center">
            <button
              title="Aumentar fonte"
              aria-label="Aumentar fonte"
              onClick={e => { e.stopPropagation(); setFonte(f => Math.min(f + 0.1, 2)); }}
              className="p-2 bg-gray-100 rounded hover:bg-yellow-200 border"
            >
              <FiPlus size={18} />
            </button>
            <button
              title="Diminuir fonte"
              aria-label="Diminuir fonte"
              onClick={e => { e.stopPropagation(); setFonte(f => Math.max(f - 0.1, 0.8)); }}
              className="p-2 bg-gray-100 rounded hover:bg-yellow-200 border"
            >
              <FiMinus size={18} />
            </button>
            <button
              title={contraste ? 'Desativar contraste alto' : 'Ativar contraste alto'}
              aria-label="Alternar contraste alto"
              onClick={e => { e.stopPropagation(); setContraste(c => !c); }}
              className={`p-2 rounded border ${contraste ? 'bg-yellow-300 border-yellow-400' : 'bg-gray-100 hover:bg-yellow-200'}`}
            >
              {contraste ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              title="Resetar acessibilidade"
              aria-label="Resetar acessibilidade"
              onClick={e => { e.stopPropagation(); setFonte(1); setContraste(false); }}
              className="p-2 bg-gray-100 rounded hover:bg-yellow-200 border"
            >
              <FiRefreshCw size={18} />
            </button>
          </div>
          <div className="flex flex-col gap-1 mt-2 text-xs text-gray-500">
            <span><FiPlus className="inline mr-1" />Aumentar fonte</span>
            <span><FiMinus className="inline mr-1" />Diminuir fonte</span>
            <span><FiMoon className="inline mr-1" />Contraste alto</span>
            <span><FiRefreshCw className="inline mr-1" />Resetar</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcessibilidadeBar; 