"use client";

import { Button, Divider, TextField } from "@aws-amplify/ui-react";
import React from "react";
import LogoWithText from "@/components/amplify/LogoWithText";

export const MarketingFooter: React.FC = () => {
  return (
    <footer className="flex flex-col w-full max-w-[1440px] mx-auto items-center gap-8 p-10 bg-colorsbackgroundsecondary">
      {/* Newsletter Signup Section */}
      <div className="flex flex-wrap items-start justify-between w-full">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-semibold text-[#304050]">
            Sign up for our newsletter
          </h2>
          <p className="text-base text-[#304050]">No spam. We promise.</p>
        </div>

        <form className="flex items-center gap-2.5">
          <TextField
            isDisabled={false}
            labelHidden
            placeholder="Your email"
            size="small"
            label="Email address"
          />
          <Button isDisabled={false} size="small" variation="primary">
            Subscribe
          </Button>
        </form>
      </div>

      <Divider orientation="horizontal" shrink="0" size="small" />

      {/* Footer Links Section */}
      <nav className="flex flex-wrap gap-6 w-full">
        {[
          {
            title: "Products",
            links: ["Libraries", "CLI", "Studio", "Hosting"],
          },
          {
            title: "Resources",
            links: ["Docs", "Learn", "Examples", "Changelog"],
          },
          {
            title: "Company",
            links: ["About us", "Contact", "Blog"],
          },
        ].map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-[#304050]">
              {section.title}
            </h3>
            {section.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-base text-[#304050] hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <Divider orientation="horizontal" shrink="0" size="small" />

      {/* Footer Bottom Section */}
      <div className="flex flex-wrap items-center justify-between w-full">
        <LogoWithText color="neutral" />
        <p className="text-base text-[#667084] whitespace-nowrap">
          © 2023 AWS Amplify UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
