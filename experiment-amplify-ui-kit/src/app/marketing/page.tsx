"use client";

import React from "react";
import { CtaSection } from "@/components/molecules/CtaSection";
import { Features } from "@/components/molecules/Features";
import { HeroLayout } from "@/components/molecules/HeroLayout";
import { MarketingFooter } from "@/components/molecules/MarketingFooter";
import { MarketingPricing } from "@/components/molecules/MarketingPricing";
import { NavBarHeader } from "@/components/molecules/NavBarHeader";

export const MarketingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-start relative bg-colorsbackgroundsecondary text-colorsfontprimary">
      <NavBarHeader></NavBarHeader>
      <HeroLayout mode="light"></HeroLayout>
      <MarketingPricing></MarketingPricing>
      <Features></Features>
      <CtaSection></CtaSection>
      <MarketingFooter></MarketingFooter>
    </div>
  );
};

export default MarketingPage;
