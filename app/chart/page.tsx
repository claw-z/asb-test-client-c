'use client';

import { useState, useEffect } from 'react';
import { FirstChart } from '@/components/FirstChart';

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

  console.log('CHART PAGE:', measurement);

  return (
    <div>
      <FirstChart></FirstChart>
    </div>
  );
}
