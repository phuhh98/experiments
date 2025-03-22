import React, { FC } from "react";

interface DeviceWrapperProps {
  deviceType: "desktop" | "mobile";
  containerClassName?: string;
  chargeValueClassName?: string;
  displayText?: string;
  labelText?: string;
}

export const DeviceWrapper: FC<DeviceWrapperProps> = ({
  deviceType,
  containerClassName = "",
  chargeValueClassName = "",
  displayText = "5,142.55",
  labelText = "Duty/Droits",
}) => {
  return (
    <div
      className={`flex justify-between relative ${
        deviceType === "mobile" ? "w-[433px]" : "w-[700px]"
      } ${
        deviceType === "mobile" ? "items-start" : "items-center"
      } ${containerClassName}`}
    >
      <div
        className={`[font-family:'Delivery-Regular',Helvetica] mt-[-1.00px] tracking-[0] text-[color:var(--web-black)] font-normal relative ${
          deviceType === "desktop" ? "w-fit" : ""
        } ${deviceType === "mobile" ? "text-base" : "text-lg"} ${
          deviceType === "mobile" ? "flex-1" : ""
        } ${
          deviceType === "mobile" ? "leading-[19.2px]" : "leading-[22.5px]"
        } ${deviceType === "desktop" ? "whitespace-nowrap" : ""}`}
      >
        {labelText}
      </div>

      <div
        className={`w-fit mt-[-1.00px] text-[color:var(--web-black)] whitespace-nowrap relative ${
          deviceType === "mobile"
            ? "[font-family:'Delivery-Regular',Helvetica]"
            : "font-desktop-paragraph-header"
        } ${
          deviceType === "mobile"
            ? "tracking-[0]"
            : "tracking-desktop-paragraph-header"
        } ${
          deviceType === "mobile"
            ? "text-base"
            : "text-desktop-paragraph-header"
        } ${
          deviceType === "desktop"
            ? "[font-style:var(--desktop-paragraph-header-font-style)]"
            : ""
        } ${
          deviceType === "mobile"
            ? "font-normal"
            : "font-desktop-paragraph-header"
        } ${
          deviceType === "mobile"
            ? "leading-[19.2px]"
            : "leading-desktop-paragraph-header"
        } ${chargeValueClassName}`}
      >
        {displayText}
      </div>
    </div>
  );
};
