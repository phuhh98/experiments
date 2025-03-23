import { Image } from "antd";
import React from "react";

interface Props {
  state?: "default";
  className?: any;
  gotAnySparksForAClassName?: any;
  text: string;
  iconSrc?: string;
  iconAlt?: string;
}

export const XPromptItem: React.FC<Props> = ({
  state,
  className,
  iconSrc,
  iconAlt,
  gotAnySparksForAClassName,
  text = "Hot Topics",
}) => {
  return (
    <div
      className={`w-full fill-gray-400 inline-flex items-start gap-2 px-4 py-3 relative rounded-lg border border-solid border-[#f0f0f0] ${className}`}
    >
      <div className="inline-flex items-start gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
        {iconSrc && (
          <Image
            className="relative w-3.5 h-3.5"
            alt={iconAlt ?? ""}
            src={iconSrc}
            preview={false}
          />
        )}
      </div>

      <div
        className={`relative w-fit mt-[-1.00px] font-text-base-normal font-[number:var(--text-base-normal-font-weight)] text-[#000000e0] text-[length:var(--text-base-normal-font-size)] tracking-[var(--text-base-normal-letter-spacing)] leading-[var(--text-base-normal-line-height)] whitespace-nowrap [font-style:var(--text-base-normal-font-style)] ${gotAnySparksForAClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
