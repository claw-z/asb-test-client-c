'use client';

import { useState, useEffect } from 'react';
import { ChartJSLineChart } from '@/components/ChartJSLineChart';
import { Measurement, ImpedanceMeasurement } from '../../types/measurement';

export default function ChartJS() {
  const [measurement, setMeasurement] = useState(null);

  useEffect(() => {
    fetch(
      'http://localhost:5000/api/measurement/ecd2b436-9454-4a50-8c25-0636d5a98f19',
      {
        method: 'GET',
        headers: {
          Authorization: 'asb',
          'content-type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(data => setMeasurement(data));
  }, []);

  if (!measurement) return <h1>no data</h1>;

  const meas: Measurement = measurement;
  const { frequency, cabinet, drivers, impedance } = meas;

  const impedanceCurve: ImpedanceMeasurement[] = meas.impedance.impedanceCurve;

  return (
    <div>
      <ChartJSLineChart impedanceCurve={impedanceCurve}></ChartJSLineChart>
    </div>
  );
}
