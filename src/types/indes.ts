import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type DataItem = {
  icon: string | StaticImport;
  title: string;
  count: number;
  improved: boolean;
  percentage: number;
  unit: string | null;
};

export type ForecastData = {
  improved: boolean;
  percent: number;
  description: string;
};

export type ProductData = {
  productName: string;
  productIcon: string;
  date: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
};
