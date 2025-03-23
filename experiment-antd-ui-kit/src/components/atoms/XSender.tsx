import { Button, Image } from "antd";
import React from "react";

interface Props {
  state?: "default";
  withReference?: boolean;
  uploadFiles?: boolean;
  className?: any;
  prop?: React.ComponentProps<typeof Button>["variant"];
}

export const XSender: React.FC<Props> = ({
  state,
  withReference,
  uploadFiles,
  className,
  prop = "filled",
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 pl-4 pr-3 py-3 relative w-[592px] bg-white rounded-xl border border-solid border-[#d9d9d9] shadow-box-shadow-tertiary ${className}`}
    >
      <Button
        danger={false}
        ghost={false}
        shape="default"
        size="middle"
        type="text"
        variant="text"
      >
        Button
      </Button>
      <div className="relative flex-1 font-text-base-normal font-[number:var(--text-base-normal-font-weight)] text-[#00000040] text-[length:var(--text-base-normal-font-size)] tracking-[var(--text-base-normal-letter-spacing)] leading-[var(--text-base-normal-line-height)] [font-style:var(--text-base-normal-font-style)]">
        {""}
      </div>

      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        <Button
          danger={false}
          ghost={false}
          iconPosition="start"
          shape="round"
          size="middle"
          type="primary"
          variant="filled"
          icon={
            <Image
              src="/img/Icon _ ArrowUpOutlined.svg"
              alt="Icon Link"
              preview={false}
            />
          }
          className="p-0"
        />
      </div>
    </div>
  );
};
