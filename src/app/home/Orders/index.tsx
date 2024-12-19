import ComponentHeader from "@/components/component-header";
import React from "react";
import OrdersTable from "./OrdersTable";

export default function Orders() {
  return (
    <div className="w-full">
      <ComponentHeader leftContent="Orders" />
      <OrdersTable />
    </div>
  );
}
