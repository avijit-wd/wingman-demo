import { ForecastData } from "@/types/indes";
import Image from "next/image";
import React from "react";
import TreandUp from "../../../../../public/icons/TrendUp.svg";

type Props = {
  item: ForecastData;
};

export default function ForecastItem({ item }: Props) {
  return (
    <div className="flex flex-col">
      <div className="h-[67px] flex justify-between items-start">
        <div className="flex items-center">
          {item.improved ? (
            <h4 className="text-white text-[56px]">+</h4>
          ) : (
            <h4 className="text-white text-[56px]">-</h4>
          )}

          <h1 className="text-white text-[56px]">{item.percent}%</h1>
        </div>
        <Image src={TreandUp} height={35} width={35} alt="up trend" />
      </div>

      <h6 className="text-white text-sm mt-4">{item.description}</h6>
    </div>
  );
}
