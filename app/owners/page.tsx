import Link from "next/link";
import { getOwners } from "../_api/cabinets";
import { OwnerCard } from "../../components/cards/OwnerCard";
import { CabinetCard } from "../../components/cards/CabinetCard";
import { DriverCard } from "../../components/cards/DriverCard";

export interface OwnersCollectionOverview {
  ownersLength: number;
  owners: OwnerCollectionOverview[];
}

export interface OwnerCollectionOverview {
  owner: OwnerOverview;
  cabinets: CabinetAndDriversOverview[];
}

export interface OwnerOverview {
  ownerUid: string;
  ownername: string;
}

export interface CabinetAndDriversOverview {
  cabinet: CabinetOverview;
  drivers: DriverOverview[];
}
export interface CabinetOverview {
  cabinetUid: string;
  brandName: string;
  productName: string;
  enclosureType: string;
}

export interface DriverOverview {
  driverUid: string;
  brandName: string;
  productName: string;
  driverType: string;
}

export default async function OwnersPage() {
  const owners: OwnersCollectionOverview = await getOwners();
  return (
    <div>
      <h1>Owners overview</h1>
      <div className="owners-overview">
        {owners.owners.map((owner) => {
          const ownerCard = owner.owner;
          return (
            <div className="owner-overview">
              <Link href={`owners/${ownerCard.ownername}`}>
                Click to show owner's cabinets
              </Link>
              <OwnerCard {...ownerCard}></OwnerCard>
              <div className="cabinets-overview">
                {owner.cabinets.map((cabinet) => {
                  const cabinetCard = cabinet.cabinet;
                  return (
                    <div className="cabinet-overview">
                      <CabinetCard {...cabinetCard}></CabinetCard>
                      <div className="drivers-overview">
                        {cabinet.drivers.map((driverCard) => {
                          return <DriverCard {...driverCard}></DriverCard>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
