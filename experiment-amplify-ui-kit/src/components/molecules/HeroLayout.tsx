import { Button } from "@aws-amplify/ui-react";
import React from "react";

interface Props {
  mode: "light";
}

export const HeroLayout: React.FC<Props> = ({ mode }) => {
  return (
    <section className="flex w-full max-w-[1440px] items-center justify-center mx-auto">
      {/* Left Content Section */}
      <div className="flex flex-col w-1/2 items-center justify-center gap-6 p-20 bg-white">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <span className="text-colorsbrandprimary-60 text-sm font-semibold tracking-wide">
            Full stack
          </span>

          <h1 className="text-[#0d1a26] text-2xl font-bold text-center">
            Build full-stack web and mobile apps in hours. Easy to start, easy
            to scale
          </h1>

          <p className="text-[#304050] text-base text-center leading-relaxed">
            AWS Amplify is a complete solution that lets frontend web and mobile
            developers easily build, ship, and host full-stack applications on
            AWS, with the flexibility to leverage the breadth of AWS services as
            use cases evolve. No cloud expertise needed.
          </p>
        </div>

        <Button isDisabled={false} size="large" variation="primary">
          Get started
        </Button>
      </div>

      {/* Right Image Section */}
      <div className="flex w-1/2 items-center justify-center bg-[#dff3f9]">
        <img
          className="w-full h-auto"
          src="/img/image.png"
          alt="Illustration of a person holding a layered icon"
        />
      </div>
    </section>
  );
};
