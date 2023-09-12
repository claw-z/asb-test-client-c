'use client';

import { SecondChart } from '@/components/SecondChart';
import { MeasurementHttpClient } from '@/lib/http-client/endpoints/measurement';

export default async function FuckPage() {
  const endPoint = new MeasurementHttpClient();
  const measurement = await endPoint.getMeasurement('ecd2b436-9454-4a50-8c25-0636d5a98f19')
  console.log(measurement)

  // const data = await fetch(
  //   'http://localhost:5000/api/impedance/8614fd32-7e7c-4f97-9e24-920e44962d21',
  //   {
  //     method: 'GET',
  //     headers: {
  //       Authorization: 'asb',
  //       'content-type': 'application/json'
  //     }
  //   }
  // );

  return (
    <div>
      <SecondChart></SecondChart>
    </div>
  );
}
