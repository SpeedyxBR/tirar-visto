import { ArrowRightIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Quem somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  const stats = [
    { count: "509", label: "Vistos Tirados" },
    { count: "602", label: "Passaportes Tirados" },
    { count: "634", label: "Famílias Felizes" },
  ];

  return (
    <section id="home" className="relative w-full bg-white py-8 md:py-16">
      {/* Navigation */}
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="w-[140px] h-[40px] bg-[url(/logo-1.png)] bg-cover bg-center" />

        <div className="hidden md:flex gap-10">
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

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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
      <div className="flex flex-col max-w-3xl mx-auto px-6">
        <div className="flex flex-col gap-6 mb-10">
          <h1 className="font-['Inter',Helvetica] font-semibold text-[#222223] text-[30px] md:text-[54px] leading-tight">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
          <img
            className="w-[200px] md:w-[538px] h-[2px]"
            alt="Vector"
            src="/vector-51.svg"
          />
        </div>

   {/* Video Card abaixo do texto */}
<div className="flex justify-center my-8">
  <Card className="w-[300px] md:w-[360px] rounded-[20px] overflow-hidden shadow-lg">
    <img
      className="w-full h-[200px] md:h-[240px] object-cover"
      alt="Cleanshot"
      src="/cleanshot-2025-05-08-at-14-28-22-2x.png"
    />
    <CardContent className="p-5">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-[#222223] text-lg md:text-xl">
            Conheça a Bruna
          </h3>
          <p className="text-[#8d8d8d] text-sm">Ver vídeo</p>
        </div>
        <Button className="w-10 h-10 p-0 flex items-center justify-center bg-[#1b2543] hover:bg-[#263472] rounded-full border border-black">
          <ArrowRightIcon className="w-6 h-6 text-white" />
        </Button>
      </div>
    </CardContent>
  </Card>
</div>
        {/* Description e CTA */}
        <div className="flex flex-col max-w-sm gap-6 mb-10">
          <p className="text-[#8d8d8d] text-sm md:text-base leading-relaxed">
            Com uma equipe altamente treinada, nós temos todos os procedimentos
            para que seu processo seja o mais tranquilo e rápido.
            <br />
            Uma consultoria completa para você e sua família não ter nenhuma
            preocupação na sua viagem.
          </p>

          <Button className="h-[50px] md:h-[54px] bg-[#1b2543] hover:bg-[#263472] transition rounded-[40px] px-5">
            <span className="font-semibold text-white text-sm md:text-base">
              Saiba mais
            </span>
            <ArrowRightIcon className="ml-3 w-5 h-5 md:w-6 md:h-6 text-white" />
          </Button>
        </div>

        {/* Statistics */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-[100px] md:mt-[180px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index !== stats.length - 1
                  ? "md:border-r md:pr-16 border-neutral-200"
                  : ""
              }`}
            >
              <div className="text-[#222223] font-bold text-[40px] md:text-[54px]">
                {stat.count}
              </div>
              <div className="text-[#8d8d8d] text-center text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
