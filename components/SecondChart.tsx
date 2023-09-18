import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { ImpedanceMeasurement } from '@/types/measurement';

export const SecondChart = (data: any) => {
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
      // options={{
      //   scales: { xAxis: { type: 'linear', position: 'right' }, yAxis: {type: 'logarithmic', position: 'left'} }
      // }}
    />
  );
};

interface ChartData {
  frequency: any;
  impedance: any;
  phase: any;
}

function getChartData(impedanceCurve: ImpedanceMeasurement[]): ChartData {
  const frequencyArray = impedanceCurve.map(
    (measurement: any) => measurement.frequency
  );
  const impedanceArray = impedanceCurve.map(
    (measurement: any) => measurement.impedance
  );
  const phaseArray = impedanceCurve.map(
    (measurement: any) => measurement.phase
  );

  return {
    frequency: frequencyArray,
    impedance: impedanceArray,
    phase: phaseArray
  };
}
