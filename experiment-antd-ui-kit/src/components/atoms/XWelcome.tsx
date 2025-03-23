import { Button, Image } from "antd";
import React from "react";

interface XWelcomeProps extends React.ComponentProps<typeof Button> {
  className?: string;
  firstButtonVariant?: React.ComponentProps<typeof Button>["variant"];
  secondButtonVariant?: React.ComponentProps<typeof Button>["variant"];
}

export const XWelcome: React.FC<XWelcomeProps> = ({
  className,
  firstButtonVariant,
  secondButtonVariant,
}) => {
  return (
    <div
      className={`flex items-start gap-4 relative w-[592px] rounded-lg ${className}`}
    >
      <img
        className="relative w-[52.73px] h-[58px] object-cover"
        alt="Image"
        src={"/img/image-1.png"}
      />

      <div className="flex flex-col items-start gap-2 relative flex-1 grow">
        <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex-1 font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#000000e0] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
            Hello, I’m Ant Design X
          </p>

          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <Button
              danger={false}
              ghost={false}
              iconPosition="start"
              shape="default"
              size="middle"
              type="default"
              variant={firstButtonVariant}
              icon={
                <Image
                  src="/img/Icon _ LinkOutlined.svg"
                  alt="Icon Link"
                  preview={false}
                />
              }
            />
            <Button
              danger={false}
              ghost={false}
              iconPosition="start"
              shape="default"
              size="middle"
              type="default"
              variant={secondButtonVariant}
              icon={
                <Image
                  src="/img/Icon _ EllipsisOutlined.svg"
                  alt="Icon Ellipsis"
                  preview={false}
                />
              }
            />
          </div>
        </div>

        <p className="relative self-stretch font-text-base-normal font-[number:var(--text-base-normal-font-weight)] text-[#000000e0] text-[length:var(--text-base-normal-font-size)] tracking-[var(--text-base-normal-letter-spacing)] leading-[var(--text-base-normal-line-height)] [font-style:var(--text-base-normal-font-style)]">
          Base on Ant Design, AGI product interface solution, create a better
          intelligent vision~
        </p>
      </div>
    </div>
  );
};
