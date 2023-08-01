import { MeasurementHttpClient } from "../../../../lib/http-client/endpoints/measurement";

export default async function CabinetPage({ params }: any) {
  const measurement = await new MeasurementHttpClient().getMeasurement(
    params.cabinetUid
  );
  return <h1>Measurement from Cabinet {params.cabinetUid}</h1>;
}
