export interface DriverCard {
  driverUid: string;
  brandName: string;
  productName: string;
  driverType: string;
}

export const DriverCard = (driverCard: DriverCard) => {
  const { brandName, productName, driverType, driverUid } = driverCard;
  return (
    <div className="driver">
      <h3>Driver {driverUid}</h3>
      <ul>
        <li>Brand: {brandName}</li>
        <li>Type: {driverType}</li>
        <li>Product: {productName}</li>
      </ul>
    </div>
  );
};
