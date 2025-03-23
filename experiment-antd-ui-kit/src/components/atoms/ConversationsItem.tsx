"use client";

import React from "react";

interface ConversationsItemProps {
  text: string;
}

export const ConversationsItem: React.FC<ConversationsItemProps> = ({
  text,
}) => {
  return (
    <div className="flex h-10 items-center gap-2 px-2 py-0 relative rounded-lg">
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-text-base-normal text-[#000000e0]">
        {text}
      </p>
    </div>
  );
};
