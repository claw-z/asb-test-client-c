export interface OwnersOverview {
  ownersLength: number;
  owners: OwnerCabinetsOverview[];
}

export interface OwnerCabinetsOverview {
  owner: OwnerOverview;
  cabinetsLength: number;
  cabinets: CabinetOverview[];
}

export interface OwnerOverview {
  ownerUid: string;
  ownername: string;
  createdAt: Date;
}

export interface CabinetOverview {
  cabinetUid: string;
  brandName: string;
  productName: string;
  enclosureType: string;
  createdAt: Date;
}
