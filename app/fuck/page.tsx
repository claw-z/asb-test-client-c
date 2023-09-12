'use client';

import { SecondChart } from '@/components/SecondChart';
import { MeasurementHttpClient } from '@/lib/http-client/endpoints/measurement';

async function getData() {
  const res = await fetch(
    'http://localhost:5000/api/measurement/30a56c2e-152c-462b-8e7a-fd3586cc0b69'
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function FuckPage() {
  
  const data = await getData();
  console.log(data);

  const endPoint = new MeasurementHttpClient();
  const measurement = await endPoint.getMeasurement(
    'ecd2b436-9454-4a50-8c25-0636d5a98f19'
  );
  console.log(measurement);

  return (
    <div>
      <SecondChart></SecondChart>
    </div>
  );
}
