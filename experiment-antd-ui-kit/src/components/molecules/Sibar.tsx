"use client";

import { Button } from "antd";
import React from "react";
import { ConversationsItem } from "@/components/atoms/ConversationsItem";
// import original1 from "./original-1.svg";

interface SidebarProps {
  headerTitle?: string;
  buttonTitle?: string;
  items?: string[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  headerTitle = "Ant Design X",
  buttonTitle = "+ New Conversation",
  items = ["What is Ant Design X?", "New Conversation 1"],
}) => {
  return (
    <aside className="flex flex-col w-[280px] items-start relative bg-neutral-100 h-[100vh]">
      {/* Header Section */}
      <header className="flex h-[72px] items-center gap-2 px-6 py-0 w-full">
        <img
          className="w-10 h-10"
          alt="Ant Design X Logo"
          src={"/img/original-1.svg"}
        />
        <h1 className="font-text-LG-strong text-[#000000e0] text-center">
          {headerTitle}
        </h1>
      </header>

      {/* New Conversation Button */}
      <div className="flex flex-col items-start gap-2.5 px-3 pb-6 w-full">
        <Button type="primary" ghost iconPosition="start" className="w-full">
          {buttonTitle}
        </Button>
      </div>

      {/* Conversations List */}
      {items.map((item, index) => (
        <nav className="flex flex-col items-start gap-1 px-3 w-full hover:bg-red rounded-md">
          <ConversationsItem key={index} text={item}></ConversationsItem>
        </nav>
      ))}
    </aside>
  );
};
