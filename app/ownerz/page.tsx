import Link from "next/link";

import { OwnerCard } from "../../components/cards/OwnerCard";
import { CabinetCard } from "../../components/cards/CabinetCard";
import { sanitizeOwnername } from "../../lib/utils";
import { OwnersOverviewHttpClient } from "../../lib/http-client/endpoints/owners-overview";
import { OwnersOverview } from "../../types/owners-overview";

export default async function OwnersPage() {
  const owners: OwnersOverview =
    await new OwnersOverviewHttpClient().getOwnersOverview();
  let i = 0;
  return (
    <div>
      <h1>Owners overview</h1>
      <div className="owners-overview">
        {owners.owners.map((owner) => {
          const ownerCard = owner.owner;
          const urlName = sanitizeOwnername(ownerCard.ownername, " ");
          return (
            <div className="owner-overview" key={i++}>
              <Link key={i++} href={`ownerz/${urlName}`}>
                Click to show cabinets of owner
              </Link>
              <OwnerCard {...ownerCard}></OwnerCard>
              <div className="cabinets-overview">
                {owner.cabinets.map((cabinet) => {
                  return (
                    <div className="cabinet-overview" key={i++}>
                      <CabinetCard {...cabinet}></CabinetCard>
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
