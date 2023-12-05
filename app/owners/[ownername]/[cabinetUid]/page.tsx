'use client';
import { useState, useEffect } from 'react';
import { ImpedanceMeasurement } from '../../../../types/measurement';
import { Measurement } from '../../../../types/measurement';
import { ChartJSLineChart } from '@/components/ChartJSLineChart';

export default function CabinetPage({ params }: any) {
  const [measurement, setMeasurement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/measurement/${params.cabinetUid}`, {
      method: 'GET',
      headers: {
        Authorization: 'asb',
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setMeasurement(data));
  }, [params.cabinetUid]);
  if (!measurement) return <h1>loading...</h1>;
  const meas: Measurement = measurement;
  const impedanceCurve: ImpedanceMeasurement[] = meas.impedance.impedanceCurve;

  return (
    <div>
      <div>
        <ChartJSLineChart impedanceCurve={impedanceCurve}></ChartJSLineChart>
      </div>
    </div>
  );
}
