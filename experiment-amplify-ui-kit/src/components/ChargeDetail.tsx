import React from "react";

interface ChargeProps {
  device: "desktop" | "mobile";
  className?: string;
  label?: string;
  value?: string;
  chargeValueClassName?: string;
}

const ChargeDetail: React.FC<ChargeProps> = ({
  device,
  className = "",
  label = "Duty/Droits",
  value = "5,142.55",
  chargeValueClassName = "",
}) => {
  return (
    <div
      className={`flex justify-between relative ${
        device === "mobile" ? "w-[433px]" : "w-[700px]"
      } ${device === "mobile" ? "items-start" : "items-center"} ${className}`}
    >
      <div
        className={`font-${
          device === "mobile"
            ? "body-medium-rg"
            : "desktop-paragraph-header-bold"
        } mt-[-1.00px] tracking-tight text-web-black font-normal relative ${
          device === "desktop" ? "w-fit" : ""
        } ${
          device === "mobile" ? "text-base" : "text-desktop-paragraph-header"
        } ${device === "mobile" ? "flex-1" : ""} ${
          device === "mobile"
            ? "leading-[19.2px]"
            : "leading-desktop-paragraph-header"
        } ${device === "desktop" ? "whitespace-nowrap" : ""}`}
      >
        {label}
      </div>

      <div
        className={`w-fit mt-[-1.00px] text-web-black whitespace-nowrap relative ${
          device === "mobile"
            ? "font-body-medium-rg"
            : "font-desktop-paragraph-header"
        } ${
          device === "mobile"
            ? "tracking-tight"
            : "tracking-desktop-paragraph-header"
        } ${
          device === "mobile" ? "text-base" : "text-desktop-paragraph-header"
        } ${device === "desktop" ? "font-desktop-paragraph-header-bold" : ""} ${
          device === "mobile" ? "font-normal" : "font-desktop-paragraph-header"
        } ${
          device === "mobile"
            ? "leading-[19.2px]"
            : "leading-desktop-paragraph-header"
        } ${chargeValueClassName}`}
      >
        {value}
      </div>
    </div>
  );
};

export default ChargeDetail;
