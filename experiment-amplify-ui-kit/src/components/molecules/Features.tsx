"use client";

import MyIcon from "@/components/amplify/MyIcon";
import React from "react";

const features = [
  {
    title: "Feature A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Feature B",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Feature C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Feature D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <article className="flex flex-col items-start gap-4 p-10 flex-1 bg-white shadow-md rounded-lg">
    <div className="inline-flex items-center p-2 bg-blue-100 rounded-lg">
      <MyIcon type="checkmark" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </article>
);

export const Features: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-40 py-10 bg-gray-100 m-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
