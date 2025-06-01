import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "Home", active: true },
    { name: "Quem somos", active: false },
    { name: "Serviços", active: false },
    { name: "Contato", active: false },
  ];

  // Statistics data
  const stats = [
    { count: "509", label: "Vistos Tirados", hasBorder: true },
    { count: "602", label: "Passaportes Tirados", hasBorder: true },
    { count: "634", label: "Famílias Felizes", hasBorder: false },
  ];

  return (
    <section className="relative w-full bg-white py-16">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between mx-auto max-w-5xl px-4 mb-16">
        <div className="w-[152px] h-[42px] bg-[url(/logo-1.png)] bg-cover bg-[50%_50%]" />

        <div className="flex items-center gap-1">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex h-11 items-center justify-center px-3 py-2.5"
            >
              <div
                className={`font-['Inter',Helvetica] text-[#222223] text-base leading-[20.9px] ${item.active ? "font-bold" : "font-normal"}`}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col max-w-3xl mx-auto">
        {/* Headline and Description */}
        <div className="flex flex-col items-start gap-8 mb-[60px]">
          <h1 className="font-['Inter',Helvetica] font-medium text-[#222223] text-[54px] tracking-[-3.78px] leading-[70.6px]">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
          <img
            className="w-[538px] h-[1.5px]"
            alt="Vector"
            src="/vector-51.svg"
          />
        </div>

        {/* Description and CTA */}
        <div className="flex flex-col max-w-sm items-start gap-10 mb-[60px]">
          <p className="font-['Inter',Helvetica] font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px]">
            Com uma equipe altamente treinada, nós temos todos os procedimentos
            para que seu processo seja o mais tranquilo e rápido.
            <br />
            Uma consultoria completa para você e sua família não ter nenhuma
            preocupação na sua viagem.
          </p>

          <Button className="h-[54px] bg-[#1b2543] rounded-[40px] px-5 py-2.5">
            <span className="font-['Inter',Helvetica] font-semibold text-white text-base">
              Saiba mais
            </span>
            <ArrowRightIcon className="ml-3 w-6 h-6 text-white" />
          </Button>
        </div>

        {/* Video Card */}
        <div className="relative">
          <Card className="absolute w-[191px] rounded-[20px] overflow-hidden">
            <img
              className="w-full h-[110px] object-cover"
              alt="Cleanshot"
              src="/cleanshot-2025-05-08-at-14-28-22-2x.png"
            />
            <CardContent className="p-4">
              <div className="flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Inter',Helvetica] font-semibold text-[#222223] text-base leading-[20.9px]">
                    Conheça a Bruna
                  </h3>
                  <p className="font-['Inter',Helvetica] font-normal text-[#8d8d8d] text-xs leading-[15.7px]">
                    Ver vídeo
                  </p>
                </div>
                <Button className="w-9 h-9 p-0 flex items-center justify-center bg-[#1b2543] rounded-[40px] border border-solid border-black">
                  <ArrowRightIcon className="w-6 h-6 text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="flex items-center gap-7 mt-[400px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col w-40 h-[100px] items-start gap-2 ${stat.hasBorder ? "border-r border-neutral-200" : ""}`}
            >
              <div className="font-['Inter',Helvetica] font-medium text-[#222223] text-[44px] tracking-[-2.20px] leading-[57.6px]">
                {stat.count}
              </div>
              <div className="font-['Inter',Helvetica] font-normal text-[#8d8d8d] text-base tracking-[-0.80px] leading-[20.9px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
