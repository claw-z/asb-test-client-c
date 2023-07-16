import Link from "next/link";

export interface CabinetsCollectionOverview {
  cabinetsLength: number;
  cabinets: CabinetCollectionOverview[];
}

export interface CabinetCollectionOverview {
  cabinet: CabinetOverview;
  owner: OwnerOverview;
  drivers: DriverOverview[];
}

export interface CabinetOverview {
  cabinetUid: string;
  brandName: string;
  productName: string;
  enclosureType: string;
}

export interface OwnerOverview {
  ownerUid: string;
  ownername: string;
}

export interface DriverOverview {
  driverUid: string;
  brandName: string;
  productName: string;
  driverType: string;
}

export default async function CabinetsPage() {
  const cabinets: CabinetsCollectionOverview = await getCabinets();
  return (
    <div>
      <h1>Cabinets Collection</h1>
      <div className="cabinets-overview">
        {cabinets.cabinets.map((cabinet) => {
          const id = cabinet.cabinet.cabinetUid;
          return (
            <div className="cabinet-overview">
              <div className="cabinet">
                <ul>
                  <li>Brand: {cabinet.cabinet.brandName}</li>
                  <li>Enclosure: {cabinet.cabinet.enclosureType}</li>
                  <li>Product: {cabinet.cabinet.productName}</li>
                  <Link href={`/cabinets/${cabinet.cabinet.cabinetUid}`}>
                    {cabinet.cabinet.cabinetUid}
                  </Link>
                </ul>
              </div>
              <div className="owner">
                <ul>
                  <li>owner: {cabinet.owner.ownername}</li>
                </ul>
              </div>
              <div className="drivers">
                {cabinet.drivers.map((driver) => {
                  return (
                    <div className="driver">
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
      </div>
    </div>
  );
}

async function getCabinets(): Promise<CabinetsCollectionOverview> {
  const response = await fetch(
    "http://localhost:5000/api/cabinets-collection",
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: "asb",
      },
    }
  );
  const data = await response.json();
  return data;
}

function Measurement(productName: string) {
  return (
    <Link href={`/measurements/${productName}`}>
      <p>Go to measurement</p>
    </Link>
  );
}
