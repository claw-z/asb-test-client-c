export interface CabinetCard {
  cabinetUid: string;
  brandName: string;
  productName: string;
  enclosureType: string;
}

export const CabinetCard = (cabinetCard: CabinetCard) => {
  const { brandName, enclosureType, productName, cabinetUid } = cabinetCard;
  return (
    <div className="cabinet">
      <h3>Cabinet {cabinetUid}</h3>
      <ul>
        <li>Brand: {brandName}</li>
        <li>Enclosure: {enclosureType}</li>
        <li>Product: {productName}</li>
      </ul>
    </div>
  );
};
