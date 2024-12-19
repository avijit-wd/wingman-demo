import { Card } from "@/components/ui/card";
import { DataItem } from "@/types/indes";
import Image from "next/image";
import React from "react";
import UpTrend from "../../../../public/icons/UpTrend.svg";
import DownTrend from "../../../../public/icons/DownTrend.svg";

type Props = {
  item: DataItem;
};

export default function GlanceCards({ item }: Props) {
  return (
    <Card className="rounded-xl p-4">
      <div className="flex gap-2">
        <Image src={item.icon} height={12} width={12} alt="card icon" />
        <h4 className="font-semibold text-[#667085] text-xs">{item.title}</h4>
      </div>

      <div className="flex mt-2">
        {item.unit === "$" && (
          <h2 className="font-medium text-[#212636] text-[32px]">
            {item.unit}
          </h2>
        )}

        <h2 className="font-medium text-[#212636] text-[32px]">{item.count}</h2>

        {item.unit === "%" && (
          <h2 className="font-medium text-[#212636] text-[32px]">
            {item.unit}
          </h2>
        )}
      </div>

      <div className="flex gap-1 mt-1">
        {item.improved ? (
          <Image src={UpTrend} height={16} width={16} alt="upTrend" />
        ) : (
          <Image src={DownTrend} height={16} width={16} alt="downTrend" />
        )}

        <h3
          className={`font-normal text-sm ${
            item.improved ? "text-[#15B79F]" : "text-[#F04438]"
          }`}
        >
          {item.percentage}%
        </h3>

        <h3 className="font-normal text-sm text-[#667085]">
          {item.improved ? "increase" : "decrease"}
        </h3>
      </div>
    </Card>
  );
}
