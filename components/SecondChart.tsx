import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { ImpedanceMeasurement } from '@/types/measurement';

export const SecondChart = (data: any) => {
  console.log('Before sorting:', Date.now());
  const impedanceCurve: ImpedanceMeasurement[] = data.impedanceCurve;
  const chartData: ChartData = getChartData(impedanceCurve);
  console.log('After sorting:', Date.now());

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
              major: { enabled: true },
              callback: function (value: any) {
                if (value >= 1000) {
                  return value / 1000 + ' kHz';
                }
                return value + ' Hz';
              }
            }
          },
          y: {
            ticks: {
              callback: function (value: any) {
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

interface ChartData {
  frequency: any;
  impedance: any;
  phase: any;
}

function getChartData(impedanceCurve: ImpedanceMeasurement[]): ChartData {
  console.log('before mapping:', Date.now());
  const frequencyArray = impedanceCurve.map(
    (measurement: any) => measurement.frequency
  );
  const impedanceArray = impedanceCurve.map(
    (measurement: any) => measurement.impedance
  );
  const phaseArray = impedanceCurve.map(
    (measurement: any) => measurement.phase
  );
  console.log('after mapping:', Date.now());

  return {
    frequency: frequencyArray,
    impedance: impedanceArray,
    phase: phaseArray
  };
}
