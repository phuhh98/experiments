"use client";

import { Button, TextField } from "@aws-amplify/ui-react";
import React from "react";

export const CtaSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-6 p-[10rem] bg-white">
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        <h2 className="text-colorsbrandsecondary-60 text-sm font-semibold">
          Newsletter
        </h2>
        <h3 className="text-[#0d1a26] text-2xl font-bold">
          Stay in touch and never miss an update
        </h3>
        <p className="text-[#304050] text-base leading-5">
          Keep up to date on the latest and greatest in the frontend and
          fullstack community
        </p>
      </div>
      <form className="flex items-center gap-2 w-full max-w-md">
        <TextField
          placeholder="Email address"
          isDisabled={false}
          labelHidden
          label="Sign up for our newsletter"
          size="small"
          className="flex-1"
        />
        <Button isDisabled={false} size="small" variation="primary">
          Sign me up
        </Button>
      </form>
    </section>
  );
};
