import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import {
  ChartData,
  ImpedanceData,
  ImpedanceMeasurement
} from '@/types/measurement';

export const ChartJSLineChart = (data: ImpedanceData) => {
  const impedanceCurve: ImpedanceMeasurement[] = data.impedanceCurve;
  const chartData: ChartData = getChartData(impedanceCurve);

  return (
    <Chart
      type="line"
      data={{
        labels: chartData.frequency,
        datasets: [
          {
            data: chartData.impedance,
            backgroundColor: 'blue',
            label: 'Impedance'
          },
          {
            data: chartData.phase,
            backgroundColor: 'hotpink',
            label: 'Phase'
          }
        ]
      }}
      options={{
        responsive: true,
        scales: {
          x: {
            type: 'logarithmic',
            ticks: {
              callback: function (value: any) {
                while (value < 1000) {
                  return value + ' Hz';
                }
                return value / 1000 + ' kHz';
              }
            }
          },
          y: {
            ticks: {
              callback: function (value: string | number) {
                return value + ' Ω';
              }
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Driver Impedance And Phase Response',
            font: { size: 40, weight: 'bold' }
          }
        }
      }}
    />
  );
};

function getChartData(impedanceCurve: ImpedanceMeasurement[]): ChartData {
  const frequencyArray = impedanceCurve.map(
    (measurement: ImpedanceMeasurement) => measurement.frequency
  );
  const impedanceArray = impedanceCurve.map(
    (measurement: ImpedanceMeasurement) => measurement.impedance
  );
  const phaseArray = impedanceCurve.map(
    (measurement: ImpedanceMeasurement) => measurement.phase
  );

  return {
    frequency: frequencyArray,
    impedance: impedanceArray,
    phase: phaseArray
  };
}
