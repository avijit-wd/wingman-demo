"use client";

import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import ChartPieSlice from "../../public/icons/ChartPieSlice.svg";
import Tag from "../../public/icons/Tag.svg";
import ChatTeardropText from "../../public/icons/ChatTeardropText.svg";
import Image from "next/image";

const tabs = [
  { title: "Summary", icon: ChartPieSlice },
  { title: "Sales", icon: Tag },
  { title: "Chat", icon: ChatTeardropText },
];

export function TopNav() {
  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <div className="fixed top-0 left-0 w-[calc(100%-60px)] ml-[60px] z-50 flex items-center justify-between p-4 bg-white text-gray-600 border-b">
      <Tabs
        value={activeTab}
        onValueChange={(value: string) => setActiveTab(value)}
        className="w-full"
      >
        <TabsList className="flex space-x-4">
          {tabs.map(({ title, icon: Icon }) => (
            <TabsTrigger
              key={title}
              value={title}
              className={`flex items-center text-lg gap-2 py-2 px-4 rounded-full transition-all duration-200 ${
                activeTab === title
                  ? "bg-[#CCFBEF] text-[#212636]"
                  : "hover:text-slate-700"
              }`}
            >
              <Image src={Icon} height={22} width={22} alt="topnav icon" />
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
