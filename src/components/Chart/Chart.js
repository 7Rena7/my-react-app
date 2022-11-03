import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

export default function Chart(props) {
  const valueArray = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMax = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
