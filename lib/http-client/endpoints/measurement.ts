import { AxiosClient } from "../http-client";
import { Measurement } from "../../../types/measurement";

export class MeasurementHttpClient extends AxiosClient {
  public async getMeasurement(cabinetUid: string): Promise<Measurement> {
    const response = await this.instance.get(`/api/measurement/${cabinetUid}`);
    return response.data;
  }
}
