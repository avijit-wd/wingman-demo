import React from "react";
import { Card } from "@/components/ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  icon: string | StaticImport;
  chartTitle: string;
  chart: React.ReactNode;
};

export default function Chart({ icon, chartTitle, chart }: Props) {
  return (
    <Card className="p-4 rounded-xl">
      <div className="flex gap-1 mb-4">
        <Image src={icon} height={12} width={12} alt="chart icon" />
        <h3 className="font-semibold text-xs text-[#667085]">{chartTitle}</h3>
      </div>
      {chart}
    </Card>
  );
}
