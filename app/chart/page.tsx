'use client';

import { useState, useEffect } from 'react';
import { SecondChart } from '@/components/SecondChart';
import { Measurement, ImpedanceMeasurement } from '../../types/measurement';

export default function ChartJS({ params }: any) {
  const [measurement, setMeasurement] = useState(null);

  useEffect(() => {
    console.log('before fetch:', Date.now())
    fetch(
      `http://localhost:5000/api/measurement/${params.cabinetUid}`,
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
  }, [params.cabinetUid]);

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
