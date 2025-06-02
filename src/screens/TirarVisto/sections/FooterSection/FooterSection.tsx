import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = (): JSX.Element => {
  const companyLinks = [
    { title: "Home" },
    { title: "Quem somos" },
    { title: "Serviços" },
    { title: "Contato" },
  ];

  const newsLinks = [
    { title: "Passaporte" },
    { title: "Visto" },
    { title: "Entrevista" },
    { title: "Polícia Federal" },
  ];

  const supportLinks = [
    { title: "FAQ" },
    { title: "Contato" },
    { title: "Dúvidas Frequentes" },
  ];

  const socialLinks = [
    { title: "Instagram" },
    { title: "X" },
    { title: "Facebook" },
    { title: "Youtube" },
  ];

  return (
    <footer className="flex flex-col w-full bg-white">
      <div className="flex flex-col px-6 py-10 md:px-16 md:py-16 max-w-[1200px] mx-auto w-full gap-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Left - Contact */}
          <div className="flex flex-col max-w-md w-full gap-4">
            <h2 className="font-['Inter'] font-medium text-[#222223] text-4xl md:text-5xl leading-tight tracking-tight">
              Está com alguma dúvida?
            </h2>
            <p className="font-['Inter'] font-normal text-[#8d8d8d] text-base">
              Entre em contato através do nosso canal direto ao cliente através do botão abaixo
            </p>
            <Button className="h-14 w-max bg-[#1b2543] rounded-full text-white font-semibold px-6">
              Central de Atendimento
            </Button>
          </div>

          {/* Right - Newsletter */}
          <div className="flex items-center border-b border-[#222223] pb-3 gap-3 w-full max-w-sm justify-between">
            <h3 className="font-['Inter'] font-normal text-[#222223] text-3xl whitespace-nowrap">
              Receba novidades
            </h3>
            <div className="relative w-10 h-10 rotate-[-135deg]">
              <img
                className="absolute w-[57px] h-[57px] -top-2 -left-2 rotate-[135deg]"
                alt="Arrow up"
                src="/arrow-up.png"
              />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20 w-full">
          {/* Social media */}
          <div className="flex flex-col max-w-xs w-full gap-4">
            <h4 className="font-['Inter'] font-semibold text-[#222223] text-base">
              Siga em nossas redes:
            </h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((link, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="h-10 px-5 rounded-full border-[#222223] bg-transparent font-semibold text-[#222223] text-base"
                >
                  {link.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap gap-12 md:gap-20 flex-1 justify-between">
            {/* Company */}
            <div className="min-w-[120px]">
              <h4 className="font-['Plus_Jakarta_Sans'] font-medium text-[#222223] text-base mb-3">
                Empresa
              </h4>
              <div className="flex flex-col gap-2">
                {companyLinks.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="font-['Plus_Jakarta_Sans'] font-normal text-[#8d8d8d] text-base hover:text-[#222223] transition"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* News */}
            <div className="min-w-[140px]">
              <h4 className="font-['Plus_Jakarta_Sans'] font-medium text-[#222223] text-base mb-3">
                Novidades
              </h4>
              <div className="flex flex-col gap-2">
                {newsLinks.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="font-['Plus_Jakarta_Sans'] font-normal text-[#8d8d8d] text-base hover:text-[#222223] transition"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="min-w-[120px]">
              <h4 className="font-['Plus_Jakarta_Sans'] font-medium text-[#222223] text-base mb-3">
                Suporte
              </h4>
              <div className="flex flex-col gap-2">
                {supportLinks.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="font-['Plus_Jakarta_Sans'] font-normal text-[#8d8d8d] text-base hover:text-[#222223] transition"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e5e2e2] py-5 bg-white">
        <p className="text-center font-['Inter'] font-medium text-[#222223] text-sm tracking-tight">
          © 2025 Tirar Visto - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};
