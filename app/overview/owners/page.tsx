"use client";

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

export default async function OwnersPage() {
  //   const cabinets: CabinetsCollectionOverview = await getCabinets();
  let count = 0;
  return (
    <div>
      <h1>Owners overview</h1>
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
