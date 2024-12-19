import { Card } from "@/components/ui/card";
import { ForecastData } from "@/types/indes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import ForecastItem from "./ForecastItem";

type Props = {
  icon: string | StaticImport;
  title: string;
  data: ForecastData[];
};

export default function ForecastTrend({ icon, title, data }: Props) {
  return (
    <Card className="flex flex-col h-[425px] p-4 rounded-xl bg-gradient-to-b from-[#15B79F] to-[#0E9382]">
      <div className="flex gap-1 mb-4">
        <Image
          src={icon}
          color="#fff"
          height={12}
          width={12}
          alt="chart icon"
        />
        <h3 className="font-semibold text-xs text-[#CCFBEF]">{title}</h3>
      </div>
      <div className="flex flex-col gap-6">
        {data.map((item, index) => (
          <ForecastItem key={index} item={item} />
        ))}
      </div>
    </Card>
  );
}
