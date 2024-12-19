import { Card } from "@/components/ui/card";
import React from "react";
import Glance from "./Glance";
import Insights from "./Insights";
import Orders from "./Orders";

export default function HomePage() {
  return (
    <Card>
      <div className="flex flex-col p-6 gap-10">
        <Glance />
        <Insights />
        <Orders />
      </div>
    </Card>
  );
}
