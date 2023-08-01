import { AxiosClient } from "../http-client";
import { OwnersOverview } from "../../../types/owners-overview";

export class OwnersOverviewHttpClient extends AxiosClient {
  public async getOwnersOverview(): Promise<OwnersOverview> {
    const response = await this.instance.get("/api/owners-overview");
    return response.data;
  }
}
