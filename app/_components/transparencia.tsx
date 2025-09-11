/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useRef } from "react";
import { FileText, Download, Calendar, Building, Award, Users, TrendingUp, Shield, Eye, Crown, DollarSign, ClipboardList } from "lucide-react";

export default function TransparenciaAdmin() {
  const [activeTab, setActiveTab] = useState('institucional');
  const organogramaRef = useRef<HTMLDivElement>(null);

  const uniformesBlocks = [
    {
      id: 1,
      title: 'Uniforme Branco 2023-2024',
      description: 'Uniforme oficial para jogos em casa',
      url: 'https://drive.google.com/file/d/1mN_DNS01QSI-oJGOmuFgljufhRO8EAdF/view',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Uniforme Preto 2023-2024',
      description: 'Uniforme oficial para jogos fora de casa',
      url: 'https://drive.google.com/file/d/1OcuYfMeCh_oeY9HVaguaWj7WFeQj8eOv/view',
      icon: <FileText className="w-6 h-6" />,
    },
    
  ];

  const institucionalBlocks = [
    {
      id: 1,
      title: 'Estatuto Social',
      description: 'Documento fundador que estabelece as regras, objetivos e estrutura organizacional da NELP Univôlei',
      url: 'https://drive.google.com/file/d/1ezlGXPpgeCZZ_NmwAHpv7H8V5jAynTNa/view',
      icon: <Building className="w-6 h-6" />,
      category: 'Governança'
    },
    {
      id: 2,
      title: 'Estatuto Social Alteração 2025',
      description: 'Documento fundador que estabelece as regras, objetivos e estrutura organizacional da NELP Univôlei',
      url: 'https://drive.google.com/file/d/1rHbrS8hppl720FWBsHwP6GqvYLfs-tYM/view',
      icon: <Building className="w-6 h-6" />,
      category: 'Governança'
    },
    {
      id: 3,
      title: 'Ata Homologação 2024-2026',
      description: 'Ata de homologação da diretoria eleita para o período 2024-2026',
      url: 'https://drive.google.com/file/d/1be5AbvFbQh-cgof2-m23rNRdSuJu6LZh/view',
      icon: <FileText className="w-6 h-6" />,
      category: 'Eleições'
    }, 
    {
      id: 4,
      title: 'Modelo Parecer Fiscal 2024',
      description: 'Modelo de parecer fiscal para o ano de 2024',
      url: 'https://drive.google.com/file/d/1HsRo00oqQ-eJj-i5NR8ZqJuouVGgf13-/view',
      icon: <TrendingUp className="w-6 h-6" />,
      category: 'Fiscal'
    },
    {
      id: 5,
      title: 'Modelo Parecer Fiscal 2023',
      description: 'Modelo de parecer fiscal para o ano de 2023',
      url: 'https://drive.google.com/file/d/1HsRo00oqQ-eJj-i5NR8ZqJuouVGgf13-/view',
      icon: <TrendingUp className="w-6 h-6" />,
      category: 'Fiscal'
    },
    {
      id: 6,
      title: 'Modelo Parecer Fiscal 2022',
      description: 'Modelo de parecer fiscal para o ano de 2022',
      url: 'https://drive.google.com/file/d/1HsRo00oqQ-eJj-i5NR8ZqJuouVGgf13-/view',
      icon: <TrendingUp className="w-6 h-6" />,
      category: 'Fiscal'
    },
    {
      id: 7,
      title: 'Edital Para Eleição',
      description: 'Edital de convocação para eleição da diretoria',
      url: 'https://drive.google.com/file/d/1BLgYbRKIc7gIc27i1rIUqvYwIy25mlvm/view',
      icon: <Calendar className="w-6 h-6" />,
      category: 'Eleições'
    }, 
    {
      id: 8,
      title: 'Registro de Frêquencia Albertina Salmon',
      description: 'Registro de frequência da participante Albertina Salmon',
      url: 'https://drive.google.com/file/d/1yfvfsxEx9YfWRtFWDEDiBi2x06Z6-oAK/view',
      icon: <Users className="w-6 h-6" />,
      category: 'Frequência'
    }, 
    {
      id: 9,
      title: 'Registro de Frêquencia João Helio Alves',
      description: 'Registro de frequência do participante João Helio Alves',
      url: 'https://drive.google.com/file/d/1xYty7GUskIg1MUKMEyiRRIuV_Yqed-Yv/view',
      icon: <Users className="w-6 h-6" />,
      category: 'Frequência'
    }, 
  ];

  const prestacaoContasBlocks = [
    
    {
      id: 1,
      title: 'Ata Prestação de Contas 2023-2024',
      description: 'Prestação de contas 2023-2024',
      url: 'https://drive.google.com/file/d/1znrPGVEalpFm7i72kaDGbh1cgccqopO5/view',
      icon: <TrendingUp className="w-6 h-6" />,
      category: 'Financeiro'
    },
    {
      id: 2,
      title: 'Balanço DRE - 2023',
      description: 'Demonstração do resultado do exercício 2023',
      url: 'https://drive.google.com/file/d/18rJB-iYpvg265j4A68DVucScGE4gOxTz/view',
      icon: <TrendingUp className="w-6 h-6" />,
      category: 'Financeiro'
    },
    {
      id: 3,
      title: 'Balanço DRE - 2024',
      description: 'Demonstração do resultado do exercício 2024',
      url: 'https://drive.google.com/file/d/1xx49eTGDf92D0krfcVvP4_pJ7QsIC-TZ/view',
      icon: <TrendingUp className="w-6 h-6" />,
      category: 'Financeiro'
    },
    
  ];

     const certificacoesBlocks = [
      {
       id: 1,
       title: 'Certificado ISO 9001',
       
       description: 'Certificação de qualidade',
       url: '#',
       icon: <Award className="w-6 h-6" />,
       category: 'Certificações'
     },
     {
       id: 2,
       title: 'Certificado de Sustentabilidade',
       description: 'Compromisso com práticas sustentáveis',
       url: '#',
       icon: <Award className="w-6 h-6" />,
       category: 'Certificações'
     },
     {
       id: 3,
       title: 'Certificado de Qualidade 2022',
       description: 'Reconhecimento de qualidade',
       url: '#',
       icon: <Award className="w-6 h-6" />,
       category: 'Certificações'
     }, 
   ];

     const projetosIncentivadosBlocks = [
    {
      id: 1,
      title: 'Projeto Cultural 2022',
      description: 'Iniciativas culturais desenvolvidas',
      url: '#',
      icon: <Users className="w-6 h-6" />,
      category: 'Projetos'
    },
    {
      id: 2,
      title: 'Projeto Esportivo Infantil',
      description: 'Projetos voltados para crianças',
      url: '#',
      icon: <Users className="w-6 h-6" />,
      category: 'Projetos'
    },
    {
      id: 3,
      title: 'Iniciativa de Educação 2022',
      description: 'Programas educacionais',
      url: '#',
      icon: <Users className="w-6 h-6" />,
      category: 'Projetos'
    }, 
   ];

  // Dados do organograma
  const organogramaData = {
    presidencia: [
      {
        name: 'Geórgia da Cunha Ben',
        role: 'Presidente',
        avatar: '/avatar_fem.png',
        icon: <Crown className="w-5 h-5" />
      },
      {
        name: 'Selma de Oliveira de Souza Gonçalves',
        role: 'Vice Presidente',
        avatar: '/avatar_fem.png',
        icon: <Crown className="w-5 h-5" />
      }
    ],
    tesouraria: [
      {
        name: 'Juliana de Paula Barbosa',
        role: 'Tesoureira',
        avatar: '/avatar_fem.png',
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        name: 'Simone do Pilar Cardozo',
        role: 'Vice Tesoureira',
        avatar: '/avatar_fem.png',
        icon: <DollarSign className="w-5 h-5" />
      }
    ],
    secretaria: [
      {
        name: 'Scheila Nunes dos Santos',
        role: '1º Secretária',
        avatar: '/avatar_fem.png',
        icon: <ClipboardList className="w-5 h-5" />
      },
      {
        name: 'Adrielle Cristina Geraldo Coelho',
        role: '2º Secretária',
        avatar: '/avatar_fem.png',
        icon: <ClipboardList className="w-5 h-5" />
      }
    ],
    conselhoFiscal: [
      {
        name: 'Adriano Correa Pires',
        role: 'Conselho Fiscal',
        avatar: '/avatar_masc.png',
        icon: <Shield className="w-5 h-5" />
      },
      {
        name: 'Josemara Bernardo Capeti',
        role: 'Conselho Fiscal',
        avatar: '/avatar_fem.png',
        icon: <Shield className="w-5 h-5" />
      }
    ]
  };

  const downloadOrganogramaPDF = async () => {
    if (!organogramaRef.current) return;

    try {
      // Importar libs apenas no cliente, sob demanda
      const jsPDFModule = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;

      // Criar canvas do organograma
      const canvas = await html2canvas(organogramaRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Criar PDF
      const imgData = canvas.toDataURL('image/png');
      const PDFClass = (jsPDFModule as any).jsPDF ?? jsPDFModule.default;
      const pdf = new PDFClass('p', 'mm', 'a4');
      
      // Calcular dimensões para ajustar a imagem ao PDF
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Adicionar primeira página
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Adicionar páginas adicionais se necessário
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Baixar o PDF
      pdf.save('organograma-nelp-univolei.pdf');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar o PDF. Tente novamente.');
    }
  };

  const tabs = [
    { id: 'institucional', label: 'Institucional', icon: <Building className="w-5 h-5" /> },
    { id: 'financeiro', label: 'Financeiro', icon: <TrendingUp className="w-5 h-5" /> },
    // { id: 'certificacoes', label: 'Certificações', icon: <Award className="w-5 h-5" /> },
    // { id: 'projetos', label: 'Projetos', icon: <Users className="w-5 h-5" /> },
    { id: 'organograma', label: 'Organograma', icon: <Users className="w-5 h-5" /> },
    { id: 'uniformes', label: 'Uniformes', icon: <FileText className="w-5 h-5" /> },
  ];

  const getBlocksByTab = (tab: string) => {
    switch (tab) {
      case 'institucional':
        return institucionalBlocks;
      case 'financeiro':
        return prestacaoContasBlocks;
      // case 'certificacoes':
      //   return certificacoesBlocks;
      // case 'projetos':
      //   return projetosIncentivadosBlocks;
      case 'uniformes':
        return uniformesBlocks;
      default:
        return institucionalBlocks;
    }
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      const target = e.target;
      if (target.tagName === 'A' && target.hash) {
        const section = document.querySelector(target.hash);
        if (section) {
          e.preventDefault();
          const rect = section.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const offset = rect.top + scrollTop - 100;
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }
      }
    };
    const header = document.getElementById('transparencia-header');
    if (header) {
      header.addEventListener('click', handleClick);
    }
    return () => {
      if (header) {
        header.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full mb-6">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portal de Transparência
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compromisso com a transparência e prestação de contas. 
            Aqui você encontra todos os documentos e informações sobre nossa gestão.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-12">
          <nav className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {activeTab === 'institucional' && (
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentos Institucionais</h2>
                <p className="text-gray-600">Documentos fundamentais que regem nossa organização</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {institucionalBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3">
                        {block.icon}
                      </div>
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {block.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{block.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{block.description}</p>
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      Baixar Documento
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'financeiro' && (
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Prestação de Contas</h2>
                <p className="text-gray-600">Relatórios financeiros e demonstrações contábeis</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prestacaoContasBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-3">
                        {block.icon}
                      </div>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {block.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{block.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{block.description}</p>
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      Baixar Relatório
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* {activeTab === 'certificacoes' && (
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificações</h2>
                <p className="text-gray-600">Certificados e reconhecimentos de qualidade</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificacoesBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-3">
                        {block.icon}
                      </div>
                      <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                        {block.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{block.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{block.description}</p>
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-800 font-medium transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      Baixar Certificado
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )} */}

          {/* {activeTab === 'projetos' && (
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos Incentivados</h2>
                <p className="text-gray-600">Projetos desenvolvidos com recursos incentivados</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetosIncentivadosBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-3">
                        {block.icon}
                      </div>
                      <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                        {block.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{block.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{block.description}</p>
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      Baixar Projeto
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )} */}

          {activeTab === 'organograma' && (
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Estrutura Organizacional</h2>
                <p className="text-gray-600">Conheça nossa equipe e estrutura de gestão</p>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl mx-auto">
                  <p className="text-blue-800 font-medium">
                    <span className="font-bold">Importante:</span> A diretoria da NELP UNIVOLEI não recebe remuneração. 
                    Todos os membros atuam de forma voluntária e dedicada ao desenvolvimento do voleibol.
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={downloadOrganogramaPDF}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5" />
                    Baixar Organograma em PDF
                  </button>
                </div>
              </div>
              
              <div ref={organogramaRef} className="space-y-12">
                {/* Presidência */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-3">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Presidência</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {organogramaData.presidencia.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200"
                      >
                        <div className="relative">
                          <img
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                            src={member.avatar}
                            alt={member.name}
                          />
                          <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-1">
                            {member.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-yellow-700 font-medium">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tesouraria */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-3">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Tesouraria</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {organogramaData.tesouraria.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200"
                      >
                        <div className="relative">
                          <img
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                            src={member.avatar}
                            alt={member.name}
                          />
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                            {member.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-green-700 font-medium">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secretaria */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3">
                      <ClipboardList className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Secretaria</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {organogramaData.secretaria.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200"
                      >
                        <div className="relative">
                          <img
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                            src={member.avatar}
                            alt={member.name}
                          />
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                            {member.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-blue-700 font-medium">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conselho Fiscal */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Conselho Fiscal</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {organogramaData.conselhoFiscal.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200"
                      >
                        <div className="relative">
                          <img
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                            src={member.avatar}
                            alt={member.name}
                          />
                          <div className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full p-1">
                            {member.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-purple-700 font-medium">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'uniformes' && (
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Uniformes</h2>
                <p className="text-gray-600">Especificações e informações sobre uniformes oficiais</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {uniformesBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-3">
                        {block.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{block.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 text-center">{block.description}</p>
                    <div className="text-center">
                      <a
                        href={block.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
                      >
                        <Download className="w-4 h-4" />
                        Baixar Especificação
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compromisso com a Transparência</h3>
            <p className="text-gray-600 mb-6">
              A NELP Univôlei mantém total transparência em suas ações, disponibilizando 
              todos os documentos e informações para consulta pública.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Documentos Atualizados</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Acesso Público</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Formato Padrão</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}