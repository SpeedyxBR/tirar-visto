import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <div
        className="w-full max-w-[1200px] mx-auto aspect-[16/9] rounded-3xl overflow-hidden relative bg-cover bg-center"
        style={{ backgroundImage: "url(..//frame-36920.png)" }}
      >
        <div className="flex flex-col h-full">
          {/* CTA Button */}
          <div className="flex justify-center md:justify-end p-4 md:p-10">
            <Button className="bg-[#f6c010] text-[#282828] hover:bg-[#f6c010]/90 rounded-[40px] font-semibold">
              Tirar meu visto agora!
            </Button>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-end">
            <Card className="bg-transparent border-0 shadow-none m-4 md:m-10 mb-10 md:mb-20">
              <CardContent className="p-0">
                <div className="flex flex-col max-w-[522px] gap-3">
                  <h1 className="font-semibold text-white text-[28px] md:text-[44px] tracking-[-0.5px] md:tracking-[-0.88px] leading-[36px] md:leading-[57.6px] font-['Inter',Helvetica]">
                    Realize o seu sonho com a ajuda da Tirar Visto!
                  </h1>
                  <p className="text-white text-sm md:text-base tracking-[-0.2px] md:tracking-[-0.32px] leading-[20px] md:leading-[20.9px] font-['Inter',Helvetica]">
                    Com um serviço profissional, você não terá dor de cabeça
                    para todo o processo do visto e entrevistas no consulado.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
