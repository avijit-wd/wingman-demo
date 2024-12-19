import ComponentHeader from "@/components/component-header";
import { DateFilter } from "@/components/date-filter";
import { atAGlanceArr } from "@/lib/data";
import React from "react";
import GlanceCards from "./GlanceCards";

export default function Glance() {
  return (
    <div className="flex flex-col">
      <ComponentHeader
        leftContent="At a glance"
        rightContent={<DateFilter />}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-x-6 gap-y-4 mt-6">
        {atAGlanceArr.map((item) => (
          <GlanceCards item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
