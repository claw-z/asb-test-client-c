import { CabinetOverview } from "./cabinet-overview";
import { DriverOverview } from "./driver-overview";

export interface CabinetsPerOwner {
  owner: OwnerDescription;
  cabinetsLength: number;
  cabinets: CabinetCollectionOverview[];
}

export interface OwnerDescription {
  ownername: string;
  description: string;
}

export interface CabinetCollectionOverview {
  cabinet: CabinetOverview;
  driversLength: number;
  drivers: DriverOverview[];
}
