import { ClockIcon, PhoneCallIcon } from "lucide-react";
import React from "react";
import { Card } from "../../../../components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <div className="relative max-w-[1320px] mx-auto">
          <div className="flex flex-col gap-6 relative">
            <h2 className="font-medium text-[#222223] text-[56px] tracking-[-3.36px] leading-[73.3px] max-w-[854px]">
              CONSULTORIA COMPLETA PARA TIRAR SEU VISTO
            </h2>

            <p className="font-medium italic text-[#222223] text-[56px] tracking-[-3.36px] leading-[73.3px] self-end max-w-[893px]">
              VOCÊ ESTA EM BOAS MÃOS!
            </p>

            {/* Decorative elements */}
            <Card className="inline-flex items-center justify-center p-2.5 absolute top-[191px] left-[271px] bg-white rounded-[10px] rotate-[-9.86deg] shadow-[0px_4px_40px_#0000001a] w-fit h-fit">
              <ClockIcon className="w-[30px] h-[30px] rotate-[9.86deg]" />
            </Card>

            <Card className="inline-flex items-center justify-center p-2.5 absolute top-[5px] right-[336px] bg-white rounded-[10px] rotate-[12.39deg] shadow-[0px_4px_40px_#0000001a] w-fit h-fit">
              <PhoneCallIcon className="w-[25px] h-[25px] rotate-[-12.39deg]" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
