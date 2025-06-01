import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection";
import { DestinationsSection } from "./sections/DestinationsSection/DestinationsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { PackagesSection } from "./sections/PackagesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const TirarVisto = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full">
      <section>
        <HeroSection />
      </section>

      <section>
        <MainContentSection />
      </section>

      <section>
        <WhyChooseUsSection />
      </section>

      <section>
        <BenefitsSection />
      </section>

      <section>
        <DestinationsSection />
      </section>

      <section>
        <PackagesSection />
      </section>

      <section>
        <FooterSection />
      </section>
    </main>
  );
};
