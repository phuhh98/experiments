import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import React, { FC, useState } from "react";
import ChargeDetail from "./ChargeDetail";
import Image from "next/image";

interface ReviewChargeProps {
  deviceType?: "desktop";
  initiallyExpanded?: boolean;
  accordionStyle?: "elevation" | "outlined";
}

export const ReviewCharge: FC<ReviewChargeProps> = ({
  deviceType = "desktop",
  initiallyExpanded = false,
  accordionStyle = "elevation",
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col items-start relative bg-primarywhite">
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <Accordion
          expanded={isExpanded}
          variant={accordionStyle}
          onChange={toggleAccordion}
        >
          <AccordionSummary expandIcon={<></>}>
            <div className="flex w-[796px] items-center justify-between relative">
              <div className="font-desktop-section-header-condensed text-desktop-section-header-condensed leading-desktop-section-header-condensed relative w-fit mt-[-1.00px] text-[color:var(--web-black)] tracking-desktop-section-header-condensed whitespace-nowrap">
                Breakdown of Charges
              </div>
              <div className="inline-flex items-center justify-end relative flex-[0_0_auto]">
                <Image
                  className="relative w-8 h-8"
                  alt="Chevron up rgb black"
                  src="/img/chevron-up-rgb-black-1.svg"
                  width={32}
                  height={32}
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col w-[796px] items-start relative flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 px-0 py-2 relative self-stretch w-full flex-[0_0_auto] bg-[color:var(--primarywhite)]">
                <p className="relative flex-1 mt-[-1.00px] font-desktop-paragraph-header text-[color:var(--web-black)] text-desktop-paragraph-header tracking-desktop-paragraph-header leading-desktop-paragraph-header">
                  All charges shown are in CFA franc (XOF).
                </p>
              </div>
              <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden border border-solid border-neutral-200">
                <ChargeDetail
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  device={deviceType}
                  label="Duty"
                  value="XOF 7,622.15"
                />
                <ChargeDetail
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  device={deviceType}
                  label="Other Levy Charges"
                  value="XOF&nbsp;&nbsp;5,329.59"
                />
                <ChargeDetail
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  device={deviceType}
                  label="Tax"
                  value="XOF 6,629.09"
                />
                <div className="flex items-center justify-end gap-8 px-6 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[color:var(--secondarylight-yellow)] rounded-[0px_0px_8px_8px]">
                  <div className="font-bold text-lg leading-[22.5px] relative w-fit mt-[-1.00px] text-[color:var(--web-black)] tracking-[0] whitespace-nowrap">
                    Total Payable
                  </div>
                  <div className="font-desktop-paragraph-header-bold relative w-fit mt-[-1.00px] text-[color:var(--web-black)] text-desktop-paragraph-header-bold tracking-desktop-paragraph-header-bold leading-desktop-paragraph-header-bold whitespace-nowrap">
                    XOF 19,580.83
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
