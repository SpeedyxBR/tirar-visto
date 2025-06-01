import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const DestinationsSection = (): JSX.Element => {
  // Destination data for mapping
  const destinations = [
    {
      id: 1,
      name: "Mumbai, India",
      image: "/frame-36945.png",
      alt: "Mumbai, India",
    },
    {
      id: 2,
      name: "Nova York, Estados Unidos",
      image: "/frame-36946.png",
      alt: "New York, United States",
    },
    {
      id: 3,
      name: "Santorini, Grecia",
      image: "/frame-36947.png",
      alt: "Santorini, Greece",
    },
    {
      id: 4,
      name: "Paris, França",
      image: "/frame-36945-1.png",
      alt: "Paris, France",
    },
    {
      id: 5,
      name: "Cidade do Cabo, África do Sul",
      image: "/frame-36946-1.png",
      alt: "Cape Town, South Africa",
    },
    {
      id: 6,
      name: "Mumbai, India",
      image: "/frame-36947-1.png",
      alt: "Mumbai, India",
    },
  ];

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute w-full h-[423px] top-0 left-0 overflow-hidden">
          <div className="absolute w-[476px] h-[423px] top-0 left-0">
            <img
              className="absolute w-[280px] h-[158px] top-[264px] left-0"
              alt="Vector"
              src="/vector-52.svg"
            />
            <img
              className="absolute w-[476px] h-[86px] top-0 left-0"
              alt="Vector"
              src="/vector-55.svg"
            />
            <div className="left-0 absolute w-[167px] h-[181px] top-[84px] bg-gradient-to-l from-[rgba(217,217,217,0.2)] to-transparent" />
          </div>

          <div className="absolute w-[476px] h-[423px] top-0 right-0">
            <img
              className="absolute w-[280px] h-[158px] top-[264px] right-0"
              alt="Vector"
              src="/vector-53.svg"
            />
            <img
              className="absolute w-[476px] h-[86px] top-0 right-0"
              alt="Vector"
              src="/vector-54.svg"
            />
            <div className="right-0 absolute w-[167px] h-[181px] top-[84px] bg-gradient-to-r from-[rgba(217,217,217,0.2)] to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-between max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-10 w-full mb-16">
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="inline-flex items-center justify-center px-5 py-2.5 bg-[#f6c010] rounded-[20px] shadow-[0px_4px_20px_#0000000f]">
                  <span className="font-medium text-[#222223] text-base text-center tracking-[-1.28px] leading-[20.9px]">
                    Top Destinos
                  </span>
                </div>

                <h2 className="font-medium text-[#222223] text-[56px] text-center tracking-[-4.48px] leading-[73.3px]">
                  Destinos mais procurados
                </h2>
              </div>

              <p className="max-w-[584px] font-normal text-[#8d8d8d] text-base text-center tracking-[-0.32px] leading-[20.9px]">
                Confira os destinos mais procurados por nossos clientes nos
                últimos meses, qual seria o seu novo destino?
              </p>
            </div>

            <Button className="h-[54px] px-5 py-2.5 bg-[#1b2543] rounded-[40px] text-white font-semibold">
              Conheça mais
            </Button>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-3 gap-5 w-full max-w-[880px]">
            {destinations.map((destination, index) => (
              <Card
                key={destination.id}
                className={`relative overflow-hidden rounded-[28px] ${
                  index % 3 === 1 ? "h-[280px]" : "h-[240px]"
                } ${
                  index < 3 && index % 3 !== 1 ? "mt-10" : ""
                } bg-cover bg-center`}
                style={{
                  backgroundImage: `url(${destination.image}), linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)`,
                }}
              >
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex h-8 items-center justify-center px-4 py-2.5 bg-[#ffffff26] rounded-[30px] backdrop-blur-[10px]">
                  {destination.id === 1 ||
                  destination.id === 4 ||
                  destination.id === 5 ||
                  destination.id === 6 ? (
                    <img
                      className="w-auto h-[15px] object-cover"
                      alt={destination.alt}
                      src="/mumbai--india.png"
                    />
                  ) : (
                    <span className="font-normal text-white text-base text-center tracking-[-1.28px] leading-[20.9px]">
                      {destination.name}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
