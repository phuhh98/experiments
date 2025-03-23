"use client";

import React from "react";
import { XPromptItem } from "@/components/atoms/XPromptItem";
import { Image } from "antd";

export const XPromptGroup: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-1 px-4 py-3 relative bg-white rounded-lg border border-solid border-[#f0f0f0]">
      <header className="flex h-6 items-center gap-2 relative self-stretch w-full">
        <Image
          className="w-4 h-4"
          alt="Read icon"
          src="/img/read-outlined.svg"
        />
        <h2 className="flex-1 text-[#000000e0] text-[length:var(--text-LG-normal-font-size)] font-[number:var(--text-LG-normal-font-weight)] leading-[var(--text-LG-normal-line-height)] tracking-[var(--text-LG-normal-letter-spacing)] whitespace-nowrap">
          Design Guide
        </h2>
      </header>

      <p className="self-stretch text-[#00000073] text-[length:var(--text-base-normal-font-size)] font-[number:var(--text-base-normal-font-weight)] leading-[var(--text-base-normal-line-height)] tracking-[var(--text-base-normal-letter-spacing)] whitespace-nowrap">
        What are you interested in?
      </p>

      <ul className="flex flex-col items-start gap-3 self-stretch w-full">
        <XPromptItem
          text="Know the vell"
          iconSrc="/img/heart-outlined.svg"
          iconAlt="heart"
        />
        <XPromptItem
          text="Set the AI role"
          iconSrc="/img/icon_smile-outlined.svg"
          iconAlt="smile"
        />
        <XPromptItem
          text="Express the feeling"
          iconSrc="/img/icon_comment-outlined.svg"
          iconAlt="comment"
        />
      </ul>
    </section>
  );
};
