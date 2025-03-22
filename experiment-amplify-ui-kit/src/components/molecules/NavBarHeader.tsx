"use client";

import { Button } from "@aws-amplify/ui-react";
import React from "react";

export const NavBarHeader: React.FC<{}> = () => {
  return (
    <header className="flex w-full items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center gap-8">
        <img
          className="w-[34.55px] h-[30px]"
          alt="Amplify logo"
          src={"/img/amplify-mark.svg"}
        />

        <ul className="flex gap-8 text-font-primary">
          {["Home", "Products", "Pricing", "Contact"].map((item) => (
            <li key={item} className="text-base font-normal">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Button isDisabled={false} size="small" variation="link">
          Log in
        </Button>
        <Button isDisabled={false} size="small" variation="primary">
          Sign up
        </Button>
      </div>
    </header>
  );
};
