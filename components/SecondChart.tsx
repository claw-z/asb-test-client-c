import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

export const SecondChart = (impedanceCurve: any) => {

  console.log('SECOND CHART', impedanceCurve)
  
  return (
    <Chart
      type="line"
      data={{
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            data: [6, 7, 8, 9, 11],
            backgroundColor: 'blue'
          }
        ]
      }}
    />
  );
};
