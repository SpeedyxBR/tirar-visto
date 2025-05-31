import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { SpecialPackagesSection } from "./sections/SpecialPackagesSection";
import { TopDestinationsSection } from "./sections/TopDestinationsSection";
import { WhyChooseUsDetailsSection } from "./sections/WhyChooseUsDetailsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";

export const TirarVisto = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <WhyChooseUsSection />
      <WhyChooseUsDetailsSection />
      <TopDestinationsSection />
      <SpecialPackagesSection />
      <FooterSection />
    </main>
  );
};
