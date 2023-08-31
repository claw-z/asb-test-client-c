import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
import { Measurement } from "../types/measurement";

export const MyLineChart = (measurement: Measurement) => {
  let data = [];
  let dataset = [];
  console.log(Date.now());
  for (const f of measurement.frequency.measurements) {
    data.push(f.spl);
    dataset.push(f.frequency);
  }
  console.log(Date.now());
  const options = {
    scales: {
      xAxes: {
        display: true,
        type: "logarithmic",
      },
    },
  };
  return (
    <div>
      <Line
        data={{
          labels: dataset,
          datasets: [
            {
              data: data,
              backgroundColor: "purple",
            },
          ],
        }}
      />
    </div>
  );
};
