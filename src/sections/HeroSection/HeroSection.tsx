import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const HeroSection: React.FC = () => {
  // Navigation menu items
  const navItems = [
    { title: "Home", isBold: true },
    { title: "Quem somos", isBold: false },
    { title: "Serviços", isBold: false },
    { title: "Contato", isBold: false },
  ];

  // Statistics data
  const statistics = [
    { count: "509", label: "Vistos Tirados" },
    { count: "602", label: "Passaportes Tirados" },
    { count: "634", label: "Famílias Felizes" },
  ];

  return (
    <section className="relative w-full h-[940px] bg-white overflow-hidden">
      {/* Hero image on the right */}
      <div className="absolute w-[762px] h-[900px] top-[61px] right-0 rounded-3xl overflow-hidden [background:url(..//frame-36920.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%)]">
        {/* CTA Button on hero image */}
        <div className="absolute top-4 right-[226px] flex items-center gap-4">
          <Button className="h-11 px-5 py-0 bg-[#f6c010] rounded-[40px] text-[#282828] font-semibold hover:bg-[#e0af0e]">
            Tirar meu visto agora!
          </Button>
        </div>

        {/* Hero text overlay */}
        <div className="absolute w-[806px] bottom-0 left-[-22px]">
          <div className="flex flex-col w-[682px] items-start gap-10 relative top-[177px] left-[62px]">
            <div className="flex flex-col w-[522px] items-center gap-3">
              <h2 className="self-stretch mt-[-1.00px] font-semibold text-white text-[44px] tracking-[-0.88px] leading-[57.6px]">
                Realize o seu sonho com a ajuda da Tirar Visto!
              </h2>
              <p className="self-stretch font-normal text-white text-base tracking-[-0.32px] leading-[20.9px]">
                Com um serviço profissional, você não terá dor de cabeça para
                todo o processo do visto e entrevistas no consulado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="flex w-[658px] h-[100px] items-center justify-between px-[60px] py-0 absolute top-0 left-0">
        <div className="relative w-[152px] h-[42px] bg-[url(/logo-1.png)] bg-cover bg-[50%_50%]" />

        <div className="flex items-center gap-1">
          {navItems.map((item, index) => (
            <Button
              key={index}
              className={`h-11 px-3 py-2.5 ${
                item.isBold ? "font-bold" : "font-normal"
              } text-[#222223] text-base`}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </nav>

      {/* Statistics section */}
      <div className="flex items-center gap-7 absolute bottom-[60px] left-[60px]">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col w-40 h-[100px] items-start gap-2 ${
              index < statistics.length - 1 ? "border-r border-neutral-200" : ""
            }`}
          >
            <div className="self-stretch mt-[-1.00px] font-medium text-[#222223] text-[44px] tracking-[-2.20px] leading-[57.6px]">
              {stat.count}
            </div>
            <div className="self-stretch font-normal text-[#8d8d8d] text-base tracking-[-0.80px] leading-[20.9px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col w-[598px] items-start gap-[60px] absolute top-[140px] left-[60px]">
        {/* Heading and separator */}
        <div className="flex flex-col items-start gap-8 self-stretch w-full">
          <h1 className="self-stretch mt-[-1.00px] font-medium text-[#222223] text-[54px] tracking-[-3.78px] leading-[70.6px]">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
          <img
            className="relative w-[538px] h-[1.5px] mb-[-0.75px]"
            alt="Separator"
            src="/vector-51.svg"
          />
        </div>

        {/* Description and CTA button */}
        <div className="flex flex-col w-[327px] items-start gap-10">
          <p className="self-stretch mt-[-1.00px] font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px]">
            Com uma equipe altamente treinada, nós temos todos os procedimentos
            para que seu processo seja o mais tranquilo e rápido.
            <br />
            Uma consultoria completa para você e sua família não ter nenhuma
            preocupação na sua viagem.
          </p>

          <Button className="h-[54px] px-5 py-2.5 bg-[#1b2543] rounded-[40px] text-white font-semibold hover:bg-[#141c33]">
            <span className="flex items-center gap-3">
              Saiba mais
              <ArrowRightIcon className="w-6 h-6" />
            </span>
          </Button>
        </div>

        {/* Video card */}
        <Card className="w-[191px] absolute top-[383px] left-[347px] rounded-[20px] overflow-hidden">
          <img
            className="w-full h-[110px] object-cover"
            alt="Cleanshot"
            src="/cleanshot-2025-05-08-at-14-28-22-2x.png"
          />
          <CardContent className="p-0">
            <div className="flex items-end justify-between p-4">
              <div className="flex flex-col items-start gap-1">
                <h3 className="mt-[-1.00px] font-semibold text-[#222223] text-base leading-[20.9px]">
                  Conheça a Bruna
                </h3>
                <p className="font-normal text-[#8d8d8d] text-xs leading-[15.7px]">
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
    </section>
  );
};

export default HeroSection;
