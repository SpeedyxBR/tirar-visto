import { PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = (): JSX.Element => {
  // Data for accordion items
  const accordionItems = [
    {
      id: "item-1",
      title: "Etapa Inicial",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      isExpanded: true,
    },
    {
      id: "item-2",
      title: "Processo de Entrevista",
      content: "",
      isExpanded: false,
    },
    {
      id: "item-3",
      title: "Entrega de Documentos",
      content: "",
      isExpanded: false,
    },
  ];

  return (
    <section className="w-full py-8 bg-white">
      <div className="container max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col gap-[60px]">
          {/* Header Section */}
          <div className="flex flex-col gap-3">
            <Badge className="bg-[#f6c010] text-[#222223] hover:bg-[#f6c010]/90 rounded-[20px] px-5 py-2.5 font-medium text-base shadow-[0px_4px_20px_#0000000f] w-fit">
              Veja como funciona
            </Badge>

            <div className="flex flex-col md:flex-row justify-between gap-8">
              <h2 className="text-[56px] font-medium text-[#222223] tracking-[-3.92px] leading-[73.3px] max-w-[420px] font-['Inter',Helvetica]">
                Sua tranquilidade não tem preço!
              </h2>
              <p className="text-base text-[#8d8d8d] tracking-[-0.32px] leading-[20.9px] max-w-[826px] font-['Inter',Helvetica]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="w-full md:w-auto">
              <img
                className="w-full md:w-[756px] h-auto md:h-[444px] object-cover"
                alt="Happy tourist"
                src="/happy-tourist-sightseeing-city-with-map.png"
              />
            </div>

            <Card className="w-full md:w-[528px] border-none shadow-none">
              <CardContent className="p-0">
                <Accordion type="single" collapsible defaultValue="item-1">
                  {accordionItems.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border-b border-neutral-200 px-3 py-5"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <h3 className="text-[44px] font-medium text-[#222223] tracking-[-3.52px] leading-[57.6px] text-left font-['Inter',Helvetica]">
                          {item.title}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.content ? (
                          <p className="text-base text-[#8d8d8d] tracking-[-0.32px] leading-[20.9px] font-['Inter',Helvetica]">
                            {item.content}
                          </p>
                        ) : (
                          <Button
                            variant="ghost"
                            className="p-0 h-auto hover:bg-transparent"
                          >
                            <PlusIcon className="w-6 h-6 mr-2" />
                            <span className="font-medium text-[#222223] text-base tracking-[-0.32px] leading-[20.9px] font-['Inter',Helvetica]">
                              Leia mais
                            </span>
                          </Button>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
