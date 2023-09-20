import Link from "next/link";

import { CabinetsPerOwnerHttpClient } from "../../../lib/http-client/endpoints/cabinets-per-owner";
import { sanitizeOwnername } from "../../../lib/utils";
import { CabinetsPerOwner } from "../../../types/cabinets-per-owner";

export default async function OwnerPage({ params }: any) {
  const ownerName: string = sanitizeOwnername(params.ownername, "_");
  const cabinets: CabinetsPerOwner =
    await new CabinetsPerOwnerHttpClient().getOwnersOverview(ownerName);
  let i = 0;
  return (
    <div className="owner-cabinets-container">
      {cabinets.cabinets.map((cabinetOverview) => {
        return (
          <div className="owner-cabinet-container" key={i++}>
            <div className="owner-cabinet-overview-container" key={i++}>
              <h2>Cabinet overview:</h2>
              <ul>
                <li>
                  <Link
                    href={`${params.ownername}/${cabinetOverview.cabinet.cabinetUid}`}
                  >
                    Click to show cabinet of owner
                  </Link>
                </li>
                <li>brand name: {cabinetOverview.cabinet.brandName}</li>
                <li>product name: {cabinetOverview.cabinet.productName}</li>
                <li>enclosure type: {cabinetOverview.cabinet.enclosureType}</li>
              </ul>
            </div>
            <div className="drivers-overview-container" key={i++}>
              <h2>Drivers overview:</h2>
              {cabinetOverview.drivers.map((driver) => {
                return (
                  <div className="driver-overview-container" key={i++}>
                    <ul>
                      <li>brand name: {driver.brandName}</li>
                      <li>product name: {driver.productName}</li>
                      <li>driver type: {driver.driverType}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
