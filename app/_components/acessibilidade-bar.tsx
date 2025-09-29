'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FiEye, FiPlus, FiMinus, FiRefreshCw, FiX, FiMoon } from 'react-icons/fi';
import { ImBrightnessContrast } from 'react-icons/im';
import { IoIosContrast } from 'react-icons/io';
import { MdOutlineSubtitles } from 'react-icons/md';

const STORAGE_KEY = 'acessibilidade';

const getInitialState = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  }
  return { fontSize: 100, monochrome: false, invertColors: false, darkContrast: false, brightContrast: false, underlineTitles: false };
};

const AcessibilidadeBar = () => {
  const [fontSize, setFontSize] = useState(100);
  const [monochrome, setMonochrome] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [darkContrast, setDarkContrast] = useState(false);
  const [brightContrast, setBrightContrast] = useState(false);
  const [underlineTitles, setUnderlineTitles] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Carregar preferências salvas
  useEffect(() => {
    const initial = getInitialState();
    setFontSize(initial.fontSize);
    setMonochrome(initial.monochrome);
    setInvertColors(initial.invertColors);
    setDarkContrast(initial.darkContrast);
    setBrightContrast(initial.brightContrast);
    setUnderlineTitles(initial.underlineTitles);
  }, []);

  // Aplicar estilos de fonte
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  // Aplicar modo preto e branco
  useEffect(() => {
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
      (contentContainer as HTMLElement).style.filter = monochrome ? 'grayscale(100%)' : 'none';
    }
  }, [monochrome]);

  // Aplicar cores invertidas
  useEffect(() => {
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
      (contentContainer as HTMLElement).style.filter = invertColors
        ? `invert(100%) ${monochrome ? 'grayscale(100%)' : ''}`
        : monochrome
          ? 'grayscale(100%)'
          : 'none';
    }
  }, [invertColors, monochrome]);

  // Aplicar contraste escuro
  useEffect(() => {
    if (darkContrast) {
      document.body.classList.add('dark-contrast');
      document.body.classList.remove('bright-contrast');
      setBrightContrast(false);
    } else {
      document.body.classList.remove('dark-contrast');
    }
  }, [darkContrast]);

  // Aplicar contraste brilhante
  useEffect(() => {
    if (brightContrast) {
      document.body.classList.add('bright-contrast');
      document.body.classList.remove('dark-contrast');
      setDarkContrast(false);
    } else {
      document.body.classList.remove('bright-contrast');
    }
  }, [brightContrast]);

  // Aplicar sublinhado em títulos
  useEffect(() => {
    document.querySelectorAll('h1, h2, h3').forEach((el) => {
      (el as HTMLElement).style.textDecoration = underlineTitles ? 'underline' : 'none';
    });
  }, [underlineTitles]);

  // Salvar preferências
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      fontSize,
      monochrome,
      invertColors,
      darkContrast,
      brightContrast,
      underlineTitles,
    }));
  }, [fontSize, monochrome, invertColors, darkContrast, brightContrast, underlineTitles]);

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

  // Resetar todas as configurações
  const resetAccessibility = () => {
    window.location.reload();
  };

  return (
    <div className="fixed top-32 right-6 z-50 flex flex-col items-start">
      {/* Botão flutuante */}
      <button
        aria-label="Abrir opções de acessibilidade"
        className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
        onClick={() => setOpen((o) => !o)}
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
      >
        <FiEye size={32} />
      </button>

      {/* Painel de opções */}
      {open && (
        <div
          ref={panelRef}
          className="mt-2 bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 animate-fade-in w-64 relative border border-gray-200"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <button
            aria-label="Fechar painel de acessibilidade"
            className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            onClick={() => setOpen(false)}
          >
            <FiX size={18} />
          </button>
          <span className="font-bold mb-2 text-sm text-gray-700">Acessibilidade</span>
          <div className="flex gap-2 w-full justify-center flex-wrap">
            <button
              title="Aumentar fonte"
              aria-label="Aumentar fonte"
              onClick={() => setFontSize(fontSize + 10)}
              className="p-2 bg-gray-100 rounded hover:bg-yellow-200 border"
            >
              <FiPlus size={18} />
            </button>
            <button
              title="Diminuir fonte"
              aria-label="Diminuir fonte"
              onClick={() => setFontSize(Math.max(50, fontSize - 10))}
              className="p-2 bg-gray-100 rounded hover:bg-yellow-200 border"
            >
              <FiMinus size={18} />
            </button>
            <button
              title={monochrome ? 'Desativar modo preto e branco' : 'Ativar modo preto e branco'}
              aria-label="Alternar modo preto e branco"
              onClick={() => setMonochrome(!monochrome)}
              className={`p-2 rounded border ${monochrome ? 'bg-yellow-300 border-yellow-400' : 'bg-gray-100 hover:bg-yellow-200'}`}
            >
              <ImBrightnessContrast size={18} />
            </button>
            <button
              title={invertColors ? 'Desativar cores invertidas' : 'Ativar cores invertidas'}
              aria-label="Alternar cores invertidas"
              onClick={() => setInvertColors(!invertColors)}
              className={`p-2 rounded border ${invertColors ? 'bg-yellow-300 border-yellow-400' : 'bg-gray-100 hover:bg-yellow-200'}`}
            >
              <IoIosContrast size={18} />
            </button>
            <button
              title={darkContrast ? 'Desativar contraste escuro' : 'Ativar contraste escuro'}
              aria-label="Alternar contraste escuro"
              onClick={() => {
                setDarkContrast(!darkContrast);
                if (!darkContrast && brightContrast) setBrightContrast(false);
              }}
              className={`p-2 rounded border ${darkContrast ? 'bg-yellow-300 border-yellow-400' : 'bg-gray-100 hover:bg-yellow-200'}`}
            >
              <FiMoon size={18} />
            </button>
            <button
              title={underlineTitles ? 'Desativar sublinhado de títulos' : 'Ativar sublinhado de títulos'}
              aria-label="Alternar sublinhado de títulos"
              onClick={() => setUnderlineTitles(!underlineTitles)}
              className={`p-2 rounded border ${underlineTitles ? 'bg-yellow-300 border-yellow-400' : 'bg-gray-100 hover:bg-yellow-200'}`}
            >
              <MdOutlineSubtitles size={18} />
            </button>
            <button
              title="Resetar acessibilidade"
              aria-label="Resetar acessibilidade"
              onClick={resetAccessibility}
              className="p-2 bg-gray-100 rounded hover:bg-yellow-200 border"
            >
              <FiRefreshCw size={18} />
            </button>
          </div>
          <div className="flex flex-col gap-1 mt-2 text-xs text-gray-500">
            <span><FiPlus className="inline mr-1" />Aumentar fonte</span>
            <span><FiMinus className="inline mr-1" />Diminuir fonte</span>
            <span><ImBrightnessContrast className="inline mr-1" />Modo preto e branco</span>
            <span><IoIosContrast className="inline mr-1" />Cores invertidas</span>
            <span><FiMoon className="inline mr-1" />Contraste escuro</span>
            <span><MdOutlineSubtitles className="inline mr-1" />Sublinhar títulos</span>
            <span><FiRefreshCw className="inline mr-1" />Resetar</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcessibilidadeBar;