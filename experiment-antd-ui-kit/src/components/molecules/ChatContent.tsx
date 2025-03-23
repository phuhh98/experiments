import { XPromptItem } from "@/components/atoms/XPromptItem";
import React from "react";
import { XSender } from "@/components/atoms/XSender";
import { XWelcome } from "@/components/atoms/XWelcome";
import Image from "next/image";

export const ChatContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 p-6 relative bg-white h-[100vh] w-[100vw]">
      <div className="flex-col max-w-[592px] items-start gap-4 pt-8 pb-0 px-0 flex-1 w-full grow flex relative">
        <XWelcome>Hello, I'm Ant Design X</XWelcome>
        <div className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full grow">
          <div className="h-6 gap-4 flex flex-col items-start relative self-stretch w-full">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'SF_Pro_Text-Regular',Helvetica] font-normal text-[#00000073] text-base tracking-[0] leading-6">
              Do you want?
            </div>
          </div>

          <div className="flex self-stretch w-full items-center gap-3 relative flex-[0_0_auto]">
            <div className="flex-col gap-1 flex-1 grow bg-white border border-solid border-[#f0f0f0] flex items-start px-4 py-3 relative rounded-lg">
              <div className="flex h-6 items-center gap-2 relative self-stretch w-full">
                <Image
                  className="relative w-4 h-4"
                  alt="Icon fireoutlined"
                  src="/img/fire-outlined.svg"
                  width={4}
                  height={4}
                />
                <div className="relative flex-1 self-stretch mt-[-1.00px] font-text-LG-normal font-[number:var(--text-LG-normal-font-weight)] text-[#000000e0] text-[length:var(--text-LG-normal-font-size)] tracking-[var(--text-LG-normal-letter-spacing)] leading-[var(--text-LG-normal-line-height)] whitespace-nowrap [font-style:var(--text-LG-normal-font-style)]">
                  Hot Topics
                </div>
              </div>
              <p className="relative self-stretch h-6 font-text-base-normal font-[number:var(--text-base-normal-font-weight)] text-[#00000073] text-[length:var(--text-base-normal-font-size)] tracking-[var(--text-base-normal-letter-spacing)] leading-[var(--text-base-normal-line-height)] whitespace-nowrap [font-style:var(--text-base-normal-font-style)]">
                What are you interested in?
              </p>

              <div className="gap-3 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
                <XPromptItem text="What's new in X?" />
                <XPromptItem text="What's AGI?" />
                <XPromptItem text="Where is the doc?" />
              </div>
            </div>

            <div className="flex-col gap-1 flex-1 grow bg-white border border-solid border-[#f0f0f0] flex items-start px-4 py-3 relative rounded-lg">
              <div className="flex h-6 items-center gap-2 relative self-stretch w-full">
                <Image
                  className="relative w-4 h-4"
                  alt="Icon readoutlined"
                  src="/img/read-outlined.svg"
                  width={4}
                  height={4}
                />

                <div className="relative flex-1 self-stretch mt-[-1.00px] font-text-LG-normal font-[number:var(--text-LG-normal-font-weight)] text-[#000000e0] text-[length:var(--text-LG-normal-font-size)] tracking-[var(--text-LG-normal-letter-spacing)] leading-[var(--text-LG-normal-line-height)] whitespace-nowrap [font-style:var(--text-LG-normal-font-style)]">
                  Design Guide
                </div>
              </div>

              <p className="relative self-stretch h-6 font-text-base-normal font-[number:var(--text-base-normal-font-weight)] text-[#00000073] text-[length:var(--text-base-normal-font-size)] tracking-[var(--text-base-normal-letter-spacing)] leading-[var(--text-base-normal-line-height)] whitespace-nowrap [font-style:var(--text-base-normal-font-style)]">
                What are you interested in?
              </p>

              <div className="gap-3 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
                <XPromptItem
                  iconAlt="heart"
                  iconSrc="/img/heart-outlined.svg"
                  text="Know the vell"
                />
                <XPromptItem
                  iconAlt="smile"
                  iconSrc="/img/icon_smile-outlined.svg"
                  text="Set the AI role"
                />
                <XPromptItem
                  iconAlt="comment"
                  iconSrc="/img/icon_comment-outlined.svg"
                  text="Express the feeling"
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <XPromptItem
              iconAlt="unknown"
              iconSrc="/img/fire-outlined.svg"
              text="Hot Topics"
            />
            <XPromptItem
              iconAlt="unknown"
              iconSrc="/img/read-outlined.svg"
              text="Design Guide"
            />
          </div>

          <XSender prop="link" uploadFiles={false} withReference={false} />
        </footer>
      </div>
    </div>
  );
};
