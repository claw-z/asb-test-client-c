import Link from "next/link";

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
  let count = 0;
  return (
    <div>
      <h1>Owners overview</h1>
      <div className="owners-overview">
        {owners.owners.map((owner) => {
          return (
            <div className="owner-overview" key={count++}>
              <div className="owner" key={count++}>
                <ul>
                  <li>Ownername: {owner.owner.ownername}</li>
                </ul>
              </div>
              <div className="cabinets-overview" key={count++}>
                {owner.cabinets.map((cabinet) => {
                  return (
                    <div className="cabinet-overview" key={count++}>
                      <div className="cabinet" key={count++}>
                        <ul>
                          <li>brandName: {cabinet.cabinet.brandName}</li>
                          <li>
                            enclosureType: {cabinet.cabinet.enclosureType}
                          </li>
                          <li>productName: {cabinet.cabinet.productName}</li>
                          <Link href={`owners/${cabinet.cabinet.cabinetUid}`}>
                            {cabinet.cabinet.cabinetUid}
                          </Link>
                        </ul>
                      </div>
                      <div className="drivers-overview" key={count++}>
                        {cabinet.drivers.map((driver) => {
                          return (
                            <div className="driver" key={count++}>
                              <ul>
                                <li>brandName: {driver.brandName}</li>
                                <li>driverType: {driver.driverType}</li>
                                <li>productName: {driver.productName}</li>
                              </ul>
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
        })}
      </div>
      {/* <div className="cabinets-overview">
        {cabinets.cabinets.map((cabinet) => {
          return (
            <div className="cabinet-overview" key={count++}>
              <div className="cabinet" key={count++}>
                <ul>
                  <li>Brand: {cabinet.cabinet.brandName}</li>
                  <li>Enclosure: {cabinet.cabinet.enclosureType}</li>
                  <li>Product: {cabinet.cabinet.productName}</li>
                  <Link href={`/cabinets/${cabinet.cabinet.cabinetUid}`}>
                    {cabinet.cabinet.cabinetUid}
                  </Link>
                </ul>
              </div>
              <div className="owner" key={count++}>
                <ul>
                  <li>owner: {cabinet.owner.ownername}</li>
                </ul>
              </div>
              <div className="drivers" key={count++}>
                {cabinet.drivers.map((driver) => {
                  return (
                    <div className="driver" key={count++}>
                      <ul>
                        <li>Brand: {driver.brandName}</li>
                        <li>Type: {driver.driverType}</li>
                        <li>Product: {driver.productName}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

async function getOwners(): Promise<OwnersCollectionOverview> {
  const response = await fetch("http://localhost:5000/api/owners-collection", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: "asb",
    },
  });
  const data = await response.json();
  return data;
}
