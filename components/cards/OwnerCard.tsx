export interface OwnerCard {
  ownerUid: string;
  ownername: string;
}

export const OwnerCard = (ownerCard: OwnerCard) => {
  const { ownername, ownerUid } = ownerCard;
  return (
    <div className="owner">
      <h3>Owner {ownerUid}</h3>
      <ul>
        <li>owner: {ownername}</li>
      </ul>
    </div>
  );
};
