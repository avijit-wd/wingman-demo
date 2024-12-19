"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ArrowUpRight } from "lucide-react";
import moment from "moment";
import Image from "next/image";

export type Product = {
  productName: string;
  productIcon: string;
  date: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "productName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Image
            src={row.original.productIcon}
            height={50}
            width={50}
            alt={row.original.productName}
          />

          <h3 className="font-normal text-base">{row.original.productName}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formattedDate = moment(row.original.date).format("DD MMM 'YYYY");
      const formattedTime = moment(row.original.date).format("hh:mm A");
      return (
        <>
          <h3 className="font-normal text-base">{formattedDate}</h3>
          <h3 className="font-normal text-xs">{formattedTime}</h3>
        </>
      );
    },
  },
  {
    accessorKey: "timeSpent",
    header: "Time Spent",
    cell: ({ row }) => {
      return (
        <h3 className="font-normal text-base">{row.original.timeSpent}</h3>
      );
    },
  },
  {
    accessorKey: "orderValue",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Value
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <h3 className="font-normal text-base">{row.original.orderValue}</h3>
      );
    },
  },
  {
    accessorKey: "commission",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Commision
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <h3 className="font-semibold text-base">{row.original.commission}</h3>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="sr-only">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <h3 className="font-normal text-sm whitespace-nowrap text-[#8A94A6] cursor-pointer hover:underline">
            View Chat
          </h3>
          <div className="h-3 w-3">
            <ArrowUpRight className="text-[#8A94A6]" size={16} />
          </div>
        </div>
      );
    },
  },
];
