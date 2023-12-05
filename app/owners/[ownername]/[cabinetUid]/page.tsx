"use client";
import { useState, useEffect } from "react";

// import useSWR from "swr";

// import { MeasurementHttpClient } from "../../../../lib/http-client/endpoints/measurement";
import { Measurement } from "../../../../types/measurement";
import { MyLineChart } from "../../../../components/MyLineChart";

export default function CabinetPage({ params }: any) {
  // const measurement: Measurement =
  //   await new MeasurementHttpClient().getMeasurement(params.cabinetUid);
  const [measurement, setMeasurement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/measurement/${params.cabinetUid}`, {
      method: "GET",
      headers: {
        Authorization: "asb",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMeasurement(data));
  }, [params.cabinetUid]);
  if (!measurement) return <h1>no data</h1>;
  const meas: Measurement = measurement;
  const { frequency, cabinet, drivers, impedance } = meas;

  return (
    <div>
      <MyLineChart
        {...{ frequency, cabinet, drivers, impedance }}
      ></MyLineChart>
    </div>
  );
}