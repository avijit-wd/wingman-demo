"use client";

import { combinationChartData } from "@/lib/data";
import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
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

const CombinationChart = () => {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <ComposedChart data={combinationChartData}>
        <CartesianGrid strokeDasharray="8 8" vertical={false} />

        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#667085", fontWeight: 400, dy: 10 }}
        />

        <YAxis
          yAxisId="left"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#667085", fontWeight: 400 }}
          label={{
            value: "CONSULTATIONS",
            angle: 270,
            position: "outsideRight",
            style: { fontSize: 12, fill: "#C4C4C4" },
            dx: -15,
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#667085", fontWeight: 400 }}
          label={{
            value: "EXPERTS ONLINE",
            angle: 270,
            position: "outsideRight",
            style: { fontSize: 12, fill: "#C4C4C4" },
            dx: 15,
          }}
        />

        <Tooltip />

        <Legend content={<CustomLegend />} />

        <Bar
          yAxisId="left"
          dataKey="expertsOnline"
          barSize={32}
          fill="#FFF3C6"
          name="Experts Online"
        />

        <Line
          yAxisId="right"
          type="monotone"
          dataKey="answered"
          stroke="#15B79F"
          name="Answered"
          dot={false}
          strokeWidth={2}
        />

        <Line
          yAxisId="right"
          type="monotone"
          dataKey="incoming"
          stroke="#8A94A6"
          strokeWidth={2}
          dot={false}
          strokeDasharray="8 8"
          name="Incoming"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CombinationChart;
