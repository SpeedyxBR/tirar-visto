import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Package data for mapping
const packages = [
  {
    id: 1,
    title: "Passaporte",
    image: "/frame-36971.svg",
    serviceType: "On-line",
    duration: "45 dias",
    price: "R$ 890,00",
  },
  {
    id: 2,
    title: "Passaporte + Visto",
    image: "/frame-36971-1.svg",
    serviceType: "On-line + Presencial",
    duration: "25 dias",
    price: "R$ 1.290,00",
  },
  {
    id: 3,
    title: "Consultoria Completa",
    image: "/frame-36971-2.svg",
    serviceType: "Presencial Completo",
    duration: "10 dias",
    price: "R$ 1.890,00",
  },
];

export const SpecialPackagesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-[60px]">
          <div className="flex flex-col items-start gap-2">
            <Badge className="bg-[#f6c010] text-[#222223] font-medium rounded-[20px] px-5 py-2.5 shadow-[0px_4px_20px_#0000000f]">
              Pacotes
            </Badge>
            <h2 className="font-medium text-[#222223] text-[56px] tracking-[-4.48px] leading-[73.3px]">
              Confira nossos pacotes
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <Button
              variant="outline"
              size="icon"
              className="w-[54px] h-[54px] rounded-[40px] border-[1.5px] border-[#1b2543]"
            >
              <img
                className="w-6"
                alt="Vuesax linear arrow"
                src="/vuesax-linear-arrow-up-1.svg"
              />
            </Button>
            <Button
              size="icon"
              className="w-[54px] h-[54px] rounded-[40px] bg-[#1b2543]"
            >
              <img
                className="w-6"
                alt="Vuesax linear arrow"
                src="/vuesax-linear-arrow-up.svg"
              />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="border border-neutral-200 rounded-3xl"
            >
              <CardContent className="p-4">
                <div className="flex flex-col gap-8">
                  <div
                    className="w-full h-[300px] rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />

                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-8 items-center px-5 py-2.5 rounded-[40px] border border-[#222223]">
                        <span className="font-semibold text-[#222223] text-base">
                          Basic
                        </span>
                      </span>
                      <span className="inline-flex h-8 items-center px-5 py-2.5 rounded-[40px] border border-[#8d8d8d]">
                        <span className="font-semibold text-[#8d8d8d] text-base">
                          Premium
                        </span>
                      </span>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-black text-[28px] leading-[36.6px]">
                          {pkg.title}
                        </h3>

                        <div className="flex items-center justify-between py-5 border-b border-neutral-200">
                          <div className="flex flex-col w-[154px] gap-2">
                            <span className="font-medium text-[#222223] text-base leading-[20.9px]">
                              Atendimento
                            </span>
                            <span className="font-normal text-[#8d8d8d] text-base leading-[20.9px]">
                              {pkg.serviceType}
                            </span>
                          </div>

                          <div className="flex flex-col w-[154px] gap-2">
                            <span className="font-medium text-[#222223] text-base leading-[20.9px]">
                              {pkg.id === 3 ? "Duration" : "Tempo"}
                            </span>
                            <span className="font-normal text-[#8d8d8d] text-base leading-[20.9px]">
                              {pkg.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="font-normal text-[#8d8d8d] text-base leading-[20.9px]">
                            A partir de
                          </span>
                          <span className="font-semibold text-[#222223] text-[32px] leading-[41.9px]">
                            {pkg.price}
                          </span>
                        </div>

                        <Button className="h-[54px] px-5 py-2.5 bg-[#1b2543] rounded-[40px] font-semibold">
                          Contratar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
