"use client";

import { barChartData } from "@/lib/data";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <div>
      <hr
        style={{
          borderTop: "1px solid #DCDFE4",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      />
      <ul style={{ listStyle: "none", padding: 0, display: "flex" }}>
        {payload?.map((entry: any, index: number) => (
          <li
            key={`item-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "6px",
                backgroundColor: entry.color,
                marginRight: "8px",
                borderRadius: "10px",
              }}
            ></span>
            <span
              style={{ color: "#667085", fontSize: "12px", fontWeight: 400 }}
            >
              {entry.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BarChartComparison = () => {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <BarChart
        width={500}
        height={300}
        data={barChartData}
        margin={{
          top: 5,
          right: 30,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#667085", fontWeight: 400 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#667085", fontWeight: 400 }}
        />
        <Tooltip cursor={false} wrapperStyle={{ outline: "none" }} />
        <Legend content={<CustomLegend />} />

        <Bar
          dataKey="consultation"
          fill="#CCFBEF"
          name="Consultations"
          barSize={32}
          radius={[6, 6, 0, 0]}
        />

        <Bar
          dataKey="orderClosed"
          fill="#134E48"
          name="Order closed"
          barSize={32}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComparison;
