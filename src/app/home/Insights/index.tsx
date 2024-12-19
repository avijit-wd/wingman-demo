import ComponentHeader from "@/components/component-header";
import React from "react";
import Chart from "./Chart";
import CombinationChart from "./Chart/CombinationChart";
import ChatTeardrop from "../../../../public/icons/ChatTeardrop.svg";
import ChartBar from "../../../../public/icons/ChartBar.svg";
import ChatWhite from "../../../../public/icons/ChatWhite.svg";
import BarChartComparison from "./Chart/BarChartComparison";
import ForecastTrend from "./ForecastTrend";
import { forecastData } from "@/lib/data";

export default function Insights() {
  return (
    <div>
      <ComponentHeader leftContent="Insights" />

      <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 xl:col-span-6 ">
          <Chart
            icon={ChatTeardrop}
            chartTitle="CONSULTATION"
            chart={<CombinationChart />}
          />
        </div>

        <div className="col-span-12 lg:col-span-6 xl:col-span-3">
          <Chart
            icon={ChartBar}
            chartTitle="VS PAST PERIOD"
            chart={<BarChartComparison />}
          />
        </div>

        <div className="col-span-12 lg:col-span-6 xl:col-span-3">
          <ForecastTrend
            icon={ChatWhite}
            title="FORECASTS"
            data={forecastData}
          />
        </div>
      </div>
    </div>
  );
}
