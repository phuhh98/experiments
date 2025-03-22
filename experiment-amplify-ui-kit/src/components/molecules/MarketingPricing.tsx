"use client";

import { Button } from "@aws-amplify/ui-react";
import React from "react";
import MyIcon from "@/components/amplify/MyIcon";

const plans = [
  {
    name: "Free plan",
    price: "$0/mo",
    description: "Free forever, always",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    ],
  },
  {
    name: "Basic plan",
    price: "$20/mo",
    description: "Billed annually",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    ],
  },
  {
    name: "Pro plan",
    price: "$100/mo",
    description: "Billed annually",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    ],
  },
];

const PlanCard = ({
  name,
  price,
  description,
  features,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
}) => (
  <div className="flex flex-col items-center justify-center gap-6 p-8 bg-red rounded-lg shadow-shadows-small flex-1">
    <div className="text-center">
      <h3 className="text-colorsfontinteractive text-base font-semibold">
        {name}
      </h3>
      <p className="text-[#0d1a26] text-2xl font-semibold">{price}</p>
      <p className="text-colorsfonttertiary text-base font-semibold">
        {description}
      </p>
    </div>
    <ul className="w-full space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-4">
          <div className="p-2 bg-colorsbrandprimary-10 rounded-lg">
            <MyIcon type="checkmark" />
          </div>
          <p className="text-[#0d1a26] text-base">{feature}</p>
        </li>
      ))}
    </ul>
    <Button isDisabled={false} shrink="0" size="large" variation="primary">
      Get started
    </Button>
  </div>
);

export const MarketingPricing: React.FC = () => {
  return (
    <section className="flex flex-col w-full max-w-[1440px] mx-auto items-center gap-6 p-12 bg-colorsbackgroundsecondary">
      <header className="text-center">
        <h2 className="text-colorsbrandprimary-80 text-base font-semibold">
          Pricing
        </h2>
        <h1 className="text-[#0d1a26] text-2xl font-semibold">
          Choose your plan
        </h1>
        <p className="text-colorsfonttertiary text-base">
          14 day free trial for any plan, no credit card needed
        </p>
      </header>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};
