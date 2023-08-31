import { AxiosClient } from "../http-client";
import { CabinetsPerOwner } from "../../../types/cabinets-per-owner";

export class CabinetsPerOwnerHttpClient extends AxiosClient {
  public async getOwnersOverview(ownername: string): Promise<CabinetsPerOwner> {
    const response = await this.instance.get(
      `/api/cabinets-per-owner/${ownername}`
    );
    return response.data;
  }
}
