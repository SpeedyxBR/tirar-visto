import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const DestinationsSection = (): JSX.Element => {
  const destinations = [
    { id: 1, name: "Mumbai, Índia", image: "/frame-36945.png" },
    { id: 2, name: "Nova York, Estados Unidos", image: "/frame-36946.png" },
    { id: 3, name: "Santorini, Grécia", image: "/frame-36947.png" },
    { id: 4, name: "Paris, França", image: "/frame-36945-1.png" },
    { id: 5, name: "Cidade do Cabo, África do Sul", image: "/frame-36946-1.png" },
    { id: 6, name: "Tóquio, Japão", image: "/frame-36947-1.png" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-[#f6c010] px-5 py-2.5 rounded-[20px] shadow-sm">
              <span className="font-medium text-[#222223] text-base">
                Top Destinos
              </span>
            </div>
            <h2 className="font-semibold text-[#222223] text-[36px] md:text-[56px] text-center leading-tight">
              Destinos mais procurados
            </h2>
            <p className="max-w-[600px] text-[#8d8d8d] text-sm md:text-base text-center">
              Confira os destinos mais procurados por nossos clientes nos últimos meses.
              Qual será o seu próximo destino?
            </p>
          </div>
          <Button className="h-[50px] px-5 bg-[#1b2543] hover:bg-[#263472] rounded-[40px] text-white font-semibold">
            Conheça mais
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-[880px] mx-auto">
          {destinations.map((destination, index) => (
            <Card
              key={destination.id}
              className={`relative overflow-hidden rounded-[28px] bg-cover bg-center
                ${
                  index % 3 === 1
                    ? "h-[280px] md:h-[280px]"
                    : "h-[240px] md:h-[240px]"
                }
                ${index < 3 && index % 3 !== 1 ? "mt-10 md:mt-10" : ""}
              `}
              style={{
                backgroundImage: `url(${destination.image}), linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)`,
              }}
            >
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#ffffff26] backdrop-blur-[10px] px-4 py-2 rounded-[30px]">
                <span className="text-white text-sm md:text-base font-medium">
                  {destination.name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
