"use client";

import React from "react";
import { Sidebar } from "@/components/molecules/Sibar";
import { ChatContent } from "@/components/molecules/ChatContent";

const Example: React.FC = () => {
  return (
    <div className="flex min-h-screen h-vh items-center relative">
      <Sidebar />
      <ChatContent />
    </div>
  );
};

export default Example;
