import React from "react";
import { DataTable } from "./DataTable";
import { productData } from "@/lib/data";
import { columns } from "./columns";

export default function OrdersTable() {
  return (
    <div className="mt-4 w-full">
      <DataTable columns={columns} data={productData} />
    </div>
  );
}
