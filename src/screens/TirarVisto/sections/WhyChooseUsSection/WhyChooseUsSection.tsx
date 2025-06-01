import { ClockIcon, PhoneCallIcon } from "lucide-react";
import React from "react";
import { Card } from "../../../../components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-[#f6f6f6]">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col space-y-6 relative">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="font-medium text-[#222223] text-4xl md:text-5xl lg:text-[56px] tracking-[-3.36px] leading-tight max-w-[854px]">
              CONSULTORIA COMPLETA PARA TIRAR SEU VISTO
            </h2>
          </div>

          <div className="flex justify-end">
            <h2 className="font-medium italic text-[#222223] text-4xl md:text-5xl lg:text-[56px] tracking-[-3.36px] leading-tight">
              VOCÊ ESTÁ EM BOAS MÃOS!
            </h2>
          </div>

          {/* Decorative elements */}
          <Card className="inline-flex items-center p-2.5 absolute bottom-0 left-1/4 bg-white rounded-[10px] rotate-[-9.86deg] shadow-[0px_4px_40px_#0000001a]">
            <ClockIcon className="w-[30px] h-[30px] rotate-[9.86deg]" />
          </Card>

          <Card className="inline-flex items-center p-2.5 absolute top-0 right-1/4 bg-white rounded-[10px] rotate-[12.39deg] shadow-[0px_4px_40px_#0000001a]">
            <PhoneCallIcon className="w-[25px] h-[25px] rotate-[-12.39deg]" />
          </Card>
        </div>
      </div>
    </section>
  );
};
