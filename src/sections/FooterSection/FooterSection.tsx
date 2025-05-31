import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = (): JSX.Element => {
  // Company links data
  const companyLinks = [
    { label: "Home", href: "#" },
    { label: "Quem somos", href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Contato", href: "#" },
  ];

  // News links data
  const newsLinks = [
    { label: "Passaporte", href: "#" },
    { label: "Visto", href: "#" },
    { label: "Entrevista", href: "#" },
    { label: "Polícia Federal", href: "#" },
  ];

  // Support links data
  const supportLinks = [
    { label: "FAQ", href: "#" },
    { label: "Contato", href: "#" },
    { label: "Dúvidas Frequentes", href: "#" },
  ];

  // Social media buttons data
  const socialMedia = [
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Youtube", href: "#" },
  ];

  return (
    <footer className="flex flex-col w-full items-start relative">
      <div className="flex flex-col items-start gap-10 px-[60px] py-[70px] relative self-stretch w-full bg-white">
        <div className="flex items-center justify-between pt-0 pb-10 px-0 relative self-stretch w-full">
          {/* Left section - Questions */}
          <div className="flex flex-col w-[456px] items-start gap-10 relative">
            <div className="flex flex-col items-start justify-center gap-3 relative self-stretch w-full">
              <div className="flex flex-col items-center gap-2 relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] font-medium text-[#222223] text-[56px] tracking-[-4.48px] leading-[73.3px]">
                  Está com alguma dúvida?
                </h2>
              </div>

              <p className="relative self-stretch font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px]">
                Entre em contato através do nosso canal direto ao cliente
                através do botão abaixo
              </p>
            </div>

            <Button className="h-[54px] px-5 py-2.5 bg-[#1b2543] rounded-[40px] text-white font-semibold text-base">
              Central de Atendimento
            </Button>
          </div>

          {/* Right section - Newsletter */}
          <div className="flex w-[500px] items-center justify-between pt-0 pb-3 px-0 relative border-b border-[#222223]">
            <h3 className="relative w-fit font-normal text-[#222223] text-[40px] tracking-[-2.40px] leading-[52.3px] whitespace-nowrap">
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

        <div className="flex items-end gap-[257px] relative self-stretch w-full">
          {/* Social media section */}
          <div className="flex flex-col w-[451px] items-start gap-5 relative">
            <h4 className="relative self-stretch mt-[-1.00px] font-semibold text-[#222223] text-base tracking-[-0.32px] leading-[20.9px]">
              Siga em nossa redes:
            </h4>

            <div className="flex items-center gap-5 relative self-stretch w-full">
              {socialMedia.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-10 px-5 py-2.5 rounded-[40px] border border-solid border-[#222223] font-semibold text-[#222223] text-base"
                >
                  {social.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Footer links section */}
          <div className="flex items-start justify-between relative flex-1 grow">
            {/* Company links */}
            <div className="flex flex-col w-[120px] items-start gap-5 relative">
              <h4 className="relative self-stretch mt-[-1.00px] font-medium text-[#222223] text-base tracking-[-0.32px] leading-[20.9px]">
                Empresa
              </h4>

              <div className="flex flex-col items-start gap-3 self-stretch w-full">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="relative self-stretch font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* News links */}
            <div className="flex flex-col w-[140px] items-start gap-5 relative">
              <h4 className="relative self-stretch mt-[-1.00px] font-medium text-[#222223] text-base tracking-[-0.32px] leading-[20.9px]">
                Novidades
              </h4>

              <div className="flex flex-col items-start gap-3 self-stretch w-full">
                {newsLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="relative self-stretch font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Support links */}
            <div className="flex flex-col w-[120px] items-start gap-5 relative">
              <h4 className="relative self-stretch mt-[-1.00px] font-medium text-[#222223] text-base tracking-[-0.32px] leading-[20.9px]">
                Suporte
              </h4>

              <div className="flex flex-col items-start gap-3 self-stretch w-full">
                {supportLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="relative self-stretch font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="flex h-20 items-center justify-around px-[60px] py-0 relative self-stretch w-full bg-white border-t border-[#e5e2e2]">
        <p className="relative flex-1 font-medium text-[#222223] text-sm text-center tracking-[-0.28px] leading-[18.3px]">
          © 2025 Tirar Visto - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
// FooterSection component