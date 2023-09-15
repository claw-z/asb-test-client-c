'use client';

import { useState, useEffect } from 'react';
import { SecondChart } from '@/components/SecondChart';
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
  }, ['ecd2b436-9454-4a50-8c25-0636d5a98f19']);

  if (!measurement) return <h1>no data</h1>;

  const meas: Measurement = measurement;
  const { frequency, cabinet, drivers, impedance } = meas;
  // WHY do we have to define another constant that equals measurement?

  const impedanceCurve: ImpedanceMeasurement[] = meas.impedance.impedanceCurve

  console.log('CHART PAGE:', impedanceCurve);

  return (
    <div>
      <SecondChart impedanceCurve={impedanceCurve}></SecondChart>
    </div>
  );
}
