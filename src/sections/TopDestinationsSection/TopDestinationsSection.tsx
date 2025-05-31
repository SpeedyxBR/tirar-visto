import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

// Define destination data for mapping
const destinations = [
  {
    id: 1,
    name: "Mumbai, India",
    image: "/mumbai--india.png",
    backgroundImage: "..//frame-36945.png",
  },
  {
    id: 2,
    name: "Nova York, Estados Unidos",
    backgroundImage: "..//frame-36946.png",
  },
  {
    id: 3,
    name: "Santorini, Grecia",
    backgroundImage: "..//frame-36947.png",
  },
  {
    id: 4,
    name: "Paris, França",
    image: "/mumbai--india.png",
    backgroundImage: "..//frame-36945-1.png",
  },
  {
    id: 5,
    name: "Cidade do Cabo",
    image: "/mumbai--india.png",
    backgroundImage: "..//frame-36946-1.png",
  },
  {
    id: 6,
    name: "Mumbai, India",
    image: "/mumbai--india.png",
    backgroundImage: "..//frame-36947-1.png",
  },
];

export const TopDestinationsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="relative w-full">
        <div className="flex flex-col w-full max-w-[880px] mx-auto items-center gap-[60px]">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex flex-col items-center gap-2 w-full">
                <Badge className="px-5 py-2.5 bg-[#f6c010] text-[#222223] rounded-[20px] shadow-[0px_4px_20px_#0000000f] font-medium text-base tracking-[-1.28px]">
                  Top Destinos
                </Badge>

                <h2 className="font-medium text-[#222223] text-[56px] text-center tracking-[-4.48px] leading-[73.3px]">
                  Destinos mais procurados
                </h2>
              </div>

              <p className="max-w-[584px] font-normal text-[#8d8d8d] text-base text-center tracking-[-0.32px] leading-[20.9px]">
                Confira os destinos mais procurados por nossos clientes nos
                últimos meses, qual seria o seu novo destino?
              </p>
            </div>

            <Button className="h-[54px] px-5 py-2.5 bg-[#1b2543] text-white rounded-[40px] font-semibold">
              Conheça mais
            </Button>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-3 gap-5 w-full h-[580px]">
            {destinations.map((destination, index) => {
              // Determine card height and position based on index
              const isTopRow = index < 3;
              const isMiddleCol = index === 1 || index === 4;

              return (
                <Card
                  key={destination.id}
                  className={`relative overflow-hidden rounded-[28px] ${
                    isMiddleCol ? "h-[280px]" : "h-60"
                  } ${index === 0 || index === 2 ? "mt-10" : ""}`}
                  style={{
                    background: `url(${destination.backgroundImage}) 50% 50% / cover, linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)`,
                  }}
                >
                  <div
                    className={`inline-flex h-8 items-center justify-center gap-2.5 px-4 py-2.5 absolute ${
                      isMiddleCol ? "bottom-3" : "bottom-4"
                    } left-1/2 transform -translate-x-1/2 bg-[#ffffff26] rounded-[30px] backdrop-blur-[10px] backdrop-brightness-[100%]`}
                  >
                    {destination.image ? (
                      <img
                        className="relative object-cover"
                        alt={destination.name}
                        src={destination.image}
                      />
                    ) : (
                      <div className="font-normal text-white text-base text-center tracking-[-1.28px] leading-[20.9px] whitespace-nowrap">
                        {destination.name}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute w-full h-[423px] top-0 left-0 pointer-events-none">
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
            <div className="left-0 absolute w-[167px] h-[181px] top-[84px] bg-gradient-to-l from-[rgba(217,217,217,0.2)] to-[rgba(217,217,217,0)]" />
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
            <div className="absolute w-[167px] h-[181px] top-[84px] right-0 bg-gradient-to-r from-[rgba(217,217,217,0.2)] to-[rgba(217,217,217,0)]" />
          </div>
        </div>
      </div>
    </section>
  );
};
