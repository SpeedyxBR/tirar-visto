import { ArrowRightIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Quem somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <section id="home" className="relative w-full bg-white py-8 md:py-16">
      {/* Navigation */}
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-8 md:gap-10">
          <img
            src="/logo-1.png"
            alt="Logo Tirar Visto"
            className="w-[140px] h-[40px] object-contain rounded-lg bg-white"
          />
          <div className="hidden md:flex gap-8 md:gap-10 ml-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#222223] font-medium hover:text-[#1b2543] hover:underline transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#222223] font-medium hover:text-[#1b2543] hover:underline transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-center max-w-6xl mx-auto px-6 gap-10 mt-16">
        {/* Lado Esquerdo */}
        <div className="flex-1 flex flex-col w-full z-10">
          {/* Logo + Título */}
          <div className="flex items-center gap-8 mb-6 mt-2">
            <img
              src="/logo-1.png"
              alt="Logo Tirar Visto"
              className="w-[70px] h-[70px] object-contain rounded-lg bg-white hidden md:block"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-[#222223] text-left font-['Inter',Helvetica]">
              Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
            </h1>
          </div>

          <p className="text-gray-500 text-base md:text-lg mt-4 max-w-[400px]">
            Com uma equipe altamente treinada, nós temos todos os procedimentos
            para que seu processo seja o mais tranquilo e rápido. Uma
            consultoria completa para você e sua família não ter nenhuma
            preocupação na sua viagem.
          </p>

          {/* Linha com botão e imagem da Bruna */}
          <div className="flex items-center space-x-4 mt-6">
            <Button className="bg-[#0a0f2c] text-white rounded-full py-3 px-6 flex items-center gap-2 font-semibold">
              Saiba mais
              <ArrowRightIcon className="w-5 h-5 text-white" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative w-[180px] h-[130px] rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="/cleanshot-2025-05-08-at-14-28-22-2x.png"
                  alt="Conheça a Bruna"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-[#1b2543] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  ATENDIMENTO
                </span>
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-[120px] space-y-1">
                <span className="font-semibold text-[#222223] text-base md:text-lg">
                  Conheça a Bruna
                </span>
                <span className="text-sm text-gray-400">Ver vídeo</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0f2c] mt-2">
                  <ArrowRightIcon className="w-5 h-5 text-white" />
                </span>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="flex flex-row space-x-10 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#222223]">509</span>
              <span className="text-sm text-gray-500">Vistos Tirados</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#222223]">602</span>
              <span className="text-sm text-gray-500">Passaportes Tirados</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#222223]">634</span>
              <span className="text-sm text-gray-500">Famílias Felizes</span>
            </div>
          </div>
        </div>

        {/* Lado Direito */}
        <div className="flex-1 w-full flex items-start justify-center mt-10 lg:mt-0">
          <div
            className="relative w-full max-w-[1000px] h-[350px] md:aspect-[16/9] md:min-h-[700px] rounded-3xl overflow-hidden bg-cover bg-center flex flex-col justify-between"
            style={{ backgroundImage: "url('/frame-36920.png')" }}
          >
            {/* Botão no topo direito */}
            <div className="absolute top-0 right-0 p-4 md:p-6 z-10">
              <Button className="bg-[#f6c010] text-[#282828] hover:bg-[#f6c010]/90 rounded-full font-semibold shadow-md">
                Tirar meu visto agora!
              </Button>
            </div>
            {/* Texto no canto inferior esquerdo */}
            <div className="absolute bottom-0 left-0 p-4 md:p-8 z-10 w-full max-w-[90%] flex flex-col items-start">
              <h1 className="font-semibold text-white text-[22px] md:text-[36px] lg:text-[40px] tracking-[-0.5px] md:tracking-[-0.88px] leading-[32px] md:leading-[48px] font-['Inter',Helvetica] mb-2">
                Realize o seu sonho com a ajuda da Tirar Visto!
              </h1>
              <p className="text-white text-xs md:text-base tracking-[-0.2px] md:tracking-[-0.32px] leading-[18px] md:leading-[20.9px] font-['Inter',Helvetica]">
                Com um serviço profissional, você não terá dor de cabeça para
                todo o processo do visto e entrevistas no consulado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
